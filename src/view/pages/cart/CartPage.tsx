const CartPage =  () => {
    return (
        <>
            <div className="w-96 h-[812px] relative bg-white overflow-hidden">
                <div className="w-96 h-11 px-5 left-0 top-0 absolute inline-flex flex-col justify-center items-start">
                    <div className="self-stretch inline-flex justify-start items-center">
                        <div
                            className="flex-1 justify-start text-Text-Black text-base font-normal font-['Pretendard'] leading-snug">9:41
                        </div>
                        <div className="flex justify-start items-center gap-1.5">
                            <div className="w-5 h-3 bg-Text-Black"/>
                            <div className="w-4 h-3 bg-Text-Black"/>
                            <div className="w-6 h-3 opacity-30 rounded border border-Text-Black"/>
                            <div className="w-[1.33px] h-1 opacity-40 bg-Text-Black"/>
                            <div className="w-5 h-2 bg-Text-Black rounded-sm"/>
                        </div>
                    </div>
                </div>
                <div className="w-96 left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
                    <div data-cart="false" data-menu="true" data-search="false" data-style="Back"
                         className="self-stretch h-12 px-5 py-3 inline-flex justify-between items-center">
                        <div className="w-5 h-5 relative overflow-hidden">
                            <div
                                className="w-5 h-3.5 left-[1px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                        </div>
                        <div className="flex justify-start items-start gap-4">
                            <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div
                                        className="w-4 h-3 left-[4px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-chip1="true" data-chip2="true" data-chip3="true" data-divider="true" data-type="EditCart"
                         className="self-stretch px-5 py-2.5 bg-Fill-White flex flex-col justify-start items-start overflow-hidden">
                        <div className="w-80 h-6 inline-flex justify-between items-center">
                            <div className="pr-2 flex justify-start items-center gap-1">
                                <div data-selected="off" data-size="M"
                                     className="p-[3px] flex justify-start items-center gap-2.5">
                                    <div className="w-4 h-4 rounded-sm border-2 border-Line-Light-1"/>
                                </div>
                                <div
                                    className="justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">전체선택
                                </div>
                            </div>
                            <div data-icon="false" data-primary="Black" className="flex justify-start items-center">
                                <div
                                    className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">선택삭제
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-3 relative border-b-2 border-Line-ExtraHard-15"/>
                    </div>
                    <div className="self-stretch px-5 py-3.5 inline-flex justify-start items-center gap-2.5">
                        <div data-btn="false"
                             className="w-80 h-80 bg-Bg-ExtraLight-60%/60 inline-flex flex-col justify-center items-center gap-10">
                            <div className="flex flex-col justify-start items-start gap-0.5">
                                <div
                                    className="w-80 text-center justify-start text-Text-Default-0 text-base font-semibold font-['Pretendard'] leading-normal">장바구니에
                                    담긴 상품이 없어요
                                </div>
                                <div
                                    className="w-80 text-center justify-start text-Text-Light-1 text-sm font-normal font-['Pretendard'] leading-tight">원하는
                                    상품을 담아보세요
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-bg="Default" className="w-96 flex flex-col justify-start items-start gap-2">
                        <div data-textview="false" data-view="false"
                             className="self-stretch pl-5 pr-3.5 inline-flex justify-between items-center">
                            <div className="inline-flex flex-col justify-start items-start gap-0.5">
                                <div
                                    className="justify-start text-Text-Default-0 text-base font-medium font-['Pretendard'] leading-normal">헤더가
                                    들어갑니다
                                </div>
                            </div>
                        </div>
                        <div className="w-96 pl-5 inline-flex justify-start items-start gap-1.5 overflow-hidden">
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-[1241px] relative bg-white overflow-hidden">
                <div className="w-96 h-11 px-5 left-0 top-0 absolute inline-flex flex-col justify-center items-start">
                    <div className="self-stretch inline-flex justify-start items-center">
                        <div
                            className="flex-1 justify-start text-Text-Black text-base font-normal font-['Pretendard'] leading-snug">9:41
                        </div>
                        <div className="flex justify-start items-center gap-1.5">
                            <div className="w-5 h-3 bg-Text-Black"/>
                            <div className="w-4 h-3 bg-Text-Black"/>
                            <div className="w-6 h-3 opacity-30 rounded border border-Text-Black"/>
                            <div className="w-[1.33px] h-1 opacity-40 bg-Text-Black"/>
                            <div className="w-5 h-2 bg-Text-Black rounded-sm"/>
                        </div>
                    </div>
                </div>
                <div className="w-96 left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
                    <div data-cart="false" data-menu="false" data-search="false" data-style="Back"
                         className="self-stretch h-12 px-5 py-3 inline-flex justify-between items-center">
                        <div className="w-5 h-5 relative overflow-hidden">
                            <div
                                className="w-5 h-3.5 left-[1px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                        </div>
                        <div className="flex justify-start items-start gap-4"/>
                    </div>
                    <div data-chip1="true" data-chip2="true" data-chip3="true" data-divider="true" data-type="EditCart"
                         className="self-stretch px-5 py-2.5 bg-Fill-White flex flex-col justify-start items-start overflow-hidden">
                        <div className="w-80 h-6 inline-flex justify-between items-center">
                            <div className="pr-2 flex justify-start items-center gap-1">
                                <div data-selected="off" data-size="M"
                                     className="p-[3px] flex justify-start items-center gap-2.5">
                                    <div className="w-4 h-4 rounded-sm border-2 border-Line-Light-1"/>
                                </div>
                                <div
                                    className="justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">전체선택
                                </div>
                            </div>
                            <div data-icon="false" data-primary="Black" className="flex justify-start items-center">
                                <div
                                    className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">선택삭제
                                </div>
                            </div>
                        </div>
                        <div className="w-80 h-3 relative border-b-2 border-Line-ExtraHard-15"/>
                    </div>
                    <div className="w-96 px-5 flex flex-col justify-start items-start">
                        <div data-divider="true" data-option2off="true" data-type="Line"
                             className="w-80 py-5 border-b border-Line-ExtraLight-15/60 flex flex-col justify-start items-start gap-5">
                            <div className="self-stretch flex flex-col justify-start items-start gap-1">
                                <div className="w-80 inline-flex justify-between items-center">
                                    <div className="flex justify-start items-center gap-3">
                                        <div data-selected="off" data-size="M"
                                             className="p-[3px] flex justify-start items-center gap-2.5">
                                            <div className="w-4 h-4 rounded-sm border-2 border-Line-Light-1"/>
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제조사
                                        </div>
                                    </div>
                                    <div data-role="Assistive" data-size="L"
                                         className="flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <div
                                                className="w-3 h-3 left-[6px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch h-24 px-0.5 py-3 rounded-lg inline-flex justify-start items-start gap-5">
                                    <div className="w-60 inline-flex flex-col justify-start items-start gap-1">
                                        <div
                                            className="self-stretch justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제품명이
                                            들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요
                                        </div>
                                        <div className="inline-flex justify-start items-center gap-1">
                                            <div
                                                className="justify-start text-Text-Highlight text-sm font-semibold font-['Pretendard'] leading-tight">00%
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] line-through leading-none">00,000
                                                </div>
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">원
                                                </div>
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">00,000
                                                </div>
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">원
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">배송
                                            3,000원
                                        </div>
                                    </div>
                                    <div
                                        className="w-16 h-16 relative rounded inline-flex flex-col justify-start items-start overflow-hidden">
                                        <div data-aspect-ratio="1:1"
                                             className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                            <div
                                                className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                        </div>
                                        <div className="w-16 h-16 left-0 top-0 absolute bg-Fill-ExtraLight"/>
                                    </div>
                                </div>
                                <div
                                    className="w-80 px-2 py-1.5 bg-Fill-ExtraLight rounded-lg inline-flex justify-between items-center">
                                    <div
                                        className="justify-start text-Text-Default-0 text-sm font-normal font-['Pretendard'] leading-tight">옵션명
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-0 left-[5px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                        <div
                                            className="h-7 px-3 py-2.5 bg-Fill-White rounded outline outline-1 outline-offset-[-1px] outline-Line-Light-1 inline-flex flex-col justify-center items-center">
                                            <div
                                                className="text-center justify-start text-black text-sm font-semibold font-['Pretendard'] leading-tight">1
                                            </div>
                                        </div>
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-3.5 left-[5px] top-[5px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="w-80 px-2 py-1.5 bg-Fill-ExtraLight rounded-lg inline-flex justify-between items-center">
                                    <div
                                        className="justify-start text-Text-Default-0 text-sm font-normal font-['Pretendard'] leading-tight">옵션명
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-0 left-[5px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                        <div
                                            className="h-7 px-3 py-2.5 bg-Fill-White rounded outline outline-1 outline-offset-[-1px] outline-Line-Light-1 inline-flex flex-col justify-center items-center">
                                            <div
                                                className="text-center justify-start text-black text-sm font-semibold font-['Pretendard'] leading-tight">1
                                            </div>
                                        </div>
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-3.5 left-[5px] top-[5px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch inline-flex justify-between items-center">
                                <div
                                    className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">상품
                                    금액
                                </div>
                                <div className="h-6 flex justify-end items-center gap-0.5">
                                    <div
                                        className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">00,000
                                    </div>
                                    <div
                                        className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">원
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-divider="true" data-option2off="true" data-type="End"
                             className="w-80 py-5 flex flex-col justify-start items-start gap-5">
                            <div className="self-stretch flex flex-col justify-start items-start gap-1">
                                <div className="w-80 inline-flex justify-between items-center">
                                    <div className="flex justify-start items-center gap-3">
                                        <div data-selected="off" data-size="M"
                                             className="p-[3px] flex justify-start items-center gap-2.5">
                                            <div className="w-4 h-4 rounded-sm border-2 border-Line-Light-1"/>
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제조사
                                        </div>
                                    </div>
                                    <div data-role="Assistive" data-size="L"
                                         className="flex justify-start items-center gap-2.5">
                                        <div className="w-6 h-6 relative overflow-hidden">
                                            <div
                                                className="w-3 h-3 left-[6px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="self-stretch h-24 px-0.5 py-3 rounded-lg inline-flex justify-start items-start gap-5">
                                    <div className="w-60 inline-flex flex-col justify-start items-start gap-1">
                                        <div
                                            className="self-stretch justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">제품명이
                                            들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요
                                        </div>
                                        <div className="inline-flex justify-start items-center gap-1">
                                            <div
                                                className="justify-start text-Text-Highlight text-sm font-semibold font-['Pretendard'] leading-tight">00%
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] line-through leading-none">00,000
                                                </div>
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">원
                                                </div>
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">00,000
                                                </div>
                                                <div
                                                    className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">원
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">배송
                                            3,000원
                                        </div>
                                    </div>
                                    <div
                                        className="w-16 h-16 relative rounded inline-flex flex-col justify-start items-start overflow-hidden">
                                        <div data-aspect-ratio="1:1"
                                             className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                            <div
                                                className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                        </div>
                                        <div className="w-16 h-16 left-0 top-0 absolute bg-Fill-ExtraLight"/>
                                    </div>
                                </div>
                                <div
                                    className="w-80 px-2 py-1.5 bg-Fill-ExtraLight rounded-lg inline-flex justify-between items-center">
                                    <div
                                        className="justify-start text-Text-Default-0 text-sm font-normal font-['Pretendard'] leading-tight">옵션명
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-0 left-[5px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                        <div
                                            className="h-7 px-3 py-2.5 bg-Fill-White rounded outline outline-1 outline-offset-[-1px] outline-Line-Light-1 inline-flex flex-col justify-center items-center">
                                            <div
                                                className="text-center justify-start text-black text-sm font-semibold font-['Pretendard'] leading-tight">1
                                            </div>
                                        </div>
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-3.5 left-[5px] top-[5px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="w-80 px-2 py-1.5 bg-Fill-ExtraLight rounded-lg inline-flex justify-between items-center">
                                    <div
                                        className="justify-start text-Text-Default-0 text-sm font-normal font-['Pretendard'] leading-tight">옵션명
                                    </div>
                                    <div className="flex justify-start items-center gap-2">
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-0 left-[5px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                        <div
                                            className="h-7 px-3 py-2.5 bg-Fill-White rounded outline outline-1 outline-offset-[-1px] outline-Line-Light-1 inline-flex flex-col justify-center items-center">
                                            <div
                                                className="text-center justify-start text-black text-sm font-semibold font-['Pretendard'] leading-tight">1
                                            </div>
                                        </div>
                                        <div data-role="Default" data-size="L"
                                             className="flex justify-start items-center gap-2.5">
                                            <div className="w-6 h-6 relative overflow-hidden">
                                                <div
                                                    className="w-3.5 h-3.5 left-[5px] top-[5px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-Default-0"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch inline-flex justify-between items-center">
                                <div
                                    className="justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">상품
                                    금액
                                </div>
                                <div className="h-6 flex justify-end items-center gap-0.5">
                                    <div
                                        className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">00,000
                                    </div>
                                    <div
                                        className="justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-6 flex flex-col justify-start items-start gap-2.5">
                        <div
                            className="w-80 pt-1.5 border-t-2 border-Icon-Default-0 flex flex-col justify-start items-start gap-3">
                            <div
                                className="self-stretch py-3 border-b border-Line-Light-1 flex flex-col justify-start items-start gap-1">
                                <div className="self-stretch h-6 inline-flex justify-between items-center">
                                    <div
                                        className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">선택
                                        상품 금액
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <div
                                            className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">00,000
                                        </div>
                                        <div
                                            className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">원
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch h-6 inline-flex justify-between items-center">
                                    <div
                                        className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">상품
                                        할인
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <div
                                            className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">-
                                        </div>
                                        <div
                                            className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">00,000
                                        </div>
                                        <div
                                            className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">원
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch h-6 inline-flex justify-between items-center">
                                    <div
                                        className="justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">배송비
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <div
                                            className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">00,000
                                        </div>
                                        <div
                                            className="text-right justify-start text-Text-Light-1 text-sm font-medium font-['Pretendard'] leading-tight">원
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch inline-flex justify-between items-start">
                                <div
                                    className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">최종
                                    결제금액
                                </div>
                                <div className="flex justify-start items-center">
                                    <div
                                        className="text-right justify-start text-Text-Highlight text-base font-bold font-['Pretendard'] leading-normal">000,000
                                    </div>
                                    <div
                                        className="text-right justify-start text-Text-Highlight text-base font-bold font-['Pretendard'] leading-normal">원
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-bg="Fill"
                         className="w-96 py-5 bg-Fill-ExtraLight-50%/50 border-t-4 border-Line-ExtraLight-15/60 flex flex-col justify-start items-start gap-2">
                        <div data-textview="false" data-view="false"
                             className="self-stretch pl-5 pr-3.5 inline-flex justify-between items-center">
                            <div className="inline-flex flex-col justify-start items-start gap-0.5">
                                <div
                                    className="justify-start text-Text-Default-0 text-base font-medium font-['Pretendard'] leading-normal">헤더가
                                    들어갑니다
                                </div>
                            </div>
                        </div>
                        <div className="w-96 pl-5 inline-flex justify-start items-start gap-1.5 overflow-hidden">
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-numberoff="false" data-saleoff="true" data-size="S"
                                 className="w-28 inline-flex flex-col justify-start items-start gap-2">
                                <div data-style="Heart"
                                     className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                    <div data-aspect-ratio="1:1"
                                         className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                        <div
                                            className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                    </div>
                                    <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                        <div data-like="off" data-style="Thumbnail"
                                             className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                            <div
                                                className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start">
                                    <div
                                        className="justify-start text-Text-Default-0 text-xs font-semibold font-['Pretendard'] leading-none">제조사명
                                    </div>
                                    <div
                                        className="w-28 h-4 justify-start text-Text-Light-1 text-xs font-normal font-['Pretendard'] leading-none">제품명이
                                        들어갑니다 뒤에는 안보이게 처리
                                    </div>
                                    <div className="w-28 h-5 inline-flex justify-start items-center gap-1">
                                        <div
                                            className="justify-start text-Text-Highlight text-sm font-bold font-['Pretendard'] leading-tight">00%
                                        </div>
                                        <div
                                            className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-style="1BTN"
                     className="w-96 px-5 pt-3 pb-7 left-0 top-[1156px] absolute bg-Fill-White border-t-[0.40px] border-Line-Hard-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div data-primary="Default"
                         className="self-stretch px-5 py-2 bg-Fill-HighLight rounded-lg inline-flex justify-center items-center">
                        <div
                            className="justify-start text-Text-White text-xl font-bold font-['Pretendard'] leading-loose">주문하기
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage;