import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldAlert, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  FileCode2, 
  Bot, 
  Copy, 
  Check, 
  AlertTriangle, 
  Search, 
  ExternalLink,
  Cpu,
  Flame,
  FileCheck
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getVibeCodingData, VibeCodingPattern } from '../data/vibeCodingData';
import { VibeCodingVisualizer } from '../components/VibeCodingVisualizer';

export const VibeCodingPage: React.FC = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';
  const data = getVibeCodingData(language);

  // States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePatternId, setActivePatternId] = useState<string>(data.patterns[0].id);
  const [codeViewMode, setCodeViewMode] = useState<'bad' | 'good' | 'guardrail'>('bad');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activePattern = data.patterns.find(p => p.id === activePatternId) || data.patterns[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredPatterns = data.patterns.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.impact.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-6 animate-in fade-in duration-300">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>{isTr ? 'Yapay Zekâ Destekli Spring Boot & Güvenlik Raporu' : 'AI-Assisted Spring Boot & Security Guide'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight sm:leading-tight">
            {isTr ? (
              <>
                Yapay Zekâ ile Kodlama (Vibe Coding) <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Hata Modelleri ve Otomatize Güvenlik Süzgeçleri
                </span>
              </>
            ) : (
              <>
                AI-Assisted Development (Vibe Coding) <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Error Typologies & Automated Quality Gates
                </span>
              </>
            )}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {isTr
              ? 'Büyük dil modellerinin (LLM) Spring Boot projelerinde ürettiği sessiz mimari yanılgılar: AOP proxy körlüğü, BOLA yetkilendirme açıkları, Actuator sızıntıları, ArchUnit kuralları ve CI/CD güvenlik geçitleri.'
              : 'Architectural pitfalls and silent security defects produced by LLMs in Spring Boot: AOP proxy bypasses, BOLA/IDOR vulnerabilities, Actuator leaks, ArchUnit guardrails, and automated CI/CD quality gates.'}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
              <span className="text-2xl font-black text-white">8</span>
              <p className="text-xs text-slate-400 mt-0.5">{isTr ? 'Kritik Hata Modeli' : 'Critical Pitfall Models'}</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
              <span className="text-2xl font-black text-emerald-400">ArchUnit</span>
              <p className="text-xs text-slate-400 mt-0.5">{isTr ? 'Statik Mimari Testleri' : 'Static Architecture Rules'}</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
              <span className="text-2xl font-black text-teal-400">Semgrep</span>
              <p className="text-xs text-slate-400 mt-0.5">{isTr ? 'SAST & Kural Şablonları' : 'SAST Rule Templates'}</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5">
              <span className="text-2xl font-black text-cyan-400">AI Review</span>
              <p className="text-xs text-slate-400 mt-0.5">{isTr ? 'Otomatize PR İstemi' : 'Automated PR Prompts'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AOP Dynamic Proxy Visualizer Component */}
      <VibeCodingVisualizer />

      {/* Main Pitfall Explorer & Code Comparison Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
              <ShieldAlert className="w-6 h-6 text-rose-400" />
              <span>{isTr ? 'LLM Hata Modelleri ve 3 Katmanlı Çözüm İnceleyicisi' : 'LLM Pitfall Models & 3-Tier Solution Inspector'}</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {isTr 
                ? 'Kusurlu yapay zekâ kodunu, production seviyesindeki temiz çözümü ve CI/CD derlemesinde bunu yakalayan test kuralını karşılaştırın.'
                : 'Compare flawed AI code against production-ready fixes and automated CI/CD guardrail assertions.'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: isTr ? 'Tümü (8)' : 'All (8)' },
              { id: 'aop', label: isTr ? 'AOP & Transaction' : 'AOP & Transactions' },
              { id: 'security', label: isTr ? 'Güvenlik & BOLA' : 'Security & BOLA' },
              { id: 'jpa', label: isTr ? 'JPA & Performans' : 'JPA & Performance' },
              { id: 'singleton', label: isTr ? 'Singleton & Concurrency' : 'Singleton & Concurrency' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Pattern Selector List */}
          <div className="lg:col-span-4 space-y-3">
            {filteredPatterns.map((pattern) => {
              const isActive = pattern.id === activePattern.id;
              return (
                <button
                  key={pattern.id}
                  onClick={() => setActivePatternId(pattern.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/30'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {pattern.categoryLabel}
                    </span>
                    <span className="text-[10px] font-semibold text-rose-400 bg-rose-950/60 border border-rose-500/30 px-2 py-0.5 rounded-full">
                      {pattern.dangerBadge.split(':')[0]}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">{pattern.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{pattern.summary}</p>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Code Comparison & Analysis */}
          <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Pattern Title & Badge */}
            <div className="border-b border-slate-800 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  {activePattern.categoryLabel}
                </span>
                <span className="text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-500/40 px-3 py-1 rounded-full">
                  ⚠️ {activePattern.dangerBadge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">{activePattern.title}</h3>
              <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{activePattern.summary}</p>
            </div>

            {/* 3-Way Code View Tabs */}
            <div className="flex items-center justify-between bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCodeViewMode('bad')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    codeViewMode === 'bad'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>{isTr ? '1. Kusurlu AI Kodu' : '1. Flawed AI Code'}</span>
                </button>

                <button
                  onClick={() => setCodeViewMode('good')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    codeViewMode === 'good'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{isTr ? '2. Production Çözümü' : '2. Production Fix'}</span>
                </button>

                <button
                  onClick={() => setCodeViewMode('guardrail')}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    codeViewMode === 'guardrail'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isTr ? '3. CI/CD Süzgeci' : '3. CI/CD Guardrail'}</span>
                </button>
              </div>

              {/* Copy Code Button */}
              <button
                onClick={() => {
                  const targetCode = 
                    codeViewMode === 'bad' 
                      ? activePattern.badCode.code 
                      : codeViewMode === 'good' 
                      ? activePattern.goodCode.code 
                      : activePattern.guardrailCode.code;
                  handleCopy(targetCode, activePattern.id);
                }}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition-all"
                title={isTr ? 'Kodu Kopyala' : 'Copy Code'}
              >
                {copiedId === activePattern.id ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Code Block Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 font-mono text-xs shadow-inner">
              {/* Code Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80 text-slate-400">
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-semibold text-slate-300">
                    {codeViewMode === 'bad'
                      ? activePattern.badCode.filename
                      : codeViewMode === 'good'
                      ? activePattern.goodCode.filename
                      : activePattern.guardrailCode.filename}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {codeViewMode === 'guardrail' ? activePattern.guardrailCode.tool : 'Java / Spring'}
                </span>
              </div>

              {/* Code Snippet Body */}
              <div className="p-4 overflow-x-auto max-h-[380px] text-slate-200 leading-relaxed select-text">
                <pre>
                  <code>
                    {codeViewMode === 'bad' && activePattern.badCode.code}
                    {codeViewMode === 'good' && activePattern.goodCode.code}
                    {codeViewMode === 'guardrail' && activePattern.guardrailCode.code}
                  </code>
                </pre>
              </div>
            </div>

            {/* Flaw / Fix Description Card */}
            <div className={`p-4 rounded-2xl border ${
              codeViewMode === 'bad'
                ? 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                : codeViewMode === 'good'
                ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                : 'bg-cyan-950/20 border-cyan-500/30 text-cyan-200'
            }`}>
              <h5 className="text-xs font-bold uppercase tracking-wider mb-1">
                {codeViewMode === 'bad'
                  ? isTr ? '🔴 Kusurun Teknik Sebebi' : '🔴 Technical Root Cause'
                  : codeViewMode === 'good'
                  ? isTr ? '🟢 Uygulanan Mimari Çözüm' : '🟢 Applied Architecture Fix'
                  : isTr ? '🛡️ Otomatize Denetim Mantığı' : '🛡️ Automated Guardrail Logic'}
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {codeViewMode === 'bad' && activePattern.badCode.flawExplanation}
                {codeViewMode === 'good' && activePattern.goodCode.fixExplanation}
                {codeViewMode === 'guardrail' && activePattern.guardrailCode.explanation}
              </p>
            </div>

            {/* Risk & Impact Callout */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  {isTr ? 'Sistem & Güvenlik Etkisi:' : 'System & Security Impact:'}
                </span>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{activePattern.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ArchUnit Rules Catalog */}
      <section className="space-y-6 pt-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
            <FileCheck className="w-3.5 h-3.5" />
            <span>{isTr ? 'Deterministik Mimari Yaptırımları' : 'Deterministic Architectural Enforcement'}</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            {isTr ? 'ArchUnit Kurumsal Mimari Test Kütüphanesi' : 'ArchUnit Enterprise Rulebook'}
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            {isTr
              ? 'Yapay zekânın ürettiği kodların mimari sınırları delmesini engellemek için CI/CD hattında birim test olarak çalışan kurallar.'
              : 'Executable unit test rules that strictly enforce layer separation and prevent AI code decay in continuous integration.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.archUnitRules.map((rule) => (
            <div key={rule.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                    {rule.category}
                  </span>
                  <button
                    onClick={() => handleCopy(rule.code, rule.id)}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-950 border border-slate-800 rounded-lg transition-all"
                    title="Copy ArchUnit Rule"
                  >
                    {copiedId === rule.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <h3 className="text-base font-bold text-white">{rule.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{rule.description}</p>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-200">
                <pre className="overflow-x-auto">
                  <code>{rule.code}</code>
                </pre>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] text-emerald-300/90 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{rule.purpose}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI PR Reviewer Prompts & Automated Threat Model */}
      <section className="space-y-6 pt-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <Bot className="w-3.5 h-3.5" />
            <span>{isTr ? 'Yapay Zekâ ile Yapay Zekâyı Denetleme' : 'AI-Assisted Automated Guardrails'}</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            {isTr ? 'AI PR Reviewer & Tehdit Modelleme İstemi Şablonları' : 'AI PR Reviewer & Threat Modeling Prompt Hub'}
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            {isTr
              ? 'GitHub Actions veya GitLab CI süreçlerinize doğrudan entegre edebileceğiniz, AOP ve BOLA açıklarını yakalamak üzere kalibre edilmiş sistem istemleri.'
              : 'Calibrated system prompts for GitHub Actions and developer tools to automatically audit Spring Boot PRs for AOP bypasses and BOLA defects.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.promptGuardrails.map((prompt) => (
            <div key={prompt.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold">
                    {prompt.targetRole}
                  </span>
                  <button
                    onClick={() => handleCopy(prompt.systemPrompt, prompt.id)}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-950 border border-slate-800 rounded-lg transition-all"
                    title="Copy System Prompt"
                  >
                    {copiedId === prompt.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <h3 className="text-base font-bold text-white">{prompt.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{prompt.description}</p>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-3 font-mono text-[11px] text-slate-200 max-h-52 overflow-y-auto">
                <pre className="whitespace-pre-wrap">{prompt.systemPrompt}</pre>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] text-cyan-300/90 flex items-start gap-2">
                <span className="font-bold shrink-0">🔍 Örnek Tespit:</span>
                <span>{prompt.exampleFinding}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Audit Matrix Table */}
      <section className="space-y-6 pt-6">
        <div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            {isTr ? 'Spring Boot Hata Modelleri ve Denetim Matrisi' : 'Spring Boot Defect & Audit Matrix'}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            {isTr
              ? 'Araştırma raporunda tespit edilen tüm zafiyet alanlarının, otomatize araçlarının ve kontrol yöntemlerinin özeti.'
              : 'Synthesis of defect areas, failure modes, static tooling, and AI-assisted verification methodologies.'}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
              <tr>
                <th className="px-4 py-3.5 font-bold">{isTr ? 'Hata / Zafiyet Alanı' : 'Defect / Vulnerability Area'}</th>
                <th className="px-4 py-3.5 font-bold">{isTr ? 'Kusurlu AI Kalıbı' : 'Flawed AI Pattern'}</th>
                <th className="px-4 py-3.5 font-bold">{isTr ? 'Arıza Modu & Risk' : 'Failure Mode & Risk'}</th>
                <th className="px-4 py-3.5 font-bold">{isTr ? 'Otomatize Denetim Aracı' : 'Automated Tool'}</th>
                <th className="px-4 py-3.5 font-bold">{isTr ? 'Yapay Zekâ Kontrol Yöntemi' : 'AI Verification Method'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {data.auditMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="px-4 py-3 font-bold text-white whitespace-nowrap">{row.area}</td>
                  <td className="px-4 py-3 font-mono text-rose-300/90">{row.badPattern}</td>
                  <td className="px-4 py-3 text-slate-300">{row.impact}</td>
                  <td className="px-4 py-3 font-mono text-emerald-400">{row.tool}</td>
                  <td className="px-4 py-3 text-cyan-300">{row.aiVerification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Academic & Industry Research Citations */}
      <section className="space-y-4 pt-6 border-t border-slate-800">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ExternalLink className="w-4 h-4 text-emerald-400" />
          <span>{isTr ? 'Akademik & Sektörel Kaynakça' : 'Academic & Industry Research Sources'}</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.sources.map((src, idx) => (
            <a
              key={idx}
              href={src.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-850/80 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">{src.publisher}</span>
                <h4 className="text-xs font-bold text-slate-200 group-hover:text-white mt-1 line-clamp-2">
                  {src.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{src.note}</p>
              </div>
              <div className="mt-3 flex items-center text-[11px] text-slate-500 group-hover:text-emerald-400 font-medium">
                <span>{isTr ? 'Raporu İncele' : 'View Source'}</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
