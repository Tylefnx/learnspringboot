import React from 'react';
import { 
  BookOpen, 
  Terminal, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  Code2
} from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';
import { InteractivePlayground } from '../components/InteractivePlayground';

interface HomePageProps {
  onNavigate: (tab: string, moduleId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-8 sm:p-12 overflow-hidden shadow-2xl">
        {/* Background glow accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spring Boot 3.3+ & Java 21 LTS Standardı</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sıfırdan İleri Seviyeye <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200 bg-clip-text text-transparent">
              Spring Boot Türkçe Rehberi
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Spring Boot'un tüm mimari temellerini, IoC/DI prensiplerini, Spring Security 6'yı, JPA & Hibernate optimizasyonlarını interaktif kod yazma stüdyosu, canlı simülatörler ve konu testleriyle uygulamalı olarak öğrenin.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('lessons')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Derslere Başla</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('practice')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all hover:scale-105 active:scale-95"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Canlı Kod Yazma IDE</span>
            </button>

            <button
              onClick={() => onNavigate('quiz')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-800 transition-all"
            >
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span>Konu Testlerini Çöz</span>
            </button>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>10 Kapsamlı Modül</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tarayıcıda Canlı IDE</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kurumsal Kod Havuzu</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Netlify & GitHub Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Code Playground on Homepage */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Canlı Kod Yazma & Test Laboratuvarı</h2>
            <p className="text-xs text-slate-400">Spring Boot kodunuzu doğrudan tarayıcıda düzenleyin ve sanal derleyicide test edin</p>
          </div>
          <button
            onClick={() => onNavigate('practice')}
            className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <span>Tüm Laboratuvarı Gör</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <InteractivePlayground />
      </section>

      {/* 10 Modules Curriculum Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Eğitim Müfredatı & Modüller</h2>
            <p className="text-xs text-slate-400 mt-0.5">Sıfırdan ileri seviyeye 10 temel yapı taşı</p>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Toplam 10 Modül
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LESSONS_DATA.map((module) => {
            return (
              <div
                key={module.id}
                onClick={() => onNavigate('lesson-detail', module.id)}
                className="group p-5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Modül {module.number}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {module.difficulty} • {module.durationMinutes} dk
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {module.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/70 text-xs">
                  <span className="text-slate-500">{module.category}</span>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Dersi Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
