import React, { useState, useMemo } from 'react';
import { getQuizData } from '../data/quizData';
import { QuizQuestion } from '../types';
import confetti from 'canvas-confetti';
import { 
  BarChart3,
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Lightbulb, 
  Trophy,
  Check,
  AlertCircle
} from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { useLanguage } from '../i18n/LanguageContext';

export const QuizEngine: React.FC = () => {
  const { language, t } = useLanguage();
  const quizQuestions = useMemo(() => getQuizData(language), [language]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Başlangıç' | 'Orta' | 'İleri' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');

  const filteredQuestions = useMemo(() => {
    if (difficultyFilter === 'All') return quizQuestions;
    return quizQuestions.filter((q) => {
      if (difficultyFilter === 'Başlangıç' || difficultyFilter === 'Beginner') {
        return q.difficulty === 'Başlangıç' || q.difficulty === 'Beginner';
      }
      if (difficultyFilter === 'Orta' || difficultyFilter === 'Intermediate') {
        return q.difficulty === 'Orta' || q.difficulty === 'Intermediate';
      }
      if (difficultyFilter === 'İleri' || difficultyFilter === 'Advanced') {
        return q.difficulty === 'İleri' || q.difficulty === 'Advanced';
      }
      return true;
    });
  }, [difficultyFilter, quizQuestions]);

  const currentQ: QuizQuestion | undefined = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];
  const totalQuestions = filteredQuestions.length;

  const currentSelectedOption = currentQ ? selectedAnswers[currentQ.id] : undefined;
  const isCurrentAnswered = currentSelectedOption !== undefined;

  const handleSelectOption = (optionIndex: number) => {
    if (isCurrentAnswered || !currentQ) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
  };

  // Calculate scores
  const score = Object.keys(selectedAnswers).reduce((acc, qId) => {
    const q = quizQuestions.find((item) => item.id === qId);
    if (q && selectedAnswers[qId] === q.correctIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercent = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0;

  if (isQuizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="space-y-8 animate-in fade-in duration-300">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-white">{t.quiz.resultTitle}</h2>
            <p className="text-slate-400 text-sm">
              {totalQuestions} {language === 'en' ? 'questions completed.' : 'sorudan'} {score} {language === 'en' ? 'correct answers.' : 'doğru yaptınız.'}
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 py-4">
            <div className="px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">{t.quiz.score}</span>
              <span className="text-3xl font-black text-emerald-400 font-mono">%{percentage}</span>
            </div>
            <div className="px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">{language === 'en' ? 'Accuracy' : 'Doğruluk'}</span>
              <span className="text-3xl font-black text-white font-mono">{score} / {totalQuestions}</span>
            </div>
          </div>

          <div>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.quiz.restartTest}</span>
            </button>
          </div>
        </div>

        {/* Detailed Review Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <span>{t.quiz.reviewTitle}</span>
          </h3>

          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const userAns = selectedAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;
              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-2xl border ${
                    isCorrect 
                      ? 'bg-emerald-950/20 border-emerald-500/30' 
                      : userAns !== undefined 
                        ? 'bg-rose-950/20 border-rose-500/30' 
                        : 'bg-slate-900/50 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      {language === 'en' ? `Question 0${idx + 1}` : `Soru 0${idx + 1}`} • {q.springConcept}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      isCorrect 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : userAns !== undefined 
                          ? 'bg-rose-500/20 text-rose-400' 
                          : 'bg-slate-800 text-slate-400'
                    }`}>
                      {isCorrect ? (language === 'en' ? 'Correct' : 'Doğru') : userAns !== undefined ? (language === 'en' ? 'Incorrect' : 'Yanlış') : (language === 'en' ? 'Unanswered' : 'Boş')}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white mb-3">{q.question}</h4>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Technical Explanation:' : 'Teknik Açıklama:'}</span>
                    </div>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs">
        <div className="flex items-center gap-2 font-semibold text-slate-300">
          <span>{language === 'en' ? 'Difficulty Filter:' : 'Zorluk Filtresi:'}</span>
          <div className="flex items-center gap-1">
            {['All', 'Başlangıç', 'Orta', 'İleri'].map((lvl) => {
              const label = lvl === 'All' ? (language === 'en' ? 'All' : 'Tümü') : (language === 'en' ? (lvl === 'Başlangıç' ? 'Beginner' : lvl === 'Orta' ? 'Intermediate' : 'Advanced') : lvl);
              return (
                <button
                  key={lvl}
                  onClick={() => {
                    setDifficultyFilter(lvl as any);
                    setCurrentQuestionIndex(0);
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    difficultyFilter === lvl
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'text-slate-400 hover:text-white bg-slate-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-mono">
            {answeredCount}/{totalQuestions} {language === 'en' ? 'Answered' : 'Cevaplandı'}
          </span>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main 12-Col Grid: 8-Col Question Box + 4-Col Question Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 8 Cols: Active Question */}
        {currentQ && (
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {t.quiz.question} {currentQuestionIndex + 1} / {totalQuestions}
                </span>
                <span className="text-xs text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                  {currentQ.difficulty}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 font-semibold">{currentQ.springConcept}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>

            {currentQ.codeSnippet && (
              <CodeBlock
                code={currentQ.codeSnippet}
                language="java"
                showLineNumbers={false}
              />
            )}

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = currentSelectedOption === oIdx;
                const isCorrect = oIdx === currentQ.correctIndex;
                
                let optionStyle = 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-200';
                
                if (isCurrentAnswered) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold shadow-lg shadow-emerald-500/10';
                  } else if (isSelected) {
                    optionStyle = 'bg-rose-950/60 border-rose-500 text-rose-200 font-semibold';
                  } else {
                    optionStyle = 'bg-slate-900/40 border-slate-800/50 text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    disabled={isCurrentAnswered}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-start gap-3.5 group ${optionStyle}`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${
                      isCurrentAnswered && isCorrect
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950'
                        : isCurrentAnswered && isSelected
                          ? 'bg-rose-500 border-rose-400 text-white'
                          : 'bg-slate-900 border-slate-700 text-slate-400 group-hover:border-slate-500'
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="flex-1 leading-relaxed pt-0.5">{opt}</span>
                    {isCurrentAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />}
                    {isCurrentAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-1" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box when answered */}
            {isCurrentAnswered && (
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-slate-200 space-y-1.5 animate-in fade-in">
                <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  <span>{language === 'en' ? 'Architecture Insight & Explanation:' : 'Mimari Analiz & Çözüm:'}</span>
                </div>
                <p className="leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-xs text-white font-semibold transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{t.quiz.prevQuestion}</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
              >
                <span>{currentQuestionIndex === totalQuestions - 1 ? t.quiz.finishTest : t.quiz.nextQuestion}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Right 4 Cols: Interactive Question Map Grid */}
        <div className="lg:col-span-4 p-5 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">{t.quiz.questionMap}</h4>
            <span className="text-[11px] font-mono text-emerald-400">
              {answeredCount}/{totalQuestions}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {filteredQuestions.map((q, idx) => {
              const userAns = selectedAnswers[q.id];
              const isAnswered = userAns !== undefined;
              const isCurrent = currentQuestionIndex === idx;

              let btnClass = 'bg-slate-800/80 text-slate-400 border-slate-700 hover:border-slate-500';
              if (isAnswered) {
                btnClass = userAns === q.correctIndex
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 font-bold'
                  : 'bg-rose-500/20 text-rose-400 border-rose-500/50 font-bold';
              }
              if (isCurrent) {
                btnClass += ' ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-950';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`p-2.5 rounded-xl text-xs font-mono font-semibold border transition-all ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-emerald-500/30 border border-emerald-500/50" />
              <span>{t.quiz.correct}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-rose-500/30 border border-rose-500/50" />
              <span>{t.quiz.wrong}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-slate-800 border border-slate-700" />
              <span>{t.quiz.empty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
