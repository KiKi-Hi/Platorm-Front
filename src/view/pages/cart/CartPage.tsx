function CartPage() {
  return (
    <>
      <div className="relative h-[812px] w-96 overflow-hidden bg-white">
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
        <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start">
          <div
            data-cart="false"
            data-menu="true"
            data-search="false"
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
                  <div className="outline-Icon-Default-0 absolute left-[4px] top-[6px] h-3 w-4 outline outline-[1.60px] outline-offset-[-0.80px]" />
                </div>
              </div>
            </div>
          </div>
          <div
            data-chip1="true"
            data-chip2="true"
            data-chip3="true"
            data-divider="true"
            data-type="EditCart"
            className="flex flex-col items-start justify-start self-stretch overflow-hidden bg-Fill-White px-5 py-2.5"
          >
            <div className="inline-flex h-6 w-80 items-center justify-between">
              <div className="flex items-center justify-start gap-1 pr-2">
                <div
                  data-selected="off"
                  data-size="M"
                  className="flex items-center justify-start gap-2.5 p-[3px]"
                >
                  <div className="border-Line-Light-1 size-4 rounded-sm border-2" />
                </div>
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  전체선택
                </div>
              </div>
              <div
                data-icon="false"
                data-primary="Black"
                className="flex items-center justify-start"
              >
                <div className="text-Text-Default-0 justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                  선택삭제
                </div>
              </div>
            </div>
            <div className="border-Line-ExtraHard-15 relative h-3 w-80 border-b-2" />
          </div>
          <div className="inline-flex items-center justify-start gap-2.5 self-stretch px-5 py-3.5">
            <div
              data-btn="false"
              className="bg-Bg-ExtraLight-60%/60 inline-flex size-80 flex-col items-center justify-center gap-10"
            >
              <div className="flex flex-col items-start justify-start gap-0.5">
                <div className="text-Text-Default-0 w-80 justify-start text-center font-['Pretendard'] text-base font-semibold leading-normal">
                  장바구니에 담긴 상품이 없어요
                </div>
                <div className="text-Text-Light-1 w-80 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                  원하는 상품을 담아보세요
                </div>
              </div>
            </div>
          </div>
          <div data-bg="Default" className="flex w-96 flex-col items-start justify-start gap-2">
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
        </div>
      </div>
      <div className="relative h-[1241px] w-96 overflow-hidden bg-white">
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
        <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start">
          <div
            data-cart="false"
            data-menu="false"
            data-search="false"
            data-style="Back"
            className="inline-flex h-12 items-center justify-between self-stretch px-5 py-3"
          >
            <div className="relative size-5 overflow-hidden">
              <div className="outline-Icon-Default-0 absolute left-px top-[4px] h-3.5 w-5 outline outline-2 outline-offset-[-1px]" />
            </div>
            <div className="flex items-start justify-start gap-4" />
          </div>
          <div
            data-chip1="true"
            data-chip2="true"
            data-chip3="true"
            data-divider="true"
            data-type="EditCart"
            className="flex flex-col items-start justify-start self-stretch overflow-hidden bg-Fill-White px-5 py-2.5"
          >
            <div className="inline-flex h-6 w-80 items-center justify-between">
              <div className="flex items-center justify-start gap-1 pr-2">
                <div
                  data-selected="off"
                  data-size="M"
                  className="flex items-center justify-start gap-2.5 p-[3px]"
                >
                  <div className="border-Line-Light-1 size-4 rounded-sm border-2" />
                </div>
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                  전체선택
                </div>
              </div>
              <div
                data-icon="false"
                data-primary="Black"
                className="flex items-center justify-start"
              >
                <div className="text-Text-Default-0 justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                  선택삭제
                </div>
              </div>
            </div>
            <div className="border-Line-ExtraHard-15 relative h-3 w-80 border-b-2" />
          </div>
          <div className="flex w-96 flex-col items-start justify-start px-5">
            <div
              data-divider="true"
              data-option2off="true"
              data-type="Line"
              className="border-Line-ExtraLight-15/60 flex w-80 flex-col items-start justify-start gap-5 border-b py-5"
            >
              <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                <div className="inline-flex w-80 items-center justify-between">
                  <div className="flex items-center justify-start gap-3">
                    <div
                      data-selected="off"
                      data-size="M"
                      className="flex items-center justify-start gap-2.5 p-[3px]"
                    >
                      <div className="border-Line-Light-1 size-4 rounded-sm border-2" />
                    </div>
                    <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                      제조사
                    </div>
                  </div>
                  <div
                    data-role="Assistive"
                    data-size="L"
                    className="flex items-center justify-start gap-2.5"
                  >
                    <div className="relative size-6 overflow-hidden">
                      <div className="outline-Icon-ExtraLight-15 absolute left-[6px] top-[6px] size-3 outline outline-[1.60px] outline-offset-[-0.80px]" />
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-24 items-start justify-start gap-5 self-stretch rounded-lg px-0.5 py-3">
                  <div className="inline-flex w-60 flex-col items-start justify-start gap-1">
                    <div className="text-Text-Default-0 justify-start self-stretch font-['Pretendard'] text-base font-bold leading-normal">
                      제품명이 들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요
                    </div>
                    <div className="inline-flex items-center justify-start gap-1">
                      <div className="text-Text-Highlight justify-start font-['Pretendard'] text-sm font-semibold leading-tight">
                        00%
                      </div>
                      <div className="flex items-center justify-start">
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none line-through">
                          00,000
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          원
                        </div>
                      </div>
                      <div className="flex items-center justify-start">
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          00,000
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          원
                        </div>
                      </div>
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      배송 3,000원
                    </div>
                  </div>
                  <div className="relative inline-flex size-16 flex-col items-start justify-start overflow-hidden rounded">
                    <div
                      data-aspect-ratio="1:1"
                      className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                    >
                      <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                    </div>
                    <div className="bg-Fill-ExtraLight absolute left-0 top-0 size-16" />
                  </div>
                </div>
                <div className="bg-Fill-ExtraLight inline-flex w-80 items-center justify-between rounded-lg px-2 py-1.5">
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                    옵션명
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[12px] h-0 w-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                    <div className="outline-Line-Light-1 inline-flex h-7 flex-col items-center justify-center rounded bg-Fill-White px-3 py-2.5 outline outline-1 outline-offset-[-1px]">
                      <div className="justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight text-black">
                        1
                      </div>
                    </div>
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[5px] size-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-Fill-ExtraLight inline-flex w-80 items-center justify-between rounded-lg px-2 py-1.5">
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                    옵션명
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[12px] h-0 w-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                    <div className="outline-Line-Light-1 inline-flex h-7 flex-col items-center justify-center rounded bg-Fill-White px-3 py-2.5 outline outline-1 outline-offset-[-1px]">
                      <div className="justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight text-black">
                        1
                      </div>
                    </div>
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[5px] size-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-between self-stretch">
                <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                  상품 금액
                </div>
                <div className="flex h-6 items-center justify-end gap-0.5">
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                    00,000
                  </div>
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                    원
                  </div>
                </div>
              </div>
            </div>
            <div
              data-divider="true"
              data-option2off="true"
              data-type="End"
              className="flex w-80 flex-col items-start justify-start gap-5 py-5"
            >
              <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                <div className="inline-flex w-80 items-center justify-between">
                  <div className="flex items-center justify-start gap-3">
                    <div
                      data-selected="off"
                      data-size="M"
                      className="flex items-center justify-start gap-2.5 p-[3px]"
                    >
                      <div className="border-Line-Light-1 size-4 rounded-sm border-2" />
                    </div>
                    <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                      제조사
                    </div>
                  </div>
                  <div
                    data-role="Assistive"
                    data-size="L"
                    className="flex items-center justify-start gap-2.5"
                  >
                    <div className="relative size-6 overflow-hidden">
                      <div className="outline-Icon-ExtraLight-15 absolute left-[6px] top-[6px] size-3 outline outline-[1.60px] outline-offset-[-0.80px]" />
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-24 items-start justify-start gap-5 self-stretch rounded-lg px-0.5 py-3">
                  <div className="inline-flex w-60 flex-col items-start justify-start gap-1">
                    <div className="text-Text-Default-0 justify-start self-stretch font-['Pretendard'] text-base font-bold leading-normal">
                      제품명이 들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요
                    </div>
                    <div className="inline-flex items-center justify-start gap-1">
                      <div className="text-Text-Highlight justify-start font-['Pretendard'] text-sm font-semibold leading-tight">
                        00%
                      </div>
                      <div className="flex items-center justify-start">
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none line-through">
                          00,000
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          원
                        </div>
                      </div>
                      <div className="flex items-center justify-start">
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          00,000
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          원
                        </div>
                      </div>
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      배송 3,000원
                    </div>
                  </div>
                  <div className="relative inline-flex size-16 flex-col items-start justify-start overflow-hidden rounded">
                    <div
                      data-aspect-ratio="1:1"
                      className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                    >
                      <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                    </div>
                    <div className="bg-Fill-ExtraLight absolute left-0 top-0 size-16" />
                  </div>
                </div>
                <div className="bg-Fill-ExtraLight inline-flex w-80 items-center justify-between rounded-lg px-2 py-1.5">
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                    옵션명
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[12px] h-0 w-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                    <div className="outline-Line-Light-1 inline-flex h-7 flex-col items-center justify-center rounded bg-Fill-White px-3 py-2.5 outline outline-1 outline-offset-[-1px]">
                      <div className="justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight text-black">
                        1
                      </div>
                    </div>
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[5px] size-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-Fill-ExtraLight inline-flex w-80 items-center justify-between rounded-lg px-2 py-1.5">
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-normal leading-tight">
                    옵션명
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[12px] h-0 w-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                    <div className="outline-Line-Light-1 inline-flex h-7 flex-col items-center justify-center rounded bg-Fill-White px-3 py-2.5 outline outline-1 outline-offset-[-1px]">
                      <div className="justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight text-black">
                        1
                      </div>
                    </div>
                    <div
                      data-role="Default"
                      data-size="L"
                      className="flex items-center justify-start gap-2.5"
                    >
                      <div className="relative size-6 overflow-hidden">
                        <div className="outline-Icon-Default-0 absolute left-[5px] top-[5px] size-3.5 outline outline-2 outline-offset-[-1px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-between self-stretch">
                <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                  상품 금액
                </div>
                <div className="flex h-6 items-center justify-end gap-0.5">
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                    00,000
                  </div>
                  <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                    원
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5 px-5 py-6">
            <div className="border-Icon-Default-0 flex w-80 flex-col items-start justify-start gap-3 border-t-2 pt-1.5">
              <div className="border-Line-Light-1 flex flex-col items-start justify-start gap-1 self-stretch border-b py-3">
                <div className="inline-flex h-6 items-center justify-between self-stretch">
                  <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                    선택 상품 금액
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-Text-Light-1 justify-start text-right font-['Pretendard'] text-sm font-medium leading-tight">
                      00,000
                    </div>
                    <div className="text-Text-Light-1 justify-start text-right font-['Pretendard'] text-sm font-medium leading-tight">
                      원
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-6 items-center justify-between self-stretch">
                  <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                    상품 할인
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-Text-Light-1 justify-start text-right font-['Pretendard'] text-sm font-medium leading-tight">
                      -
                    </div>
                    <div className="text-Text-Light-1 justify-start text-right font-['Pretendard'] text-sm font-medium leading-tight">
                      00,000
                    </div>
                    <div className="text-Text-Light-1 justify-start text-right font-['Pretendard'] text-sm font-medium leading-tight">
                      원
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-6 items-center justify-between self-stretch">
                  <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                    배송비
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="text-Text-Light-1 justify-start text-right font-['Pretendard'] text-sm font-medium leading-tight">
                      00,000
                    </div>
                    <div className="text-Text-Light-1 justify-start text-right font-['Pretendard'] text-sm font-medium leading-tight">
                      원
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-start justify-between self-stretch">
                <div className="text-Text-Default-0 justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                  최종 결제금액
                </div>
                <div className="flex items-center justify-start">
                  <div className="text-Text-Highlight justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                    000,000
                  </div>
                  <div className="text-Text-Highlight justify-start text-right font-['Pretendard'] text-base font-bold leading-normal">
                    원
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-bg="Fill"
            className="bg-Fill-ExtraLight-50%/50 border-Line-ExtraLight-15/60 flex w-96 flex-col items-start justify-start gap-2 border-t-4 py-5"
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
        </div>
        <div
          data-style="1BTN"
          className="absolute left-0 top-[1156px] inline-flex w-96 flex-col items-start justify-start gap-2.5 overflow-hidden border-t-[0.40px] border-Line-Hard-1 bg-Fill-White px-5 pb-7 pt-3"
        >
          <div
            data-primary="Default"
            className="bg-Fill-HighLight inline-flex items-center justify-center self-stretch rounded-lg px-5 py-2"
          >
            <div className="text-Text-White justify-start font-['Pretendard'] text-xl font-bold leading-loose">
              주문하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
