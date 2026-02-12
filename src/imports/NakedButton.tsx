import svgPaths from "./svg-vffa7mpxe3";

function Component24PxOutlineKeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="24 px | Outline / keyboard_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="24 px | Outline / keyboard_arrow_down">
          <mask height="20" id="mask0_33_1856" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_33_1856)">
            <path d={svgPaths.p33401300} fill="var(--fill-0, #2474F5)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function NakedButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[4px] relative rounded-[6px] size-full" data-name="Naked button">
      <Component24PxOutlineKeyboardArrowDown />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2474f5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">4 кредита</p>
      </div>
    </div>
  );
}