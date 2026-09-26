import React, { useState } from 'react';
import { 
  BookOpen, 
  Terminal, 
  Code2, 
  Search, 
  Flame, 
  Menu, 
  X,
  BookMarked,
  Zap
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'lessons', label: t.nav.modules, icon: BookOpen },
    { id: 'practice', label: t.nav.practice, icon: Code2 },
    { id: 'recipes', label: t.nav.recipes, icon: Terminal },
    { id: 'glossary', label: t.nav.glossary, icon: BookMarked },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-slate-950/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div
          onClick={() => setActiveTab('home')}
          className="flex items-center space-x-3 cursor-pointer group select-none shrink-0"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/30 group-hover:border-emerald-400/80 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300">
            <Flame className="w-5 h-5 text-emerald-400 fill-emerald-400/20 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-emerald-200 transition-colors">
              Spring<span className="text-emerald-400 font-black">Boot</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 shadow-sm">
              {t.nav.versionBadge}
            </span>
          </div>
        </div>

        {/* Center: Desktop Nav Pill Container */}
        <nav className="hidden lg:flex items-center space-x-1.5 p-1 bg-slate-900/60 border border-slate-800/80 rounded-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (Language, Search, GitHub, CTA) */}
        <div className="flex items-center space-x-2.5 shrink-0">
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-0.5 shadow-inner">
            <button
              onClick={() => setLanguage('tr')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                language === 'tr'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Türkçe"
            >
              TR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                language === 'en'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-900/80 hover:bg-slate-800 hover:text-slate-200 border border-slate-800 rounded-xl transition-all shadow-inner hover:border-slate-700"
            title="Hızlı Arama (⌘K / Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">{t.nav.searchPlaceholder}</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 rounded text-slate-400 border border-slate-800">
              ⌘K
            </kbd>
          </button>

          {/* GitHub Repo Link */}
          <a
            href="https://github.com/Tylefnx/learnspringboot"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
            title="GitHub: Tylefnx/learnspringboot"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Quick Quiz Action CTA */}
          <button
            onClick={() => setActiveTab('quiz')}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Zap className="w-3.5 h-3.5 text-slate-950 fill-current" />
            <span className="hidden sm:inline">{t.nav.quickQuiz}</span>
            <span className="sm:hidden">Quiz</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 py-3 space-y-1.5 animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold ${
                  isActive
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
