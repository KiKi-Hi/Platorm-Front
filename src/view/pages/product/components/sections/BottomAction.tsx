/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {Row} from "@view/components/common";
import {IconButton, paths, Svg} from "@view/pages/product/components/icons/icons";
import {color, radius} from "@view/components/tokens/design/designTokens";


const BottomBar = styled.div`
  position: sticky;
  bottom: 0;
  background: ${color.white};
  border-top: 0.5px solid ${color.lineHard};
  padding: 10px 20px 20px;
`;

const SolidButton = styled.button`
  width: 100%;
  border: none;
  border-radius: ${radius.sm};
  padding: 12px 16px;
  background: ${color.highlight};
  color: ${color.white};
  font-size: 16px;
  font-weight: 700;
`;

const BottomAction: React.FC = () => (
    <BottomBar>
        <Row between>
            <Row gap={12}>
                <IconButton>
                    <Svg path={paths.heart} />
                </IconButton>
                <IconButton>
                    <Svg path={paths.share} />
                </IconButton>
            </Row>
        </Row>
        <div css={{ height: 10 }} />
        <SolidButton>원본 상품 보러가기</SolidButton>
    </BottomBar>
);

export default BottomAction;