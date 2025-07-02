function ProductDetailPage() {
  return (
    <div className="relative h-[1193px] w-96 overflow-hidden bg-white">
      <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start">
        <div
          data-cart="true"
          data-menu="true"
          data-search="true"
          data-style="Back"
          className="inline-flex items-center justify-between self-stretch px-5 py-3"
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
        <div className="flex flex-col items-start justify-start self-stretch">
          <div className="relative flex h-64 flex-col items-start justify-start self-stretch overflow-hidden">
            <div
              data-aspect-ratio="1:1"
              className="flex flex-col items-start justify-start self-stretch overflow-hidden"
            >
              <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
            </div>
            <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-64 w-96" />
          </div>
          <div
            data-pagecontrol="true"
            className="inline-flex items-center justify-center self-stretch py-2"
          >
            <div className="flex items-center justify-start gap-[3px]">
              <div className="bg-GrayScale-400 size-1 rounded-[10px]" />
              <div className="bg-GrayScale-700 h-1 w-8 rounded-[10px]" />
              <div className="bg-GrayScale-400 size-1 rounded-[10px]" />
              <div className="bg-GrayScale-400 size-1 rounded-[10px]" />
            </div>
          </div>
        </div>
        <div
          data-saleoff="true"
          className="flex flex-col items-start justify-start gap-6 self-stretch"
        >
          <div className="flex flex-col items-center justify-start gap-4 self-stretch px-5">
            <div className="flex flex-col items-start justify-start gap-4 self-stretch">
              <div className="flex flex-col items-start justify-start gap-2 self-stretch">
                <div className="inline-flex items-center justify-between self-stretch">
                  <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                    제조사
                  </div>
                  <div
                    data-like="off"
                    data-style="Detail"
                    className="relative size-7 overflow-hidden"
                  >
                    <div className="outline-Icon-ExtraLight-15 absolute left-[3.48px] top-[4.65px] size-5 outline outline-[1.60px] outline-offset-[-0.80px]" />
                  </div>
                </div>
                <div className="text-Text-Default-0 justify-start self-stretch font-['Pretendard'] text-base font-normal leading-normal">
                  제품명이 들어갑니다 여기는 얼마든지 늘어나도록 처리해요
                </div>
              </div>
              <div className="flex w-24 flex-col items-start justify-start">
                <div className="inline-flex items-center justify-start gap-1.5 self-stretch">
                  <div className="text-Text-Highlight justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                    00%
                  </div>
                  <div className="flex items-center justify-start">
                    <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-xs font-normal leading-none line-through">
                      00,000
                    </div>
                    <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                      원
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-start gap-0.5 self-stretch">
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xl font-extrabold leading-loose">
                    00,000
                  </div>
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xl font-extrabold leading-loose">
                    원
                  </div>
                </div>
              </div>
            </div>
            <div
              data-icon="true"
              className="bg-Fill-ExtraLight inline-flex h-9 w-80 items-center justify-between rounded-lg p-2"
            >
              <div className="flex items-center justify-start gap-1">
                <div className="relative size-4 overflow-hidden">
                  <div className="bg-Icon-ExtraLight-15 absolute left-px top-px size-3.5 rounded-full" />
                  <div className="outline-Icon-White absolute left-[5px] top-[5px] size-1.5 outline outline-[1.50px] outline-offset-[-0.75px]" />
                </div>
                <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  마일리지 정보
                </div>
              </div>
              <div data-size="M" className="relative size-4 overflow-hidden">
                <div className="outline-Icon-Light-1 absolute left-[6.75px] top-[4.50px] h-2 w-1 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
            </div>
          </div>
          <div className="border-Line-Default-0 inline-flex items-start justify-start self-stretch border-t-[0.50px] px-5 pb-4 pt-2.5">
            <div className="text-Text-ExtraLight-15 w-16 justify-start font-['Pretendard'] text-xs font-normal leading-none">
              배송
            </div>
            <div className="inline-flex w-32 flex-col items-start justify-start gap-1">
              <div className="inline-flex items-center justify-start gap-1">
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-semibold leading-tight">
                  일반배송
                </div>
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                  |
                </div>
                <div className="flex items-center justify-start">
                  <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                    0,000
                  </div>
                  <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                    원
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-1 self-stretch">
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-semibold leading-tight">
                  3일
                </div>
                <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  이내 발송 예정
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-bg="Fill"
          className="bg-Fill-ExtraLight-50%/50 border-Line-ExtraLight-15/60 flex flex-col items-start justify-start gap-2 self-stretch border-t-4 py-5"
        >
          <div
            data-textview="false"
            data-view="false"
            className="inline-flex items-center justify-between self-stretch pl-5 pr-3.5"
          >
            <div className="inline-flex flex-col items-start justify-start gap-0.5">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-medium leading-normal">
                헤더가 들어갑니다
              </div>
            </div>
          </div>
          <div className="inline-flex w-96 items-start justify-start gap-1.5 overflow-hidden pl-5">
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
        <div className="flex flex-col items-start justify-start gap-3 self-stretch px-5 pt-4">
          <div className="flex flex-col items-start justify-start gap-5 self-stretch">
            <div className="flex flex-col items-start justify-start gap-0.5 self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                상품 유의사항
              </div>
              <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                도착일은 배송지나 배송사 사정 등으로 변경 또는 지연될 수 있습니다.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-0.5">
              <div className="justify-start font-['Pretendard'] text-base font-medium leading-normal text-black">
                상세정보
              </div>
            </div>
          </div>
          <img className="relative h-96 self-stretch" src="https://placehold.co/335x356" />
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
        data-style="3BTN"
        className="absolute left-0 top-[1108px] inline-flex w-96 flex-col items-start justify-start gap-2.5 overflow-hidden border-t-[0.40px] border-Line-Hard-1 bg-Fill-White px-5 pb-7 pt-3"
      >
        <div className="inline-flex items-center justify-start gap-4 self-stretch">
          <div className="flex items-center justify-start gap-4">
            <div data-like="off" data-style="Detail" className="relative size-7 overflow-hidden">
              <div className="outline-Icon-ExtraLight-15 absolute left-[3.48px] top-[4.65px] size-5 outline outline-[1.60px] outline-offset-[-0.80px]" />
            </div>
            <div className="outline-Line-Default-0 h-5 w-0 outline outline-1 outline-offset-[-0.50px]" />
            <div
              data-role="Assistive"
              data-size="L"
              className="flex items-center justify-start gap-2.5"
            >
              <div className="relative size-6 overflow-hidden">
                <div className="outline-Icon-ExtraLight-15 absolute left-[5px] top-[3px] h-4 w-3.5 outline outline-[1.60px] outline-offset-[-0.80px]" />
              </div>
            </div>
          </div>
          <div
            data-primary="Default"
            className="bg-Fill-HighLight flex flex-1 items-center justify-center rounded-lg px-5 py-2"
          >
            <div className="text-Text-White justify-start font-['Pretendard'] text-xl font-bold leading-loose">
              구매하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
