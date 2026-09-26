import React from 'react';
import { CodeBlock } from './CodeBlock';

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  // Split content into blocks: code blocks, tables, lists, headers, paragraphs
  const renderFormattedText = (text: string) => {
    // Handle inline formatting: `code`, **bold**, *italic*
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    // Regex to match `code` or **bold** or *italic*
    const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
    let match: RegExpExecArray | null;
    let lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const matchedText = match[0];
      if (matchedText.startsWith('`') && matchedText.endsWith('`')) {
        parts.push(
          <code
            key={keyIdx++}
            className="px-1.5 py-0.5 mx-0.5 rounded bg-slate-800/90 text-emerald-300 font-mono text-[12px] border border-slate-700/60 font-medium select-all"
          >
            {matchedText.slice(1, -1)}
          </code>
        );
      } else if (matchedText.startsWith('**') && matchedText.endsWith('**')) {
        parts.push(
          <strong key={keyIdx++} className="font-bold text-white">
            {matchedText.slice(2, -2)}
          </strong>
        );
      } else if (matchedText.startsWith('*') && matchedText.endsWith('*')) {
        parts.push(
          <em key={keyIdx++} className="italic text-slate-200">
            {matchedText.slice(1, -1)}
          </em>
        );
      }

      lastIndex = match.index + matchedText.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Parse blocks
  const blocks = React.useMemo(() => {
    const rawBlocks: React.ReactNode[] = [];
    const lines = content.split('\n');
    let i = 0;
    let blockKey = 0;

    while (i < lines.length) {
      const line = lines[i];

      // 1. Fenced Code Block
      if (line.trim().startsWith('```')) {
        const langMatch = line.trim().match(/^```([a-zA-Z0-9_-]*)/);
        const language = langMatch && langMatch[1] ? langMatch[1] : 'java';
        const codeLines: string[] = [];
        i++;

        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        i++; // skip closing ```

        rawBlocks.push(
          <div key={`code-${blockKey++}`} className="my-3">
            <CodeBlock
              code={codeLines.join('\n')}
              language={language}
              showLineNumbers={codeLines.length > 2}
            />
          </div>
        );
        continue;
      }

      // 2. Markdown Table
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }

        if (tableLines.length >= 2) {
          const headerCols = tableLines[0]
            .split('|')
            .map((c) => c.trim())
            .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);

          const bodyRows = tableLines.slice(2).map((r) =>
            r
              .split('|')
              .map((c) => c.trim())
              .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1)
          );

          rawBlocks.push(
            <div key={`table-${blockKey++}`} className="my-4 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300 font-semibold">
                    {headerCols.map((col, cIdx) => (
                      <th key={cIdx} className="px-4 py-2.5">
                        {renderFormattedText(col)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-950/70">
                  {bodyRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-4 py-2.5 text-slate-300">
                          {renderFormattedText(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
          continue;
        }
      }

      // 3. Headers (###, ##, #)
      if (line.trim().startsWith('### ')) {
        rawBlocks.push(
          <h4 key={`h4-${blockKey++}`} className="text-base font-bold text-slate-100 pt-3 pb-1 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-emerald-500 rounded-full inline-block"></span>
            <span>{renderFormattedText(line.trim().replace(/^###\s+/, ''))}</span>
          </h4>
        );
        i++;
        continue;
      }
      if (line.trim().startsWith('## ')) {
        rawBlocks.push(
          <h3 key={`h3-${blockKey++}`} className="text-lg font-bold text-white pt-4 pb-1 border-b border-slate-800">
            {renderFormattedText(line.trim().replace(/^##\s+/, ''))}
          </h3>
        );
        i++;
        continue;
      }

      // 4. Bullet list items (- or *)
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const listItems: string[] = [];
        while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
          listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
          i++;
        }

        rawBlocks.push(
          <ul key={`ul-${blockKey++}`} className="space-y-1.5 my-2 pl-2 text-sm text-slate-300">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold mt-1 text-xs">▪</span>
                <span className="leading-relaxed">{renderFormattedText(item)}</span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // 5. Numbered list items (1. 2. 3.)
      if (/^\d+\.\s+/.test(line.trim())) {
        const listItems: string[] = [];
        while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
          listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
          i++;
        }

        rawBlocks.push(
          <ol key={`ol-${blockKey++}`} className="space-y-1.5 my-2 pl-2 text-sm text-slate-300">
            {listItems.map((item, lIdx) => (
              <li key={lIdx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono font-bold text-xs mt-0.5">
                  {lIdx + 1}.
                </span>
                <span className="leading-relaxed">{renderFormattedText(item)}</span>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // 6. Regular Paragraph or empty line
      if (line.trim() === '') {
        i++;
        continue;
      }

      rawBlocks.push(
        <p key={`p-${blockKey++}`} className="text-sm text-slate-300 leading-relaxed my-1.5">
          {renderFormattedText(line)}
        </p>
      );
      i++;
    }

    return rawBlocks;
  }, [content]);

  return <div className="space-y-3">{blocks}</div>;
};
