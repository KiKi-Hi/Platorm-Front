const CustomizeStartPage = () => {
    return (
        <div className="w-96 h-[812px] relative bg-white overflow-hidden">
            <div className="w-96 left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
                <div data-cart="true" data-menu="true" data-search="true" data-style="Back" className="self-stretch h-12 px-5 py-3 inline-flex justify-between items-center">
                    <div className="w-5 h-5 relative overflow-hidden">
                        <div className="w-5 h-3.5 left-[1px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0" />
                    </div>
                    <div className="flex justify-start items-start gap-4">
                        <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                                <div className="w-4 h-4 left-[3px] top-[3px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0" />
                            </div>
                        </div>
                        <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                                <div className="w-4 h-4 left-[4px] top-[3px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0" />
                            </div>
                        </div>
                        <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                            <div className="w-6 h-6 relative overflow-hidden">
                                <div className="w-4 h-3 left-[4px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-64 relative flex flex-col justify-start items-start overflow-hidden">
                    <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                    </div>
                    <div className="w-96 h-64 left-0 top-0 absolute bg-Fill-ExtraLight" />
                </div>
                <div className="self-stretch border-b border-Line-Light-1 inline-flex justify-start items-center">
                    <div data-selected="on" className="flex-1 px-5 py-2.5 bg-Fill-White border-b-2 border-Line-HighLight flex justify-center items-center">
                        <div className="text-center justify-start text-Text-Default-0 text-sm font-semibold font-['Pretendard'] leading-tight">하우징</div>
                    </div>
                    <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                        <div className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">스위치</div>
                    </div>
                    <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                        <div className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">키캡</div>
                    </div>
                    <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                        <div className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">악세서리</div>
                    </div>
                </div>
                <div data-chip1="false" data-chip2="true" data-chip3="true" data-divider="true" data-type="Like" className="self-stretch px-5 py-2.5 bg-Fill-White flex flex-col justify-start items-start overflow-hidden">
                    <div className="w-80 inline-flex justify-between items-center">
                        <div className="flex justify-start items-center">
                            <div className="pr-2 py-0.5 flex justify-start items-center gap-1">
                                <div className="justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">전체</div>
                                <div className="justify-start text-Text-Default-0 text-sm font-medium font-['Pretendard'] leading-tight">000</div>
                            </div>
                            <div className="flex justify-start items-center gap-1.5 overflow-hidden">
                                <div data-state="off" className="px-2.5 py-0.5 bg-Fill-ExtraLight rounded-[50px] outline outline-1 outline-offset-[-1px] outline-Line-Default-0 flex justify-start items-center gap-2">
                                    <div className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">가격대</div>
                                    <div data-size="S" className="w-3 h-3 relative overflow-hidden">
                                        <div className="w-1.5 h-[3px] left-[3px] top-[4.50px] absolute outline outline-1 outline-offset-[-0.50px] outline-Icon-Light-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-like="off" data-style="BookmarkBTN" className="w-8 h-8 px-[5px] py-1.5 bg-Fill-ExtraLight rounded-[50px] inline-flex flex-col justify-center items-center gap-2.5">
                            <div className="w-3 h-2.5 outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15" />
                        </div>
                    </div>
                </div>
                <div className="self-stretch px-5 py-2 inline-flex justify-start items-center gap-1.5 flex-wrap content-center">
                    <div data-numberoff="true" data-saleoff="true" data-size="S" className="w-28 inline-flex flex-col justify-start items-start gap-2">
                        <div data-style="Heart" className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                            <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                            </div>
                            <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                <div data-like="off" data-style="Thumbnail" className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                    <div className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명</div>
                            <div className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이 들어갑니다 뒤에는 안보이게 처리</div>
                            <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                <div className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%</div>
                                <div className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000</div>
                            </div>
                        </div>
                    </div>
                    <div data-numberoff="true" data-saleoff="true" data-size="S" className="w-28 inline-flex flex-col justify-start items-start gap-2">
                        <div data-style="Heart" className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                            <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                            </div>
                            <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                <div data-like="off" data-style="Thumbnail" className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                    <div className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명</div>
                            <div className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이 들어갑니다 뒤에는 안보이게 처리</div>
                            <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                <div className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%</div>
                                <div className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000</div>
                            </div>
                        </div>
                    </div>
                    <div data-numberoff="true" data-saleoff="false" data-size="S" className="w-28 inline-flex flex-col justify-start items-start gap-2">
                        <div data-style="Heart" className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                            <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                            </div>
                            <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                <div data-like="off" data-style="Thumbnail" className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                    <div className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명</div>
                            <div className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이 들어갑니다 뒤에는 안보이게 처리</div>
                            <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                <div className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000</div>
                            </div>
                        </div>
                    </div>
                    <div data-numberoff="true" data-saleoff="false" data-size="S" className="w-28 inline-flex flex-col justify-start items-start gap-2">
                        <div data-style="Heart" className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                            <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                            </div>
                            <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                <div data-like="off" data-style="Thumbnail" className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                    <div className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명</div>
                            <div className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이 들어갑니다 뒤에는 안보이게 처리</div>
                            <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                <div className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000</div>
                            </div>
                        </div>
                    </div>
                    <div data-numberoff="true" data-saleoff="false" data-size="S" className="w-28 inline-flex flex-col justify-start items-start gap-2">
                        <div data-style="Heart" className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                            <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                            </div>
                            <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                <div data-like="off" data-style="Thumbnail" className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                    <div className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명</div>
                            <div className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이 들어갑니다 뒤에는 안보이게 처리</div>
                            <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                <div className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000</div>
                            </div>
                        </div>
                    </div>
                    <div data-numberoff="true" data-saleoff="true" data-size="S" className="w-28 inline-flex flex-col justify-start items-start gap-2">
                        <div data-style="Heart" className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                            <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
                            </div>
                            <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                <div data-like="off" data-style="Thumbnail" className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                    <div className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White" />
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명</div>
                            <div className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이 들어갑니다 뒤에는 안보이게 처리</div>
                            <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                <div className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%</div>
                                <div className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <div data-style="1BTN" className="w-96 px-5 pt-3 pb-7 left-0 top-[727px] absolute bg-Fill-White border-t-[0.40px] border-Line-Hard-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div data-primary="2Info" className="self-stretch px-5 py-2 bg-Fill-HighLight rounded-lg inline-flex justify-between items-center">
                    <div className="flex justify-start items-center gap-2">
                        <div data-size="WhiteBg" className="w-5 h-5 px-1.5 py-px bg-Fill-White rounded-xl inline-flex flex-col justify-center items-center">
                            <div className="text-center justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">1</div>
                        </div>
                        <div className="justify-start text-Text-White text-base font-bold font-['Pretendard'] leading-normal">버튼명</div>
                    </div>
                    <div className="flex justify-end items-center gap-0.5">
                        <div className="text-right justify-start text-Text-White text-xl font-bold font-['Pretendard'] leading-loose">000,000</div>
                        <div className="text-right justify-start text-Text-White text-xl font-bold font-['Pretendard'] leading-loose">원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomizeStartPage;
