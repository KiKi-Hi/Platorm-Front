function CustomizeStartPage() {
  return (
    <div className="relative h-[812px] w-96 overflow-hidden bg-white">
      <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start">
        <div
          data-cart="true"
          data-menu="true"
          data-search="true"
          data-style="Back"
          className="inline-flex h-12 items-center justify-between self-stretch px-5 py-3"
        >
          <div className="relative size-5 overflow-hidden">
            <div className="outline-Icon-Default-0 absolute left-px top-[4px] h-3.5 w-5 outline outline-2 outline-offset-[-1px]" />
          </div>
          <div className="flex items-start justify-start gap-4">
            <div
              data-role="Default"
              data-size="L"
              className="flex items-center justify-start gap-2.5"
            >
              <div className="relative size-6 overflow-hidden">
                <div className="outline-Icon-Default-0 absolute left-[3px] top-[3px] size-4 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
            </div>
            <div
              data-role="Default"
              data-size="L"
              className="flex items-center justify-start gap-2.5"
            >
              <div className="relative size-6 overflow-hidden">
                <div className="outline-Icon-Default-0 absolute left-[4px] top-[3px] size-4 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
            </div>
            <div
              data-role="Default"
              data-size="L"
              className="flex items-center justify-start gap-2.5"
            >
              <div className="relative size-6 overflow-hidden">
                <div className="outline-Icon-Default-0 absolute left-[4px] top-[6px] h-3 w-4 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex h-64 flex-col items-start justify-start self-stretch overflow-hidden">
          <div
            data-aspect-ratio="1:1"
            className="flex flex-col items-start justify-start self-stretch overflow-hidden"
          >
            <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
          </div>
          <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-64 w-96" />
        </div>
        <div className="border-Line-Light-1 inline-flex items-center justify-start self-stretch border-b">
          <div
            data-selected="on"
            className="border-Line-HighLight flex flex-1 items-center justify-center border-b-2 bg-Fill-White px-5 py-2.5"
          >
            <div className="text-Text-Default-0 justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight">
              하우징
            </div>
          </div>
          <div data-selected="off" className="flex flex-1 items-center justify-center px-5 py-2.5">
            <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
              스위치
            </div>
          </div>
          <div data-selected="off" className="flex flex-1 items-center justify-center px-5 py-2.5">
            <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
              키캡
            </div>
          </div>
          <div data-selected="off" className="flex flex-1 items-center justify-center px-5 py-2.5">
            <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
              악세서리
            </div>
          </div>
        </div>
        <div
          data-chip1="false"
          data-chip2="true"
          data-chip3="true"
          data-divider="true"
          data-type="Like"
          className="flex flex-col items-start justify-start self-stretch overflow-hidden bg-Fill-White px-5 py-2.5"
        >
          <div className="inline-flex w-80 items-center justify-between">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-start gap-1 py-0.5 pr-2">
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  전체
                </div>
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                  000
                </div>
              </div>
              <div className="flex items-center justify-start gap-1.5 overflow-hidden">
                <div
                  data-state="off"
                  className="bg-Fill-ExtraLight outline-Line-Default-0 flex items-center justify-start gap-2 rounded-[50px] px-2.5 py-0.5 outline outline-1 outline-offset-[-1px]"
                >
                  <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                    가격대
                  </div>
                  <div data-size="S" className="relative size-3 overflow-hidden">
                    <div className="outline-Icon-Light-1 absolute left-[3px] top-[4.50px] h-[3px] w-1.5 outline outline-1 outline-offset-[-0.50px]" />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-like="off"
              data-style="BookmarkBTN"
              className="bg-Fill-ExtraLight inline-flex size-8 flex-col items-center justify-center gap-2.5 rounded-[50px] px-[5px] py-1.5"
            >
              <div className="outline-Icon-ExtraLight-15 h-2.5 w-3 outline outline-[1.60px] outline-offset-[-0.80px]" />
            </div>
          </div>
        </div>
        <div className="inline-flex flex-wrap content-center items-center justify-start gap-1.5 self-stretch px-5 py-2">
          <div
            data-numberoff="true"
            data-saleoff="true"
            data-size="S"
            className="inline-flex w-28 flex-col items-start justify-start gap-2"
          >
            <div
              data-style="Heart"
              className="relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded"
            >
              <div
                data-aspect-ratio="1:1"
                className="flex flex-col items-start justify-start self-stretch overflow-hidden"
              >
                <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
              </div>
              <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                <div
                  data-like="off"
                  data-style="Thumbnail"
                  className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                >
                  <div className="outline-Icon-White absolute left-[2.99px] top-[3.99px] h-4 w-5 outline outline-2 outline-offset-[-1px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                제조사명
              </div>
              <div className="text-Text-Light-1 h-4 w-28 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                제품명이 들어갑니다 뒤에는 안보이게 처리
              </div>
              <div className="inline-flex h-5 w-28 items-center justify-start gap-1">
                <div className="text-Text-Highlight justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00%
                </div>
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00,000
                </div>
              </div>
            </div>
          </div>
          <div
            data-numberoff="true"
            data-saleoff="true"
            data-size="S"
            className="inline-flex w-28 flex-col items-start justify-start gap-2"
          >
            <div
              data-style="Heart"
              className="relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded"
            >
              <div
                data-aspect-ratio="1:1"
                className="flex flex-col items-start justify-start self-stretch overflow-hidden"
              >
                <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
              </div>
              <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                <div
                  data-like="off"
                  data-style="Thumbnail"
                  className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                >
                  <div className="outline-Icon-White absolute left-[2.99px] top-[3.99px] h-4 w-5 outline outline-2 outline-offset-[-1px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                제조사명
              </div>
              <div className="text-Text-Light-1 h-4 w-28 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                제품명이 들어갑니다 뒤에는 안보이게 처리
              </div>
              <div className="inline-flex h-5 w-28 items-center justify-start gap-1">
                <div className="text-Text-Highlight justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00%
                </div>
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00,000
                </div>
              </div>
            </div>
          </div>
          <div
            data-numberoff="true"
            data-saleoff="false"
            data-size="S"
            className="inline-flex w-28 flex-col items-start justify-start gap-2"
          >
            <div
              data-style="Heart"
              className="relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded"
            >
              <div
                data-aspect-ratio="1:1"
                className="flex flex-col items-start justify-start self-stretch overflow-hidden"
              >
                <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
              </div>
              <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                <div
                  data-like="off"
                  data-style="Thumbnail"
                  className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                >
                  <div className="outline-Icon-White absolute left-[2.99px] top-[3.99px] h-4 w-5 outline outline-2 outline-offset-[-1px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                제조사명
              </div>
              <div className="text-Text-Light-1 h-4 w-28 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                제품명이 들어갑니다 뒤에는 안보이게 처리
              </div>
              <div className="inline-flex h-5 w-28 items-center justify-start gap-1">
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00,000
                </div>
              </div>
            </div>
          </div>
          <div
            data-numberoff="true"
            data-saleoff="false"
            data-size="S"
            className="inline-flex w-28 flex-col items-start justify-start gap-2"
          >
            <div
              data-style="Heart"
              className="relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded"
            >
              <div
                data-aspect-ratio="1:1"
                className="flex flex-col items-start justify-start self-stretch overflow-hidden"
              >
                <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
              </div>
              <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                <div
                  data-like="off"
                  data-style="Thumbnail"
                  className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                >
                  <div className="outline-Icon-White absolute left-[2.99px] top-[3.99px] h-4 w-5 outline outline-2 outline-offset-[-1px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                제조사명
              </div>
              <div className="text-Text-Light-1 h-4 w-28 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                제품명이 들어갑니다 뒤에는 안보이게 처리
              </div>
              <div className="inline-flex h-5 w-28 items-center justify-start gap-1">
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00,000
                </div>
              </div>
            </div>
          </div>
          <div
            data-numberoff="true"
            data-saleoff="false"
            data-size="S"
            className="inline-flex w-28 flex-col items-start justify-start gap-2"
          >
            <div
              data-style="Heart"
              className="relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded"
            >
              <div
                data-aspect-ratio="1:1"
                className="flex flex-col items-start justify-start self-stretch overflow-hidden"
              >
                <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
              </div>
              <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                <div
                  data-like="off"
                  data-style="Thumbnail"
                  className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                >
                  <div className="outline-Icon-White absolute left-[2.99px] top-[3.99px] h-4 w-5 outline outline-2 outline-offset-[-1px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                제조사명
              </div>
              <div className="text-Text-Light-1 h-4 w-28 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                제품명이 들어갑니다 뒤에는 안보이게 처리
              </div>
              <div className="inline-flex h-5 w-28 items-center justify-start gap-1">
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00,000
                </div>
              </div>
            </div>
          </div>
          <div
            data-numberoff="true"
            data-saleoff="true"
            data-size="S"
            className="inline-flex w-28 flex-col items-start justify-start gap-2"
          >
            <div
              data-style="Heart"
              className="relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded"
            >
              <div
                data-aspect-ratio="1:1"
                className="flex flex-col items-start justify-start self-stretch overflow-hidden"
              >
                <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
              </div>
              <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                <div
                  data-like="off"
                  data-style="Thumbnail"
                  className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                >
                  <div className="outline-Icon-White absolute left-[2.99px] top-[3.99px] h-4 w-5 outline outline-2 outline-offset-[-1px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                제조사명
              </div>
              <div className="text-Text-Light-1 h-4 w-28 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                제품명이 들어갑니다 뒤에는 안보이게 처리
              </div>
              <div className="inline-flex h-5 w-28 items-center justify-start gap-1">
                <div className="text-Text-Highlight justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00%
                </div>
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                  00,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 inline-flex h-11 w-96 flex-col items-start justify-center px-5">
        <div className="inline-flex items-center justify-start self-stretch">
          <div className="text-Text-Black flex-1 justify-start font-['Pretendard'] text-base font-normal leading-snug">
            9:41
          </div>
          <div className="flex items-center justify-start gap-1.5">
            <div className="bg-Text-Black h-3 w-5" />
            <div className="bg-Text-Black h-3 w-4" />
            <div className="border-Text-Black h-3 w-6 rounded border opacity-30" />
            <div className="bg-Text-Black h-1 w-[1.33px] opacity-40" />
            <div className="bg-Text-Black h-2 w-5 rounded-sm" />
          </div>
        </div>
      </div>
      <div
        data-style="1BTN"
        className="absolute left-0 top-[727px] inline-flex w-96 flex-col items-start justify-start gap-2.5 overflow-hidden border-t-[0.40px] border-Line-Hard-1 bg-Fill-White px-5 pb-7 pt-3"
      >
        <div
          data-primary="2Info"
          className="bg-Fill-HighLight inline-flex items-center justify-between self-stretch rounded-lg px-5 py-2"
        >
          <div className="flex items-center justify-start gap-2">
            <div
              data-size="WhiteBg"
              className="inline-flex size-5 flex-col items-center justify-center rounded-xl bg-Fill-White px-1.5 py-px"
            >
              <div className="text-Text-Highlight justify-start text-center font-['Pretendard'] text-sm font-bold leading-tight">
                1
              </div>
            </div>
            <div className="text-Text-White justify-start font-['Pretendard'] text-base font-bold leading-normal">
              버튼명
            </div>
          </div>
          <div className="flex items-center justify-end gap-0.5">
            <div className="text-Text-White justify-start text-right font-['Pretendard'] text-xl font-bold leading-loose">
              000,000
            </div>
            <div className="text-Text-White justify-start text-right font-['Pretendard'] text-xl font-bold leading-loose">
              원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeStartPage;
