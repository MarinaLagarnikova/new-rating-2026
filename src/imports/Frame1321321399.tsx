function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#32393e] w-[564px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[16px] tracking-[-0.18px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Рекомендации</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[14px] w-full">
        <ul className="list-disc whitespace-pre-wrap">
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.4]">Выбирайте банки с наиболее выгодными условиями</span>
          </li>
          <li className="mb-0 ms-[21px]">
            <span className="leading-[1.4]">Не забудьте отправить в банк зарплатного проекта, там вероятность всегда выше и условия лучше</span>
          </li>
          <li className="ms-[21px]">
            <span className="leading-[1.4]">Отправьте заявку минимум в 5 банков, так вероятность будет выше</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
    </div>
  );
}