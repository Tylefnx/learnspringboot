import React, { useState } from 'react';
import { ARCHITECTURE_FILES, ArchitectureFileNode } from '../data/architectureData';
import { CodeBlock } from './CodeBlock';
import { 
  Boxes, 
  FolderTree, 
  FileCode, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  Globe, 
  Cpu,
  Info,
  Check
} from 'lucide-react';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<ArchitectureFileNode>(ARCHITECTURE_FILES[0]);

  const getLayerBadgeStyle = (layer: string) => {
    if (layer.includes('Domain')) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    if (layer.includes('Application')) return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    if (layer.includes('Infrastructure')) return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
            <Boxes className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-white">Sanatsal Mimari: Hexagonal & Clean Architecture Turu</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Domain-Driven Design (DDD), Ports & Adapters ve Dependency Inversion prensiplerinin Spring Boot 3 ile saf zanaat (Software Craftsmanship) seviyesinde uygulanışı.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Layered Architecture Flow Diagram */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
        <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Bağımlılık Yönü (Dependency Rule): Dıştan İçe Doğru</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          {/* Layer 1: Presentation */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1.5">
            <div className="flex items-center justify-between font-bold text-amber-300">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                1. Presentation
              </span>
              <span className="text-[10px] font-mono opacity-80">HTTP / REST</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              İstekleri karşılar, DTO validasyonu yapar, Use Case arayüzünü çağırır.
            </p>
          </div>

          {/* Layer 2: Application */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-blue-500/30 space-y-1.5">
            <div className="flex items-center justify-between font-bold text-blue-300">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                2. Application
              </span>
              <span className="text-[10px] font-mono opacity-80">Use Cases</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              İş akışlarını koordine eder, transaction yönetir ve Domain Event fırlatır.
            </p>
          </div>

          {/* Layer 3: Domain */}
          <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/60 shadow-lg space-y-1.5 ring-1 ring-emerald-500/30">
            <div className="flex items-center justify-between font-bold text-emerald-300">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                3. Domain (Core)
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">Saf Java</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              İş kuralları, Value Object ve Portlar. Sıfır framework bağımlılığı!
            </p>
          </div>

          {/* Layer 4: Infrastructure */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 space-y-1.5">
            <div className="flex items-center justify-between font-bold text-purple-300">
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                4. Infrastructure
              </span>
              <span className="text-[10px] font-mono opacity-80">JPA / DB</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Spring Data JPA, Hibernate, JWT ve dış servis adaptörleri.
            </p>
          </div>
        </div>
      </div>

      {/* Explorer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive File Tree (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <FolderTree className="w-3.5 h-3.5 text-emerald-400" />
              Proje Dosya Ağacı
            </span>
            <span className="text-[10px] font-mono text-slate-500">Java 21 / Spring Boot 3</span>
          </div>

          <div className="space-y-1.5">
            {ARCHITECTURE_FILES.map((file) => {
              const isSelected = file.id === selectedFile.id;
              return (
                <button
                  key={file.id}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1 ${
                    isSelected
                      ? 'bg-slate-800 border-emerald-500 text-slate-100 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileCode className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span className="text-xs font-mono font-bold text-slate-200">{file.name}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 truncate">{file.path}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Code & Architectural Design Rationale (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          {/* Detail card of selected file */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getLayerBadgeStyle(selectedFile.layer)}`}>
                  {selectedFile.layer}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-300">
                  Desen: <strong className="text-white">{selectedFile.pattern}</strong>
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400">{selectedFile.path}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">{selectedFile.description}</p>

            <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5" />
              <span><strong>Mimari Kazanç: </strong>{selectedFile.keyTakeaway}</span>
            </div>
          </div>

          {/* Code Viewer */}
          <CodeBlock
            code={selectedFile.code}
            language="java"
            filename={selectedFile.name}
            showLineNumbers={true}
          />
        </div>
      </div>
    </div>
  );
};
