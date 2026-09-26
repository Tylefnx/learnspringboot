import React, { useState, useMemo } from 'react';
import { getRecipesData } from '../data/recipesData';
import { CodeBlock } from '../components/CodeBlock';
import { Code2, Filter, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const RecipesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Security', 'JPA & DB', 'Architecture & REST', 'Exceptions & Validation'];
  const recipesData = useMemo(() => getRecipesData(language), [language]);

  const filteredRecipes = selectedCategory === 'All'
    ? recipesData
    : recipesData.filter((r) => r.category === selectedCategory);

  return (
    <div className="space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.recipes.badge}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{t.recipes.title}</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-3xl">
            {t.recipes.desc}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-0.5" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'All' ? (language === 'en' ? 'All' : 'Tümü') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Recipes List */}
      <div className="space-y-8">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl p-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {recipe.category}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {recipe.complexity}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{recipe.title}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {recipe.description}
            </p>

            {/* Code */}
            <CodeBlock
              code={recipe.code}
              language="java"
              filename={recipe.filename}
              showLineNumbers={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
