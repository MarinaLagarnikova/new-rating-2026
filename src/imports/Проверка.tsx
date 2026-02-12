import svgPaths from "./svg-lg5jbxptrf";
import svgPathsWarning from "./svg-mv356uwoi5";
import svgPathsError from "./svg-co7pc92h1d";
import svgPathsArrow from "./svg-vffa7mpxe3";
import { useState } from 'react';
import CreditsList from '../components/CreditsList';
import img202510241502261 from "../assets/8fbd6c23deb5b73222d21951d6be07772dd2507f.png";
import img202412061019441 from "../assets/095e210699c8ed2d5272bf0a8d4b6c909d896981.png";
import Image3Vectorized from './Image3Vectorized';
import type { ScenarioType } from '../App';

type ScenarioData = {
  rating: string;
  ratingColor: string;
  statusText: string;
  statusColor: string;
  bannerBg: string;
  bannerIcon: 'check' | 'warning' | 'error';
  bannerIconColor: string;
  bannerTitle: string;
  bannerSubtitle: string;
  barColor: string;
  creditPotential: string;
  debtLoad: string;
  debtLoadPercent: string;
  debtLoadColor: string;
};

const scenarioConfig: Record<ScenarioType, ScenarioData> = {
  approved: {
    rating: '697',
    ratingColor: '#019d3f',
    statusText: 'Хороший финансовый рейтинг',
    statusColor: '#019d3f',
    bannerBg: 'rgba(4,180,74,0.05)',
    bannerIcon: 'check',
    bannerIconColor: '#04B44A',
    bannerTitle: 'Предварительно одобрен',
    bannerSubtitle: 'Можно переходить к отправке в банки',
    barColor: '#019d3f',
    creditPotential: '15 300 000 ₽',
    debtLoad: '53 000 ₽/мес',
    debtLoadPercent: '23%',
    debtLoadColor: '#04b44a',
  },
  review: {
    rating: '697',
    ratingColor: '#ce6809',
    statusText: 'Хороший финансовый рейтинг',
    statusColor: '#ce6809',
    bannerBg: 'rgba(255,197,51,0.15)',
    bannerIcon: 'warning',
    bannerIconColor: '#FFC533',
    bannerTitle: 'Требуется проверка',
    bannerSubtitle: 'Посмотрите что можно исправить, чтобы повысить шансы',
    barColor: '#ce6809',
    creditPotential: '12 789 000 ₽',
    debtLoad: '168 789 ₽/мес',
    debtLoadPercent: '55%',
    debtLoadColor: '#ce6809',
  },
  rejected: {
    rating: '156',
    ratingColor: '#ea4310',
    statusText: 'Низкий финансовый рейтинг',
    statusColor: '#ea4310',
    bannerBg: 'rgba(234,67,16,0.15)',
    bannerIcon: 'error',
    bannerIconColor: '#ea4310',
    bannerTitle: 'Предварительно не одобрен',
    bannerSubtitle: 'Изучите рекомендации, попробуйте повторить проверку позже',
    barColor: '#ea4310',
    creditPotential: '0 ₽',
    debtLoad: '230 000 ₽/мес',
    debtLoadPercent: '75%',
    debtLoadColor: '#ea4310',
  },
};

function Group1() {
  return (
    <div className="absolute inset-[3.19%_0_10.72%_0.86%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.5869 22.4849">
        <g id="Group 1">
          <path d={svgPaths.p1c5f3980} fill="var(--fill-0, #858585)" id="Vector" />
          <path d={svgPaths.p19ea0600} fill="var(--fill-0, #858585)" id="Vector_2" />
          <path d={svgPaths.p24169a00} fill="var(--fill-0, #858585)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p35a4d000} fill="var(--fill-0, #858585)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3943d580} fill="var(--fill-0, #858585)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p38a21500} fill="var(--fill-0, #858585)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Black() {
  return (
    <div className="h-[26.118px] overflow-clip relative shrink-0 w-[48px]" data-name="black 1">
      <Group1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[24px] items-center left-[48px] top-[calc(50%+0.06px)]">
      <Black />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#f5f6f8] h-[80px] relative shrink-0 w-full" data-name="Header">
      <div className="absolute h-0 left-0 right-0 top-[58px]" data-name="header-divider">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="header-divider" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center right-0 size-[24px] top-[58px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="relative size-[24px]" data-name="Exclude">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p1308cb00} fill="var(--fill-0, #F5F6F8)" id="Exclude" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-[24px] top-[57.6px]" data-name="Exclude">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1308cb00} fill="var(--fill-0, #F5F6F8)" id="Exclude" />
        </svg>
      </div>
      <Frame6 />
      <div className="absolute h-[64px] left-[1248px] top-[8px] w-[304px]" data-name="Снимок экрана 2025-10-24 в 15.02.26 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img202510241502261} />
      </div>
    </div>
  );
}

function SignIcon18SpoilerLeft() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sign / icon / 18_spoiler / left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sign / icon / 18_spoiler / left">
          <path d={svgPaths.pba5d580} fill="var(--fill-0, #A4ADB3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BtnContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn-content">
      <SignIcon18SpoilerLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">К списку заявок</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-center px-[4px] relative rounded-[4px] shrink-0" data-name="button">
      <BtnContent />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[27.78%_11.11%_30.56%_5.56%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 5.83333">
        <g id="Group">
          <path d={svgPaths.p3bccb280} fill="var(--fill-0, #A4ADB3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[27.78%_11.11%_30.56%_5.56%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function SignIcon16Link() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Sign / icon / 16_link">
      <Group />
    </div>
  );
}

function BtnContent1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="btn-content">
      <SignIcon16Link />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">Ссылка на заполнение</p>
      </div>
    </div>
  );
}

function SignIcon8ArrowDown() {
  return (
    <div className="overflow-clip relative size-[8px]" data-name="Sign / icon / 8_arrow_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="triangle">
          <path clipRule="evenodd" d="M4 2L7 6L1 6L4 2Z" fill="var(--fill-0, #858585)" fillRule="evenodd" id="Triangle" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center justify-center opacity-0 px-[4px] relative rounded-[4px] shrink-0" data-name="button">
      <BtnContent1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <SignIcon8ArrowDown />
        </div>
      </div>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 top-0 w-[1202px]" data-name="Toolbar">
      <Button />
      <Button1 />
    </div>
  );
}

function ToolbarContainer() {
  return (
    <div className="h-[18px] relative shrink-0 w-[740px]" data-name="Toolbar Container">
      <Toolbar />
    </div>
  );
}

function AvaProfile() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="AvaProfile">
      <div className="relative shrink-0 size-[40px]" data-name="bg">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.p3fcc0500} fill="var(--fill-0, #18407B)" fillOpacity="0.05" id="bg" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-1/2 not-italic text-[#a4adb2] text-[16px] text-center top-1/2 w-[40px]">
        <p className="leading-[1.4] whitespace-pre-wrap">ЕЕ</p>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="wrapper">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[14px] whitespace-nowrap">
        <p className="leading-[1.4]">Заемщик</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Wrapper />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="User Info">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[16px] tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[1.4]">Ермолаев Е.Ф.</p>
      </div>
      <Frame7 />
    </div>
  );
}

function RightBlock() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[2px] h-full items-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] text-center whitespace-nowrap" data-name="right block">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5]">Проверка</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5]">от 19.01</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[870px]" data-name="header">
      <AvaProfile />
      <UserInfo />
      <div className="flex flex-row items-center self-stretch">
        <RightBlock />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="content">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#019d3f] text-[12px] tracking-[0.01px] whitespace-nowrap">
        <p className="leading-[16px]">Обновить</p>
      </div>
    </div>
  );
}

function UnderlinedLink() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center overflow-clip relative shrink-0" data-name="underlined-link">
      <Content />
      <div className="h-0 relative shrink-0 w-full" data-name="underline">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 1">
            <line id="underline" opacity="0.2" stroke="var(--stroke-0, #4C555B)" x2="58" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FormListToolLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="Form / List / Tool-link">
      <UnderlinedLink />
    </div>
  );
}

function FormListToolLinkWithMargin() {
  return (
    <div className="content-stretch flex items-center relative rounded-[2px] shrink-0" data-name="Form / List / Tool-link_with_margin">
      <FormListToolLink />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-end opacity-0 relative self-stretch shrink-0 w-[113px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#019d3f] text-[12px] tracking-[0.01px]">от 25.03</p>
      <FormListToolLinkWithMargin />
    </div>
  );
}

function Frame5({ rating, ratingColor }: { rating: string; ratingColor: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] tracking-[-0.47px]" style={{ color: ratingColor }}>
        <p className="leading-[1.3] whitespace-pre-wrap">{rating}</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame({ barColor }: { barColor: string }) {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip relative rounded-[40px] shrink-0 w-full">
      <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px" style={{ backgroundColor: barColor }} />
      <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px" style={{ backgroundColor: barColor }} />
      <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px" style={{ backgroundColor: barColor }} />
      <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px" style={{ backgroundColor: barColor }} />
      <div className="bg-[rgba(4,180,74,0.05)] flex-[1_0_0] h-[4px] min-h-px min-w-px" />
    </div>
  );
}

function Frame2({ rating, ratingColor, barColor }: { rating: string; ratingColor: string; barColor: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full">
      <Frame5 rating={rating} ratingColor={ratingColor} />
      <Frame barColor={barColor} />
    </div>
  );
}

function Frame1({ rating, ratingColor, barColor }: { rating: string; ratingColor: string; barColor: string }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <Frame2 rating={rating} ratingColor={ratingColor} barColor={barColor} />
    </div>
  );
}

function Frame3({ statusText, statusColor }: { statusText: string; statusColor: string }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[10px] tracking-[0.8px] uppercase w-full whitespace-pre-wrap" style={{ color: statusColor }}>{statusText}</p>
    </div>
  );
}

function Frame14({ rating, ratingColor, barColor, statusText, statusColor }: { rating: string; ratingColor: string; barColor: string; statusText: string; statusColor: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame1 rating={rating} ratingColor={ratingColor} barColor={barColor} />
      <Frame3 statusText={statusText} statusColor={statusColor} />
    </div>
  );
}

function Frame8({ creditPotential }: { creditPotential: string }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[24px] text-center tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[1.4]">{creditPotential} </p>
      </div>
    </div>
  );
}

function Frame13({ creditPotential }: { creditPotential: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 creditPotential={creditPotential} />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] w-[276px]">
        <p className="leading-[normal] whitespace-pre-wrap">Кредитный потенциал</p>
      </div>
    </div>
  );
}

function Frame9({ debtLoad, debtLoadPercent, debtLoadColor }: { debtLoad: string; debtLoadPercent: string; debtLoadColor: string }) {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[4px] items-center relative shrink-0 text-[24px] text-center tracking-[-0.18px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#32393e]">
        <p className="leading-[1.4]">{debtLoad} </p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ color: debtLoadColor }}>
        <p className="leading-[1.4]">{debtLoadPercent}</p>
      </div>
    </div>
  );
}

function Frame12({ debtLoad, debtLoadPercent, debtLoadColor }: { debtLoad: string; debtLoadPercent: string; debtLoadColor: string }) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full">
      <Frame9 debtLoad={debtLoad} debtLoadPercent={debtLoadPercent} debtLoadColor={debtLoadColor} />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#858585] text-[12px] w-[275px]">
        <p className="leading-[normal] whitespace-pre-wrap">Долговая нагрузка</p>
      </div>
    </div>
  );
}

function Frame21({ rating, ratingColor, barColor, statusText, statusColor }: { 
  rating: string; 
  ratingColor: string; 
  barColor: string; 
  statusText: string; 
  statusColor: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[274px]">
      <Frame14 rating={rating} ratingColor={ratingColor} barColor={barColor} statusText={statusText} statusColor={statusColor} />
    </div>
  );
}

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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Статус банкрота нет</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="3">
      <Row />
    </div>
  );
}

function RoundBadge1() {
  return (
    <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0" data-name="row">
      <RoundBadge1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Просрочки нет</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="771">
      <Row1 />
    </div>
  );
}

function RoundBadge2() {
  return (
    <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]" data-name="RoundBadge">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0 w-full" data-name="1">
      <RoundBadge2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[0px] whitespace-nowrap">
        <p className="text-[12px]">
          <span className="leading-[1.5]">Д</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic">олг ФССП нет</span>
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
        <p className="text-[12px]">
          <span className="leading-[1.5]">Арест по налогам</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic">{` нет`}</span>
        </p>
      </div>
    </div>
  );
}

function Component4() {
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Самозапрет нет</p>
      </div>
    </div>
  );
}

function Component6() {
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Историческая просрочка 90+ нет</p>
      </div>
    </div>
  );
}

function Component8() {
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
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Задолженность по ИП нет</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="773">
      <Row5 />
    </div>
  );
}

function Frame10({ scenario }: { scenario: ScenarioType }) {
  // Для review сценария показываем проверки с частичными проблемами
  if (scenario === 'review') {
    return (
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[275px]">
        {/* Статус банкрота нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Статус банкрота нет</p>
            </div>
          </div>
        </div>
        {/* Просрочки есть - красный */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Просрочки есть</p>
            </div>
          </div>
        </div>
        {/* Долг ФССП есть - красный */}
        <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0 w-full">
          <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]">
            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">Долг ФССП есть</p>
          </div>
        </div>
        {/* Арест по налогам нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Арест по налогам нет</p>
            </div>
          </div>
        </div>
        {/* Самозапрет нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Самозапрет нет</p>
            </div>
          </div>
        </div>
        {/* Историческая просрочка 90+ нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Историческая просрочка 90+ нет</p>
            </div>
          </div>
        </div>
        {/* Задолженность по ИП нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Задолженность по ИП нет</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Для rejected сценария показываем новые проверки
  if (scenario === 'rejected') {
    return (
      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[275px]">
        {/* Статус банкрота нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Статус банкрота нет</p>
            </div>
          </div>
        </div>
        {/* Просрочки есть - красный */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Просрочки есть</p>
            </div>
          </div>
        </div>
        {/* Долг ФССП есть - красный */}
        <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0 w-full">
          <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]">
            <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
            <p className="leading-[1.5]">Долг ФССП есть</p>
          </div>
        </div>
        {/* Арест по налогам есть - красный */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Арест по налогам есть</p>
            </div>
          </div>
        </div>
        {/* Самозапрет нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Самозапрет нет</p>
            </div>
          </div>
        </div>
        {/* Историческая просрочка 90+ есть - красный */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#ea4310] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Историческая просрочка 90+ есть</p>
            </div>
          </div>
        </div>
        {/* Задолженность по ИП нет - зеленый */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center min-h-[18px] relative shrink-0">
            <div className="bg-[#04b44a] relative rounded-[20px] shrink-0 size-[6px]">
              <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[22px]" />
            </div>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] whitespace-nowrap">
              <p className="leading-[1.5]">Задолженность по ИП нет</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Для approved сценария показываем оригинальные проверки
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[275px]">
      <Component3 />
      <Component7 />
      <Component2 />
      <Component4 />
      <Component6 />
      <Component8 />
      <Component9 />
    </div>
  );
}

function Frame16({ rating, ratingColor, barColor, statusText, statusColor, scenario }: { 
  rating: string; 
  ratingColor: string; 
  barColor: string; 
  statusText: string; 
  statusColor: string;
  scenario: ScenarioType;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[274px]">
      <Frame21 rating={rating} ratingColor={ratingColor} barColor={barColor} statusText={statusText} statusColor={statusColor} />

    </div>
  );
}

function BannerIcon({ iconType, iconColor }: { iconType: 'check' | 'warning' | 'error'; iconColor: string }) {
  if (iconType === 'check') {
    return (
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.pab1b200} fill={iconColor} />
        </svg>
      </div>
    );
  }
  
  if (iconType === 'warning') {
    return (
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPathsWarning.p123fe000} fill={iconColor} />
        </svg>
      </div>
    );
  }
  
  // error
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d={svgPathsError.p3b1de40} fill={iconColor} />
      </svg>
    </div>
  );
}

function TitleSubtitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative" data-name="Title subtitle">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#32383d] text-[16px] tracking-[-0.18px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">{title}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#858585] text-[14px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">{subtitle}</p>
      </div>
    </div>
  );
}

function Top({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Top">
      <TitleSubtitle title={title} subtitle={subtitle} />
    </div>
  );
}

function Content1({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Content">
      <Top title={title} subtitle={subtitle} />
    </div>
  );
}

function Container({ iconType, iconColor, title, subtitle }: { iconType: 'check' | 'warning' | 'error'; iconColor: string; title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <BannerIcon iconType={iconType} iconColor={iconColor} />
      <Content1 title={title} subtitle={subtitle} />
    </div>
  );
}

function SystemBanner({ bannerBg, iconType, iconColor, title, subtitle }: { bannerBg: string; iconType: 'check' | 'warning' | 'error'; iconColor: string; title: string; subtitle: string }) {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[8px] shrink-0 w-[564px]" style={{ backgroundColor: bannerBg }} data-name="SystemBanner">
      <Container iconType={iconType} iconColor={iconColor} title={title} subtitle={subtitle} />
    </div>
  );
}

function CreditToggleButton({ scenario, isExpanded, onClick }: { scenario: ScenarioType; isExpanded: boolean; onClick: () => void }) {
  const getCreditCount = () => {
    if (scenario === 'approved') return 1;
    if (scenario === 'review') return 3;
    if (scenario === 'rejected') return 4;
    return 9;
  };

  const getCreditWord = () => {
    const count = getCreditCount();
    if (count === 1) return 'кредит';
    if (count >= 2 && count <= 4) return 'кредита';
    return 'кредитов';
  };

  return (
    <button
      onClick={onClick}
      className="flex gap-[8px] items-center justify-start px-[4px] relative rounded-[6px] hover:bg-[rgba(36,116,245,0.05)] transition-colors cursor-pointer self-start"
      data-name="Naked button"
    >
      <div className={`relative shrink-0 size-[20px] transition-transform ${isExpanded ? 'rotate-180' : ''}`} data-name="24 px | Outline / keyboard_arrow_down">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="24 px | Outline / keyboard_arrow_down">
            <mask height="20" id="mask0_33_1856" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
              <rect fill="#D9D9D9" height="20" id="Bounding box" width="20" />
            </mask>
            <g mask="url(#mask0_33_1856)">
              <path d={svgPathsArrow.p33401300} fill="#2474F5" id="Vector" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2474f5] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[1.4]">{getCreditCount()} {getCreditWord()}</p>
      </div>
    </button>
  );
}

function Frame20({ scenario }: { scenario?: ScenarioType }) {
  // Не показываем текст для сценария approved
  if (scenario === 'approved') {
    return null;
  }
  
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[14px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">{`Текущий ПДН на среднем уровне. Возможность получение кредита с ПВ от 20%. Изучите варианты снижение ПДН — привлечение созаемщика или закрытие текущих кредитов. По кредитам с ПВ <20% действует регуляторное ограничение, доля не более 10% от выдач. По кредитам с ПВ <10% действуют повышенные требования к капиталу.`}</p>
      </div>
    </div>
  );
}

function Frame19({ scenario }: { scenario: ScenarioType }) {
  const isApprovedScenario = scenario === 'approved';
  const isReviewScenario = scenario === 'review';
  const isRejectedScenario = scenario === 'rejected';
  
  const getCreditText = () => {
    if (isApprovedScenario) return '1 действующий кредит';
    if (isReviewScenario) return '3 действующих кредита';
    if (isRejectedScenario) return '4 действующих кредита';
    return '9 действующих кредитов';
  };
  
  const getSumText = () => {
    if (isApprovedScenario) return 'На сумму 3 000 000 ₽';
    if (isReviewScenario) return 'На сумму 5 300 000 ₽';
    return 'На сумму 8 890 567 ₽';
  };
  
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#32393e] text-[16px] tracking-[-0.18px]">
        <p className="leading-[1.4]">{getCreditText()}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#858585] text-[14px]">
        <p className="leading-[1.4]">{getSumText()}</p>
      </div>
    </div>
  );
}

function MainButton({ onClick, isExpanded }: { onClick: () => void; isExpanded: boolean }) {
  return (
    <button
      onClick={onClick}
      className="bg-[rgba(85,147,247,0.05)] hover:bg-[rgba(85,147,247,0.1)] transition-colors content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[9px] relative rounded-[8px] shrink-0 cursor-pointer"
      data-name="Main button"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2474f5] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">{isExpanded ? 'Свернуть' : 'Посмотреть'}</p>
      </div>
    </button>
  );
}

function Frame18({ scenario }: { scenario: ScenarioType }) {
  const [isCreditsExpanded, setIsCreditsExpanded] = useState(false);

  return (
    <div className="content-stretch flex flex-col gap-[16px] w-full">
      <CreditToggleButton 
        scenario={scenario} 
        isExpanded={isCreditsExpanded} 
        onClick={() => setIsCreditsExpanded(!isCreditsExpanded)} 
      />
      
      {isCreditsExpanded && (
        <div className="w-full">
          <CreditsList scenario={scenario} isExpanded={isCreditsExpanded} onToggle={() => setIsCreditsExpanded(!isCreditsExpanded)} />
        </div>
      )}
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[275px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[24px]" data-name="image 3">
            <Image3Vectorized />
          </div>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#A4ADB2] text-[12px]">Кредитный отчет ОКБ</p>
    </div>
  );
}

function RecommendationsBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#32393e] text-[16px] tracking-[-0.18px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Рекомендуем исправить</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#32393e] text-[14px] w-full">
        <ul className="list-disc pl-5 space-y-1">
          <li>Снизить ПДН — изучите список действующих кредитов</li>
          <li>Снизить ПДН — привлечь созаемщика с доходом</li>
          <li>ФССП — погасить долги</li>
          <li>Текущая просрочка 1+</li>
        </ul>
      </div>
    </div>
  );
}

function CannotFixBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#32393e] text-[16px] tracking-[-0.18px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Исправить не получится</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#32393e] text-[14px] w-full">
        <ul className="list-disc pl-5 space-y-1">
          <li>Текущая просрочка 30+</li>
          <li>Историческая просрочка 30+ за 3 года</li>
          <li>Историческая просрочка 90+ за 3 года</li>
          <li>Полученные МФО кредита за 6 месяцев</li>
        </ul>
      </div>
    </div>
  );
}

function ApprovedRecommendationsBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#32393e] w-full">
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

function PDNTextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#32393e] w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[14px] w-[min-content]">
        <p className="leading-[1.4] whitespace-pre-wrap">{`Текущий ПДН на среднем уровне. Возможность получение кредита с ПВ от 20%. Изучите варианты снижение ПДН — привлечение созаемщика или закрытие текущих кредитов. По кредитам с ПВ <20% действует регуляторное ограничение, доля не более 10% от выдач. По кредитам с ПВ <10% действуют повышенные требования к капиталу.`}</p>
      </div>
    </div>
  );
}

function Frame17({ bannerBg, bannerIcon, bannerIconColor, bannerTitle, bannerSubtitle, showRecommendations, showCannotFix, scenario }: { 
  bannerBg: string;
  bannerIcon: 'check' | 'warning' | 'error';
  bannerIconColor: string;
  bannerTitle: string;
  bannerSubtitle: string;
  showRecommendations?: boolean;
  showCannotFix?: boolean;
  scenario: ScenarioType;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[564px]">
      <SystemBanner bannerBg={bannerBg} iconType={bannerIcon} iconColor={bannerIconColor} title={bannerTitle} subtitle={bannerSubtitle} />
      {scenario === 'approved' && <ApprovedRecommendationsBlock />}
      {showRecommendations && <RecommendationsBlock />}
      {showCannotFix && <CannotFixBlock />}
      <Frame20 scenario={scenario} />
      <Frame18 scenario={scenario} />
      <div className="h-px relative shrink-0 w-full" data-name="Line 3 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 564 1">
          <path d="M564 0V1H0V0H564Z" fill="var(--fill-0, #18407B)" fillOpacity="0.05" id="Line 3 (Stroke)" />
        </svg>
      </div>
      <Frame22 />
    </div>
  );
}

function Frame15({ rating, ratingColor, barColor, statusText, statusColor, bannerBg, bannerIcon, bannerIconColor, bannerTitle, bannerSubtitle, showRecommendations, showCannotFix, creditPotential, debtLoad, debtLoadPercent, debtLoadColor, scenario }: { 
  rating: string; 
  ratingColor: string; 
  barColor: string; 
  statusText: string; 
  statusColor: string; 
  bannerBg: string;
  bannerIcon: 'check' | 'warning' | 'error';
  bannerIconColor: string;
  bannerTitle: string;
  bannerSubtitle: string;
  showRecommendations?: boolean;
  showCannotFix?: boolean;
  creditPotential: string;
  debtLoad: string;
  debtLoadPercent: string;
  debtLoadColor: string;
  scenario: ScenarioType;
}) {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[274px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <Frame13 creditPotential={creditPotential} />
          <Frame12 debtLoad={debtLoad} debtLoadPercent={debtLoadPercent} debtLoadColor={debtLoadColor} />
        </div>

      </div>
      <Frame17 bannerBg={bannerBg} bannerIcon={bannerIcon} bannerIconColor={bannerIconColor} bannerTitle={bannerTitle} bannerSubtitle={bannerSubtitle} showRecommendations={showRecommendations} showCannotFix={showCannotFix} scenario={scenario} />
    </div>
  );
}

function Frame11({ rating, ratingColor, barColor, statusText, statusColor, bannerBg, bannerIcon, bannerIconColor, bannerTitle, bannerSubtitle, showRecommendations, showCannotFix, creditPotential, debtLoad, debtLoadPercent, debtLoadColor, scenario }: { 
  rating: string; 
  ratingColor: string; 
  barColor: string; 
  statusText: string; 
  statusColor: string; 
  bannerBg: string;
  bannerIcon: 'check' | 'warning' | 'error';
  bannerIconColor: string;
  bannerTitle: string;
  bannerSubtitle: string;
  showRecommendations?: boolean;
  showCannotFix?: boolean;
  creditPotential: string;
  debtLoad: string;
  debtLoadPercent: string;
  debtLoadColor: string;
  scenario: ScenarioType;
}) {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Frame15 rating={rating} ratingColor={ratingColor} barColor={barColor} statusText={statusText} statusColor={statusColor} bannerBg={bannerBg} bannerIcon={bannerIcon} bannerIconColor={bannerIconColor} bannerTitle={bannerTitle} bannerSubtitle={bannerSubtitle} showRecommendations={showRecommendations} showCannotFix={showCannotFix} creditPotential={creditPotential} debtLoad={debtLoad} debtLoadPercent={debtLoadPercent} debtLoadColor={debtLoadColor} scenario={scenario} />
    </div>
  );
}

function Participant({ rating, ratingColor, barColor, statusText, statusColor, bannerBg, bannerIcon, bannerIconColor, bannerTitle, bannerSubtitle, showRecommendations, showCannotFix, creditPotential, debtLoad, debtLoadPercent, debtLoadColor, scenario }: { 
  rating: string; 
  ratingColor: string; 
  barColor: string; 
  statusText: string; 
  statusColor: string; 
  bannerBg: string;
  bannerIcon: 'check' | 'warning' | 'error';
  bannerIconColor: string;
  bannerTitle: string;
  bannerSubtitle: string;
  showRecommendations?: boolean;
  showCannotFix?: boolean;
  creditPotential: string;
  debtLoad: string;
  debtLoadPercent: string;
  debtLoadColor: string;
  scenario: ScenarioType;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="participant_1">
      <Header1 />
      <Frame11 rating={rating} ratingColor={ratingColor} barColor={barColor} statusText={statusText} statusColor={statusColor} bannerBg={bannerBg} bannerIcon={bannerIcon} bannerIconColor={bannerIconColor} bannerTitle={bannerTitle} bannerSubtitle={bannerSubtitle} showRecommendations={showRecommendations} showCannotFix={showCannotFix} creditPotential={creditPotential} debtLoad={debtLoad} debtLoadPercent={debtLoadPercent} debtLoadColor={debtLoadColor} scenario={scenario} />
    </div>
  );
}

function FormContainer({ scenario }: { scenario: ScenarioType }) {
  const config = scenarioConfig[scenario];
  const showRecommendations = scenario === 'review' || scenario === 'rejected';
  const showCannotFix = scenario === 'rejected';
  
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Form Container">
      <ToolbarContainer />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#32393e] text-[36px] tracking-[-0.79px] w-[min-content]">
        <p className="leading-[1.3] whitespace-pre-wrap">Проверка рейтинга</p>
      </div>
      <Participant 
        rating={config.rating}
        ratingColor={config.ratingColor}
        barColor={config.barColor}
        statusText={config.statusText}
        statusColor={config.statusColor}
        bannerBg={config.bannerBg}
        bannerIcon={config.bannerIcon}
        bannerIconColor={config.bannerIconColor}
        bannerTitle={config.bannerTitle}
        bannerSubtitle={config.bannerSubtitle}
        showRecommendations={showRecommendations}
        showCannotFix={showCannotFix}
        creditPotential={config.creditPotential}
        debtLoad={config.debtLoad}
        debtLoadPercent={config.debtLoadPercent}
        debtLoadColor={config.debtLoadColor}
        scenario={scenario}
      />
    </div>
  );
}

function FormDividerEnd() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Form / divider_end">
      <div className="absolute inset-[-43.09%_0_0_0]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 870 1">
            <line id="Line 27" stroke="var(--stroke-0, #DEEBFF)" x2="870" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextLink() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text-link">
      <p className="col-1 font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] ml-0 mt-0 not-italic relative row-1 text-[#2474f5] text-[16px] tracking-[-0.18px]">Предыдущий шаг</p>
    </div>
  );
}

function SendLink() {
  return (
    <div className="content-stretch flex gap-[2px] items-center overflow-clip py-px relative shrink-0" data-name="send-link">
      <TextLink />
    </div>
  );
}

function FormButtonsBtnLink() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Form / Buttons / btn-link">
      <SendLink />
    </div>
  );
}

function DistributionShares() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-0.5px)] overflow-clip top-1/2" data-name="distribution-shares">
      <FormButtonsBtnLink />
    </div>
  );
}

function FormButtonsBtnStretchSecondary() {
  return (
    <div className="bg-[#f5faff] h-[56px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Form / Buttons / btn-stretch / secondary">
      <DistributionShares />
    </div>
  );
}

function Previous() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[9px] items-center min-h-px min-w-px relative" data-name="previous">
      <FormButtonsBtnStretchSecondary />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px] text-center tracking-[0.01px] w-full whitespace-pre-wrap">К подбору банка</p>
    </div>
  );
}

function FormButtonsBtnContentNoIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[18px] relative rounded-[5px] shrink-0" data-name="Form / Buttons / btn__content / no-icon">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.18px] whitespace-nowrap">
        <p className="leading-[20px]">Следующий шаг</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#5392f7] relative rounded-[8px] shrink-0 w-full" data-name="Form">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[14px] relative w-full">
          <FormButtonsBtnContentNoIcon />
        </div>
      </div>
    </div>
  );
}

function Next() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[9px] items-center min-h-px min-w-px relative" data-name="next">
      <Form />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#858585] text-[12px] text-center tracking-[0.01px] w-full whitespace-pre-wrap">К подписи анкеты</p>
    </div>
  );
}

function BtnBlock() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0 w-full" data-name="btn-block">
      <Previous />
      <Next />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end justify-center relative shrink-0 w-full" data-name="Footer">
      <FormDividerEnd />
      <BtnBlock />
    </div>
  );
}

function MainContainer({ scenario }: { scenario: ScenarioType }) {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start px-[8px] relative shrink-0 w-full max-w-[740px]" data-name="Main Container">
      <FormContainer scenario={scenario} />
      <Footer />
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[4px] h-[22px] items-center leading-[20px] not-italic overflow-clip relative shrink-0 text-[14px] tracking-[-0.09px] w-full" data-name="top">
      <p className="relative shrink-0 text-black">Ермолаев Евгений Федорович</p>
      <p className="relative shrink-0 text-[#a4adb2]">32 года</p>
    </div>
  );
}

function UserStatus() {
  return (
    <div className="bg-[#f7effe] content-stretch flex h-[20px] items-center px-[4px] py-px relative rounded-[4px] shrink-0" data-name="User Status">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6f658c] text-[12px] tracking-[0.01px] whitespace-nowrap">
        <p className="leading-[16px]">Подготовка</p>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="bottom">
      <UserStatus />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] tracking-[0.01px] whitespace-nowrap">
        <p className="leading-[16px]">+7 911 099-07-54</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="content">
      <Top1 />
      <Bottom />
    </div>
  );
}

function Component24PxOutlineContentCopy() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="24 px | Outline / content_copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="24 px | Outline / content_copy">
          <path d={svgPaths.p2230ddf0} fill="var(--fill-0, #32393E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MainButton1() {
  return (
    <div className="bg-[rgba(5,31,81,0.04)] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[9px] relative rounded-[8px] shrink-0" data-name="Main button">
      <Component24PxOutlineContentCopy />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#32393e] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">Создать копию</p>
      </div>
    </div>
  );
}

function Component24PxOutlineLink() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="24 px | Outline / link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="24 px | Outline / link">
          <path d={svgPaths.p340c3a00} fill="var(--fill-0, #32393E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(5,31,81,0.04)] content-stretch flex gap-[4px] items-center justify-center max-h-[36px] max-w-[36px] min-h-[36px] min-w-[36px] p-[9px] relative rounded-[8px] shrink-0" data-name="IconButton">
      <Component24PxOutlineLink />
    </div>
  );
}

function Component24PxOutlineSms() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="24 px | Outline / sms">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="24 px | Outline / sms">
          <path d={svgPaths.p1d5fe880} fill="var(--fill-0, #32393E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[rgba(5,31,81,0.04)] content-stretch flex gap-[4px] items-center justify-center max-h-[36px] max-w-[36px] min-h-[36px] min-w-[36px] p-[9px] relative rounded-[8px] shrink-0" data-name="IconButton">
      <Component24PxOutlineSms />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="button">
      <MainButton1 />
      <IconButton />
      <IconButton1 />
    </div>
  );
}

function SidebarCardClients() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="sidebar / card / clients">
      <Content2 />
      <Button2 />
    </div>
  );
}

function StepName() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="step-name">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e84e0e] text-[16px] tracking-[-0.26px] whitespace-nowrap">
        <p className="leading-[24px]">Ипотека</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex gap-[1.333px] items-start px-[5.333px] py-[1.333px] relative rounded-[5.333px] shrink-0" data-name="tag">
      <div aria-hidden="true" className="absolute border-[#e84e0e] border-[1.333px] border-solid inset-0 pointer-events-none rounded-[5.333px]" />
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e84e0e] text-[16px] text-right tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[normal]">ИП</p>
      </div>
      <div className="flex flex-col font-['JetBrains_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e84e0e] text-[16px] text-right tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[normal]">2302</p>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="step">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[20px] relative w-full">
          <StepName />
          <Tag />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute left-0 size-[8px] top-[8px]" data-name="nav">
      <div className="absolute bg-[#e84e0e] left-0 rounded-[2px] size-[8px] top-0" data-name="Nav Indicator" />
      <div className="absolute bg-[#e84e0e] h-[38px] left-[3px] top-[38px] w-[2px]" data-name="line / bottom" />
    </div>
  );
}

function NavProductActive() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[230px]" data-name="nav / product / active">
      <Step />
      <Nav />
    </div>
  );
}

function Nav1() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="nav">
      <div className="absolute bg-[#e84e0e] h-[24px] left-[3px] top-[5px] w-[2px]" data-name="line / bottom" />
      <div className="absolute bg-[#e84e0e] h-[3px] left-[3px] rounded-br-[1px] rounded-tr-[1px] top-[2px] w-[5px]" />
    </div>
  );
}

function SubstepName() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pl-[14px] relative shrink-0" data-name="substep-name">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4c555b] text-[14px] tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[normal]">Подбор банка</p>
      </div>
    </div>
  );
}

function SubstepNonActive() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Substep NonActive">
      <Nav1 />
      <SubstepName />
    </div>
  );
}

function Nav2() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="nav">
      <div className="absolute bg-[#e84e0e] h-[24px] left-[3px] top-[5px] w-[2px]" data-name="line / bottom" />
      <div className="absolute bg-[#e84e0e] h-[3px] left-[3px] rounded-br-[1px] rounded-tr-[1px] top-[2px] w-[5px]" />
    </div>
  );
}

function SubstepName1() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pl-[14px] relative shrink-0" data-name="substep-name">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4d565c] text-[14px] tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[normal]">Подготовка анкеты</p>
      </div>
    </div>
  );
}

function SubstepActive() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Substep Active">
      <Nav2 />
      <SubstepName1 />
    </div>
  );
}

function Nav3() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="nav">
      <div className="absolute bg-gradient-to-b from-[#e84e0e] h-[24px] left-[3px] to-[#eaecef] top-[5px] w-[2px]" data-name="line / bottom" />
      <div className="absolute bg-[#e84e0e] h-[3px] left-[3px] rounded-br-[1px] rounded-tr-[1px] top-[2px] w-[5px]" />
    </div>
  );
}

function SubstepName2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pl-[14px] relative shrink-0" data-name="substep-name">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e84e0e] text-[14px] tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[normal]">{`Проверка рейтинга `}</p>
      </div>
    </div>
  );
}

function SubstepVirgin() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Substep Virgin">
      <Nav3 />
      <SubstepName2 />
    </div>
  );
}

function Nav4() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="nav">
      <div className="absolute bg-[#eaecef] h-[24px] left-[3px] top-[5px] w-[2px]" data-name="line / bottom" />
      <div className="absolute bg-[#eaecef] h-[3px] left-[3px] rounded-br-[1px] rounded-tr-[1px] top-[2px] w-[5px]" />
    </div>
  );
}

function SubstepName3() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pl-[14px] relative shrink-0" data-name="substep-name">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4adb2] text-[14px] tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[normal]">Подпись анкеты</p>
      </div>
    </div>
  );
}

function SubstepVirgin1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Substep Virgin">
      <Nav4 />
      <SubstepName3 />
    </div>
  );
}

function Nav5() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="nav">
      <div className="absolute bg-[#eaecef] h-[24px] left-[3px] top-[5px] w-[2px]" data-name="line / bottom" />
      <div className="absolute bg-[#eaecef] h-[3px] left-[3px] rounded-br-[1px] rounded-tr-[1px] top-[2px] w-[5px]" />
    </div>
  );
}

function SubstepName4() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pl-[14px] relative shrink-0" data-name="substep-name">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4adb2] text-[14px] tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[normal]">Одобрение клиента</p>
      </div>
    </div>
  );
}

function SubstepVirgin2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Substep Virgin">
      <Nav5 />
      <SubstepName4 />
    </div>
  );
}

function Nav6() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="nav">
      <div className="absolute bg-[#eaecef] h-[3px] left-[3px] rounded-br-[1px] rounded-tr-[1px] top-[2px] w-[5px]" />
    </div>
  );
}

function SubstepName5() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip pl-[14px] relative shrink-0" data-name="substep-name">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a4adb2] text-[14px] tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[normal]">Одобрение объекта</p>
      </div>
    </div>
  );
}

function SubstepVirgin3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Substep Virgin">
      <Nav6 />
      <SubstepName5 />
    </div>
  );
}

function SubSteps() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="sub-steps">
      <SubstepNonActive />
      <SubstepActive />
      <SubstepVirgin />
      <SubstepVirgin1 />
      <SubstepVirgin2 />
      <SubstepVirgin3 />
    </div>
  );
}

function NavigationBusiness() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="navigation / business">
      <NavProductActive />
      <SubSteps />
    </div>
  );
}

function RightContainer() {
  return (
    <div className="content-stretch hidden lg:flex flex-col gap-[30px] items-start pt-[32px] px-[8px] shrink-0 sticky top-0 w-full max-w-[360px]" data-name="Right Container">
      <SidebarCardClients />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 1">
            <line id="Line 1" stroke="var(--stroke-0, #051F51)" strokeOpacity="0.04" x2="472" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <NavigationBusiness />
    </div>
  );
}

function Component1({ scenario }: { scenario: ScenarioType }) {
  return (
    <div className="content-stretch flex flex-col lg:flex-row items-start gap-[32px] lg:justify-between pb-[64px] px-4 relative shrink-0 w-full max-w-[1520px]" data-name="контейнер">
      <MainContainer scenario={scenario} />
      <RightContainer />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center overflow-clip relative shrink-0" data-name="link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858585] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Powered by</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="content">
      <Link />
    </div>
  );
}

function FormDocFileLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Form / Doc / file-link">
      <Content4 />
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[20.002px] relative shrink-0 w-[42.323px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.3234 20.0014">
        <g id="Group 1">
          <path d={svgPaths.p3b6d4f00} fill="var(--fill-0, #858585)" id="Vector" />
          <path d={svgPaths.p70e2000} fill="var(--fill-0, #858585)" id="Vector_2" />
          <path d={svgPaths.p1123df00} fill="var(--fill-0, #858585)" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p38984a00} fill="var(--fill-0, #858585)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p14a4480} fill="var(--fill-0, #858585)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p88f500} fill="var(--fill-0, #858585)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[20px] items-center overflow-clip relative shrink-0" data-name="row">
      <FormDocFileLink />
      <Group3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-center left-[calc(50%-0.5px)] overflow-clip top-1/2 w-[327px]" data-name="content">
      <Row6 />
    </div>
  );
}

function PageFooter() {
  return (
    <div className="bg-[#f5f6f8] h-[100px] relative shrink-0 w-full" data-name="Page Footer">
      <Content3 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center p-[20px] right-0" data-name="чат">
      <div className="relative rounded-[70px] shrink-0 size-[65px]" data-name="Снимок экрана 2024-12-06 в 10.19.44 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[70px]">
          <img alt="" className="absolute h-[118.46%] left-[-13.85%] max-w-none top-[-10.77%] w-[132.31%]" src={img202412061019441} />
        </div>
      </div>
    </div>
  );
}

export default function Component({ scenario = 'approved' }: { scenario?: ScenarioType }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center relative size-full" data-name="Проверка">
      <Header />
      <Component1 scenario={scenario} />
      <PageFooter />
      <Component5 />
    </div>
  );
}