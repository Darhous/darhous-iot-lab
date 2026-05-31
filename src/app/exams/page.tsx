"use client";

import React, { useState } from "react";
import { Brain, Play, CheckCircle, XCircle, Award } from "lucide-react";
import { examsData, Exam } from "@/data/exams";

export default function ExamsPage() {
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const startExam = (exam: Exam) => {
    setActiveExam(exam);
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const selectAnswer = (qIdx: number, aIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [qIdx]: aIdx }));
  };

  const submitExam = () => {
    setIsSubmitted(true);
  };

  const calculateScore = () => {
    if (!activeExam) return 0;
    let score = 0;
    activeExam.questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <Brain className="w-10 h-10 text-[#00FF00]" />
            مركز الاختبارات والتقييم
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            اختبر معلوماتك التقنية، احصل على تقييم فوري، واكتشف نقاط القوة والضعف لديك في مختلف مجالات إنترنت الأشياء.
          </p>
        </div>

        {!activeExam ? (
          <div className="grid md:grid-cols-2 gap-6">
            {examsData.map((exam) => (
              <div key={exam.id} className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-[#00FF00]/50 transition-colors duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{exam.title}</h3>
                </div>
                <p className="text-neutral-400 mb-6 text-sm h-10 line-clamp-2">{exam.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500">{exam.questions.length} أسئلة</span>
                  <button 
                    onClick={() => startExam(exam)}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-[#00FF00] hover:text-black rounded-lg font-bold transition-colors duration-300"
                  >
                    <Play className="w-4 h-4" />
                    ابدأ الاختبار
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-neutral-800 pb-4">
              <h2 className="text-2xl font-bold">{activeExam.title}</h2>
              <button 
                onClick={() => setActiveExam(null)}
                className="text-neutral-400 hover:text-white text-sm"
              >
                العودة للقائمة
              </button>
            </div>

            {!isSubmitted ? (
              <div className="space-y-8">
                <div className="flex justify-between items-center text-sm text-neutral-400">
                  <span>سؤال {currentQuestionIdx + 1} من {activeExam.questions.length}</span>
                  <div className="flex gap-1">
                    {activeExam.questions.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === currentQuestionIdx ? 'bg-[#00FF00]' : i < currentQuestionIdx ? 'bg-neutral-600' : 'bg-neutral-800'}`} />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold">
                    {activeExam.questions[currentQuestionIdx].question}
                  </h3>
                  <div className="space-y-3">
                    {activeExam.questions[currentQuestionIdx].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => selectAnswer(currentQuestionIdx, i)}
                        className={`w-full text-right p-4 rounded-xl border transition-all duration-200 ${
                          selectedAnswers[currentQuestionIdx] === i 
                            ? "bg-[#00FF00]/10 border-[#00FF00] text-[#00FF00]" 
                            : "bg-neutral-800/50 border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t border-neutral-800">
                  <button
                    disabled={currentQuestionIdx === 0}
                    onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                    className="px-6 py-2 bg-neutral-800 rounded-lg disabled:opacity-50"
                  >
                    السابق
                  </button>
                  {currentQuestionIdx < activeExam.questions.length - 1 ? (
                    <button
                      disabled={selectedAnswers[currentQuestionIdx] === undefined}
                      onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                      className="px-6 py-2 bg-[#00FF00] text-black font-bold rounded-lg disabled:opacity-50"
                    >
                      التالي
                    </button>
                  ) : (
                    <button
                      disabled={Object.keys(selectedAnswers).length < activeExam.questions.length}
                      onClick={submitExam}
                      className="px-8 py-2 bg-[#00FF00] text-black font-bold rounded-lg disabled:opacity-50"
                    >
                      إنهاء الاختبار
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-8 py-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-neutral-800 border-4 border-[#00FF00] mb-4">
                  <Award className="w-12 h-12 text-[#00FF00]" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">النتيجة النهائية</h2>
                  <p className="text-2xl text-[#00FF00] font-black">
                    {calculateScore()} / {activeExam.questions.length}
                  </p>
                </div>
                
                <div className="space-y-4 text-right max-w-2xl mx-auto mt-8">
                  <h3 className="font-bold border-b border-neutral-800 pb-2">مراجعة الإجابات:</h3>
                  {activeExam.questions.map((q, i) => (
                    <div key={i} className="bg-neutral-800/30 p-4 rounded-lg space-y-2">
                      <p className="font-bold">{i+1}. {q.question}</p>
                      <div className="text-sm">
                        <p className={`flex items-center gap-2 ${selectedAnswers[i] === q.correctAnswerIndex ? 'text-[#00FF00]' : 'text-[#FF3333]'}`}>
                          {selectedAnswers[i] === q.correctAnswerIndex ? <CheckCircle className="w-4 h-4"/> : <XCircle className="w-4 h-4"/>}
                          إجابتك: {q.options[selectedAnswers[i]]}
                        </p>
                        {selectedAnswers[i] !== q.correctAnswerIndex && (
                          <p className="flex items-center gap-2 text-[#00FF00] mt-1">
                            <CheckCircle className="w-4 h-4"/>
                            الإجابة الصحيحة: {q.options[q.correctAnswerIndex]}
                          </p>
                        )}
                        <p className="text-neutral-400 mt-2 text-xs border-t border-neutral-700/50 pt-2">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveExam(null)}
                  className="px-8 py-3 bg-[#00FF00] text-black font-bold rounded-xl hover:bg-[#00CC00] mt-8 inline-block"
                >
                  العودة لقائمة الاختبارات
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
