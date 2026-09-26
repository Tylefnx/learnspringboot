import React, { useState } from 'react';
import { SIMULATED_ENDPOINTS } from '../data/simulatedEndpoints';
import { SimulatedEndpoint } from '../types';
import { Send, Terminal, Database, Code2, CheckCircle2, Clock, Shield } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { useLanguage } from '../i18n/LanguageContext';

export const RestApiSimulator: React.FC = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  const [selectedEndpoint, setSelectedEndpoint] = useState<SimulatedEndpoint>(SIMULATED_ENDPOINTS[0]);
  const [activeTab, setActiveTab] = useState<'response' | 'sql' | 'springCode'>('response');
  const [isSending, setIsSending] = useState(false);
  const [responseOutput, setResponseOutput] = useState<any>(selectedEndpoint.responseBody);
  const [responseTimeMs, setResponseTimeMs] = useState<number>(45);

  const handleSelectEndpoint = (ep: SimulatedEndpoint) => {
    setSelectedEndpoint(ep);
    setResponseOutput(ep.responseBody);
  };

  const handleSendRequest = () => {
    setIsSending(true);
    const mockLatency = Math.floor(Math.random() * 35) + 30;
    setTimeout(() => {
      setResponseOutput(selectedEndpoint.responseBody);
      setResponseTimeMs(mockLatency);
      setIsSending(false);
    }, 400);
  };

  const getMethodBadgeClass = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'POST': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'PUT': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'DELETE': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-slate-700 text-slate-300';
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl p-6 overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Terminal className="w-4 h-4" />
          </span>
          <h3 className="text-lg font-bold text-white">
            {isTr ? 'İnteraktif REST API & Hibernate SQL Simülatörü' : 'Interactive REST API & Hibernate SQL Simulator'}
          </h3>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {isTr
            ? 'Spring Boot API uçlarına test istekleri atın, üretilen gerçek JSON yanıtlarını, durum kodlarını ve arka planda çalışan Hibernate SQL sorgularını inceleyin.'
            : 'Execute test requests against simulated Spring Boot endpoints; inspect serialized JSON responses, status codes, and underlying Hibernate SQL queries.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Endpoint Selector List */}
        <div className="lg:col-span-4 space-y-2">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            {isTr ? 'Simüle Edilmiş Uç Noktalar' : 'Simulated Endpoints'}
          </label>
          <div className="space-y-1.5">
            {SIMULATED_ENDPOINTS.map((ep) => {
              const isSelected = ep.id === selectedEndpoint.id;
              return (
                <button
                  key={ep.id}
                  onClick={() => handleSelectEndpoint(ep)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-slate-800 border-emerald-500/70 shadow-md ring-1 ring-emerald-500/40'
                      : 'bg-slate-950/50 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${getMethodBadgeClass(ep.method)}`}>
                      {ep.method}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px]">{ep.path}</span>
                  </div>
                  <div className="text-xs font-medium text-slate-200">{ep.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Request Bar & Response Inspector */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          {/* Request Address Bar */}
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-700/80 rounded-xl p-2 shadow-inner">
            <span className={`text-xs font-mono font-bold px-2.5 py-1.5 rounded-lg border ${getMethodBadgeClass(selectedEndpoint.method)}`}>
              {selectedEndpoint.method}
            </span>
            <input
              type="text"
              readOnly
              value={selectedEndpoint.path}
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-slate-200 focus:outline-none select-all"
            />
            <button
              onClick={handleSendRequest}
              disabled={isSending}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/30 transition-all active:scale-95 disabled:opacity-50 shrink-0"
            >
              <Send className={`w-3.5 h-3.5 ${isSending ? 'animate-spin' : ''}`} />
              <span>{isSending ? (isTr ? 'İşleniyor...' : 'Sending...') : (isTr ? 'Gönder' : 'Send')}</span>
            </button>
          </div>

          {/* Description banner */}
          <div className="text-xs text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800/70">
            <span className="font-semibold text-slate-300">{isTr ? 'Açıklama:' : 'Description:'} </span>
            {selectedEndpoint.description}
          </div>

          {/* Response / Logs / Code Tabs */}
          <div className="border border-slate-800 bg-slate-950/80 rounded-xl overflow-hidden flex flex-col flex-1">
            {/* Tabs bar */}
            <div className="flex items-center justify-between px-3 bg-slate-900/90 border-b border-slate-800 text-xs">
              <div className="flex space-x-1 py-1.5">
                <button
                  onClick={() => setActiveTab('response')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'response'
                      ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{isTr ? 'JSON Yanıtı' : 'JSON Response'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('sql')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'sql'
                      ? 'bg-slate-800 text-amber-400 border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>{isTr ? 'Hibernate SQL Logları' : 'Hibernate SQL Logs'} ({selectedEndpoint.sqlQueries.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('springCode')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                    activeTab === 'springCode'
                      ? 'bg-slate-800 text-blue-400 border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{isTr ? 'Spring Controller & Service Kodu' : 'Spring Controller & Service Code'}</span>
                </button>
              </div>

              {/* Status & Latency Badges */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{selectedEndpoint.expectedStatus} OK</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{responseTimeMs} ms</span>
                </div>
              </div>
            </div>

            {/* Tab Body */}
            <div className="p-4 font-mono text-xs overflow-x-auto min-h-[260px] max-h-[380px]">
              {activeTab === 'response' && (
                <pre className="text-emerald-300 leading-relaxed">
                  {JSON.stringify(responseOutput, null, 2)}
                </pre>
              )}

              {activeTab === 'sql' && (
                <div className="space-y-3">
                  <div className="text-slate-400 text-xs italic mb-2">
                    {isTr ? '-- Hibernate Show SQL Logları (Hibernate 6 Standardı) --' : '-- Hibernate Show SQL Logs (Hibernate 6 Standard) --'}
                  </div>
                  {selectedEndpoint.sqlQueries.map((sql, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-amber-300 font-mono"
                    >
                      {sql}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'springCode' && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-sans font-semibold text-slate-400 block mb-1">
                      {isTr ? '1. Spring RestController Metodu:' : '1. Spring RestController Method:'}
                    </span>
                    <pre className="text-blue-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
                      {selectedEndpoint.springControllerCode}
                    </pre>
                  </div>
                  <div>
                    <span className="text-xs font-sans font-semibold text-slate-400 block mb-1">
                      {isTr ? '2. Spring Service İş Mantığı Metodu:' : '2. Spring Service Business Logic Method:'}
                    </span>
                    <pre className="text-purple-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
                      {selectedEndpoint.springServiceCode}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
