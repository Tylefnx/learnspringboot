import React, { useState, useMemo } from 'react';
import { getGlossaryData, GlossaryTerm } from '../data/glossaryData';
import { CodeBlock } from '../components/CodeBlock';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Tag, 
  Sparkles, 
  ChevronRight,
  HelpCircle,
  X
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const GlossaryPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const glossaryData = useMemo(() => getGlossaryData(language), [language]);
  const [expandedTermId, setExpandedTermId] = useState<string | null>(glossaryData[0]?.id || null);

  const categories = [
    'All',
    'Core & IoC',
    'JPA & Hibernate',
    'Security',
    'REST & Web',
    'Mimari & Patterns',
    'Performans & DevOps'
  ];

  const filteredTerms = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return glossaryData.filter((term) => {
      const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
      const matchesSearch = !q || 
        term.term.toLowerCase().includes(q) ||
        term.englishTerm.toLowerCase().includes(q) ||
        term.definition.toLowerCase().includes(q) ||
        term.inSpringContext.toLowerCase().includes(q) ||
        term.relatedKeywords.some((k) => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, glossaryData]);

  const toggleExpand = (id: string) => {
    setExpandedTermId(expandedTermId === id ? null : id);
  };

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2 border border-emerald-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.glossary.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{t.glossary.title}</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
            {t.glossary.desc}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shrink-0">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{glossaryData.length} {t.glossary.countTerms}</span>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t.glossary.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
          {categories.map((cat) => {
            const label = cat === 'All' 
              ? t.glossary.allCategories 
              : cat === 'Mimari & Patterns' && language === 'en' 
              ? 'Architecture & Patterns' 
              : cat === 'Performans & DevOps' && language === 'en' 
              ? 'Performance & DevOps' 
              : cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Terms List Grid */}
      {filteredTerms.length === 0 ? (
        <div className="text-center py-12 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
          <HelpCircle className="w-8 h-8 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-300">"{searchQuery}" {t.glossary.noResults}</h3>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTerms.map((term) => {
            const isExpanded = expandedTermId === term.id;
            return (
              <div
                key={term.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900/95 border-emerald-500/50 shadow-xl'
                    : 'bg-slate-950/70 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                {/* Header */}
                <div
                  onClick={() => toggleExpand(term.id)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer gap-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span>{term.term}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                      ({term.englishTerm})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-400 border border-slate-700">
                      {term.category}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                        isExpanded ? 'rotate-90 text-emerald-400' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-800/80 animate-in fade-in duration-200 text-xs sm:text-sm">
                    {/* Definition */}
                    <div className="space-y-1">
                      <span className="font-bold text-slate-300 uppercase tracking-wider text-[11px]">
                        {language === 'en' ? 'Definition:' : 'Genel Tanım:'}
                      </span>
                      <p className="text-slate-300 leading-relaxed">{term.definition}</p>
                    </div>

                    {/* Spring Context */}
                    <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1 text-xs">
                      <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[10px]">
                        {language === 'en' ? 'Spring Boot Context & Architecture Role:' : 'Spring Boot Ekosistemindeki Yeri & Önemi:'}
                      </span>
                      <p className="text-slate-200 leading-relaxed">{term.inSpringContext}</p>
                    </div>

                    {/* Code Example if present */}
                    {term.codeExample && (
                      <div className="space-y-1">
                        <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">
                          {language === 'en' ? 'Code Example:' : 'Örnek Kod & Kullanım:'}
                        </span>
                        <CodeBlock
                          code={term.codeExample}
                          language="java"
                          showLineNumbers={false}
                        />
                      </div>
                    )}

                    {/* Related Keywords / Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800">
                      <Tag className="w-3 h-3 text-slate-500 mr-1" />
                      {term.relatedKeywords.map((kw) => (
                        <button
                          key={kw}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchQuery(kw);
                          }}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-emerald-950/40 hover:text-emerald-300 text-slate-400 border border-slate-700/60 transition-colors"
                        >
                          #{kw}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
