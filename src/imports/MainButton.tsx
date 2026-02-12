import svgPaths from "./svg-guvidhn22f";

function Component24PxOutlineKeyboardArrowUp() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="24 px | Outline / keyboard_arrow_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="24 px | Outline / keyboard_arrow_up">
          <mask height="18" id="mask0_7_5740" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_7_5740)">
            <path d={svgPaths.pc487f00} fill="var(--fill-0, #2474F5)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function MainButton() {
  return (
    <div className="bg-[rgba(85,147,247,0.05)] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[9px] relative rounded-[8px] size-full" data-name="Main button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2474f5] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">Свернуть</p>
      </div>
      <Component24PxOutlineKeyboardArrowUp />
    </div>
  );
}