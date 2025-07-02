import React from 'react';
import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as Error;
  return (
    <div className="relative h-[812px] w-96 overflow-hidden bg-white">
      <div
        data-location="Home"
        className="absolute left-0 top-[727px] inline-flex h-20 w-96 flex-col items-start justify-start gap-2.5 overflow-hidden border-t-[0.40px] border-Line-Hard-1 bg-Fill-White pb-7 pt-2"
      >
        <div className="inline-flex items-center justify-between self-stretch px-2">
          <div className="inline-flex flex-1 flex-col items-center justify-center">
            <div data-states="on" className="relative size-7 overflow-hidden">
              <div className="bg-Icon-Highlight50/20 outline-Icon-Highlight absolute left-[5.41px] top-[3.75px] h-6 w-5 outline outline-[1.60px] outline-offset-[-0.80px]" />
            </div>
            <div className="text-Text-Highlight justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
              홈
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-center justify-center">
            <div data-states="off" className="relative size-7 overflow-hidden">
              <div className="outline-Icon-ExtraLight-15 absolute left-[3.75px] top-[3.75px] size-6 outline outline-[1.60px] outline-offset-[-0.80px]" />
            </div>
            <div className="text-Text-ExtraLight-15 justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
              커스텀
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-center justify-center">
            <div data-states="off" className="relative size-7 overflow-hidden">
              <div className="outline-Icon-ExtraLight-15 absolute left-[3.73px] top-[4.98px] size-6 outline outline-[1.60px] outline-offset-[-0.80px]" />
            </div>
            <div className="text-Text-ExtraLight-15 justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
              북마크
            </div>
          </div>
          <div className="inline-flex flex-1 flex-col items-center justify-center">
            <div data-states="off" className="relative size-7 overflow-hidden">
              <div className="outline-Icon-ExtraLight-15 absolute left-[3.75px] top-[3.75px] size-6 outline outline-[1.60px] outline-offset-[-0.80px]" />
            </div>
            <div className="text-Text-ExtraLight-15 justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
              마이페이지
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -left-px top-0 h-[812px] w-96 bg-black/70" />
      <div className="bg-Bg-White absolute left-[20px] top-[280px] inline-flex w-80 flex-col items-end justify-start gap-7 rounded-xl p-4">
        <div className="flex flex-col items-end justify-start gap-1">
          <div
            data-role="Default"
            data-size="L"
            className="inline-flex items-center justify-start gap-2.5"
          >
            <div className="relative size-6 overflow-hidden">
              <div className="outline-Icon-White absolute left-[6px] top-[6px] size-3 outline outline-[1.60px] outline-offset-[-0.80px]" />
            </div>
          </div>
          <div className="flex w-72 flex-col items-center justify-center gap-3 py-5">
            <div className="text-Text-Default-0 justify-start self-stretch text-center font-['Pretendard'] text-base font-semibold leading-normal">
              다시 시도해주세요!
            </div>
            <div className="text-Text-Light-1 justify-start self-stretch text-center font-['Pretendard'] text-sm font-normal leading-tight">
              {error.message || '일시적인 오류가 발생했습니다.<br/>잠시 후에 다시 시도해주세요!'}
            </div>
          </div>
        </div>
        <div
          data-primary="Default"
          className="bg-Fill-HighLight inline-flex h-11 items-center justify-center self-stretch rounded-lg px-5 py-2"
        >
          <div
            className="text-Text-White justify-start font-['Pretendard'] text-xl font-bold leading-loose"
            onClick={() => (window.location.href = '/')}
          >
            확인
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 inline-flex h-11 w-96 flex-col items-start justify-center px-5">
        <div className="inline-flex items-center justify-start self-stretch">
          <div className="text-Text-White flex-1 justify-start font-['Pretendard'] text-base font-normal leading-snug">
            9:41
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="bg-Text-White h-3 w-5" />
            <div className="bg-Text-White h-3 w-4" />
            <div className="border-Text-White h-3 w-6 rounded border opacity-30" />
            <div className="bg-Text-White h-1 w-[1.33px] opacity-40" />
            <div className="bg-Text-White h-2 w-5 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
