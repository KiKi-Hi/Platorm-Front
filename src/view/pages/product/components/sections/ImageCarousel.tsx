/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const CarouselWrapper = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const ImageCarousel: React.FC<{ images: string | string[] }> = ({ images }) => {
    return (
        <CarouselWrapper>
            {Array.isArray(images) ? (
                images.map((url, index) => (
                    <Image key={index} src={url} alt={`product-image-${index}`} />
                ))
            ) : (
                <Image src={images} alt="product-image-single" />
            )}
        </CarouselWrapper>
    );
};

export default ImageCarousel;