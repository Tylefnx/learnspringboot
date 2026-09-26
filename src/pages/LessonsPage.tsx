import React, { useState, useMemo } from 'react';
import { getLessonsData } from '../data/lessonsData';
import { BookOpen, Clock, ArrowRight, Filter, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface LessonsPageProps {
  onSelectLesson: (moduleId: string) => void;
}

export const LessonsPage: React.FC<LessonsPageProps> = ({ onSelectLesson }) => {
  const { language, t } = useLanguage();
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const lessonsData = useMemo(() => getLessonsData(language), [language]);

  const filteredLessons = selectedDifficulty === 'All'
    ? lessonsData
    : lessonsData.filter((l) => {
        if (selectedDifficulty === 'Başlangıç' || selectedDifficulty === 'Beginner') {
          return l.difficulty === 'Başlangıç' || l.difficulty === 'Beginner';
        }
        if (selectedDifficulty === 'Orta' || selectedDifficulty === 'Intermediate') {
          return l.difficulty === 'Orta' || l.difficulty === 'Intermediate';
        }
        if (selectedDifficulty === 'İleri' || selectedDifficulty === 'Advanced') {
          return l.difficulty === 'İleri' || l.difficulty === 'Advanced';
        }
        return true;
      });

  const difficultyOptions = language === 'en' 
    ? [{ id: 'All', label: 'All' }, { id: 'Beginner', label: 'Beginner' }, { id: 'Intermediate', label: 'Intermediate' }, { id: 'Advanced', label: 'Advanced' }]
    : [{ id: 'All', label: 'Tümü' }, { id: 'Başlangıç', label: 'Başlangıç' }, { id: 'Orta', label: 'Orta' }, { id: 'İleri', label: 'İleri' }];

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.modulesTitle}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {language === 'en' ? 'Spring Boot Curriculum Modules' : 'Spring Boot Ders Modülleri'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
            {t.hero.modulesSub}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5" />
          {difficultyOptions.map((diff) => (
            <button
              key={diff.id}
              onClick={() => setSelectedDifficulty(diff.id)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedDifficulty === diff.id
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Lessons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => onSelectLesson(lesson.id)}
            className="p-6 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {language === 'en' ? `Module ${lesson.number}` : `Modül ${lesson.number}`}
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {lesson.difficulty}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {lesson.durationMinutes} {language === 'en' ? 'min' : 'dk'}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                {lesson.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                {lesson.overview}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">{lesson.category}</span>
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                <span>{language === 'en' ? 'Read Lesson' : 'Dersi Oku'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
