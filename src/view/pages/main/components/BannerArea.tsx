export const BannerArea = () => {
    return (
        <div className="w-96 h-48 relative flex flex-col justify-start items-start overflow-hidden">
            <div data-aspect-ratio="1:1"
                 className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                <div
                    className="self-stretch origin-top-left rotate-[-19.47deg] flex flex-col justify-center items-center"/>
            </div>
            <div className="w-96 h-48 left-0 top-0 absolute bg-Fill-ExtraLight overflow-hidden">
                <div
                    className="px-2 left-[313px] top-[167px] absolute bg-Fill-Black-30%/30 rounded-[50px] inline-flex justify-start items-center gap-0.5">
                    <div
                        className="justify-start text-white text-xs font-normal font-['Pretendard'] leading-none">1
                    </div>
                    <div
                        className="justify-start text-white text-xs font-normal font-['Pretendard'] leading-none">/
                    </div>
                    <div
                        className="justify-start text-white text-xs font-normal font-['Pretendard'] leading-none">20
                    </div>
                </div>
            </div>
        </div>
    )
}