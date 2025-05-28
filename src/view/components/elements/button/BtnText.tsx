const BtnText = (props: { text: string }) => {
    return (
        <div className="inline-flex justify-start items-center gap-0.5">
            <div className="text-right justify-start text-Text-Highlight text-xs font-semibold font-['Pretendard'] leading-none">버튼명</div>
            <div data-size="M" className="w-4 h-4 relative overflow-hidden">
                <div className="w-1 h-2 left-[6.75px] top-[4.50px] absolute outline outline-[1.60px] outline-offset-[-0.80px] outline-Icon-ExtraLight-15" />
            </div>
        </div>
    )
}

export default BtnText;