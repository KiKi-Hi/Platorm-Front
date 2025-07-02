function BookmarkPage() {
  return (
    <>
      <div className="relative h-[812px] w-96 overflow-hidden bg-white">
        <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start">
          <div
            data-cart="true"
            data-menu="true"
            data-search="false"
            data-style="NoLogo"
            className="inline-flex h-12 items-center justify-end gap-36 self-stretch px-5 py-3"
          >
            <div className="flex items-start justify-start gap-4">
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
          <div className="border-Line-Light-1 inline-flex items-center justify-start self-stretch border-b">
            <div
              data-selected="on"
              className="border-Line-HighLight flex flex-1 items-center justify-center border-b-2 bg-Fill-White px-5 py-2.5"
            >
              <div className="text-Text-Default-0 justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight">
                하우징
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                스위치
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                키캡
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                악세서리
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                케이스
              </div>
            </div>
          </div>
          <div
            data-chip1="true"
            data-chip2="true"
            data-chip3="true"
            data-divider="true"
            data-type="Edit"
            className="flex h-11 flex-col items-start justify-start self-stretch overflow-hidden bg-Fill-White px-5 py-2.5"
          >
            <div className="inline-flex w-80 items-center justify-between">
              <div className="flex items-center justify-start gap-1 py-0.5 pr-2">
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  전체
                </div>
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                  000
                </div>
              </div>
              <div
                data-icon="false"
                data-primary="Black"
                className="flex items-center justify-start"
              >
                <div className="text-Text-Default-0 justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                  편집
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex h-[548px] items-center justify-start gap-2.5 self-stretch px-5 py-3.5">
            <div
              data-btn="true"
              className="bg-Bg-ExtraLight-60%/60 inline-flex h-[520px] w-80 flex-col items-center justify-center gap-10"
            >
              <div className="flex flex-col items-start justify-start gap-0.5">
                <div className="text-Text-Default-0 w-80 justify-start text-center font-['Pretendard'] text-base font-semibold leading-normal">
                  북마크가 없어요
                </div>
                <div className="text-Text-Light-1 w-80 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                  하트를 눌러 북마크에 저장해보세요
                </div>
              </div>
              <div
                data-icon="true"
                data-primary="Black"
                className="inline-flex items-center justify-start gap-0.5"
              >
                <div className="text-Text-Default-0 justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                  아이템 보러가기
                </div>
                <div data-size="M" className="relative size-4 overflow-hidden">
                  <div className="outline-Icon-Default-0 absolute left-[6.75px] top-[4.50px] h-2 w-1 outline outline-[1.60px] outline-offset-[-0.80px]" />
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
          data-location="Customize"
          className="absolute left-0 top-[727px] inline-flex w-96 flex-col items-start justify-start gap-2.5 overflow-hidden border-t-[0.40px] border-Line-Hard-1 bg-Fill-White pb-7 pt-2"
        >
          <div className="inline-flex items-center justify-between self-stretch px-2">
            <div className="inline-flex flex-1 flex-col items-center justify-center">
              <div data-states="off" className="relative size-7 overflow-hidden">
                <div className="outline-Icon-ExtraLight-15 absolute left-[5.41px] top-[3.75px] h-6 w-5 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
              <div className="text-Text-ExtraLight-15 justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
                홈
              </div>
            </div>
            <div className="inline-flex flex-1 flex-col items-center justify-center">
              <div data-states="on" className="relative size-7 overflow-hidden">
                <div className="bg-Icon-Highlight50/20 outline-Icon-Highlight absolute left-[3.75px] top-[3.75px] size-6 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
              <div className="text-Text-Highlight justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
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
      </div>
      <div className="relative h-[812px] w-96 overflow-hidden bg-white">
        <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start">
          <div
            data-cart="true"
            data-menu="true"
            data-search="false"
            data-style="NoLogo"
            className="inline-flex h-12 items-center justify-end gap-36 self-stretch px-5 py-3"
          >
            <div className="flex items-start justify-start gap-4">
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
          <div className="border-Line-Light-1 inline-flex items-center justify-start self-stretch border-b">
            <div
              data-selected="on"
              className="border-Line-HighLight flex flex-1 items-center justify-center border-b-2 bg-Fill-White px-5 py-2.5"
            >
              <div className="text-Text-Default-0 justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight">
                하우징
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                스위치
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                키캡
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                악세서리
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                케이스
              </div>
            </div>
          </div>
          <div
            data-chip1="true"
            data-chip2="true"
            data-chip3="true"
            data-divider="true"
            data-type="Edit"
            className="flex h-11 flex-col items-start justify-start self-stretch overflow-hidden bg-Fill-White px-5 py-2.5"
          >
            <div className="inline-flex w-80 items-center justify-between">
              <div className="flex items-center justify-start gap-1 py-0.5 pr-2">
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  전체
                </div>
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                  000
                </div>
              </div>
              <div
                data-icon="false"
                data-primary="Black"
                className="flex items-center justify-start"
              >
                <div className="text-Text-Default-0 justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                  편집
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-96 flex-wrap content-center items-center justify-start gap-1.5 px-5 py-2">
            <div
              data-numberoff="false"
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
                    data-like="on"
                    data-style="Thumbnail"
                    className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                  >
                    <div className="bg-Icon-Highlight border-Icon-Highlight absolute left-[1.99px] top-[2.99px] size-5" />
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
              data-numberoff="false"
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
                    data-like="on"
                    data-style="Thumbnail"
                    className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                  >
                    <div className="bg-Icon-Highlight border-Icon-Highlight absolute left-[1.99px] top-[2.99px] size-5" />
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
              data-numberoff="false"
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
                    data-like="on"
                    data-style="Thumbnail"
                    className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                  >
                    <div className="bg-Icon-Highlight border-Icon-Highlight absolute left-[1.99px] top-[2.99px] size-5" />
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
              data-numberoff="false"
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
                    data-like="on"
                    data-style="Thumbnail"
                    className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                  >
                    <div className="bg-Icon-Highlight border-Icon-Highlight absolute left-[1.99px] top-[2.99px] size-5" />
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
              data-numberoff="false"
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
                    data-like="on"
                    data-style="Thumbnail"
                    className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                  >
                    <div className="bg-Icon-Highlight border-Icon-Highlight absolute left-[1.99px] top-[2.99px] size-5" />
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
              data-numberoff="false"
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
                    data-like="on"
                    data-style="Thumbnail"
                    className="absolute left-[77px] top-[66px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
                  >
                    <div className="bg-Icon-Highlight border-Icon-Highlight absolute left-[1.99px] top-[2.99px] size-5" />
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
          data-location="Customize"
          className="absolute left-0 top-[727px] inline-flex w-96 flex-col items-start justify-start gap-2.5 overflow-hidden border-t-[0.40px] border-Line-Hard-1 bg-Fill-White pb-7 pt-2"
        >
          <div className="inline-flex items-center justify-between self-stretch px-2">
            <div className="inline-flex flex-1 flex-col items-center justify-center">
              <div data-states="off" className="relative size-7 overflow-hidden">
                <div className="outline-Icon-ExtraLight-15 absolute left-[5.41px] top-[3.75px] h-6 w-5 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
              <div className="text-Text-ExtraLight-15 justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
                홈
              </div>
            </div>
            <div className="inline-flex flex-1 flex-col items-center justify-center">
              <div data-states="on" className="relative size-7 overflow-hidden">
                <div className="bg-Icon-Highlight50/20 outline-Icon-Highlight absolute left-[3.75px] top-[3.75px] size-6 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
              <div className="text-Text-Highlight justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
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
      </div>
      <div className="relative h-[812px] w-96 overflow-hidden bg-white">
        <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start">
          <div
            data-cart="true"
            data-menu="true"
            data-search="false"
            data-style="NoLogo"
            className="inline-flex h-12 items-center justify-end gap-36 self-stretch px-5 py-3"
          >
            <div className="flex items-start justify-start gap-4">
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
          <div className="border-Line-Light-1 inline-flex items-center justify-start self-stretch border-b">
            <div
              data-selected="on"
              className="border-Line-HighLight flex flex-1 items-center justify-center border-b-2 bg-Fill-White px-5 py-2.5"
            >
              <div className="text-Text-Default-0 justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight">
                하우징
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                스위치
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                키캡
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                악세서리
              </div>
            </div>
            <div
              data-selected="off"
              className="flex flex-1 items-center justify-center px-5 py-2.5"
            >
              <div className="text-Text-ExtraLight-15 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                케이스
              </div>
            </div>
          </div>
          <div
            data-chip1="true"
            data-chip2="true"
            data-chip3="true"
            data-divider="true"
            data-type="Edit"
            className="flex h-11 flex-col items-start justify-start self-stretch overflow-hidden bg-Fill-White px-5 py-2.5"
          >
            <div className="inline-flex w-80 items-center justify-between">
              <div className="flex items-center justify-start gap-1 py-0.5 pr-2">
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  전체
                </div>
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                  000
                </div>
              </div>
              <div
                data-icon="false"
                data-primary="Black"
                className="flex items-center justify-start"
              >
                <div className="text-Text-Default-0 justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                  편집
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex w-96 flex-wrap content-center items-center justify-start gap-1.5 px-5 py-2">
            <div
              data-numberoff="false"
              data-saleoff="true"
              data-size="S"
              className="inline-flex w-28 flex-col items-start justify-start gap-2"
            >
              <div
                data-style="ChackBox"
                className="outline-Primary-SemiHard relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded outline outline-2 outline-offset-[-2px]"
              >
                <div
                  data-aspect-ratio="1:1"
                  className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                >
                  <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                </div>
                <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                  <div
                    data-selected="on"
                    data-size="M"
                    className="absolute left-[77px] top-[6px] inline-flex items-center justify-start gap-2.5 p-[3px]"
                  >
                    <div className="bg-Primary-SemiHard inline-flex size-4 flex-col items-center justify-center gap-2.5 rounded-sm p-2.5">
                      <div className="bg-Icon-White h-2 w-3" />
                    </div>
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
              data-numberoff="false"
              data-saleoff="true"
              data-size="S"
              className="inline-flex w-28 flex-col items-start justify-start gap-2"
            >
              <div
                data-style="ChackBoxOff"
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
                    data-selected="off"
                    data-size="M"
                    className="absolute left-[77px] top-[6px] inline-flex items-center justify-start gap-2.5 p-[3px]"
                  >
                    <div className="border-Line-White size-4 rounded-sm border-2" />
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
              data-numberoff="false"
              data-saleoff="false"
              data-size="S"
              className="inline-flex w-28 flex-col items-start justify-start gap-2"
            >
              <div
                data-style="ChackBoxOff"
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
                    data-selected="off"
                    data-size="M"
                    className="absolute left-[77px] top-[6px] inline-flex items-center justify-start gap-2.5 p-[3px]"
                  >
                    <div className="border-Line-White size-4 rounded-sm border-2" />
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
              data-numberoff="false"
              data-saleoff="false"
              data-size="S"
              className="inline-flex w-28 flex-col items-start justify-start gap-2"
            >
              <div
                data-style="ChackBoxOff"
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
                    data-selected="off"
                    data-size="M"
                    className="absolute left-[77px] top-[6px] inline-flex items-center justify-start gap-2.5 p-[3px]"
                  >
                    <div className="border-Line-White size-4 rounded-sm border-2" />
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
              data-numberoff="false"
              data-saleoff="false"
              data-size="S"
              className="inline-flex w-28 flex-col items-start justify-start gap-2"
            >
              <div
                data-style="ChackBox"
                className="outline-Primary-SemiHard relative flex h-24 w-28 flex-col items-start justify-start overflow-hidden rounded outline outline-2 outline-offset-[-2px]"
              >
                <div
                  data-aspect-ratio="1:1"
                  className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                >
                  <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                </div>
                <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-24 w-28 overflow-hidden">
                  <div
                    data-selected="on"
                    data-size="M"
                    className="absolute left-[77px] top-[6px] inline-flex items-center justify-start gap-2.5 p-[3px]"
                  >
                    <div className="bg-Primary-SemiHard inline-flex size-4 flex-col items-center justify-center gap-2.5 rounded-sm p-2.5">
                      <div className="bg-Icon-White h-2 w-3" />
                    </div>
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
              data-numberoff="false"
              data-saleoff="true"
              data-size="S"
              className="inline-flex w-28 flex-col items-start justify-start gap-2"
            >
              <div
                data-style="ChackBoxOff"
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
                    data-selected="off"
                    data-size="M"
                    className="absolute left-[77px] top-[6px] inline-flex items-center justify-start gap-2.5 p-[3px]"
                  >
                    <div className="border-Line-White size-4 rounded-sm border-2" />
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
          data-location="Customize"
          className="absolute left-0 top-[727px] inline-flex w-96 flex-col items-start justify-start gap-2.5 overflow-hidden border-t-[0.40px] border-Line-Hard-1 bg-Fill-White pb-7 pt-2"
        >
          <div className="inline-flex items-center justify-between self-stretch px-2">
            <div className="inline-flex flex-1 flex-col items-center justify-center">
              <div data-states="off" className="relative size-7 overflow-hidden">
                <div className="outline-Icon-ExtraLight-15 absolute left-[5.41px] top-[3.75px] h-6 w-5 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
              <div className="text-Text-ExtraLight-15 justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
                홈
              </div>
            </div>
            <div className="inline-flex flex-1 flex-col items-center justify-center">
              <div data-states="on" className="relative size-7 overflow-hidden">
                <div className="bg-Icon-Highlight50/20 outline-Icon-Highlight absolute left-[3.75px] top-[3.75px] size-6 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
              <div className="text-Text-Highlight justify-start self-stretch text-center font-['Pretendard'] text-xs font-semibold leading-none">
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
      </div>
    </>
  );
}

export default BookmarkPage;
