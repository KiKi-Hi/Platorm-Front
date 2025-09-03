const CustomizeMainPage = () => {
  return (
    <>
      <div className="relative h-[812px] w-96 overflow-hidden bg-white">
        <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start gap-7">
          <div
            data-cart="true"
            data-menu="true"
            data-search="true"
            data-style="Default"
            className="inline-flex h-12 items-center justify-between self-stretch px-5 py-3"
          >
            <div className="relative h-5 w-20">
              <div className="bg-Icon-Default-0 absolute left-[70.40px] top-0 h-5 w-1" />
              <div className="bg-Icon-Default-0 absolute left-[51.35px] top-[1.21px] h-5 w-4" />
              <div className="bg-Icon-Default-0 absolute left-[44.35px] top-0 h-5 w-1" />
              <div className="bg-Icon-Default-0 absolute left-[25.68px] top-[1.21px] h-5 w-4" />
              <div className="bg-Icon-Default-0 absolute left-[18.68px] top-0 h-5 w-1" />
              <div className="bg-Icon-Default-0 absolute left-0 top-[1.21px] h-5 w-4" />
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
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            <div
              data-textview="true"
              data-view="false"
              className="inline-flex items-center justify-between self-stretch pl-5 pr-3.5"
            >
              <div className="inline-flex flex-col items-start justify-start gap-0.5">
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-medium leading-normal">
                  커스텀 시작하기
                </div>
                <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-medium leading-none">
                  하나하나 조립하는 나만의 키보드
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2 self-stretch overflow-hidden pl-5">
              <div
                data-badge="true"
                data-state="Start"
                className="inline-flex w-36 flex-col items-start justify-start gap-2"
              >
                <div className="relative flex h-28 flex-col items-start justify-start self-stretch overflow-hidden rounded">
                  <div
                    data-aspect-ratio="1:1"
                    className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                  >
                    <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                  </div>
                  <img
                    className="absolute left-0 top-0 h-28 w-36"
                    src="https://placehold.co/150x112"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="flex flex-col items-start justify-start self-stretch">
                    <div className="inline-flex items-center justify-start gap-1.5">
                      <div className="relative h-3.5 w-6 overflow-hidden">
                        <div className="bg-Icon-Default-0 absolute left-0 top-0 h-3.5 w-6" />
                        <div className="bg-Icon-White absolute left-[4px] top-[4px] h-1.5 w-4" />
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        104/104 풀배열
                      </div>
                    </div>
                    <div className="text-Text-Light-1 h-4 justify-start self-stretch font-['Pretendard'] text-xs font-normal leading-none">
                      가장 기본적인 배열의 키보드
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-0.5">
                    <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                      시작하기
                    </div>
                    <div data-size="S" className="relative size-3 overflow-hidden">
                      <div className="outline-Icon-ExtraLight-15 absolute left-[4.50px] top-[3px] h-1.5 w-[3px] outline outline-1 outline-offset-[-0.50px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-badge="true"
                data-state="Disabled"
                className="inline-flex w-36 flex-col items-start justify-start gap-2"
              >
                <div className="relative flex h-28 flex-col items-start justify-start self-stretch overflow-hidden rounded">
                  <div
                    data-aspect-ratio="1:1"
                    className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                  >
                    <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                  </div>
                  <img
                    className="absolute left-0 top-0 h-28 w-36"
                    src="https://placehold.co/150x112"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="flex flex-col items-start justify-start self-stretch">
                    <div className="inline-flex items-center justify-start gap-1.5">
                      <div className="relative h-3.5 w-6 overflow-hidden">
                        <div className="bg-Icon-Default-0 absolute left-0 top-0 h-3.5 w-6" />
                        <div className="bg-Icon-White absolute left-[4px] top-[4px] h-1.5 w-4" />
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        텐키리스
                      </div>
                    </div>
                    <div className="text-Text-Light-1 h-4 justify-start self-stretch font-['Pretendard'] text-xs font-normal leading-none">
                      넘버패드 없이 가벼운 키보드
                    </div>
                  </div>
                  <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                    준비중
                  </div>
                </div>
              </div>
              <div
                data-badge="true"
                data-state="Disabled"
                className="inline-flex w-36 flex-col items-start justify-start gap-2"
              >
                <div className="relative flex h-28 flex-col items-start justify-start self-stretch overflow-hidden rounded">
                  <div
                    data-aspect-ratio="1:1"
                    className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                  >
                    <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                  </div>
                  <img
                    className="absolute left-0 top-0 h-28 w-36"
                    src="https://placehold.co/150x112"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="flex flex-col items-start justify-start self-stretch">
                    <div className="inline-flex items-center justify-start gap-1.5">
                      <div className="relative h-3.5 w-6 overflow-hidden">
                        <div className="bg-Icon-Default-0 absolute left-0 top-0 h-3.5 w-6" />
                        <div className="bg-Icon-White absolute left-[4px] top-[4px] h-1.5 w-4" />
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        75배열
                      </div>
                    </div>
                    <div className="text-Text-Light-1 h-4 justify-start self-stretch font-['Pretendard'] text-xs font-normal leading-none">
                      컴팩트한 사이즈의 깔끔함
                    </div>
                  </div>
                  <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                    준비중
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start self-stretch px-5">
            <div className="border-Line-Light-1 inline-flex h-10 items-center justify-start self-stretch border-b">
              <div
                data-selected="on"
                className="border-Line-HighLight flex w-32 items-center justify-center border-b-2 bg-Fill-White px-5 py-2.5"
              >
                <div className="text-Text-Default-0 justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight">
                  나만의 키보드
                </div>
              </div>
            </div>
            <div
              data-btn="false"
              className="bg-Bg-ExtraLight-60%/60 flex h-96 flex-col items-center justify-center gap-10 self-stretch"
            >
              <div className="flex flex-col items-start justify-start gap-0.5">
                <div className="text-Text-Default-0 w-80 justify-start text-center font-['Pretendard'] text-base font-semibold leading-normal">
                  생성된 키보드가 없어요
                </div>
                <div className="text-Text-Light-1 w-80 justify-start text-center font-['Pretendard'] text-sm font-normal leading-tight">
                  커스텀으로 나만의 키보드를 만들어보세요
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
        <div className="absolute left-0 top-[44px] inline-flex w-96 flex-col items-start justify-start gap-7">
          <div
            data-cart="true"
            data-menu="true"
            data-search="true"
            data-style="Default"
            className="inline-flex h-12 items-center justify-between self-stretch px-5 py-3"
          >
            <div className="relative h-5 w-20">
              <div className="bg-Icon-Default-0 absolute left-[70.40px] top-0 h-5 w-1" />
              <div className="bg-Icon-Default-0 absolute left-[51.35px] top-[1.21px] h-5 w-4" />
              <div className="bg-Icon-Default-0 absolute left-[44.35px] top-0 h-5 w-1" />
              <div className="bg-Icon-Default-0 absolute left-[25.68px] top-[1.21px] h-5 w-4" />
              <div className="bg-Icon-Default-0 absolute left-[18.68px] top-0 h-5 w-1" />
              <div className="bg-Icon-Default-0 absolute left-0 top-[1.21px] h-5 w-4" />
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
          <div className="flex flex-col items-start justify-start gap-2 self-stretch">
            <div
              data-textview="true"
              data-view="false"
              className="inline-flex items-center justify-between self-stretch pl-5 pr-3.5"
            >
              <div className="inline-flex flex-col items-start justify-start gap-0.5">
                <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-base font-medium leading-normal">
                  커스텀 시작하기
                </div>
                <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-medium leading-none">
                  하나하나 조립하는 나만의 키보드
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2 self-stretch overflow-hidden pl-5">
              <div
                data-badge="true"
                data-state="Start"
                className="inline-flex w-36 flex-col items-start justify-start gap-2"
              >
                <div className="relative flex h-28 flex-col items-start justify-start self-stretch overflow-hidden rounded">
                  <div
                    data-aspect-ratio="1:1"
                    className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                  >
                    <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                  </div>
                  <img
                    className="absolute left-0 top-0 h-28 w-36"
                    src="https://placehold.co/150x112"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="flex flex-col items-start justify-start self-stretch">
                    <div className="inline-flex items-center justify-start gap-1.5">
                      <div className="relative h-3.5 w-6 overflow-hidden">
                        <div className="bg-Icon-Default-0 absolute left-0 top-0 h-3.5 w-6" />
                        <div className="bg-Icon-White absolute left-[4px] top-[4px] h-1.5 w-4" />
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        104/104 풀배열
                      </div>
                    </div>
                    <div className="text-Text-Light-1 h-4 justify-start self-stretch font-['Pretendard'] text-xs font-normal leading-none">
                      가장 기본적인 배열의 키보드
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-start gap-0.5">
                    <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                      시작하기
                    </div>
                    <div data-size="S" className="relative size-3 overflow-hidden">
                      <div className="outline-Icon-ExtraLight-15 absolute left-[4.50px] top-[3px] h-1.5 w-[3px] outline outline-1 outline-offset-[-0.50px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-badge="true"
                data-state="Disabled"
                className="inline-flex w-36 flex-col items-start justify-start gap-2"
              >
                <div className="relative flex h-28 flex-col items-start justify-start self-stretch overflow-hidden rounded">
                  <div
                    data-aspect-ratio="1:1"
                    className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                  >
                    <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                  </div>
                  <img
                    className="absolute left-0 top-0 h-28 w-36"
                    src="https://placehold.co/150x112"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="flex flex-col items-start justify-start self-stretch">
                    <div className="inline-flex items-center justify-start gap-1.5">
                      <div className="relative h-3.5 w-6 overflow-hidden">
                        <div className="bg-Icon-Default-0 absolute left-0 top-0 h-3.5 w-6" />
                        <div className="bg-Icon-White absolute left-[4px] top-[4px] h-1.5 w-4" />
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        텐키리스
                      </div>
                    </div>
                    <div className="text-Text-Light-1 h-4 justify-start self-stretch font-['Pretendard'] text-xs font-normal leading-none">
                      넘버패드 없이 가벼운 키보드
                    </div>
                  </div>
                  <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                    준비중
                  </div>
                </div>
              </div>
              <div
                data-badge="true"
                data-state="Disabled"
                className="inline-flex w-36 flex-col items-start justify-start gap-2"
              >
                <div className="relative flex h-28 flex-col items-start justify-start self-stretch overflow-hidden rounded">
                  <div
                    data-aspect-ratio="1:1"
                    className="flex flex-col items-start justify-start self-stretch overflow-hidden"
                  >
                    <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
                  </div>
                  <img
                    className="absolute left-0 top-0 h-28 w-36"
                    src="https://placehold.co/150x112"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                  <div className="flex flex-col items-start justify-start self-stretch">
                    <div className="inline-flex items-center justify-start gap-1.5">
                      <div className="relative h-3.5 w-6 overflow-hidden">
                        <div className="bg-Icon-Default-0 absolute left-0 top-0 h-3.5 w-6" />
                        <div className="bg-Icon-White absolute left-[4px] top-[4px] h-1.5 w-4" />
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        75배열
                      </div>
                    </div>
                    <div className="text-Text-Light-1 h-4 justify-start self-stretch font-['Pretendard'] text-xs font-normal leading-none">
                      컴팩트한 사이즈의 깔끔함
                    </div>
                  </div>
                  <div className="text-Text-ExtraLight-15 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                    준비중
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start self-stretch px-5">
            <div className="border-Line-Light-1 inline-flex h-10 items-center justify-start self-stretch border-b">
              <div
                data-selected="on"
                className="border-Line-HighLight flex w-32 items-center justify-center border-b-2 bg-Fill-White px-5 py-2.5"
              >
                <div className="text-Text-Default-0 justify-start text-center font-['Pretendard'] text-sm font-semibold leading-tight">
                  나만의 키보드
                </div>
              </div>
            </div>
            <div className="border-Line-Light-1 flex w-80 flex-col items-end justify-start border-b bg-white pb-4 pt-5">
              <div className="inline-flex items-center justify-start gap-5 self-stretch">
                <div className="relative size-24">
                  <img
                    className="border-Line-Light-1 absolute left-0 top-0 size-24 rounded-full border"
                    src="https://placehold.co/90x90"
                  />
                </div>
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-2">
                  <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                    <div className="inline-flex items-center justify-between self-stretch">
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        커스텀 키보드 1
                      </div>
                      <div
                        data-role="Assistive"
                        data-size="M"
                        className="flex size-4 items-center justify-start gap-2.5"
                      >
                        <div className="relative size-4 overflow-hidden">
                          <div className="outline-Icon-ExtraLight-15 absolute left-[4.50px] top-[4.50px] size-2 outline outline-[1.60px] outline-offset-[-0.80px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start self-stretch">
                      <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                        키보드 타입
                      </div>
                      <div className="inline-flex flex-wrap place-content-start items-start gap-1 self-stretch">
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          하우징 제품명
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          |
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          스위치 제품명
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          |
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          키캡 제품명
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-between self-stretch">
                    <div className="flex items-center justify-start gap-0.5">
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                        000,000
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                        원
                      </div>
                    </div>
                    <div
                      data-icon="false"
                      data-primary="Orange"
                      className="flex items-center justify-start gap-0.5"
                    >
                      <div className="text-Text-Highlight justify-start text-right font-['Pretendard'] text-xs font-semibold leading-none">
                        확인하기
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-Line-Light-1 flex w-80 flex-col items-end justify-start border-b bg-white pb-4 pt-5">
              <div className="inline-flex items-center justify-start gap-5 self-stretch">
                <div className="relative size-24">
                  <img
                    className="border-Line-Light-1 absolute left-0 top-0 size-24 rounded-full border"
                    src="https://placehold.co/90x90"
                  />
                </div>
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-2">
                  <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                    <div className="inline-flex items-center justify-between self-stretch">
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        커스텀 키보드 1
                      </div>
                      <div
                        data-role="Assistive"
                        data-size="M"
                        className="flex size-4 items-center justify-start gap-2.5"
                      >
                        <div className="relative size-4 overflow-hidden">
                          <div className="outline-Icon-ExtraLight-15 absolute left-[4.50px] top-[4.50px] size-2 outline outline-[1.60px] outline-offset-[-0.80px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start self-stretch">
                      <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                        키보드 타입
                      </div>
                      <div className="inline-flex flex-wrap place-content-start items-start gap-1 self-stretch">
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          하우징 제품명
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          |
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          스위치 제품명
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          |
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          키캡 제품명
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-between self-stretch">
                    <div className="flex items-center justify-start gap-0.5">
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                        000,000
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                        원
                      </div>
                    </div>
                    <div
                      data-icon="false"
                      data-primary="Orange"
                      className="flex items-center justify-start gap-0.5"
                    >
                      <div className="text-Text-Highlight justify-start text-right font-['Pretendard'] text-xs font-semibold leading-none">
                        확인하기
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-Line-Light-1 flex w-80 flex-col items-end justify-start border-b bg-white pb-4 pt-5">
              <div className="inline-flex items-center justify-start gap-5 self-stretch">
                <div className="relative size-24">
                  <img
                    className="border-Line-Light-1 absolute left-0 top-0 size-24 rounded-full border"
                    src="https://placehold.co/90x90"
                  />
                </div>
                <div className="inline-flex flex-1 flex-col items-start justify-start gap-2">
                  <div className="flex flex-col items-start justify-start gap-1 self-stretch">
                    <div className="inline-flex items-center justify-between self-stretch">
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-sm font-bold leading-tight">
                        커스텀 키보드 1
                      </div>
                      <div
                        data-role="Assistive"
                        data-size="M"
                        className="flex size-4 items-center justify-start gap-2.5"
                      >
                        <div className="relative size-4 overflow-hidden">
                          <div className="outline-Icon-ExtraLight-15 absolute left-[4.50px] top-[4.50px] size-2 outline outline-[1.60px] outline-offset-[-0.80px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start self-stretch">
                      <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                        키보드 타입
                      </div>
                      <div className="inline-flex flex-wrap place-content-start items-start gap-1 self-stretch">
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          하우징 제품명
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          |
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          스위치 제품명
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          |
                        </div>
                        <div className="text-Text-Light-1 justify-start font-['Pretendard'] text-xs font-normal leading-none">
                          키캡 제품명
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-between self-stretch">
                    <div className="flex items-center justify-start gap-0.5">
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                        000,000
                      </div>
                      <div className="text-Text-Default-0 justify-start font-['Pretendard'] text-xs font-semibold leading-none">
                        원
                      </div>
                    </div>
                    <div
                      data-icon="false"
                      data-primary="Orange"
                      className="flex items-center justify-start gap-0.5"
                    >
                      <div className="text-Text-Highlight justify-start text-right font-['Pretendard'] text-xs font-semibold leading-none">
                        확인하기
                      </div>
                    </div>
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

export {CustomizeMainPage};
