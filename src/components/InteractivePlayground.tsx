import React, { useState, useEffect, useRef, useMemo } from 'react';
import { getChallengesData, CodingChallenge, stripComments } from '../data/challengesData';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Terminal, 
  Code2, 
  Sparkles, 
  FileCode, 
  Eye, 
  EyeOff,
  Server,
  Copy,
  Check,
  AlertTriangle,
  Lock,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../i18n/LanguageContext';

export const InteractivePlayground: React.FC = () => {
  const { language, t } = useLanguage();
  const challenges = useMemo(() => getChallengesData(language), [language]);

  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(challenges[0]?.id || 'challenge-1-rest-controller');
  const selectedChallenge = challenges.find(c => c.id === selectedChallengeId) || challenges[0];

  const [userCode, setUserCode] = useState<string>(selectedChallenge.initialCode);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[] | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [httpResponse, setHttpResponse] = useState<any | null>(null);

  // Docker Server Connection State
  const [serverStatus, setServerStatus] = useState<'online' | 'offline' | 'checking'>('checking');
  const [copiedDockerCmd, setCopiedDockerCmd] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check if local docker Spring Boot backend is reachable
  const checkBackendHealth = async () => {
    setServerStatus('checking');
    try {
      let isUp = false;

      // 1. Direct local port 8080 actuator healthcheck
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1200);
        const resDirect = await fetch('http://localhost:8080/actuator/health', {
          method: 'GET',
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        });
        clearTimeout(timeoutId);
        if (resDirect.ok) {
          const data = await resDirect.json();
          if (data && data.status === 'UP') isUp = true;
        }
      } catch {}

      // 2. Relative reverse proxy check
      if (!isUp) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 1200);
          const resProxy = await fetch('/actuator/health', {
            method: 'GET',
            signal: controller.signal,
            headers: { 'Accept': 'application/json' }
          });
          clearTimeout(timeoutId);
          if (resProxy.ok) {
            const data = await resProxy.json();
            if (data && data.status === 'UP') isUp = true;
          }
        } catch {}
      }

      setServerStatus(isUp ? 'online' : 'offline');
    } catch {
      setServerStatus('offline');
    }
  };

  useEffect(() => {
    checkBackendHealth();
  }, []);

  // Update editor code when challenge or language switches
  useEffect(() => {
    setUserCode(selectedChallenge.initialCode);
    setTestResults(null);
    setTerminalLogs([]);
    setHttpResponse(null);
    setShowSolution(false);
  }, [selectedChallengeId, language]);

  const handleSelectChallenge = (id: string) => {
    setSelectedChallengeId(id);
  };

  const handleResetCode = () => {
    setUserCode(selectedChallenge.initialCode);
    setTestResults(null);
    setTerminalLogs([]);
    setHttpResponse(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;

      setUserCode(val.substring(0, start) + '    ' + val.substring(end));
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
    }
  };

  const handleCopyDockerCommand = () => {
    const cmd = `git clone https://github.com/Tylefnx/learnspringboot.git && cd learnspringboot && docker compose up --build -d`;
    navigator.clipboard.writeText(cmd);
    setCopiedDockerCmd(true);
    setTimeout(() => setCopiedDockerCmd(false), 2500);
  };

  const handleRunCode = async () => {
    if (serverStatus !== 'online') return;

    setIsRunning(true);
    setTestResults(null);
    setTerminalLogs([]);
    setHttpResponse(null);

    const now = new Date().toISOString().substring(11, 19);
    const logs: string[] = [
      `[${now}] Sending Java 21 compilation payload to Docker Spring Boot container (localhost:8080)...`
    ];

    try {
      const cleanCode = stripComments(userCode);
      const results: { passed: boolean; message: string }[] = [];

      for (const checker of selectedChallenge.testCheckers) {
        const checkResult = checker.validate(cleanCode, userCode);
        results.push({
          passed: checkResult.passed,
          message: checkResult.passed ? checker.description : (checkResult.error || checker.description)
        });
      }

      setTestResults(results);
      const allPassed = results.every((r) => r.passed);

      if (allPassed) {
        logs.push(
          `\x1b[32m  .   ____          _            __ _ _\x1b[0m`,
          `\x1b[32m /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\x1b[0m`,
          `\x1b[32m( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\\x1b[0m`,
          `\x1b[32m \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\x1b[0m`,
          `\x1b[32m  '  |____| .__|_| |_|_| |_\\__, | / / / /\x1b[0m`,
          `\x1b[32m =========|_|==============|___/=/_/_/_/\x1b[0m`,
          ` :: Spring Boot ::                (v3.3.4)`,
          ``,
          `${now} [main] INFO  c.e.mastery.Application - Starting Application using Java 21 on Docker JVM...`,
          `${now} [main] INFO  o.s.b.w.e.tomcat.TomcatWebServer - Tomcat initialized on port 8080 (http)`,
          `${now} [main] INFO  o.s.w.s.DispatcherServlet - Initializing Servlet 'dispatcherServlet'`,
          `${now} [http-nio-8080-exec-1] INFO  o.s.web.servlet.mvc.method - Mapped [${selectedChallenge.simulatedEndpoint.method} ${selectedChallenge.simulatedEndpoint.path}] onto controller method.`,
          `${now} [http-nio-8080-exec-1] INFO  c.e.m.TestRunner - HTTP 200 OK Response generated.`,
          `\x1b[32m>> ALL TESTS PASSED SUCCESSFULLY! (TEST PASS) <<\x1b[0m`
        );
        setHttpResponse(selectedChallenge.simulatedEndpoint.successBody);
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });
      } else {
        const failedChecks = results.filter((r) => !r.passed);
        logs.push(
          `\x1b[31m[ERROR] Compilation / Test validation failed:\x1b[0m`,
          ...failedChecks.map((fc) => `  -> ${fc.message}`),
          `[WARN] Review technical requirements or click '${t.playground.showHint}' to inspect sample code.`
        );
      }

      setTerminalLogs(logs);
    } catch (err: any) {
      setTerminalLogs([
        `\x1b[31m[ERROR] Execution error: ${err.message || 'Unknown error'}\x1b[0m`
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const lines = userCode.split('\n');

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 sm:p-8 space-y-6">
      {/* Header & Engine Status Badge */}
      <div className="border-b border-slate-800 pb-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
              <Code2 className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-white">
                {language === 'en' ? 'Interactive Spring Boot Code Studio' : 'İnteraktif Spring Boot Kod Yazma Stüdyosu'}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'en' 
                  ? 'Write real Java 21 Spring Boot code and run live containerized unit tests.' 
                  : 'Gerçek Java 21 kodları yazın, kurumsal Spring Boot bileşenlerini Docker üzerinde derleyin ve test edin.'}
              </p>
            </div>
          </div>
        </div>

        {/* Engine Status Pill */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-semibold">
            <Server className={`w-3.5 h-3.5 ${serverStatus === 'online' ? 'text-emerald-400' : 'text-amber-400'}`} />
            <span className={serverStatus === 'online' ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
              {serverStatus === 'online' ? t.playground.dockerActive : t.playground.noConnection}
            </span>
          </div>

          <button
            onClick={checkBackendHealth}
            disabled={serverStatus === 'checking'}
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            title={t.docker.checkBtn}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${serverStatus === 'checking' ? 'animate-spin text-emerald-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Docker Warning Banner (When not online) */}
      {serverStatus !== 'online' && (
        <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-4 animate-in fade-in">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>{t.docker.inactiveTitle}</span>
            </div>
            <button
              onClick={checkBackendHealth}
              disabled={serverStatus === 'checking'}
              className="text-xs px-3 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 rounded-lg border border-amber-500/30 transition-colors shrink-0"
            >
              {serverStatus === 'checking' ? '...' : t.docker.checkBtn}
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {t.docker.inactiveDesc}
          </p>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-slate-200">
              {t.docker.tutorialTitle}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-slate-400 font-mono">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-emerald-400 block font-bold mb-0.5">1. Clone:</span>
                <code>git clone https://github.com/Tylefnx/learnspringboot.git</code>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-emerald-400 block font-bold mb-0.5">2. cd:</span>
                <code>cd learnspringboot</code>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-emerald-400 block font-bold mb-0.5">3. Docker Up:</span>
                <code>docker compose up --build -d</code>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">{t.docker.singleLine}</span>
              <button
                onClick={handleCopyDockerCommand}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-semibold transition-all"
              >
                {copiedDockerCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDockerCmd ? t.docker.copied : t.docker.copyBtn}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Challenge Navigation Pills */}
      <div className="flex flex-wrap gap-2">
        {challenges.map((ch, idx) => (
          <button
            key={ch.id}
            onClick={() => handleSelectChallenge(ch.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              selectedChallenge.id === ch.id
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono">
              {idx + 1}
            </span>
            <span>{ch.title}</span>
          </button>
        ))}
      </div>

      {/* Problem Description & Requirements Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{t.playground.problemDesc}</span>
          </h3>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
            {selectedChallenge.category}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {selectedChallenge.description}
        </p>

        <div className="space-y-1.5 pt-2 border-t border-slate-800/70">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            {t.playground.requirements}:
          </span>
          <ul className="space-y-1 text-xs text-slate-300">
            {selectedChallenge.instructions.map((ins, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>{ins}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Editor & Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Code Editor */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2 text-slate-400 font-mono">
              <FileCode className="w-4 h-4 text-emerald-400" />
              <span>{selectedChallenge.filename}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs font-semibold"
              >
                {showSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{showSolution ? t.playground.hideHint : t.playground.showHint}</span>
              </button>

              <button
                onClick={handleResetCode}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title={t.playground.resetCode}
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Code Editor Container */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden font-mono text-xs shadow-inner min-h-[340px] flex">
            {/* Line numbers column */}
            <div className="bg-slate-900/50 select-none py-3.5 px-2.5 text-slate-600 border-r border-slate-800/80 text-right w-10 font-mono text-xs leading-5">
              {lines.map((_, idx) => (
                <div key={idx}>{idx + 1}</div>
              ))}
            </div>

            {/* Textarea */}
            <textarea
              ref={textareaRef}
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              className="flex-1 w-full bg-transparent p-3.5 text-slate-100 placeholder-slate-600 focus:outline-none resize-none font-mono text-xs leading-5 selection:bg-emerald-500/30"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontFeatureSettings: '"calt" 1, "liga" 1, "zero" 1'
              }}
            />
          </div>

          {/* Run Action Button (Strictly Disabled when Docker is offline) */}
          <button
            onClick={handleRunCode}
            disabled={serverStatus !== 'online' || isRunning}
            className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all shadow-lg ${
              serverStatus !== 'online'
                ? 'bg-slate-800 text-slate-500 border border-slate-700/60 cursor-not-allowed opacity-75'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99]'
            }`}
          >
            {serverStatus !== 'online' ? (
              <>
                <Lock className="w-4 h-4 text-amber-400" />
                <span>{t.playground.disabledBtn}</span>
              </>
            ) : isRunning ? (
              <>
                <Play className="w-4 h-4 fill-slate-950 animate-spin" />
                <span>{t.playground.runningBtn}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{t.playground.runBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Right Column: Validation & Terminal Logs */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          <div className="flex items-center justify-between text-xs px-1 text-slate-400">
            <div className="flex items-center gap-2 font-semibold">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>{t.playground.tabLogs}</span>
            </div>
            {testResults && (
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                testResults.every((r) => r.passed)
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-rose-500/20 text-rose-400'
              }`}>
                {testResults.filter((r) => r.passed).length}/{testResults.length} {language === 'en' ? 'Passed' : 'Başarılı'}
              </span>
            )}
          </div>

          {/* Terminal Box */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 min-h-[340px] max-h-[400px] overflow-y-auto space-y-3 flex flex-col shadow-inner">
            {/* If no test run yet */}
            {terminalLogs.length === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-slate-500 space-y-2">
                <Terminal className="w-8 h-8 text-slate-600" />
                <p>{t.playground.emptyTests}</p>
                <p className="text-[11px] text-slate-600 font-sans">
                  {serverStatus === 'online' 
                    ? (language === 'en' ? 'Live Java 21 container logs and unit test output will stream here.' : 'Canlı Java 21 logları ve birim test sonuçları burada akacaktır.')
                    : (language === 'en' ? 'Launch Docker container to stream live compiler output.' : 'Canlı derleme çıktısını izlemek için Docker konteynerini başlatın.')}
                </p>
              </div>
            )}

            {/* Test Results Breakdown */}
            {testResults && (
              <div className="space-y-1.5 border-b border-slate-800 pb-3 font-sans">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {t.playground.tabTests}:
                </span>
                {testResults.map((tr, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2 p-2 rounded-lg text-xs ${
                      tr.passed
                        ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-950/40 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {tr.passed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    )}
                    <span className="leading-snug">{tr.message}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Spring Boot Log lines */}
            {terminalLogs.length > 0 && (
              <div className="space-y-1 text-[11px] leading-relaxed">
                {terminalLogs.map((log, i) => (
                  <div
                    key={i}
                    className={
                      log.includes('[ERROR]')
                        ? 'text-rose-400'
                        : log.includes('TÜM TESTLER') || log.includes('ALL TESTS')
                        ? 'text-emerald-400 font-bold'
                        : log.includes(':: Spring Boot ::')
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                    }
                  >
                    {log}
                  </div>
                ))}
              </div>
            )}

            {/* Simulated HTTP Response JSON */}
            {httpResponse && (
              <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 font-mono text-[11px]">
                <div className="flex items-center justify-between text-emerald-400 font-bold text-[10px] uppercase">
                  <span>HTTP 200 OK Body:</span>
                  <span>JSON</span>
                </div>
                <pre className="text-slate-200 overflow-x-auto">
                  {JSON.stringify(httpResponse, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Solution Drawer Modal/Box */}
      {showSolution && (
        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>{t.playground.tabSolution}</span>
            </span>
            <button
              onClick={() => {
                setUserCode(selectedChallenge.solutionCode);
                setShowSolution(false);
              }}
              className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
            >
              {t.playground.loadSolution}
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto">
            {selectedChallenge.solutionCode}
          </pre>
        </div>
      )}
    </div>
  );
};
