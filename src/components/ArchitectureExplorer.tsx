import React, { useState, useMemo, useEffect } from 'react';
import { getArchitectureData, ArchitectureFileNode } from '../data/architectureData';
import { CodeBlock } from './CodeBlock';
import { 
  Boxes, 
  FolderTree, 
  FileCode, 
  Layers, 
  ArrowRight, 
  Globe, 
  Info,
  Check
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const ArchitectureExplorer: React.FC = () => {
  const { language } = useLanguage();
  const architectureFiles = useMemo(() => getArchitectureData(language), [language]);
  const [selectedFile, setSelectedFile] = useState<ArchitectureFileNode>(architectureFiles[0]);

  useEffect(() => {
    const matching = architectureFiles.find(f => f.id === selectedFile.id) || architectureFiles[0];
    setSelectedFile(matching);
  }, [language, architectureFiles]);

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
            <h2 className="text-xl font-bold text-white">
              {language === 'en' ? 'Hexagonal & Clean Architecture Explorer' : 'Sanatsal Mimari: Hexagonal & Clean Architecture Turu'}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {language === 'en' 
                ? 'Domain-Driven Design (DDD), Ports & Adapters, and Dependency Inversion in Spring Boot 3.' 
                : 'Domain-Driven Design (DDD), Ports & Adapters ve Dependency Inversion prensiplerinin Spring Boot 3 ile saf zanaat seviyesinde uygulanışı.'}
            </p>
          </div>
        </div>
      </div>

      {/* Visual Layered Architecture Flow Diagram */}
      <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
        <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>{language === 'en' ? 'Dependency Direction: Outer to Core' : 'Bağımlılık Yönü: Dıştan İçe Doğru'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          {/* Layer 1: Presentation */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1.5">
            <div className="flex items-center justify-between font-bold text-amber-300">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                1. Presentation
              </span>
              <span className="text-[10px] opacity-70">Inbound Adapter</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {language === 'en' ? 'REST Controller, DTOs & JSON validation.' : 'REST Controller, DTO\'lar ve JSON validasyonu.'}
            </p>
          </div>

          {/* Layer 2: Application */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-blue-500/30 space-y-1.5">
            <div className="flex items-center justify-between font-bold text-blue-300">
              <span>2. Application</span>
              <span className="text-[10px] opacity-70">Use Cases</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {language === 'en' ? 'Orchestrates use cases and domain events.' : 'Kullanım senaryoları ve domain event orkestrasyonu.'}
            </p>
          </div>

          {/* Layer 3: Domain */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/50 bg-emerald-950/10 space-y-1.5">
            <div className="flex items-center justify-between font-bold text-emerald-400">
              <span>3. Domain (Core)</span>
              <span className="text-[10px] opacity-70">Pure Java</span>
            </div>
            <p className="text-[11px] text-slate-300">
              {language === 'en' ? 'Entities, Value Objects & Ports. Zero framework dependencies.' : 'Entity, Value Object ve Portlar. Sıfır framework bağımlılığı.'}
            </p>
          </div>

          {/* Layer 4: Infrastructure */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 space-y-1.5">
            <div className="flex items-center justify-between font-bold text-purple-300">
              <span>4. Infrastructure</span>
              <span className="text-[10px] opacity-70">Outbound Adapter</span>
            </div>
            <p className="text-[11px] text-slate-400">
              {language === 'en' ? 'Spring Data JPA, PostgreSQL & third-party APIs.' : 'Spring Data JPA, PostgreSQL ve dış API entegrasyonu.'}
            </p>
          </div>
        </div>
      </div>

      {/* Explorer: Left Tree Navigation + Right Code View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: File Tree */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider px-1">
            <FolderTree className="w-4 h-4 text-emerald-400" />
            <span>springboot-reference-app/</span>
          </div>

          <div className="space-y-1.5">
            {architectureFiles.map((file) => {
              const isSelected = selectedFile.id === file.id;
              return (
                <button
                  key={file.id}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-slate-800/90 border-emerald-500/50 shadow-md text-white'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/40 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileCode className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span className="font-mono text-xs font-semibold">{file.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>

                  <div className="flex items-center justify-between text-[10px]">
                    <span className={`px-2 py-0.5 rounded-full border ${getLayerBadgeStyle(file.layer)}`}>
                      {file.layer.split(' ')[0]}
                    </span>
                    <span className="text-slate-500 font-mono truncate max-w-[150px]">{file.pattern}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Code & Architecture Insight */}
        <div className="lg:col-span-8 space-y-4">
          {/* File Insight Banner */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
              <div>
                <span className="text-[10px] font-mono text-slate-500">{selectedFile.path}</span>
                <h3 className="text-sm font-bold text-white">{selectedFile.pattern}</h3>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border self-start ${getLayerBadgeStyle(selectedFile.layer)}`}>
                {selectedFile.layer}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedFile.description}
            </p>

            <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <span><strong>{language === 'en' ? 'Architectural Rationale:' : 'Mimari Racon:'}</strong> {selectedFile.keyTakeaway}</span>
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
