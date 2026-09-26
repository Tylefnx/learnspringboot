import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { LessonsPage } from './pages/LessonsPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { PracticePage } from './pages/PracticePage';
import { GlossaryPage } from './pages/GlossaryPage';
import { RecipesPage } from './pages/RecipesPage';
import { QuizPage } from './pages/QuizPage';
import { VibeCodingPage } from './pages/VibeCodingPage';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('module-1-spring-boot-basics');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Sync with window.location.hash for shareable URLs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('module/')) {
        const modId = hash.replace('module/', '');
        setSelectedModuleId(modId);
        setActiveTab('lesson-detail');
      } else if (['home', 'lessons', 'practice', 'recipes', 'vibe-coding', 'glossary', 'quiz'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tab: string, moduleId?: string) => {
    if (moduleId) {
      setSelectedModuleId(moduleId);
      setActiveTab('lesson-detail');
      window.location.hash = `module/${moduleId}`;
    } else {
      handleTabChange(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar
        activeTab={activeTab === 'lesson-detail' ? 'lessons' : activeTab}
        setActiveTab={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activeTab === 'lessons' && (
          <LessonsPage onSelectLesson={(id) => handleNavigate('lesson-detail', id)} />
        )}
        {activeTab === 'lesson-detail' && (
          <LessonDetailPage
            moduleId={selectedModuleId}
            onBack={() => handleTabChange('lessons')}
            onSelectLesson={(id) => handleNavigate('lesson-detail', id)}
          />
        )}
        {activeTab === 'practice' && <PracticePage />}
        {activeTab === 'recipes' && <RecipesPage />}
        {activeTab === 'vibe-coding' && <VibeCodingPage />}
        {activeTab === 'glossary' && <GlossaryPage />}
        {activeTab === 'quiz' && <QuizPage />}
      </main>

      <Footer />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectLesson={(id) => handleNavigate('lesson-detail', id)}
        onSelectRecipe={() => handleTabChange('recipes')}
        onSelectVibeCoding={() => handleTabChange('vibe-coding')}
        onGoToQuiz={() => handleTabChange('quiz')}
      />
    </div>
  );
}

export default App;
