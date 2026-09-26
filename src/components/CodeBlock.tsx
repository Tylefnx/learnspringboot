import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'java',
  filename,
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-950/90 shadow-xl text-slate-200">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          {filename ? (
            <span className="ml-2 font-medium text-emerald-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-slate-500" />
              {filename}
            </span>
          ) : (
            <span className="uppercase text-slate-500 tracking-wider font-semibold">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors duration-150 active:scale-95 text-xs font-sans"
          title="Kodu Kopyala"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Kopyalandı!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Kopyala</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed max-h-[500px]">
        <pre className="flex">
          {showLineNumbers && (
            <div className="select-none pr-4 text-right text-slate-600 border-r border-slate-800/80 mr-4 font-mono text-xs">
              {lines.map((_, i) => (
                <div key={i} className="leading-6">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code className="text-emerald-300 flex-1 whitespace-pre">
            {lines.map((line, idx) => {
              // Basic syntax highlight helpers for visual appeal
              let formattedLine = line;
              const isComment = line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('/*') || line.trim().startsWith('*');
              const isAnnotation = line.trim().startsWith('@');
              const isKeyword = /\b(public|private|protected|class|interface|record|enum|extends|implements|return|new|final|static|import|package|void)\b/.test(line);

              let lineClass = "text-slate-200";
              if (isComment) lineClass = "text-slate-500 italic";
              else if (isAnnotation) lineClass = "text-amber-400 font-semibold";
              else if (isKeyword) lineClass = "text-emerald-300";

              return (
                <div key={idx} className={`leading-6 ${lineClass}`}>
                  {line || ' '}
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};
