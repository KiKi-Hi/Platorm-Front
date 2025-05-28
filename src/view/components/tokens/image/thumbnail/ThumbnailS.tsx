export const ThumbnailL = () => {
    return (
        <div className="w-40 h-36 relative rounded inline-flex flex-col justify-start items-start overflow-hidden">
            <div data-aspect-ratio="1:1" className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center" />
            </div>
            <div className="w-40 h-36 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                <div data-like="off" data-style="Thumbnail" className="w-6 h-6 left-[132px] top-[116px] absolute shadow-[1px_1px_2px_0px_rgba(0,0,0,0.20)] overflow-hidden">
                    <div className="w-5 h-4 left-[2.99px] top-[3.99px] absolute outline outline-2 outline-offset-[-1px] outline-Icon-White" />
                </div>
            </div>
        </div>
    )
}