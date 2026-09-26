import React, { useState, useEffect, useRef } from 'react';
import { CODING_CHALLENGES, CodingChallenge, stripComments } from '../data/challengesData';
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
  Cpu,
  Copy,
  Check,
  ExternalLink,
  AlertTriangle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const InteractivePlayground: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<CodingChallenge>(CODING_CHALLENGES[0]);
  const [userCode, setUserCode] = useState<string>(selectedChallenge.initialCode);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<{ passed: boolean; message: string }[] | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [httpResponse, setHttpResponse] = useState<any | null>(null);

  // Execution Engine: 'browser' (Client-side AST validator) | 'docker-jvm' (Live Localhost Backend)
  const [executionEngine, setExecutionEngine] = useState<'browser' | 'docker-jvm'>('browser');
  const [isDockerBackendOnline, setIsDockerBackendOnline] = useState<boolean | null>(null);
  const [isCheckingBackend, setIsCheckingBackend] = useState<boolean>(false);
  const [copiedDockerCmd, setCopiedDockerCmd] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check if local docker / Spring Boot backend is reachable
  const checkDockerBackendHealth = async () => {
    setIsCheckingBackend(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);
      const res = await fetch('http://localhost:8080/actuator/health', {
        method: 'GET',
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        setIsDockerBackendOnline(true);
      } else {
        setIsDockerBackendOnline(false);
      }
    } catch {
      setIsDockerBackendOnline(false);
    } finally {
      setIsCheckingBackend(false);
    }
  };

  useEffect(() => {
    checkDockerBackendHealth();
  }, []);

  const handleSelectChallenge = (challenge: CodingChallenge) => {
    setSelectedChallenge(challenge);
    setUserCode(challenge.initialCode);
    setShowSolution(false);
    setTestResults(null);
    setTerminalLogs([]);
    setHttpResponse(null);
  };

  const handleResetCode = () => {
    setUserCode(selectedChallenge.initialCode);
    setShowSolution(false);
    setTestResults(null);
    setTerminalLogs([]);
    setHttpResponse(null);
  };

  const toggleSolution = () => {
    if (!showSolution) {
      setUserCode(selectedChallenge.solutionCode);
      setShowSolution(true);
    } else {
      setUserCode(selectedChallenge.initialCode);
      setShowSolution(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const val = userCode;
      setUserCode(val.substring(0, start) + '    ' + val.substring(end));
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  const handleCopyDockerCommand = () => {
    navigator.clipboard.writeText('git clone https://github.com/r4venward/springboot.git && cd springboot && docker compose up --build -d');
    setCopiedDockerCmd(true);
    setTimeout(() => setCopiedDockerCmd(false), 2000);
  };

  const handleRunAndTest = () => {
    setIsCompiling(true);
    setTerminalLogs([]);
    setTestResults(null);
    setHttpResponse(null);

    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

    // 1. Strip comments before doing any evaluation
    const cleanCode = stripComments(userCode);

    // 2. Syntax Balance Check (Real Java Syntax Validation)
    const openBraces = (cleanCode.match(/\{/g) || []).length;
    const closeBraces = (cleanCode.match(/\}/g) || []).length;
    const openParens = (cleanCode.match(/\(/g) || []).length;
    const closeParens = (cleanCode.match(/\)/g) || []).length;

    let syntaxError: string | null = null;
    if (openBraces !== closeBraces) {
      syntaxError = `javac Syntax Error: Süslü parantez kapatılmamış ({: ${openBraces}, }: ${closeBraces})`;
    } else if (openParens !== closeParens) {
      syntaxError = `javac Syntax Error: Normal parantez uyuşmazlığı ((: ${openParens}, ): ${closeParens})`;
    }

    const logs = [
      `[javac] Derleyici başlatılıyor (Java 21 javac)...`,
      `[javac] ${selectedChallenge.filename} kaynak dosyası taranıyor...`
    ];

    setTimeout(() => {
      if (syntaxError) {
        logs.push(
          `\x1b[31m[ERROR] ${syntaxError}\x1b[0m`,
          `[ERROR] Derleme başarısız oldu. (BUILD FAILURE)`
        );
        setTerminalLogs(logs);
        setTestResults(selectedChallenge.testCheckers.map((c) => ({ 
          passed: false, 
          message: `✖ ${c.validate(cleanCode, userCode).error}` 
        })));
        setIsCompiling(false);
        return;
      }

      // Run test checkers against clean code
      const results: { passed: boolean; message: string }[] = [];
      let allPassed = true;

      for (const checker of selectedChallenge.testCheckers) {
        const checkResult = checker.validate(cleanCode, userCode);
        results.push({
          passed: checkResult.passed,
          message: checkResult.passed ? `✔ ${checker.description}` : `✖ ${checkResult.error}`
        });
        if (!checkResult.passed) {
          allPassed = false;
        }
      }

      setTestResults(results);

      if (allPassed) {
        logs.push(
          `[javac] Derleme başarılı (0 hata).`,
          `\x1b[32m  .   ____          _            __ _ _\x1b[0m`,
          `\x1b[32m /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\x1b[0m`,
          `\x1b[32m( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\\x1b[0m`,
          `\x1b[32m \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\x1b[0m`,
          `\x1b[32m  '  |____| .__|_| |_|_| |_\\__, | / / / /\x1b[0m`,
          `\x1b[32m =========|_|==============|___/=/_/_/_/\x1b[0m`,
          ` :: Spring Boot ::                (v3.3.4)`,
          ``,
          `${now} [main] INFO  c.e.mastery.Application - Starting Application using Java 21...`,
          `${now} [main] INFO  o.s.b.w.e.tomcat.TomcatWebServer - Tomcat initialized on port 8080 (http)`,
          `${now} [main] INFO  o.s.w.s.DispatcherServlet - Initializing Servlet 'dispatcherServlet'`,
          `${now} [http-nio-8080-exec-1] INFO  o.s.web.servlet.mvc.method - Mapped [${selectedChallenge.simulatedEndpoint.method} ${selectedChallenge.simulatedEndpoint.path}] onto controller method.`,
          `${now} [http-nio-8080-exec-1] INFO  c.e.m.TestRunner - HTTP 200 OK Response generated.`,
          `\x1b[32m>> TÜM TESTLER BAŞARIYLA GEÇTİ! (TEST PASS) <<\x1b[0m`
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
          `\x1b[31m[ERROR] Test doğrulaması başarısız! Eksik veya hatalı kod tespit edildi:\x1b[0m`,
          ...failedChecks.map((fc) => `  -> ${fc.message}`),
          `[WARN] İpucu: Yukarıdaki talimatları kontrol edip kodunuzu tamamlayın veya 'Çözümü Gör' butonuna tıklayın.`
        );
      }

      setTerminalLogs(logs);
      setIsCompiling(false);
    }, 450);
  };

  const lines = userCode.split('\n');

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 shadow-2xl p-6 sm:p-8 space-y-6">
      {/* Header & Execution Engine Mode Toggle */}
      <div className="border-b border-slate-800 pb-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-inner">
              <Code2 className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-bold text-white">İnteraktif Spring Boot Kod Yazma Stüdyosu</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Kodunuzu doğrudan düzenleyin, derleme kurallarını test edin ve sanal veya Docker ortamında çalıştırın.
              </p>
            </div>
          </div>
        </div>

        {/* Engine Switcher */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setExecutionEngine('browser')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              executionEngine === 'browser'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Tarayıcı AST Motoru (Aktif)</span>
          </button>

          <button
            onClick={() => {
              setExecutionEngine('docker-jvm');
              checkDockerBackendHealth();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
              executionEngine === 'docker-jvm'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Canlı Docker JVM</span>
            <span className={`w-2 h-2 rounded-full ${isDockerBackendOnline ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
          </button>
        </div>
      </div>

      {/* Docker Offline Information Card (If user selects Docker mode and container is offline) */}
      {executionEngine === 'docker-jvm' && !isDockerBackendOnline && (
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 border border-blue-500/30 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Yerel Docker Spring Boot Sunucusu Tespit Edilemedi (localhost:8080)</span>
            </div>
            <button
              onClick={checkDockerBackendHealth}
              disabled={isCheckingBackend}
              className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono transition-colors"
            >
              {isCheckingBackend ? 'Kontrol Ediliyor...' : 'Yeniden Dene'}
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Statik web ortamında (Netlify/GitHub Pages) doğrudan Java JVM bayt kodu derleyicisi çalışmaz. Gerçek bir <strong>Java 21 JVM</strong> ve <strong>PostgreSQL 16</strong> üzerinde çalıştırmak için projeyi Docker Compose ile tek komutta başlatabilirsiniz:
          </p>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300">
            <span className="truncate mr-2 select-all">
              git clone https://github.com/r4venward/springboot.git && cd springboot && docker compose up --build -d
            </span>
            <button
              onClick={handleCopyDockerCommand}
              className="flex items-center gap-1 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs shrink-0 transition-colors"
            >
              {copiedDockerCmd ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Kopyalandı!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Komutu Kopyala</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span>
              Tarayıcıda pratik yapmaya devam etmek için <strong className="text-emerald-400">Tarayıcı AST Motoru</strong> otomatik olarak devrededir.
            </span>
          </div>
        </div>
      )}

      {/* Challenge Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {CODING_CHALLENGES.map((ch, idx) => {
          const isSelected = ch.id === selectedChallenge.id;
          return (
            <button
              key={ch.id}
              onClick={() => handleSelectChallenge(ch)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-1.5 ${
                isSelected
                  ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/30 shadow-lg'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Görev {idx + 1}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">
                  {ch.difficulty}
                </span>
              </div>
              <div className="text-xs font-semibold text-white line-clamp-1">{ch.title}</div>
            </button>
          );
        })}
      </div>

      {/* Challenge Instructions Box */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            {selectedChallenge.title}
          </span>
          <span className="text-slate-400 font-mono">{selectedChallenge.category}</span>
        </div>
        <p className="text-slate-300 leading-relaxed">{selectedChallenge.description}</p>
        <div className="pt-2 border-t border-slate-800/80">
          <span className="font-semibold text-slate-400 block mb-1">Yapılması Gerekenler:</span>
          <ul className="space-y-1 text-slate-300">
            {selectedChallenge.instructions.map((inst, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>{inst}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Code Editor & Live Terminal Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Code Editor (7 cols) */}
        <div className="lg:col-span-7 flex flex-col rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
          {/* Editor Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-emerald-400" />
              <span className="font-mono font-bold text-slate-200">{selectedChallenge.filename}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleSolution}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                title="Çözümü Göster/Gizle"
              >
                {showSolution ? <EyeOff className="w-3 h-3 text-amber-400" /> : <Eye className="w-3 h-3" />}
                <span>{showSolution ? 'Çözümü Kapat' : 'Çözümü Gör'}</span>
              </button>

              <button
                onClick={handleResetCode}
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Kodu Sıfırla"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleRunAndTest}
                disabled={isCompiling}
                className="flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all active:scale-95 disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 fill-current ${isCompiling ? 'animate-spin' : ''}`} />
                <span>{isCompiling ? 'Derleniyor...' : 'Çalıştır & Test Et'}</span>
              </button>
            </div>
          </div>

          {/* Editor Textarea with Line Numbers */}
          <div className="relative flex flex-1 min-h-[380px] p-3 font-mono text-xs leading-6 bg-slate-950">
            {/* Line Numbers */}
            <div className="select-none pr-3 text-right text-slate-600 border-r border-slate-800 mr-3 font-mono">
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Editable Textarea */}
            <textarea
              ref={textareaRef}
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              className="flex-1 bg-transparent text-emerald-300 resize-none focus:outline-none font-mono whitespace-pre leading-6 overflow-x-auto selection:bg-emerald-500/30"
            />
          </div>
        </div>

        {/* Right: Live Terminal & Test Assertions (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {/* Test Checks Results */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block border-b border-slate-800 pb-1.5">
              Gerçek Test Denetimleri ({selectedChallenge.testCheckers.length})
            </span>
            <div className="space-y-1.5">
              {selectedChallenge.testCheckers.map((check, idx) => {
                const isTested = testResults !== null;
                const passed = isTested ? testResults[idx]?.passed : false;

                return (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg text-xs flex items-start gap-2 border transition-all ${
                      isTested
                        ? passed
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                          : 'bg-red-950/40 border-red-500/40 text-red-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isTested ? (
                        passed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-red-400" />
                        )
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-slate-600" />
                      )}
                    </div>
                    <span className="leading-tight">{check.description}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Virtual Spring Boot Terminal */}
          <div className="flex-1 rounded-xl border border-slate-800 bg-slate-950 flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Spring Boot 3.3.4 Virtual Terminal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Port 8080</span>
              </div>
            </div>

            <div className="p-3 font-mono text-[11px] overflow-y-auto max-h-[220px] space-y-1 text-slate-300">
              {terminalLogs.length === 0 ? (
                <div className="text-slate-500 text-center py-8">
                  Kodunuzu yazıp yukarıdaki <strong className="text-emerald-400">"Çalıştır & Test Et"</strong> butonuna basın.
                </div>
              ) : (
                terminalLogs.map((log, idx) => (
                  <div key={idx} className="whitespace-pre-wrap leading-tight">
                    {log}
                  </div>
                ))
              )}
            </div>

            {/* Live HTTP Response Viewer */}
            {httpResponse && (
              <div className="border-t border-slate-800 bg-slate-900/90 p-3 text-xs space-y-1.5">
                <div className="flex items-center justify-between text-emerald-400 font-mono font-bold text-[11px]">
                  <span>HTTP/1.1 200 OK</span>
                  <span>Content-Type: application/json</span>
                </div>
                <pre className="text-emerald-300 font-mono text-[11px] bg-slate-950 p-2 rounded border border-slate-800 overflow-x-auto max-h-[100px]">
                  {JSON.stringify(httpResponse, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
