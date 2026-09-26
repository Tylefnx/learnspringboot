import React, { useState } from 'react';
import { InteractivePlayground } from '../components/InteractivePlayground';
import { ArchitectureExplorer } from '../components/ArchitectureExplorer';
import { LifecycleVisualizer } from '../components/LifecycleVisualizer';
import { RestApiSimulator } from '../components/RestApiSimulator';
import { StarterBuilder } from '../components/StarterBuilder';
import { Code2, Terminal, Box, Layers, Boxes, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const PracticePage: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'coding' | 'architecture' | 'lifecycle' | 'api' | 'starter'>('coding');
  const { t } = useLanguage();

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.practice.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">{t.practice.title}</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
            {t.practice.desc}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1 rounded-2xl border border-slate-800 text-xs shrink-0">
          <button
            onClick={() => setActiveTool('coding')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeTool === 'coding'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Studio</span>
          </button>

          <button
            onClick={() => setActiveTool('architecture')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeTool === 'architecture'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Boxes className="w-3.5 h-3.5" />
            <span>Hexagonal</span>
          </button>

          <button
            onClick={() => setActiveTool('lifecycle')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeTool === 'lifecycle'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Lifecycle</span>
          </button>

          <button
            onClick={() => setActiveTool('api')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeTool === 'api'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>REST & SQL</span>
          </button>

          <button
            onClick={() => setActiveTool('starter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all ${
              activeTool === 'starter'
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-bold'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
            }`}
          >
            <Box className="w-3.5 h-3.5" />
            <span>Initializr</span>
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
