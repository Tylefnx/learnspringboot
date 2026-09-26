import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Code, HelpCircle, ArrowRight } from 'lucide-react';
import { LESSONS_DATA } from '../data/lessonsData';
import { RECIPES_DATA } from '../data/recipesData';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { useLanguage } from '../i18n/LanguageContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (moduleId: string) => void;
  onSelectRecipe: (recipeId: string) => void;
  onGoToQuiz: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectLesson,
  onSelectRecipe,
  onGoToQuiz,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const matchingLessons = normalizedQuery
    ? LESSONS_DATA.filter(
        (l) =>
          l.title.toLowerCase().includes(normalizedQuery) ||
          l.overview.toLowerCase().includes(normalizedQuery) ||
          l.category.toLowerCase().includes(normalizedQuery) ||
          l.sections.some((s) => s.title.toLowerCase().includes(normalizedQuery) || s.content.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const matchingRecipes = normalizedQuery
    ? RECIPES_DATA.filter(
        (r) =>
          r.title.toLowerCase().includes(normalizedQuery) ||
          r.description.toLowerCase().includes(normalizedQuery) ||
          r.tags.some((t) => t.toLowerCase().includes(normalizedQuery))
      )
    : [];

  const matchingQuiz = normalizedQuery
    ? QUIZ_QUESTIONS.filter(
        (q) =>
          q.question.toLowerCase().includes(normalizedQuery) ||
          q.springConcept.toLowerCase().includes(normalizedQuery) ||
          q.explanation.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const hasResults = matchingLessons.length > 0 || matchingRecipes.length > 0 || matchingQuiz.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder={t.search.placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm font-sans"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 hover:text-white text-slate-400 mr-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded font-mono">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="text-center py-8 text-slate-500 text-sm">
              <p>{t.search.placeholder}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {['Security & JWT', 'Spring Data JPA', 'N+1 Query Problem', 'Docker', '@Valid', 'Bean Scopes'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/60"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-10 text-slate-500">
              <p className="text-base font-medium text-slate-400">"{query}" {t.search.noResults}</p>
            </div>
          )}

          {/* Lessons */}
          {matchingLessons.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                {t.search.tabModules} ({matchingLessons.length})
              </div>
              <div className="space-y-1.5">
                {matchingLessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      onSelectLesson(lesson.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-emerald-950/40 hover:border-emerald-500/40 border border-slate-800 transition-all group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300">
                        {lesson.number}. {lesson.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">{lesson.subtitle}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recipes */}
          {matchingRecipes.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <Code className="w-3.5 h-3.5" />
                {t.search.tabRecipes} ({matchingRecipes.length})
              </div>
              <div className="space-y-1.5">
                {matchingRecipes.map((recipe) => (
                  <button
                    key={recipe.id}
                    onClick={() => {
                      onSelectRecipe(recipe.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-amber-950/30 hover:border-amber-500/40 border border-slate-800 transition-all group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-amber-300">
                        {recipe.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">{recipe.description}</div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-slate-700/60 text-slate-300">
                      {recipe.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Questions */}
          {matchingQuiz.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                {t.search.tabQuiz} ({matchingQuiz.length})
              </div>
              <div className="space-y-1.5">
                {matchingQuiz.slice(0, 3).map((q) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      onGoToQuiz();
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl bg-slate-800/60 hover:bg-purple-950/30 hover:border-purple-500/40 border border-slate-800 transition-all group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs text-purple-400 font-medium">{q.springConcept}</div>
                      <div className="text-sm text-slate-200 line-clamp-1 mt-0.5">{q.question}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
