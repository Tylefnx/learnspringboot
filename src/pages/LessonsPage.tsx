import React, { useState } from 'react';
import { LESSONS_DATA } from '../data/lessonsData';
import { BookOpen, Clock, ArrowRight, CheckCircle2, Filter } from 'lucide-react';

interface LessonsPageProps {
  onSelectLesson: (moduleId: string) => void;
}

export const LessonsPage: React.FC<LessonsPageProps> = ({ onSelectLesson }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const filteredLessons = selectedDifficulty === 'All'
    ? LESSONS_DATA
    : LESSONS_DATA.filter((l) => l.difficulty === selectedDifficulty);

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Spring Boot Ders Modülleri</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Giriş seviyesinden üretim ve microservices standartlarına kadar 10 kapsamlı rehber
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5" />
          {['All', 'Başlangıç', 'Orta', 'İleri'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedDifficulty === diff
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {diff === 'All' ? 'Tümü' : diff}
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
            className="p-6 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-emerald-500/50 shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Modül {lesson.number}
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {lesson.difficulty}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {lesson.durationMinutes} dk
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
                <span>Dersi Oku</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
