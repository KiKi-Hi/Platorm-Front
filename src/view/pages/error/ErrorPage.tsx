import React from 'react';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError() as Error;
    return (
        <div className="w-96 h-[812px] relative bg-white overflow-hidden">
            <div data-location="Home" className="w-96 h-20 pt-2 pb-7 left-0 top-[727px] absolute bg-Fill-White border-t-[0.40px] border-Line-Hard-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                <div className="self-stretch px-2 inline-flex justify-between items-center">
                    <div className="flex-1 inline-flex flex-col justify-center items-center">
                        <div data-states="on" className="w-7 h-7 relative overflow-hidden">
                            <div className="w-5 h-6 left-[5.41px] top-[3.75px] absolute bg-Icon-Highlight50/20 outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-Highlight" />
                        </div>
                        <div className="self-stretch text-center justify-start text-Text-Highlight text-xs font-semibold font-['Pretendard'] leading-none">홈</div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-center items-center">
                        <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                            <div className="w-6 h-6 left-[3.75px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15" />
                        </div>
                        <div className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">커스텀</div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-center items-center">
                        <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                            <div className="w-6 h-6 left-[3.73px] top-[4.98px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15" />
                        </div>
                        <div className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">북마크</div>
                    </div>
                    <div className="flex-1 inline-flex flex-col justify-center items-center">
                        <div data-states="off" className="w-7 h-7 relative overflow-hidden">
                            <div className="w-6 h-6 left-[3.75px] top-[3.75px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15" />
                        </div>
                        <div className="self-stretch text-center justify-start text-Text-ExtraLight-15 text-xs font-semibold font-['Pretendard'] leading-none">마이페이지</div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-[812px] left-[-1px] top-0 absolute bg-black/70" />
            <div className="w-80 p-4 left-[20px] top-[280px] absolute bg-Bg-White rounded-xl inline-flex flex-col justify-start items-end gap-7">
                <div className="flex flex-col justify-start items-end gap-1">
                    <div data-role="Default" data-size="L" className="inline-flex justify-start items-center gap-2.5">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <div className="w-3 h-3 left-[6px] top-[6px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-White" />
                        </div>
                    </div>
                    <div className="w-72 py-5 flex flex-col justify-center items-center gap-3">
                        <div className="self-stretch text-center justify-start text-Text-Default-0 text-base font-semibold font-['Pretendard'] leading-normal">다시 시도해주세요!</div>
                        <div className="self-stretch text-center justify-start text-Text-Light-1 text-sm font-normal font-['Pretendard'] leading-tight">{error.message || '일시적인 오류가 발생했습니다.<br/>잠시 후에 다시 시도해주세요!'}</div>
                    </div>
                </div>
                <div data-primary="Default" className="self-stretch h-11 px-5 py-2 bg-Fill-HighLight rounded-lg inline-flex justify-center items-center">
                    <div className="justify-start text-Text-White text-xl font-bold font-['Pretendard'] leading-loose" onClick={() => window.location.href = '/'}>확인</div>
                </div>
            </div>
            <div className="w-96 h-11 px-5 left-0 top-0 absolute inline-flex flex-col justify-center items-start">
                <div className="self-stretch inline-flex justify-start items-center">
                    <div className="flex-1 justify-start text-Text-White text-base font-normal font-['Pretendard'] leading-snug">9:41</div>
                    <div className="flex justify-start items-center gap-1.5">
                        <div className="w-5 h-3 bg-Text-White" />
                        <div className="w-4 h-3 bg-Text-White" />
                        <div className="w-6 h-3 opacity-30 rounded border border-Text-White" />
                        <div className="w-[1.33px] h-1 opacity-40 bg-Text-White" />
                        <div className="w-5 h-2 bg-Text-White rounded-sm" />
                    </div>
                </div>
            </div>
        </div>
    )
}