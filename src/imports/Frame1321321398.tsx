function RoundBadge() {
  return (
    <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0" data-name="row">
      <RoundBadge />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Статус банкрота нет</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="3">
      <Row />
    </div>
  );
}

function RoundBadge1() {
  return (
    <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0" data-name="row">
      <RoundBadge1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Просрочки есть</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="771">
      <Row1 />
    </div>
  );
}

function RoundBadge2() {
  return (
    <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0 w-full" data-name="1">
      <RoundBadge2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[0px] whitespace-nowrap">
        <p className="text-[#32393e] text-[12px]">
          <span className="leading-[1.5]">Д</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic">олг ФССП есть</span>
        </p>
      </div>
    </div>
  );
}

function RoundBadge3() {
  return (
    <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0" data-name="row">
      <RoundBadge3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[0px] whitespace-nowrap">
        <p className="text-[#32393e] text-[12px]">
          <span className="leading-[1.5]">Арест по налогам</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic">{` нет`}</span>
        </p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="2">
      <Row2 />
    </div>
  );
}

function RoundBadge4() {
  return (
    <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0" data-name="row">
      <RoundBadge4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Самозапрет нет</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="770">
      <Row3 />
    </div>
  );
}

function RoundBadge5() {
  return (
    <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0" data-name="row">
      <RoundBadge5 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Историческая просрочка 90+ нет</p>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="772">
      <Row4 />
    </div>
  );
}

function RoundBadge6() {
  return (
    <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0" data-name="row">
      <RoundBadge6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Задолженность по ИП нет</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="773">
      <Row5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative size-full">
      <Component2 />
      <Component4 />
      <Component />
      <Component1 />
      <Component3 />
      <Component5 />
      <Component6 />
    </div>
  );
}