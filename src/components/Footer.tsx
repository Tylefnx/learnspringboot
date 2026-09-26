import React from 'react';
import { Flame, CheckCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 text-slate-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black">
                <Flame className="w-4 h-4 text-slate-950 fill-slate-950" />
              </div>
              <span className="font-bold text-white text-base">Spring Boot Hub</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Modern Spring Boot 3.x, Java 21, Spring Security 6 ve JPA standartları ile kurumsal Java geliştirme rehberi.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Netlify & GitHub Pages Ready</span>
            </div>
          </div>

          {/* Quick Learning Links */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Temel Konular</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-emerald-400 transition-colors">IoC & Dependency Injection</span></li>
              <li><span className="hover:text-emerald-400 transition-colors">Spring Data JPA & N+1 Çözümü</span></li>
              <li><span className="hover:text-emerald-400 transition-colors">Spring Security 6 & JWT Auth</span></li>
              <li><span className="hover:text-emerald-400 transition-colors">REST API & ProblemDetails</span></li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">İnteraktif Araçlar</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-emerald-400 transition-colors">Canlı Kod Yazma IDE & Test</span></li>
              <li><span className="hover:text-emerald-400 transition-colors">Request Lifecycle Simülatörü</span></li>
              <li><span className="hover:text-emerald-400 transition-colors">Simüle Edilmiş REST API & SQL</span></li>
              <li><span className="hover:text-emerald-400 transition-colors">Starter / Pom.xml Oluşturucu</span></li>
            </ul>
          </div>

          {/* Standards & Specs */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Standartlar</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Spring Boot 3.3+</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Java 21 LTS</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Jakarta EE 10</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Spring Security 6</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Hibernate 6</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">Docker</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/80 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Spring Boot Mastery Hub. Açık kaynaklı ve eğitici amaçlıdır.
          </div>
          <div className="flex items-center gap-1">
            <span>Spring ekosistemi sevgisiyle geliştirildi</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
