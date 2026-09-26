import React, { useEffect, useState } from 'react';
import { LESSONS_DATA } from '../data/lessonsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Clock, 
  BookOpen, 
  ListTree,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { MarkdownContent } from '../components/MarkdownContent';

interface LessonDetailPageProps {
  moduleId: string;
  onBack: () => void;
  onSelectLesson: (id: string) => void;
}

export const LessonDetailPage: React.FC<LessonDetailPageProps> = ({
  moduleId,
  onBack,
  onSelectLesson,
}) => {
  const lesson = LESSONS_DATA.find((l) => l.id === moduleId) || LESSONS_DATA[0];
  const currentIndex = LESSONS_DATA.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? LESSONS_DATA[currentIndex - 1] : null;
  const nextLesson = currentIndex < LESSONS_DATA.length - 1 ? LESSONS_DATA[currentIndex + 1] : null;

  const [activeSectionId, setActiveSectionId] = useState<string>(lesson.sections[0]?.id || '');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSectionId(lesson.sections[0]?.id || '');
  }, [moduleId, lesson]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }

      // Check which section is in viewport
      for (const sec of lesson.sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSectionId(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lesson]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSectionId(id);
    }
  };

  return (
    <div className="relative py-6">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-900 z-30">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ders Listesine Dön</span>
            </button>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                Modül {lesson.number} / {LESSONS_DATA.length}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {lesson.durationMinutes} dk okuma
              </span>
            </div>
          </div>

          {/* Module Header */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <Sparkles className="w-3 h-3" />
              <span>{lesson.category}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lesson.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {lesson.subtitle}
            </p>
          </div>

          {/* Overview Callout */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-500/30 text-slate-200 text-sm leading-relaxed shadow-lg">
            <h3 className="font-bold text-emerald-300 mb-1.5 flex items-center gap-2 text-base">
              <BookOpen className="w-4 h-4" />
              <span>Modüle Genel Bakış</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">{lesson.overview}</p>
          </div>

          {/* Sections Content */}
          <div className="space-y-14">
            {lesson.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-5 scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <span>{section.title}</span>
                </h2>

                {/* Rich Markdown Parser Component */}
                <MarkdownContent content={section.content} />

                {/* Additional Code Snippets */}
                {section.codeSnippets && (
                  <div className="space-y-4 my-4">
                    {section.codeSnippets.map((cs, cIdx) => (
                      <div key={cIdx}>
                        {cs.description && (
                          <p className="text-xs text-slate-400 mb-1 italic">{cs.description}</p>
                        )}
                        <CodeBlock
                          code={cs.code}
                          language={cs.language}
                          filename={cs.filename}
                          showLineNumbers={true}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Tips */}
                {section.tips && (
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-1 shadow-inner">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                      <Lightbulb className="w-4 h-4" />
                      <span>Pro İpucu (Best Practice)</span>
                    </div>
                    {section.tips.map((t, tIdx) => (
                      <p key={tIdx} className="text-slate-300">{t}</p>
                    ))}
                  </div>
                )}

                {/* Notes */}
                {section.notes && (
                  <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-blue-200 text-xs sm:text-sm space-y-1 shadow-inner">
                    <div className="font-bold flex items-center gap-1.5 text-blue-300">
                      <BookOpen className="w-4 h-4" />
                      <span>Önemli Not</span>
                    </div>
                    {section.notes.map((n, nIdx) => (
                      <p key={nIdx} className="text-slate-300">{n}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Best Practices & Pitfalls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-8 border-t border-slate-800">
            {/* Best Practices */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>En İyi Pratikler (Best Practices)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {lesson.bestPractices.map((bp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Pitfalls */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5" />
                <span>Sık Yapılan Hatalar (Common Pitfalls)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {lesson.commonPitfalls.map((cp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>{cp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Prev / Next Module Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-slate-800">
            {prevLesson ? (
              <button
                onClick={() => onSelectLesson(prevLesson.id)}
                className="flex items-center gap-2 text-left p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-[10px] text-slate-500 block">Önceki Modül</span>
                  <span className="font-semibold text-white">{prevLesson.title}</span>
                </div>
              </button>
            ) : <div />}

            {nextLesson && (
              <button
                onClick={() => onSelectLesson(nextLesson.id)}
                className="flex items-center gap-2 text-right p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-xs text-emerald-300 transition-colors group"
              >
                <div>
                  <span className="text-[10px] text-emerald-400/80 block">Sonraki Modül</span>
                  <span className="font-semibold text-white">{nextLesson.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>

        {/* Right Sticky Table of Contents Sidebar */}
        <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              <ListTree className="w-4 h-4 text-emerald-400" />
              <span>Bu Sayfada (İçindekiler)</span>
            </div>

            <nav className="space-y-1">
              {lesson.sections.map((sec) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-400 font-semibold border-l-2 border-emerald-500'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Quick Module Navigation card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-400 space-y-2">
            <div className="font-semibold text-slate-300">Ders Notları & Paylaşım</div>
            <p className="text-[11px] leading-relaxed">
              Bu dersi arkadaşlarınızla paylaşabilir veya doğrudan URL hash ile belirli bir bölüme link verebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
