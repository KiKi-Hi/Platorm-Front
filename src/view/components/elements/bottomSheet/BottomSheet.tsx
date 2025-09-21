/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import {css} from '@emotion/react';

interface BottomSheetProps {
    visible: boolean;
    type: 'manufacturer' | 'price-range';
    options?: string[];
    initialFilters: {
        manufacturer: string;
        minPrice: number;
        maxPrice: number;
    };
    onApply: (filters: { manufacturer: string; minPrice: number; maxPrice: number }) => void;
    onClose: () => void;
}

const bottomSheetStyles = css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    max-height: 428px;
    background: white;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;

    &[data-visible='true'] {
        transform: translateY(0);
    }
`;

const headerStyles = css`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-bottom: 1px solid #ddd;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;

const titleStyles = css`
    font-size: 16px;
    font-family: Pretendard,serif;
    font-weight: 500;
    color: #323237;
`;

const contentStyles = css`
    padding: 20px;
    background: white;
    overflow-y: auto;
`;

const footerStyles = css`
    padding: 12px 20px;
    border-top: 0.4px solid #AFAFB4;
    background: white;
`;

const applyButtonStyles = css`
    width: 100%;
    padding: 12px 0;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: white;
    background: #FF9800;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;

const optionItemStyles = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 8px;
  }
`;

const radioButtonStyles = (isSelected: boolean) => css`
  width: 18px;
  height: 18px;
  border: 2px solid ${isSelected ? '#F57C00' : '#D7D7DC'};
  border-radius: 50%;
  background: ${isSelected ? '#F57C00' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomSheet: React.FC<BottomSheetProps> = ({
                                                     visible,
                                                     type,
                                                     options,
                                                     initialFilters,
                                                     onApply,
                                                     onClose,
                                                 }) => {
    const [selectedValues, setSelectedValues] = useState(initialFilters);

    const handleOptionSelect = (key: keyof typeof initialFilters, value: any) => {
        setSelectedValues((prev) => ({ ...prev, [key]: value }));
    };

    const renderManufacturerOptions = () =>
        options?.map((option, idx) => {
            const isSelected = selectedValues.manufacturer === option;

            return (
                <div
                    key={idx}
                    css={optionItemStyles}
                    onClick={() => handleOptionSelect('manufacturer', option)}
                >
                    <div css={radioButtonStyles(isSelected)} />
                    <span>{option}</span>
                </div>
            );
        });

    const renderPriceRangeUI = () => (
        <div css={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: 8 }}>
            <label>최저가</label>
            <input
                type="number"
                placeholder="최저가를 입력하세요"
                value={selectedValues.minPrice || ''}
                onChange={(e) => handleOptionSelect('minPrice', Number(e.currentTarget.value))}
                css={{
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    fontSize: '16px',
                }}
            />
            <label>최고가</label>
            <input
                type="number"
                placeholder="최고가를 입력하세요"
                value={selectedValues.maxPrice || ''}
                onChange={(e) => handleOptionSelect('maxPrice', Number(e.currentTarget.value))}
                css={{
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    fontSize: '16px',
                }}
            />
        </div>
    );

    const renderContent = () => {
        if (type === 'manufacturer') return renderManufacturerOptions();
        if (type === 'price-range') return renderPriceRangeUI();
        return null;
    };

    return (
        <div css={bottomSheetStyles} data-visible={visible}>
            <div css={headerStyles}>
        <span css={titleStyles}>
          {type === 'manufacturer' ? '제조사 선택' : '가격대 선택'}
        </span>
            </div>
            <div css={contentStyles}>{renderContent()}</div>
            <div css={footerStyles}>
                <button
                    css={applyButtonStyles}
                    onClick={() => onApply(selectedValues)}
                >
                    적용하기
                </button>
            </div>
        </div>
    );
};