function BtnText(props: { text: string }) {
  return (
    <div className="inline-flex items-center justify-start gap-0.5">
      <div className="text-Text-Highlight justify-start text-right font-['Pretendard'] text-xs font-semibold leading-none">
        버튼명
      </div>
      <div data-size="M" className="relative size-4 overflow-hidden">
        <div className="outline-Icon-ExtraLight-15 absolute left-[6.75px] top-[4.50px] h-2 w-1 outline outline-[1.60px] outline-offset-[-0.80px]" />
      </div>
    </div>
  );
}

export default BtnText;
