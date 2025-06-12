const PaymentPage =  () => {
    return (
        <div className="w-96 h-[1435px] relative bg-white overflow-hidden">
            <div className="w-96 h-11 px-5 left-0 top-0 absolute inline-flex flex-col justify-center items-start">
                <div className="self-stretch inline-flex justify-start items-center">
                    <div className="flex-1 justify-start text-Text-Black text-base font-normal font-['Pretendard'] leading-snug">9:41</div>
                    <div className="flex justify-start items-center gap-1.5">
                        <div className="w-5 h-3 bg-Text-Black" />
                        <div className="w-4 h-3 bg-Text-Black" />
                        <div className="w-6 h-3 opacity-30 rounded border border-Text-Black" />
                        <div className="w-[1.33px] h-1 opacity-40 bg-Text-Black" />
                        <div className="w-5 h-2 bg-Text-Black rounded-sm" />
                    </div>
                </div>
            </div>
            <div className="w-96 left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
                <div data-cart="false" data-menu="false" data-search="false" data-style="Back" className="self-stretch h-12 px-5 py-3 inline-flex justify-between items-center">
                    <div className="w-5 h-5 relative overflow-hidden">
                        <div className="w-5 h-3.5 left-[1px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0" />
                    </div>
                    <div className="flex justify-start items-start gap-4" />
                </div>
                <div className="w-96 px-5 pt-5 pb-0.5 inline-flex justify-start items-center gap-2.5">
                    <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">배송 정보</div>
                </div>
                <div className="self-stretch px-5 pt-5 flex flex-col justify-start items-start gap-2.5">
                    <div className="pb-7 border-b-2 border-Line-ExtraHard-15 flex flex-col justify-start items-start gap-5">
                        <div className="w-80 h-10 inline-flex justify-start items-center gap-4">
                            <div className="justify-start text-Text-Default-0 text-base font-semibold font-['Pretendard'] leading-normal">수령인</div>
                            <div data-active="Default" data-size="M" className="flex-1 h-10 p-3 bg-Fill-White rounded-lg outline outline-2 outline-offset-[-2px] outline-Line-Light-1 flex justify-start items-center gap-2.5">
                                <div className="justify-start text-Text-GuideText text-base font-semibold font-['Pretendard'] leading-normal">이름</div>
                            </div>
                        </div>
                        <div className="w-80 inline-flex justify-start items-start gap-4">
                            <div className="justify-start text-Text-Default-0 text-base font-semibold font-['Pretendard'] leading-normal">주소지</div>
                            <div className="flex-1 inline-flex flex-col justify-center items-start gap-3">
                                <div className="self-stretch inline-flex justify-start items-center gap-2">
                                    <div data-active="Default" data-size="M" className="flex-1 h-10 p-3 bg-Fill-White rounded-lg outline outline-2 outline-offset-[-2px] outline-Line-Light-1 flex justify-start items-center gap-2.5">
                                        <div className="justify-start text-Text-GuideText text-base font-semibold font-['Pretendard'] leading-normal">우편번호</div>
                                    </div>
                                    <div data-property-1="Default" className="h-10 px-3 py-2 bg-Fill-Light rounded-lg flex justify-start items-center gap-11">
                                        <div className="justify-start text-Text-Default-0 text-sm font-medium font-['Pretendard'] leading-tight">우편번호 찾기</div>
                                    </div>
                                </div>
                                <div data-active="Default" data-size="M" className="self-stretch h-10 p-3 bg-Fill-White rounded-lg outline outline-2 outline-offset-[-2px] outline-Line-Light-1 inline-flex justify-start items-center gap-2.5">
                                    <div className="justify-start text-Text-GuideText text-base font-semibold font-['Pretendard'] leading-normal">주소지</div>
                                </div>
                                <div data-active="Default" data-size="M" className="self-stretch h-10 p-3 bg-Fill-White rounded-lg outline outline-2 outline-offset-[-2px] outline-Line-Light-1 inline-flex justify-start items-center gap-2.5">
                                    <div className="justify-start text-Text-GuideText text-base font-semibold font-['Pretendard'] leading-normal">상세 주소</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-10 inline-flex justify-start items-center gap-4">
                            <div className="justify-start text-Text-Default-0 text-base font-semibold font-['Pretendard'] leading-normal">연락처</div>
                            <div className="flex-1 flex justify-start items-center gap-0.5">
                                <div data-active="Default" data-size="M" className="flex-1 h-10 p-3 bg-Fill-White rounded-lg outline outline-2 outline-offset-[-2px] outline-Line-Light-1 flex justify-center items-center gap-2.5">
                                    <div className="justify-start text-Text-GuideText text-base font-semibold font-['Pretendard'] leading-normal">010</div>
                                </div>
                                <div className="justify-start text-Text-ExtraLight-15 text-base font-semibold font-['Pretendard'] leading-normal">-</div>
                                <div data-active="Default" data-size="M" className="flex-1 h-10 p-3 bg-Fill-White rounded-lg outline outline-2 outline-offset-[-2px] outline-Line-Light-1 flex justify-center items-center gap-2.5">
                                    <div className="justify-start text-Text-GuideText text-base font-semibold font-['Pretendard'] leading-normal">0000</div>
                                </div>
                                <div className="justify-start text-Text-ExtraLight-15 text-base font-semibold font-['Pretendard'] leading-normal">-</div>
                                <div data-active="Default" data-size="M" className="flex-1 h-10 p-3 bg-Fill-White rounded-lg outline outline-2 outline-offset-[-2px] outline-Line-Light-1 flex justify-center items-center gap-2.5">
                                    <div className="justify-start text-Text-GuideText text-base font-semibold font-['Pretendard'] leading-normal">0000</div>
                                </div>
                            </div>
                        </div>
                        <div data-property-1="Black" className="w-80 h-10 px-3 py-2 bg-Fill-ExtraHard rounded-lg inline-flex justify-center items-center gap-11">
                            <div className="justify-start text-Text-White text-sm font-semibold font-['Pretendard'] leading-tight">저장하기</div>
                        </div>
                    </div>
                </div>
                <div className="w-96 px-5 pt-5 pb-0.5 inline-flex justify-start items-center gap-2.5">
                    <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">주문 상품</div>
                </div>
                <div className="w-96 px-5 flex flex-col justify-start items-start">
                    <div data-divider="true" data-option2off="true" data-property-1="Line" className="w-80 py-5 border-b border-Line-ExtraLight-15/60 flex flex-col justify-start items-start gap-5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제조사</div>
                            <div className="self-stretch h-24 px-0.5 py-3 rounded-lg inline-flex justify-start items-start gap-5">
                                <div className="w-60 inline-flex flex-col justify-start items-start gap-1">
                                    <div className="self-stretch justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제품명이 들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요</div>
                                    <div className="inline-flex justify-start items-center gap-1">
                                        <div className="flex justify-start items-center">
                                            <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] line-through leading-none">00,000</div>
                                            <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">원</div>
                                        </div>
                                        <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">배송 3,000원</div>
                                    </div>
                                    <div className="inline-flex justify-start items-start gap-1">
                                        <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">옵션명</div>
                                        <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">/</div>
                                        <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">수량 1개</div>
                                    </div>
                                </div>
                                <div className="w-16 h-16 relative rounded inline-flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                                    </div>
                                    <div className="w-16 h-16 left-0 top-0 absolute bg-Fill-ExtraLight" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-center">
                            <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">상품 금액</div>
                            <div className="h-6 flex justify-end items-center gap-0.5">
                                <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">00,000</div>
                                <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">원</div>
                            </div>
                        </div>
                    </div>
                    <div data-divider="true" data-option2off="true" data-property-1="End" className="w-80 py-5 border-b-2 border-Line-ExtraHard-15 flex flex-col justify-start items-start gap-5">
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                            <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제조사</div>
                            <div className="self-stretch h-24 px-0.5 py-3 rounded-lg inline-flex justify-start items-start gap-5">
                                <div className="w-60 inline-flex flex-col justify-start items-start gap-1">
                                    <div className="self-stretch justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제품명이 들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요</div>
                                    <div className="inline-flex justify-start items-center gap-1">
                                        <div className="flex justify-start items-center">
                                            <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] line-through leading-none">00,000</div>
                                            <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">원</div>
                                        </div>
                                        <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">배송 3,000원</div>
                                    </div>
                                    <div className="inline-flex justify-start items-start gap-1">
                                        <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">옵션명</div>
                                        <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">/</div>
                                        <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">수량 1개</div>
                                    </div>
                                </div>
                                <div className="w-16 h-16 relative rounded inline-flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                                    </div>
                                    <div className="w-16 h-16 left-0 top-0 absolute bg-Fill-ExtraLight" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-center">
                            <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">상품 금액</div>
                            <div className="h-6 flex justify-end items-center gap-0.5">
                                <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">00,000</div>
                                <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">원</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-96 px-5 pt-5 pb-0.5 inline-flex justify-start items-center gap-2.5">
                    <div className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">결제 방법</div>
                </div>
                <div className="self-stretch px-5 py-3 flex flex-col justify-start items-start gap-3">
                    <div data-payment="true" data-selected="on" data-type="RadioButton" className="inline-flex justify-start items-center gap-2">
                        <div data-selected="on" className="w-6 h-6 relative">
                            <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-Primary-SemiHard" />
                        </div>
                        <div className="w-20 h-4 relative overflow-hidden">
                            <div className="w-2 h-3 left-[19.67px] top-[1.98px] absolute bg-gray-800" />
                            <div className="w-2.5 h-2 left-[27.29px] top-[4.58px] absolute bg-gray-800" />
                            <div className="w-2 h-2 left-[37.24px] top-[4.58px] absolute bg-gray-800" />
                            <div className="w-2 h-2 left-[45.53px] top-[4.58px] absolute bg-gray-800" />
                            <div className="w-2 h-2 left-[66.14px] top-[4.67px] absolute bg-gray-800" />
                            <div className="w-2 h-3 left-[75.49px] top-[4.75px] absolute bg-gray-800" />
                            <div className="w-2 h-3 left-[56.66px] top-[4.67px] absolute bg-gray-800" />
                            <img className="w-4 h-4 left-0 top-0 absolute" src="https://placehold.co/18x16" />
                        </div>
                        <div className="justify-start text-Text-Default-0 text-base font-normal font-['Pretendard'] leading-normal">토스페이</div>
                    </div>
                    <div data-payment="false" data-selected="off" data-type="RadioButton" className="inline-flex justify-start items-center gap-2">
                        <div data-selected="off" className="w-6 h-6 relative">
                            <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-Line-Default-0" />
                        </div>
                        <div className="justify-start text-Text-Default-0 text-base font-normal font-['Pretendard'] leading-normal">계좌 간편결제</div>
                    </div>
                    <div data-payment="false" data-selected="off" data-type="RadioButton" className="inline-flex justify-start items-center gap-2">
                        <div data-selected="off" className="w-6 h-6 relative">
                            <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-Line-Default-0" />
                        </div>
                        <div className="justify-start text-Text-Default-0 text-base font-normal font-['Pretendard'] leading-normal">일반결제</div>
                    </div>
                </div>
                <div className="px-5 py-6 flex flex-col justify-start items-start gap-2.5">
                    <div className="w-80 pt-1.5 border-t-2 border-Icon-Default-0 flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch py-3 border-b border-Line-Light-1 flex flex-col justify-start items-start gap-1">
                            <div className="self-stretch h-6 inline-flex justify-between items-center">
                                <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">선택 상품 금액</div>
                                <div className="flex justify-end items-center">
                                    <div className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">00,000</div>
                                    <div className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">원</div>
                                </div>
                            </div>
                            <div className="self-stretch h-6 inline-flex justify-between items-center">
                                <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">상품 할인</div>
                                <div className="flex justify-end items-center">
                                    <div className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">-</div>
                                    <div className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">00,000</div>
                                    <div className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">원</div>
                                </div>
                            </div>
                            <div className="self-stretch h-6 inline-flex justify-between items-center">
                                <div className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">배송비</div>
                                <div className="flex justify-end items-center">
                                    <div className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">00,000</div>
                                    <div className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">원</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch inline-flex justify-between items-start">
                            <div className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">최종 결제금액</div>
                            <div className="flex justify-start items-center">
                                <div className="text-right justify-start text-Text-Highlight text-base font-bold font-['Pretendard'] leading-normal">000,000</div>
                                <div className="text-right justify-start text-Text-Highlight text-base font-bold font-['Pretendard'] leading-normal">원</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch px-5 pt-3 pb-11 flex flex-col justify-start items-start gap-2.5">
                    <div data-primary="Default" className="self-stretch px-5 py-2 bg-Fill-HighLight rounded-lg inline-flex justify-center items-center">
                        <div className="justify-start text-Text-White text-xl font-bold font-['Pretendard'] leading-loose">결제하기</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage;