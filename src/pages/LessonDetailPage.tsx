import React, { useEffect, useState, useMemo } from 'react';
import { getLessonsData } from '../data/lessonsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ListTree,
  ChevronRight
} from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { MarkdownContent } from '../components/MarkdownContent';
import { useLanguage } from '../i18n/LanguageContext';

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
  const { language } = useLanguage();
  const lessonsData = useMemo(() => getLessonsData(language), [language]);

  const lesson = lessonsData.find((l) => l.id === moduleId) || lessonsData[0];
  const currentIndex = lessonsData.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? lessonsData[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessonsData.length - 1 ? lessonsData[currentIndex + 1] : null;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lesson]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(sectionId);
    }
  };

  return (
    <div className="py-6 space-y-8 relative">
      {/* Scroll Progress Bar at top of content */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-900 z-30">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col gap-4 border-b border-slate-800 pb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'en' ? 'Back to All Modules' : 'Tüm Modüllere Geri Dön'}</span>
          </button>

          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
              {language === 'en' ? `Module ${lesson.number} / ${lessonsData.length}` : `Modül ${lesson.number} / ${lessonsData.length}`}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {lesson.durationMinutes} {language === 'en' ? 'min' : 'dk'}
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lesson.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-4xl leading-relaxed">
            {lesson.subtitle}
          </p>
        </div>
      </div>

      {/* Main Grid: Content (Left 8 Cols) + Sticky Table of Contents (Right 4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lesson Sections */}
        <div className="lg:col-span-8 space-y-12">
          {/* Overview Callout */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {language === 'en' ? 'Module Summary & Architecture Objectives' : 'Modül Özeti & Mimari Hedefler'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {lesson.overview}
            </p>
          </div>

          {/* Sections List */}
          <div className="space-y-12">
            {lesson.sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 space-y-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 shadow-lg"
              >
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    {language === 'en' ? `Section 0${idx + 1}` : `Bölüm 0${idx + 1}`}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {section.title}
                  </h2>
                </div>

                {/* Markdown Parser for Section Body */}
                <div className="text-slate-300 leading-relaxed text-sm">
                  <MarkdownContent content={section.content} />
                </div>

                {/* Section Code Snippets if any */}
                {section.codeSnippets && section.codeSnippets.length > 0 && (
                  <div className="space-y-4 pt-2">
                    {section.codeSnippets.map((snippet, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        {snippet.title && (
                          <div className="text-xs font-semibold text-slate-300">
                            {snippet.title}
                          </div>
                        )}
                        <CodeBlock
                          code={snippet.code}
                          language={snippet.language}
                          filename={snippet.filename}
                          showLineNumbers={true}
                        />
                        {snippet.description && (
                          <p className="text-xs text-slate-400 italic">
                            {snippet.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Best Practices & Pitfalls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Best Practices */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>{language === 'en' ? 'Best Practices' : 'En İyi Pratikler (Best Practices)'}</span>
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
                <span>{language === 'en' ? 'Common Pitfalls' : 'Sık Yapılan Hatalar (Common Pitfalls)'}</span>
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
                  <span className="text-[10px] text-slate-500 block">{language === 'en' ? 'Previous Module' : 'Önceki Modül'}</span>
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
                  <span className="text-[10px] text-emerald-400/80 block">{language === 'en' ? 'Next Module' : 'Sonraki Modül'}</span>
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
              <span>{language === 'en' ? 'On This Page (Contents)' : 'Bu Sayfada (İçindekiler)'}</span>
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
        </div>
      </div>
    </div>
  );
};
