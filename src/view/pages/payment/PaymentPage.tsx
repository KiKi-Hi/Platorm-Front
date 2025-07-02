function PaymentPage() {
  return (
    <div className="relative h-[1435px] w-96 overflow-hidden bg-white">
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
        <div className="inline-flex w-96 items-center justify-start gap-2.5 px-5 pb-0.5 pt-5">
          <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
            배송 정보
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2.5 self-stretch px-5 pt-5">
          <div className="border-Line-ExtraHard-15 flex flex-col items-start justify-start gap-5 border-b-2 pb-7">
            <div className="inline-flex h-10 w-80 items-center justify-start gap-4">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                수령인
              </div>
              <div
                data-active="Default"
                data-size="M"
                className="outline-Line-Light-1 flex h-10 flex-1 items-center justify-start gap-2.5 rounded-lg bg-Fill-White p-3 outline outline-2 outline-offset-[-2px]"
              >
                <div className="text-Text-GuideText justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                  이름
                </div>
              </div>
            </div>
            <div className="inline-flex w-80 items-start justify-start gap-4">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                주소지
              </div>
              <div className="inline-flex flex-1 flex-col items-start justify-center gap-3">
                <div className="inline-flex items-center justify-start gap-2 self-stretch">
                  <div
                    data-active="Default"
                    data-size="M"
                    className="outline-Line-Light-1 flex h-10 flex-1 items-center justify-start gap-2.5 rounded-lg bg-Fill-White p-3 outline outline-2 outline-offset-[-2px]"
                  >
                    <div className="text-Text-GuideText justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                      우편번호
                    </div>
                  </div>
                  <div
                    data-property-1="Default"
                    className="bg-Fill-Light flex h-10 items-center justify-start gap-11 rounded-lg px-3 py-2"
                  >
                    <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      우편번호 찾기
                    </div>
                  </div>
                </div>
                <div
                  data-active="Default"
                  data-size="M"
                  className="outline-Line-Light-1 inline-flex h-10 items-center justify-start gap-2.5 self-stretch rounded-lg bg-Fill-White p-3 outline outline-2 outline-offset-[-2px]"
                >
                  <div className="text-Text-GuideText justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                    주소지
                  </div>
                </div>
                <div
                  data-active="Default"
                  data-size="M"
                  className="outline-Line-Light-1 inline-flex h-10 items-center justify-start gap-2.5 self-stretch rounded-lg bg-Fill-White p-3 outline outline-2 outline-offset-[-2px]"
                >
                  <div className="text-Text-GuideText justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                    상세 주소
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex h-10 w-80 items-center justify-start gap-4">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                연락처
              </div>
              <div className="flex flex-1 items-center justify-start gap-0.5">
                <div
                  data-active="Default"
                  data-size="M"
                  className="outline-Line-Light-1 flex h-10 flex-1 items-center justify-center gap-2.5 rounded-lg bg-Fill-White p-3 outline outline-2 outline-offset-[-2px]"
                >
                  <div className="text-Text-GuideText justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                    010
                  </div>
                </div>
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                  -
                </div>
                <div
                  data-active="Default"
                  data-size="M"
                  className="outline-Line-Light-1 flex h-10 flex-1 items-center justify-center gap-2.5 rounded-lg bg-Fill-White p-3 outline outline-2 outline-offset-[-2px]"
                >
                  <div className="text-Text-GuideText justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                    0000
                  </div>
                </div>
                <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                  -
                </div>
                <div
                  data-active="Default"
                  data-size="M"
                  className="outline-Line-Light-1 flex h-10 flex-1 items-center justify-center gap-2.5 rounded-lg bg-Fill-White p-3 outline outline-2 outline-offset-[-2px]"
                >
                  <div className="text-Text-GuideText justify-start font-['Pretendard'] text-base font-semibold leading-normal">
                    0000
                  </div>
                </div>
              </div>
            </div>
            <div
              data-property-1="Black"
              className="bg-Fill-ExtraHard inline-flex h-10 w-80 items-center justify-center gap-11 rounded-lg px-3 py-2"
            >
              <div className="text-Text-White justify-start font-['Pretendard'] text-sm font-semibold leading-tight">
                저장하기
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex w-96 items-center justify-start gap-2.5 px-5 pb-0.5 pt-5">
          <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
            주문 상품
          </div>
        </div>
        <div className="flex w-96 flex-col items-start justify-start px-5">
          <div
            data-divider="true"
            data-option2off="true"
            data-property-1="Line"
            className="border-Line-ExtraLight-15/60 flex w-80 flex-col items-start justify-start gap-5 border-b py-5"
          >
            <div className="flex flex-col items-start justify-start gap-1 self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                제조사
              </div>
              <div className="inline-flex h-24 items-start justify-start gap-5 self-stretch rounded-lg px-0.5 py-3">
                <div className="inline-flex w-60 flex-col items-start justify-start gap-1">
                  <div className="text-Text-Default-0 justify-start self-stretch font-['Pretendard'] text-base font-bold leading-normal">
                    제품명이 들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요
                  </div>
                  <div className="inline-flex items-center justify-start gap-1">
                    <div className="flex items-center justify-start">
                      <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none line-through">
                        00,000
                      </div>
                      <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                        원
                      </div>
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                      배송 3,000원
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-start gap-1">
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      옵션명
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      /
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      수량 1개
                    </div>
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
            data-property-1="End"
            className="border-Line-ExtraHard-15 flex w-80 flex-col items-start justify-start gap-5 border-b-2 py-5"
          >
            <div className="flex flex-col items-start justify-start gap-1 self-stretch">
              <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
                제조사
              </div>
              <div className="inline-flex h-24 items-start justify-start gap-5 self-stretch rounded-lg px-0.5 py-3">
                <div className="inline-flex w-60 flex-col items-start justify-start gap-1">
                  <div className="text-Text-Default-0 justify-start self-stretch font-['Pretendard'] text-base font-bold leading-normal">
                    제품명이 들어갑니다 두줄 이상 넘어가면 이렇게 처리해주세요
                  </div>
                  <div className="inline-flex items-center justify-start gap-1">
                    <div className="flex items-center justify-start">
                      <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none line-through">
                        00,000
                      </div>
                      <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                        원
                      </div>
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                      배송 3,000원
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-start gap-1">
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      옵션명
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      /
                    </div>
                    <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-sm font-medium leading-tight">
                      수량 1개
                    </div>
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
        <div className="inline-flex w-96 items-center justify-start gap-2.5 px-5 pb-0.5 pt-5">
          <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-bold leading-normal">
            결제 방법
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-3 self-stretch px-5 py-3">
          <div
            data-payment="true"
            data-selected="on"
            data-type="RadioButton"
            className="inline-flex items-center justify-start gap-2"
          >
            <div data-selected="on" className="relative size-6">
              <div className="bg-Primary-SemiHard absolute left-[2px] top-[2px] size-5" />
            </div>
            <div className="relative h-4 w-20 overflow-hidden">
              <div className="absolute left-[19.67px] top-[1.98px] h-3 w-2 bg-gray-800" />
              <div className="absolute left-[27.29px] top-[4.58px] h-2 w-2.5 bg-gray-800" />
              <div className="absolute left-[37.24px] top-[4.58px] size-2 bg-gray-800" />
              <div className="absolute left-[45.53px] top-[4.58px] size-2 bg-gray-800" />
              <div className="absolute left-[66.14px] top-[4.67px] size-2 bg-gray-800" />
              <div className="absolute left-[75.49px] top-[4.75px] h-3 w-2 bg-gray-800" />
              <div className="absolute left-[56.66px] top-[4.67px] h-3 w-2 bg-gray-800" />
              <img className="absolute left-0 top-0 size-4" src="https://placehold.co/18x16" />
            </div>
            <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-normal leading-normal">
              토스페이
            </div>
          </div>
          <div
            data-payment="false"
            data-selected="off"
            data-type="RadioButton"
            className="inline-flex items-center justify-start gap-2"
          >
            <div data-selected="off" className="relative size-6">
              <div className="bg-Line-Default-0 absolute left-[2px] top-[2px] size-5" />
            </div>
            <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-normal leading-normal">
              계좌 간편결제
            </div>
          </div>
          <div
            data-payment="false"
            data-selected="off"
            data-type="RadioButton"
            className="inline-flex items-center justify-start gap-2"
          >
            <div data-selected="off" className="relative size-6">
              <div className="bg-Line-Default-0 absolute left-[2px] top-[2px] size-5" />
            </div>
            <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-normal leading-normal">
              일반결제
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
        <div className="flex flex-col items-start justify-start gap-2.5 self-stretch px-5 pb-11 pt-3">
          <div
            data-primary="Default"
            className="bg-Fill-HighLight inline-flex items-center justify-center self-stretch rounded-lg px-5 py-2"
          >
            <div className="text-Text-White justify-start font-['Pretendard'] text-xl font-bold leading-loose">
              결제하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
