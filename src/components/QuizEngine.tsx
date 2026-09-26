import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizData';
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

export const QuizEngine: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Başlangıç' | 'Orta' | 'İleri'>('All');

  const filteredQuestions = difficultyFilter === 'All'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter((q) => q.difficulty === difficultyFilter);

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

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = filteredQuestions.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;

  const percentage = Math.round((correctCount / (totalQuestions || 1)) * 100);

  return (
    <div className="space-y-6 py-6">
      {/* 1. Header Banner */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-white">
              Spring Boot 3 & Java 21 Yetkinlik Testi
            </h1>
          </div>
          <p className="text-xs text-slate-400">
            Teknik mülakat standartlarında hazırlanmış Spring Boot, JPA, Security ve Mimari soruları ile seviyenizi ölçün.
          </p>
        </div>

        {/* Difficulty Selector Pills */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 text-xs">
          {(['All', 'Başlangıç', 'Orta', 'İleri'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setDifficultyFilter(diff);
                handleRestart();
              }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                difficultyFilter === diff
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {diff === 'All' ? 'Tümü' : diff}
            </button>
          ))}
        </div>
      </div>

      {!isQuizCompleted ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Question Box & Options (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl space-y-6">
            {/* Question Header Bar */}
            <div className="flex items-center justify-between text-xs pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  {currentQ?.springConcept}
                </span>
                <span className="text-slate-400 font-medium">
                  {currentQ?.difficulty}
                </span>
              </div>
              <span className="font-mono font-bold text-slate-300">
                Soru {currentQuestionIndex + 1} / {totalQuestions}
              </span>
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ?.question}
              </h2>

              {currentQ?.codeSnippet && (
                <div className="my-3">
                  <CodeBlock code={currentQ.codeSnippet} language="java" showLineNumbers={false} />
                </div>
              )}

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ?.options.map((option, idx) => {
                  const isSelected = currentSelectedOption === idx;
                  const isCorrect = idx === currentQ.correctIndex;
                  const showResult = isCurrentAnswered;

                  let optionStyle =
                    'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700';

                  if (showResult) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500/40 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'bg-red-950/60 border-red-500 text-red-300 ring-1 ring-red-500/40';
                    } else {
                      optionStyle = 'bg-slate-950/30 border-slate-800/60 text-slate-500 opacity-50';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isCurrentAnswered}
                      className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 ${optionStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 text-slate-400">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="pt-0.5 leading-relaxed">{option}</span>
                      </div>

                      {showResult && (
                        <div className="shrink-0 pt-0.5">
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : isSelected ? (
                            <XCircle className="w-5 h-5 text-red-400" />
                          ) : null}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Technical Explanation */}
              {isCurrentAnswered && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 animate-in fade-in duration-300 space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4" />
                    <span>Teknik Açıklama ve Doğrulama</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentQ?.explanation}</p>
                </div>
              )}

              {/* Action Buttons: Prev / Next */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Önceki Soru</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!isCurrentAnswered}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                >
                  <span>{currentQuestionIndex === totalQuestions - 1 ? 'Sonuçları Gör' : 'Sonraki Soru'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Question Map Grid (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
              Soru Haritası
            </h3>

            {/* Grid of question buttons */}
            <div className="grid grid-cols-5 gap-2">
              {filteredQuestions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const userAns = selectedAnswers[q.id];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.correctIndex;

                let btnStyle = 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700';

                if (isCurrent) {
                  btnStyle = 'border-2 border-emerald-500 text-emerald-300 bg-emerald-950/40 shadow-md ring-2 ring-emerald-500/20 font-bold';
                } else if (isAnswered) {
                  btnStyle = isCorrect
                    ? 'bg-emerald-950/50 border-emerald-500/60 text-emerald-400 font-bold'
                    : 'bg-red-950/40 border-red-500/50 text-red-400 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-10 rounded-xl border text-xs font-mono transition-all flex items-center justify-center ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Stats Summary */}
            <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Cevaplanan:</span>
                <span className="font-mono font-bold text-white">{answeredCount} / {totalQuestions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Doğru Sayısı:</span>
                <span className="font-mono font-bold text-emerald-400">{correctCount}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Finished View */
        <div className="p-8 rounded-3xl bg-slate-900/95 border border-slate-800 shadow-2xl space-y-8 animate-in zoom-in-95 duration-200">
          <div className="text-center space-y-3">
            <div className="inline-flex p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-xl">
              <Trophy className="w-10 h-10 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Quiz Tamamlandı!</h2>
            <p className="text-sm text-slate-400">
              Spring Boot bilginizin detaylı analiz raporu:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block mb-1">Doğru</span>
              <span className="text-2xl font-bold text-emerald-400">{correctCount}</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block mb-1">Yanlış</span>
              <span className="text-2xl font-bold text-red-400">{totalQuestions - correctCount}</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block mb-1">Başarı Oranı</span>
              <span className="text-2xl font-bold text-teal-300">%{percentage}</span>
            </div>
          </div>

          {/* Question Review List */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Soru Bazlı İnceleme
            </h3>
            <div className="space-y-2">
              {filteredQuestions.map((q, idx) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border text-xs sm:text-sm flex flex-col gap-2 ${
                      isCorrect
                        ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200'
                        : 'bg-red-950/20 border-red-500/30 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-400" />
                        )}
                        <span className="font-bold">Soru {idx + 1}: {q.springConcept}</span>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                      }`}>
                        {isCorrect ? 'Doğru' : 'Yanlış'}
                      </span>
                    </div>
                    <p className="text-slate-300">{q.question}</p>
                    <div className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                      <span className="font-semibold text-amber-400">Açıklama: </span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Testi Yeniden Başlat</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
