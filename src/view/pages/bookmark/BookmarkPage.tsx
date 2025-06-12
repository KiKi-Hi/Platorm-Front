const BookmarkPage = () => {
    return (
        <>
            <div className="w-96 h-[812px] relative bg-white overflow-hidden">
                <div className="w-96 left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
                    <div data-cart="true" data-menu="true" data-search="false" data-style="NoLogo"
                         className="self-stretch h-12 px-5 py-3 inline-flex justify-end items-center gap-36">
                        <div className="flex justify-start items-start gap-4">
                            <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div
                                        className="w-4 h-4 left-[4px] top-[3px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                            <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div
                                        className="w-4 h-3 left-[4px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch border-b border-Line-Light-1 inline-flex justify-start items-center">
                        <div data-selected="on"
                             className="flex-1 px-5 py-2.5 bg-Fill-White border-b-2 border-Line-HighLight flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-Default-0 text-sm font-semibold font-['Pretendard'] leading-tight">하우징
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">스위치
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">키캡
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">악세서리
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">케이스
                            </div>
                        </div>
                    </div>
                    <div data-chip1="true" data-chip2="true" data-chip3="true" data-divider="true" data-type="Edit"
                         className="self-stretch h-11 px-5 py-2.5 bg-Fill-White flex flex-col justify-start items-start overflow-hidden">
                        <div className="w-80 inline-flex justify-between items-center">
                            <div className="pr-2 py-0.5 flex justify-start items-center gap-1">
                                <div
                                    className="justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">전체
                                </div>
                                <div
                                    className="justify-start text-Text-Default-0 text-sm font-medium font-['Pretendard'] leading-tight">000
                                </div>
                            </div>
                            <div data-icon="false" data-primary="Black" className="flex justify-start items-center">
                                <div
                                    className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">편집
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[548px] px-5 py-3.5 inline-flex justify-start items-center gap-2.5">
                        <div data-btn="true"
                             className="w-80 h-[520px] bg-Bg-ExtraLight-60%/60 inline-flex flex-col justify-center items-center gap-10">
                            <div className="flex flex-col justify-start items-start gap-0.5">
                                <div
                                    className="w-80 text-center justify-start text-Text-Default-0 text-base font-semibold font-['Pretendard'] leading-normal">북마크가
                                    없어요
                                </div>
                                <div
                                    className="w-80 text-center justify-start text-Text-Light-1 text-sm font-normal font-['Pretendard'] leading-tight">하트를
                                    눌러 북마크에 저장해보세요
                                </div>
                            </div>
                            <div data-icon="true" data-primary="Black"
                                 className="inline-flex justify-start items-center gap-0.5">
                                <div
                                    className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">아이템
                                    보러가기
                                </div>
                                <div data-size="M" className="w-4 h-4 relative overflow-hidden">
                                    <div
                                        className="w-1 h-2 left-[6.75px] top-[4.50px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                <div data-location="Customize"
                     className="w-96 pt-2 pb-7 left-0 top-[727px] absolute bg-Fill-White border-t-[0.40px] border-Line-Hard-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="self-stretch px-2 inline-flex justify-between items-center">
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-5 h-6 left-[5.41px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">홈
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="on" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.75px] top-[3.75px] absolute bg-Icon-Highlight50/20 outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Highlight"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-Highlight text-xs font-semibold font-['Pretendard'] leading-none">커스텀
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.73px] top-[4.98px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">북마크
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.75px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">마이페이지
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-[812px] relative bg-white overflow-hidden">
                <div className="w-96 left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
                    <div data-cart="true" data-menu="true" data-search="false" data-style="NoLogo"
                         className="self-stretch h-12 px-5 py-3 inline-flex justify-end items-center gap-36">
                        <div className="flex justify-start items-start gap-4">
                            <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div
                                        className="w-4 h-4 left-[4px] top-[3px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                            <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div
                                        className="w-4 h-3 left-[4px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch border-b border-Line-Light-1 inline-flex justify-start items-center">
                        <div data-selected="on"
                             className="flex-1 px-5 py-2.5 bg-Fill-White border-b-2 border-Line-HighLight flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-Default-0 text-sm font-semibold font-['Pretendard'] leading-tight">하우징
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">스위치
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">키캡
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">악세서리
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">케이스
                            </div>
                        </div>
                    </div>
                    <div data-chip1="true" data-chip2="true" data-chip3="true" data-divider="true" data-type="Edit"
                         className="self-stretch h-11 px-5 py-2.5 bg-Fill-White flex flex-col justify-start items-start overflow-hidden">
                        <div className="w-80 inline-flex justify-between items-center">
                            <div className="pr-2 py-0.5 flex justify-start items-center gap-1">
                                <div
                                    className="justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">전체
                                </div>
                                <div
                                    className="justify-start text-Text-Default-0 text-sm font-medium font-['Pretendard'] leading-tight">000
                                </div>
                            </div>
                            <div data-icon="false" data-primary="Black" className="flex justify-start items-center">
                                <div
                                    className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">편집
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-96 px-5 py-2 inline-flex justify-start items-center gap-1.5 flex-wrap content-center">
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
                                    <div data-like="on" data-style="Thumbnail"
                                         className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                        <div
                                            className="w-5 h-5 left-[1.99px] top-[2.99px] absolute bg-Icon-Highlight border-Icon-Highlight"/>
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
                                    <div data-like="on" data-style="Thumbnail"
                                         className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                        <div
                                            className="w-5 h-5 left-[1.99px] top-[2.99px] absolute bg-Icon-Highlight border-Icon-Highlight"/>
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
                        <div data-numberoff="false" data-saleoff="false" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="Heart"
                                 className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-like="on" data-style="Thumbnail"
                                         className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                        <div
                                            className="w-5 h-5 left-[1.99px] top-[2.99px] absolute bg-Icon-Highlight border-Icon-Highlight"/>
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
                                        className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-numberoff="false" data-saleoff="false" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="Heart"
                                 className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-like="on" data-style="Thumbnail"
                                         className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                        <div
                                            className="w-5 h-5 left-[1.99px] top-[2.99px] absolute bg-Icon-Highlight border-Icon-Highlight"/>
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
                                        className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-numberoff="false" data-saleoff="false" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="Heart"
                                 className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-like="on" data-style="Thumbnail"
                                         className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                        <div
                                            className="w-5 h-5 left-[1.99px] top-[2.99px] absolute bg-Icon-Highlight border-Icon-Highlight"/>
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
                                    <div data-like="on" data-style="Thumbnail"
                                         className="w-6 h-6 left-[77px] top-[66px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                                        <div
                                            className="w-5 h-5 left-[1.99px] top-[2.99px] absolute bg-Icon-Highlight border-Icon-Highlight"/>
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
                <div data-location="Customize"
                     className="w-96 pt-2 pb-7 left-0 top-[727px] absolute bg-Fill-White border-t-[0.40px] border-Line-Hard-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="self-stretch px-2 inline-flex justify-between items-center">
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-5 h-6 left-[5.41px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">홈
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="on" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.75px] top-[3.75px] absolute bg-Icon-Highlight50/20 outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Highlight"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-Highlight text-xs font-semibold font-['Pretendard'] leading-none">커스텀
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.73px] top-[4.98px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">북마크
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.75px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">마이페이지
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-[812px] relative bg-white overflow-hidden">
                <div className="w-96 left-0 top-[44px] absolute inline-flex flex-col justify-start items-start">
                    <div data-cart="true" data-menu="true" data-search="false" data-style="NoLogo"
                         className="self-stretch h-12 px-5 py-3 inline-flex justify-end items-center gap-36">
                        <div className="flex justify-start items-start gap-4">
                            <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div
                                        className="w-4 h-4 left-[4px] top-[3px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                            <div data-role="Default" data-size="L" className="flex justify-start items-center gap-2.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                    <div
                                        className="w-4 h-3 left-[4px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Default-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch border-b border-Line-Light-1 inline-flex justify-start items-center">
                        <div data-selected="on"
                             className="flex-1 px-5 py-2.5 bg-Fill-White border-b-2 border-Line-HighLight flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-Default-0 text-sm font-semibold font-['Pretendard'] leading-tight">하우징
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">스위치
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">키캡
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">악세서리
                            </div>
                        </div>
                        <div data-selected="off" className="flex-1 px-5 py-2.5 flex justify-center items-center">
                            <div
                                className="text-center justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">케이스
                            </div>
                        </div>
                    </div>
                    <div data-chip1="true" data-chip2="true" data-chip3="true" data-divider="true" data-type="Edit"
                         className="self-stretch h-11 px-5 py-2.5 bg-Fill-White flex flex-col justify-start items-start overflow-hidden">
                        <div className="w-80 inline-flex justify-between items-center">
                            <div className="pr-2 py-0.5 flex justify-start items-center gap-1">
                                <div
                                    className="justify-start text-Text-ExtraLight-15 text-sm font-normal font-['Pretendard'] leading-tight">전체
                                </div>
                                <div
                                    className="justify-start text-Text-Default-0 text-sm font-medium font-['Pretendard'] leading-tight">000
                                </div>
                            </div>
                            <div data-icon="false" data-primary="Black" className="flex justify-start items-center">
                                <div
                                    className="text-right justify-start text-Text-Default-0 text-base font-bold font-['Pretendard'] leading-normal">편집
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-96 px-5 py-2 inline-flex justify-start items-center gap-1.5 flex-wrap content-center">
                        <div data-numberoff="false" data-saleoff="true" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="ChackBox"
                                 className="w-28 h-24 relative rounded outline outline-2 outline-offset-[-2px] outline-Primary-SemiHard flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-selected="on" data-size="M"
                                         className="p-[3px] left-[77px] top-[6px] absolute inline-flex justify-start items-center gap-2.5">
                                        <div
                                            className="w-4 h-4 p-2.5 bg-Primary-SemiHard rounded-sm inline-flex flex-col justify-center items-center gap-2.5">
                                            <div className="w-3 h-2 bg-Icon-White"/>
                                        </div>
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
                            <div data-style="ChackBoxOff"
                                 className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-selected="off" data-size="M"
                                         className="p-[3px] left-[77px] top-[6px] absolute inline-flex justify-start items-center gap-2.5">
                                        <div className="w-4 h-4 rounded-sm border-2 border-Line-White"/>
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
                        <div data-numberoff="false" data-saleoff="false" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="ChackBoxOff"
                                 className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-selected="off" data-size="M"
                                         className="p-[3px] left-[77px] top-[6px] absolute inline-flex justify-start items-center gap-2.5">
                                        <div className="w-4 h-4 rounded-sm border-2 border-Line-White"/>
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
                                        className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-numberoff="false" data-saleoff="false" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="ChackBoxOff"
                                 className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-selected="off" data-size="M"
                                         className="p-[3px] left-[77px] top-[6px] absolute inline-flex justify-start items-center gap-2.5">
                                        <div className="w-4 h-4 rounded-sm border-2 border-Line-White"/>
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
                                        className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-numberoff="false" data-saleoff="false" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="ChackBox"
                                 className="w-28 h-24 relative rounded outline outline-2 outline-offset-[-2px] outline-Primary-SemiHard flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-selected="on" data-size="M"
                                         className="p-[3px] left-[77px] top-[6px] absolute inline-flex justify-start items-center gap-2.5">
                                        <div
                                            className="w-4 h-4 p-2.5 bg-Primary-SemiHard rounded-sm inline-flex flex-col justify-center items-center gap-2.5">
                                            <div className="w-3 h-2 bg-Icon-White"/>
                                        </div>
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
                                        className="justify-start text-Text-Default-0 text-sm font-bold font-['Pretendard'] leading-tight">00,000
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-numberoff="false" data-saleoff="true" data-size="S"
                             className="w-28 inline-flex flex-col justify-start items-start gap-2">
                            <div data-style="ChackBoxOff"
                                 className="w-28 h-24 relative rounded flex flex-col justify-start items-start overflow-hidden">
                                <div data-aspect-ratio="1:1"
                                     className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                                    <div
                                        className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
                                </div>
                                <div className="w-28 h-24 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                                    <div data-selected="off" data-size="M"
                                         className="p-[3px] left-[77px] top-[6px] absolute inline-flex justify-start items-center gap-2.5">
                                        <div className="w-4 h-4 rounded-sm border-2 border-Line-White"/>
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
                <div data-location="Customize"
                     className="w-96 pt-2 pb-7 left-0 top-[727px] absolute bg-Fill-White border-t-[0.40px] border-Line-Hard-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="self-stretch px-2 inline-flex justify-between items-center">
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-5 h-6 left-[5.41px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">홈
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="on" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.75px] top-[3.75px] absolute bg-Icon-Highlight50/20 outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Highlight"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-Highlight text-xs font-semibold font-['Pretendard'] leading-none">커스텀
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.73px] top-[4.98px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">북마크
                            </div>
                        </div>
                        <div className="flex-1 inline-flex flex-col justify-center items-center">
                            <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                                <div
                                    className="w-6 h-6 left-[3.75px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15"/>
                            </div>
                            <div
                                className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">마이페이지
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookmarkPage;
