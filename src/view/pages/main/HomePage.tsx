/** @jsxImportSource @emotion/react */
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {css, Global} from '@emotion/react';
import CategoryChips from './components/CategoryChips';
import {ProductGrid} from './components/ProductCard';
import BannerSlider from './components/BannerSlider';
import {useProductsInfiniteQuery} from "../../../controller/feature/product/api/useProduct";
import {Category, categoryMap} from "../../../controller/feature/product/constant/category";
import ErrorAlert from '../error/ErrorAlert';
import {RecommendationsSection} from "@view/pages/main/components/RecommendationSection";

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

    const { data, fetchNextPage, hasNextPage, isError, isLoading } = useProductsInfiniteQuery({
        size: 20,
        category: selectedCategory,
    });

    const observerRef = useRef<HTMLDivElement | null>(null);
    const stickySentinelRef = useRef<HTMLDivElement | null>(null);

    const [isAffixed, setIsAffixed] = useState(false);
    const [phase, setPhase] = useState<'idle'|'enter'|'stuck'>('idle');

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

        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
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

    const handleCategoryChange = (category: string) => {
        const mappedCategory = categoryMap[category.toLowerCase()];
        if (mappedCategory) {
            setSelectedCategory(mappedCategory);
        } else {
            console.error(`Unknown category: ${category}`);
        }
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
                <CategoryChips selected={selectedCategory} onChange={handleCategoryChange} />
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