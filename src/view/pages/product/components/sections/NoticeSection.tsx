/** @jsxImportSource @emotion/react */
import { P, Section } from "@view/components/common";

const NoticeSection: React.FC<{ caution: string }> = ({ caution }) => (
    <Section>
        <div
            css={{
                display: "grid",
                gap: "8px",
            }}
        >
            <P weight={600}>상품 유의사항</P>
            <P light>{caution}</P>
        </div>
        <div css={{ height: 12 }} />
        <P weight={600}>상세정보</P>
    </Section>
);

export default NoticeSection;