import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, ArrowRight, RefreshCw, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const VibeCodingVisualizer: React.FC = () => {
  const { language } = useLanguage();
  const [activeMode, setActiveMode] = useState<'external' | 'selfInvocation'>('selfInvocation');
  const [step, setStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const isTr = language === 'tr';

  const runSimulation = (mode: 'external' | 'selfInvocation') => {
    setActiveMode(mode);
    setStep(1);
    setIsSimulating(true);

    const timer1 = setTimeout(() => setStep(2), 600);
    const timer2 = setTimeout(() => setStep(3), 1300);
    const timer3 = setTimeout(() => {
      setStep(4);
      setIsSimulating(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            {isTr ? 'İnteraktif AOP Proxy Simülatörü' : 'Interactive AOP Proxy Simulator'}
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {isTr
              ? 'Spring AOP Dinamik Proxy & Self-Invocation Mekanizması'
              : 'Spring AOP Dynamic Proxy & Self-Invocation Mechanics'}
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            {isTr
              ? 'Yapay zekânın en sık ürettiği hata: Aynı sınıf içindeki bir metodun diğer @Transactional metodu çağırması proxy katmanını nasıl tamamen devre dışı bırakır?'
              : 'The #1 AI pitfall: How invoking another @Transactional method within the same service bean silently bypasses the proxy container.'}
          </p>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 shrink-0">
          <button
            onClick={() => runSimulation('selfInvocation')}
            disabled={isSimulating}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'selfInvocation'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>{isTr ? '🔴 Kusurlu: Self-Invocation (this.)' : '🔴 Flawed: Self-Invocation (this.)'}</span>
          </button>

          <button
            onClick={() => runSimulation('external')}
            disabled={isSimulating}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === 'external'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{isTr ? '🟢 Doğru: Ayrı Bean / Dış Çağrı' : '🟢 Correct: Dedicated Bean Call'}</span>
          </button>
        </div>
      </div>

      {/* Visual Workflow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
        {/* Step 1: HTTP Client Request */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            step >= 1
              ? 'bg-slate-950 border-emerald-500/40 shadow-lg shadow-emerald-950/30'
              : 'bg-slate-950/40 border-slate-800 text-slate-500'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">1. İSTEK</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <h4 className="text-sm font-bold text-white mb-1">HTTP Client / Controller</h4>
          <p className="text-xs text-slate-400 font-mono">POST /api/orders/batch</p>
          <p className="text-[11px] text-slate-500 mt-2">
            {isTr ? 'İstemci toplu sipariş isteğini gönderir.' : 'Client dispatches batch order request.'}
          </p>
        </div>

        {/* Step 2: Spring AOP Dynamic Proxy */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 relative ${
            activeMode === 'selfInvocation'
              ? 'bg-rose-950/20 border-rose-500/30 text-rose-200'
              : step >= 2
              ? 'bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-950/40'
              : 'bg-slate-950/40 border-slate-800 text-slate-500'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">2. AOP PROXY</span>
            {activeMode === 'selfInvocation' ? (
              <XCircle className="w-4 h-4 text-rose-400" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            )}
          </div>
          <h4 className="text-sm font-bold text-white mb-1">
            {activeMode === 'selfInvocation'
              ? isTr
                ? '⚠️ Proxy Baypas Edildi!'
                : '⚠️ Proxy Bypassed!'
              : isTr
              ? 'Spring CGLIB Proxy'
              : 'Spring CGLIB Proxy'}
          </h4>
          <p className="text-xs font-mono text-slate-400">
            {activeMode === 'selfInvocation' ? 'this.saveSingleOrder()' : 'TransactionInterceptor'}
          </p>
          <p className="text-[11px] mt-2">
            {activeMode === 'selfInvocation'
              ? (isTr
                  ? 'Aynı sınıf içi çağrıda Java doğrudan hedef nesneye gider. Proxy interceptor HİÇ ÇALIŞMAZ!'
                  : 'Internal "this." calls invoke raw methods directly. Interceptors are never executed!')
              : (isTr
                  ? 'Proxy araya girer: "BEGIN TRANSACTION" komutunu çalıştırır ve veritabanı bağlantısı açar.'
                  : 'Proxy intercepts: issues "BEGIN TRANSACTION" and prepares isolation context.')}
          </p>
        </div>

        {/* Step 3: Target Method Execution */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            step >= 3
              ? 'bg-slate-950 border-cyan-500/40 shadow-lg shadow-cyan-950/30'
              : 'bg-slate-950/40 border-slate-800 text-slate-500'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">3. SERVİS İŞ MANTIĞI</span>
          </div>
          <h4 className="text-sm font-bold text-white mb-1">SingleOrderProcessor</h4>
          <p className="text-xs text-slate-400 font-mono">orderRepository.save(req)</p>
          <p className="text-[11px] text-slate-400 mt-2">
            {isTr ? 'İş mantığı yürütülür ve hata (Exception) fırlatılır.' : 'Business logic executes and throws exception.'}
          </p>
        </div>

        {/* Step 4: Outcome / Rollback */}
        <div
          className={`p-4 rounded-xl border transition-all duration-300 ${
            activeMode === 'selfInvocation'
              ? 'bg-rose-950/40 border-rose-500/60 shadow-lg shadow-rose-950/50'
              : step >= 4
              ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-950/50'
              : 'bg-slate-950/40 border-slate-800 text-slate-500'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">4. SONUÇ</span>
            {activeMode === 'selfInvocation' ? (
              <span className="text-[10px] font-bold text-rose-400 bg-rose-950 px-2 py-0.5 rounded border border-rose-500/30">
                {isTr ? 'BOZUK VERİ' : 'CORRUPTED'}
              </span>
            ) : (
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                {isTr ? 'GÜVENLİ' : 'SAFE'}
              </span>
            )}
          </div>
          <h4 className="text-sm font-bold text-white mb-1">
            {activeMode === 'selfInvocation'
              ? (isTr ? '💥 Rollback Yapılamadı!' : '💥 Rollback Failed!')
              : (isTr ? '🛡️ Rollback Başarılı!' : '🛡️ Rollback Succeeded!')}
          </h4>
          <p className="text-[11px] mt-2 text-slate-300">
            {activeMode === 'selfInvocation'
              ? (isTr
                  ? 'İşlem başlatılmadığı için veritabanına yarım kalan veri commit edildi. Bakiye eksildi ama sipariş kaydedilemedi!'
                  : 'No transaction existed. Incomplete changes committed. Balance was debited with zero order creation!')
              : (isTr
                  ? 'AOP Proxy istisnayı yakaladı ve veritabanı durumunu anında geri alarak (ROLLBACK) veri bütünlüğünü korudu.'
                  : 'AOP Proxy caught the exception, initiated clean ROLLBACK, and fully preserved data integrity.')}
          </p>
        </div>
      </div>

      {/* Action Footer Callout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
        <div className="flex items-center gap-3">
          <AlertTriangle className={`w-5 h-5 shrink-0 ${activeMode === 'selfInvocation' ? 'text-rose-400' : 'text-emerald-400'}`} />
          <span className="text-xs text-slate-300 leading-relaxed">
            {activeMode === 'selfInvocation'
              ? isTr
                ? 'Kural: Spring\'de @Transactional veya @Async metotlar asla aynı sınıf içerisinden doğrudan (this.metot) çağrılmamalıdır.'
                : 'Rule: Never invoke @Transactional or @Async methods internally via "this." inside the same Spring bean.'
              : isTr
                ? 'Kural: İşlem yönetimi gerektiren metotlar ayrı bir Spring Bean\'e taşınmalı veya TransactionTemplate kullanılmalıdır.'
                : 'Rule: Extract transactional units into dedicated Spring beans or utilize programmatic TransactionTemplate.'}
          </span>
        </div>

        <button
          onClick={() => runSimulation(activeMode === 'selfInvocation' ? 'external' : 'selfInvocation')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-all shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{isTr ? 'Diğer Senaryoyu Test Et' : 'Simulate Other Scenario'}</span>
        </button>
      </div>
    </div>
  );
};
