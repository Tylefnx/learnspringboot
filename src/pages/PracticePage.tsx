import React, { useState } from 'react';
import { InteractivePlayground } from '../components/InteractivePlayground';
import { ArchitectureExplorer } from '../components/ArchitectureExplorer';
import { LifecycleVisualizer } from '../components/LifecycleVisualizer';
import { RestApiSimulator } from '../components/RestApiSimulator';
import { StarterBuilder } from '../components/StarterBuilder';
import { Code2, Terminal, Box, Layers, Boxes } from 'lucide-react';

export const PracticePage: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'coding' | 'architecture' | 'lifecycle' | 'api' | 'starter'>('coding');

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">İnteraktif Pratik & Mimari Laboratuvarı</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Spring Boot kodlarını doğrudan tarayıcıda yazın, Hexagonal Clean Architecture yapısını inceleyin ve canlı simülatörleri deneyimleyin.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTool('coding')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTool === 'coding'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Canlı Kod Yazma IDE</span>
          </button>

          <button
            onClick={() => setActiveTool('architecture')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTool === 'architecture'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Sanatsal Mimari Turu</span>
          </button>

          <button
            onClick={() => setActiveTool('lifecycle')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTool === 'lifecycle'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>İstek Akışı</span>
          </button>

          <button
            onClick={() => setActiveTool('api')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTool === 'api'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>REST & SQL</span>
          </button>

          <button
            onClick={() => setActiveTool('starter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              activeTool === 'starter'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Starter</span>
          </button>
        </div>
      </div>

      {/* Tool Content View */}
      <div>
        {activeTool === 'coding' && <InteractivePlayground />}
        {activeTool === 'architecture' && <ArchitectureExplorer />}
        {activeTool === 'lifecycle' && <LifecycleVisualizer />}
        {activeTool === 'api' && <RestApiSimulator />}
        {activeTool === 'starter' && <StarterBuilder />}
      </div>
    </div>
  );
};
