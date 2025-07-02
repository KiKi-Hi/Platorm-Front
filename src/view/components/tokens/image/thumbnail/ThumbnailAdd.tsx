export function ThumbnailAdd() {
  return (
    <div className="relative inline-flex h-48 w-96 flex-col items-start justify-start overflow-hidden">
      <div
        data-aspect-ratio="1:1"
        className="flex flex-col items-start justify-start self-stretch overflow-hidden"
      >
        <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
      </div>
      <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-48 w-96 overflow-hidden">
        <div className="bg-Fill-Black-30%/30 absolute left-[313px] top-[167px] inline-flex items-center justify-start gap-0.5 rounded-[50px] px-2">
          <div className="justify-start font-['Pretendard'] text-xs font-normal leading-none text-white">
            1
          </div>
          <div className="justify-start font-['Pretendard'] text-xs font-normal leading-none text-white">
            /
          </div>
          <div className="justify-start font-['Pretendard'] text-xs font-normal leading-none text-white">
            20
          </div>
        </div>
      </div>
    </div>
  );
}
