/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { P, Row, Section } from "@view/components/common";
import { IconButton, paths, Svg } from "@view/pages/product/components/icons/icons";
import { color, shadow } from "@view/components/tokens/design/designTokens";

const TitleRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    gap: 8px;
`;

const HeartButton = styled(IconButton)`
    border-radius: 999px;
    background: ${(props: { liked: boolean }) =>
            props.liked ? color.highlight : color.white};
    box-shadow: ${shadow.sm};
`;

const Price = styled.span`
    font-size: 22px;
    font-weight: 800;
`;

const ProductHeader: React.FC<{ maker: string; title: string; price: string; liked: boolean }> = ({
                                                                                                      maker,
                                                                                                      title,
                                                                                                      price,
                                                                                                      liked,
                                                                                                  }) => (
    <Section>
        <TitleRow>
            <div>
                <P size={14} light>
                    {maker}
                </P>
                <P size={16} weight={500}>
                    {title}
                </P>
            </div>
            <HeartButton aria-label="관심상품" liked={liked}>
                <Svg path={paths.heart} />
            </HeartButton>
        </TitleRow>
        <Row gap={6} style={{ marginTop: 8 }}>
            <Price>{price}</Price>
            <P size={20} weight={800}>
                원
            </P>
        </Row>
    </Section>
);

export default ProductHeader;