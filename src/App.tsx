import { useState } from 'react';
import Проверка from './imports/Проверка';

export type ScenarioType = 'approved' | 'review' | 'rejected';

export default function App() {
  const [scenario, setScenario] = useState<ScenarioType>('approved');

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Кнопки переключения сценариев */}
      <div className="bg-white border-b border-[#e5e7eb] flex gap-[8px] items-center justify-center p-[16px] w-full">
        <button
          onClick={() => setScenario('approved')}
          className={`px-[16px] py-[8px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] transition-all ${
            scenario === 'approved'
              ? 'bg-[#04b44a] text-white'
              : 'bg-[#f5f6f8] text-[#858585] hover:bg-[#e5e7eb]'
          }`}
        >
          Предварительно одобрен
        </button>
        <button
          onClick={() => setScenario('review')}
          className={`px-[16px] py-[8px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] transition-all ${
            scenario === 'review'
              ? 'bg-[#f59e0b] text-white'
              : 'bg-[#f5f6f8] text-[#858585] hover:bg-[#e5e7eb]'
          }`}
        >
          Требуется проверка
        </button>
        <button
          onClick={() => setScenario('rejected')}
          className={`px-[16px] py-[8px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] transition-all ${
            scenario === 'rejected'
              ? 'bg-[#ef4444] text-white'
              : 'bg-[#f5f6f8] text-[#858585] hover:bg-[#e5e7eb]'
          }`}
        >
          Предварительно не одобрен
        </button>
      </div>

      {/* Основной контент */}
      <Проверка scenario={scenario} />
    </div>
  );
}
