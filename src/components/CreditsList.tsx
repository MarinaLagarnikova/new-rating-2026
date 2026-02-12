import { motion } from 'motion/react';
import svgPaths from '../imports/svg-guvidhn22f';
import type { ScenarioType } from '../App';

function Frame9({ amount, monthlyPayment }: { amount: string; monthlyPayment: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.4]">{amount}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.4]">・</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[1.4]">{monthlyPayment}</p>
      </div>
    </div>
  );
}

function Frame10({ amount, monthlyPayment, debtPercent }: { amount: string; monthlyPayment: string; debtPercent: string }) {
  return (
    <div className="content-stretch flex font-normal gap-[24px] items-center relative shrink-0 text-[#858585] w-full">
      <Frame9 amount={amount} monthlyPayment={monthlyPayment} />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] justify-center min-h-px min-w-px relative">
        <p className="leading-[1.4] whitespace-pre-wrap">{debtPercent}</p>
      </div>
    </div>
  );
}

function Frame11({ title, amount, monthlyPayment, debtPercent }: { title: string; amount: string; monthlyPayment: string; debtPercent: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#32393e] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">{title}</p>
      </div>
      <Frame10 amount={amount} monthlyPayment={monthlyPayment} debtPercent={debtPercent} />
    </div>
  );
}

function CreditItem({ title, amount, monthlyPayment, debtPercent }: { title: string; amount: string; monthlyPayment: string; debtPercent: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 title={title} amount={amount} monthlyPayment={monthlyPayment} debtPercent={debtPercent} />
    </div>
  );
}

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

interface CreditsListProps {
  scenario: ScenarioType;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function CreditsList({ scenario, isExpanded, onToggle }: CreditsListProps) {
  // Кредит для approved сценария
  const approvedCredits = [
    { title: 'Автокредит', amount: '3 000 000 ₽', monthlyPayment: '53 000 ₽/мес', debtPercent: '23% от дохода' },
  ];
  
  // Разные кредиты для review сценария
  const reviewCredits = [
    { title: 'Ипотечный кредит', amount: '3 500 000 ₽', monthlyPayment: '90 000 ₽/мес', debtPercent: '32% от дохода' },
    { title: 'Автокредит', amount: '1 200 000 ₽', monthlyPayment: '45 000 ₽/мес', debtPercent: '13% от дохода' },
    { title: 'Потребительский кредит', amount: '600 000 ₽', monthlyPayment: '33 789 ₽/мес', debtPercent: '10% от дохода' },
  ];
  
  // Кредиты для rejected сценария - долговая нагрузка 230 000 ₽/мес, 75% от дохода
  const rejectedCredits = [
    { title: 'Ипотечный кредит', amount: '4 500 000 ₽', monthlyPayment: '100 000 ₽/мес', debtPercent: '33% от дохода' },
    { title: 'Автокредит', amount: '2 100 000 ₽', monthlyPayment: '70 000 ₽/мес', debtPercent: '23% от дохода' },
    { title: 'Потребительский кредит', amount: '800 000 ₽', monthlyPayment: '40 000 ₽/мес', debtPercent: '13% от дохода' },
    { title: 'Кредитная карта', amount: '300 000 ₽', monthlyPayment: '20 000 ₽/мес', debtPercent: '6% от дохода' },
  ];
  
  // Стандартные кредиты для других сценариев
  const defaultCredits = Array(9).fill({
    title: 'Потребительский кредит',
    amount: '5 000 000 ₽',
    monthlyPayment: '200 000 ₽/мес',
    debtPercent: '60% от дохода'
  });
  
  const credits = scenario === 'approved' ? approvedCredits : scenario === 'review' ? reviewCredits : scenario === 'rejected' ? rejectedCredits : defaultCredits;
  
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="content-stretch flex flex-col gap-[16px] items-start relative w-full overflow-hidden"
    >
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {credits.map((credit, index) => (
          <CreditItem 
            key={index}
            title={credit.title}
            amount={credit.amount}
            monthlyPayment={credit.monthlyPayment}
            debtPercent={credit.debtPercent}
          />
        ))}
      </div>
    </motion.div>
  );
}