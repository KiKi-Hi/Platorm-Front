export function ThumbnailL() {
  return (
    <div className="relative inline-flex h-36 w-40 flex-col items-start justify-start overflow-hidden rounded">
      <div
        data-aspect-ratio="1:1"
        className="flex flex-col items-start justify-start self-stretch overflow-hidden"
      >
        <div className="flex origin-top-left rotate-[-19.47deg] flex-col items-center justify-center self-stretch" />
      </div>
      <div className="bg-Fill-ExtraLight absolute left-0 top-0 h-36 w-40 overflow-hidden">
        <div
          data-like="off"
          data-style="Thumbnail"
          className="absolute left-[132px] top-[116px] size-6 overflow-hidden shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)]"
        >
          <div className="outline-Icon-White absolute left-[2.99px] top-[3.99px] h-4 w-5 outline outline-2 outline-offset-[-1px]" />
        </div>
      </div>
    </div>
  );
}
