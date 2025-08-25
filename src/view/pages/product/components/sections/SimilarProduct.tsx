/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { P, Row } from "@view/components/common";
import { color, radius } from "@view/components/tokens/design/designTokens";
import { Svg } from "@view/pages/product/components/icons/icons";
import {useRecommend} from "../../../../../controller/feature/product/api/useRecommend";

const SimilarWrap = styled.section`
    padding: 14px 0 20px;
    background: rgba(245, 245, 250, 0.5);
    border-top: 4px solid rgba(230, 230, 235, 0.6);
`;

const SimilarHeader = styled(Row)`
    padding: 0 20px 8px;
`;

const CardTrack = styled.div`
    padding-left: 20px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 107px;
    gap: 12px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
`;

const Thumb = styled.div`
    width: 107px;
    height: 96px;
    background: ${color.bgSoft};
    border-radius: ${radius.xs};
    position: relative;
    overflow: hidden;
`;

const ThumbImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CardText = styled.div`
    display: grid;
    gap: 2px;
    margin-top: 6px;
`;

const PriceSm = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: ${color.text};
`;

const LikedButton = styled.button`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 6px;
    top: 6px;
    border: none;
    background: ${color.white};
    border-radius: 50%;
`;

const SimilarCard: React.FC<{ maker: string; title: string; price: string; src?: string }> = ({
                                                                                                  maker,
                                                                                                  title,
                                                                                                  price,
                                                                                                  src
                                                                                              }) => (
    <div>
        <Thumb>
            <ThumbImg src={src || 'https://placehold.co/214x192?text=Image'} alt="추천 이미지" />
            <LikedButton>
                <Svg path="heart_icon_path" />
            </LikedButton>
        </Thumb>
        <CardText>
            <P size={12} weight={600}>{maker}</P>
            <P size={12} light>{title}</P>
            <PriceSm>{price}</PriceSm>
        </CardText>
    </div>
);

const SimilarProducts: React.FC<{ productId: string }> = () => {
    const { data: recommendations, isLoading, isError } = useRecommend();

    if (isLoading) return <P>로딩 중...</P>;
    if (isError || !recommendations) return <P>추천 상품 데이터를 불러올 수 없습니다.</P>;

    return (
        <SimilarWrap>
            <SimilarHeader>
                <P size={16} weight={500}>비슷한 상품을 확인해보세요</P>
            </SimilarHeader>
            <CardTrack>
                {recommendations.map((item: any) => (
                    <SimilarCard
                        key={item.id}
                        maker={item.manufacturer}
                        title={item.name}
                        price={item.price}
                        src={item.thumbnail}
                    />
                ))}
            </CardTrack>
        </SimilarWrap>
    );
};

export default SimilarProducts;