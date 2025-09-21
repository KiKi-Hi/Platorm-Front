/** @jsxImportSource @emotion/react */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { css, Global } from '@emotion/react';
import CategoryChips from './components/CategoryChips';
import { ProductGrid } from './components/ProductCard';
import BannerSlider from './components/BannerSlider';
import { useProductsInfiniteQuery } from "../../../controller/feature/product/api/useProduct";
import { Category, categoryMap } from "../../../controller/feature/product/constant/category";
import ErrorAlert from '../error/ErrorAlert';
import { RecommendationsSection } from "@view/pages/main/components/RecommendationSection";
import { BottomSheet } from "@view/components/elements/bottomSheet/BottomSheet";

const containerStyle = css`
    position: relative;
    margin: 0 auto;
    min-height: 100vh;
    width: 100%;
    background-color: #ffffff;
`;

const chipsStickyBase = css`
    position: sticky;
    top: 0;
    z-index: 10010;
    background: #fff;
    transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background-color 180ms ease,
            padding 180ms ease,
            z-index 0s linear;
    will-change: transform, box-shadow;

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`;

const chipsAffix = css`
    box-shadow: 0 6px 14px rgba(0,0,0,0.06);
    padding: 6px 0;
`;

const chipsAffixEnter = css`
    transform: translateY(-6px);
`;

const chipsAffixZ = css`
    z-index: 120;
`;

const bottomSentinelStyle = css`
    height: 1px;
    background: transparent;
`;

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>(Category.KEYCAP);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
    const [filters, setFilters] = useState<{ manufacturer: string; minPrice: number; maxPrice: number }>({
        manufacturer: '',
        minPrice: 0,
        maxPrice: 0
    });
    const [filterType, setFilterType] = useState<'manufacturer' | 'price-range' | ''>('');

    const { data, fetchNextPage, hasNextPage, isError, isLoading, refetch } = useProductsInfiniteQuery({
        category: selectedCategory,
        manufacturer: filters.manufacturer,
        minPrice: filters.minPrice,
        maxPrice: filters.maxPrice,
        size: 20,
        requestType: 'list',
    });

    const observerRef = useRef<HTMLDivElement | null>(null);
    const stickySentinelRef = useRef<HTMLDivElement | null>(null);

    const [isAffixed, setIsAffixed] = useState<boolean>(false);
    const [phase, setPhase] = useState<'idle' | 'enter' | 'stuck'>('idle');

    const openBottomSheet = (category: string) => setIsBottomSheetOpen(true);
    const closeBottomSheet = () => setIsBottomSheetOpen(false);

    useEffect(() => {
        const el = stickySentinelRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => setIsAffixed(!entry.isIntersecting),
            { root: null, threshold: 0 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (isAffixed) {
            setPhase('enter');
            const raf = requestAnimationFrame(() => setPhase('stuck'));
            return () => cancelAnimationFrame(raf);
        } else {
            setPhase('idle');
        }
    }, [isAffixed]);

    useEffect(() => {
        const root = document.documentElement;
        if (isAffixed) {
            root.setAttribute('data-hide-topbar', 'true');
        } else {
            root.removeAttribute('data-hide-topbar');
        }
        return () => root.removeAttribute('data-hide-topbar');
    }, [isAffixed]);

    useEffect(() => {
        const target = observerRef.current;
        if (!target) return;

        let fetching = false;

        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !fetching) {
                    fetching = true;
                    fetchNextPage().finally(() => (fetching = false));
                }
            },
            { threshold: 1.0 }
        );

        io.observe(target);
        return () => io.disconnect();
    }, [hasNextPage, fetchNextPage]);

    const products = useMemo(
        () => data?.pages.flatMap((page) => page.content) ?? [],
        [data]
    );

    const handleCategoryClick = (type: 'manufacturer' | 'price-range') => {
        setFilterType(type);
        setIsBottomSheetOpen(true);
    };

    const applyFilters = (newFilters: { manufacturer?: string; minPrice?: number; maxPrice?: number }) => {
        const validFilters = {
            manufacturer: newFilters.manufacturer || '',
            minPrice: newFilters.minPrice && newFilters.minPrice > 0 ? newFilters.minPrice : 0,
            maxPrice: newFilters.maxPrice && newFilters.maxPrice > 0 ? newFilters.maxPrice : 0,
        };

        setFilters((prevFilters) => ({ ...prevFilters, ...validFilters }));
        setIsBottomSheetOpen(false);
        refetch();
    };

    return (
        <div css={containerStyle}>
            <Global styles={css`
                [data-topbar] {
                    transition: transform 200ms ease, opacity 200ms ease;
                    will-change: transform, opacity;
                }
                html[data-hide-topbar='true'] [data-topbar] {
                    transform: translateY(-100%);
                    opacity: 0;
                    pointer-events: none;
                }
            `} />
            <BannerSlider />
            <RecommendationsSection />

            <div ref={stickySentinelRef} style={{ height: 1 }} />
            <div
                css={[
                    chipsStickyBase,
                    isAffixed && chipsAffix,
                    isAffixed && chipsAffixZ,
                    phase === 'enter' && chipsAffixEnter,
                ]}
            >
                <CategoryChips
                    selected={selectedCategory}
                    onChange={(category: Category) => setSelectedCategory(category)}
                    onManufacturerClick={() => handleCategoryClick('manufacturer')}
                    onPriceClick={() => handleCategoryClick('price-range')}
                />
                <BottomSheet
                    visible={isBottomSheetOpen}
                    type={filterType || 'manufacturer'}
                    options={filterType === 'manufacturer' ? ['Option 1', 'Option 2'] : []}
                    initialFilters={filters}
                    onApply={applyFilters}
                    onClose={() => setIsBottomSheetOpen(false)}
                />
            </div>

            {isLoading ? (
                <div>로딩 중...</div>
            ) : isError ? (
                <ErrorAlert
                    message="데이터를 불러오는데 실패했습니다."
                    onDismiss={() => {}}
                />
            ) : (
                <ProductGrid products={products} cardSize="L" />
            )}

            <div ref={observerRef} css={bottomSentinelStyle} />
        </div>
    );
};

export default HomePage;