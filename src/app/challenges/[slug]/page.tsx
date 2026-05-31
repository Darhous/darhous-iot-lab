"use client";

import { challengesData } from "@/data/challenges";
import { notFound } from "next/navigation";
import { Trophy, Star, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { markChallengeCompleted, getProgress } from "@/lib/progress";
import { useState, useEffect } from "react";

export default function ChallengeDetailPage({ params }: { params: { slug: string } }) {
  const challenge = challengesData.find(c => c.id === params.slug);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    const progress = getProgress();
    if (challenge && progress.completedChallenges.includes(challenge.id)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCompleted(true);
    }
  }, [challenge]);

  if (!challenge) {
    notFound();
  }

  const handleComplete = () => {
    markChallengeCompleted(challenge.id, challenge.xpReward);
    setCompleted(true);
    alert(`تهانينا! أكملت التحدي وحصلت على ${challenge.xpReward} نقطة خبرة.`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-12">
        <Link href="/challenges" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#00FF00] transition-colors">
          <ArrowRight size={20} />
          <span>العودة للتحديات</span>
        </Link>
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
          <h1 className="text-4xl md:text-5xl font-black mb-6">{challenge.title}</h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {challenge.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className={`px-6 py-2 rounded-full font-bold text-sm ${
              challenge.level === "مبتدئ" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
              challenge.level === "متوسط" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" :
              "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}>
              المستوى: {challenge.level}
            </span>
            <span className="px-6 py-2 rounded-full bg-yellow-500/10 text-yellow-500 font-bold text-sm flex items-center gap-2 border border-yellow-500/30">
              <Star size={16} /> المكافأة: {challenge.xpReward} XP
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="text-[#00FF00]" />
              المهام المطلوبة
            </h3>
            <ul className="space-y-4">
              {challenge.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300 bg-neutral-800/50 p-4 rounded-xl border border-neutral-700/50">
                  <span className="text-[#00FF00] font-bold shrink-0">{i+1}.</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl flex flex-col justify-center text-center space-y-6">
            <h3 className="text-2xl font-bold">إعلان الإنجاز</h3>
            <p className="text-neutral-400">
              بعد إكمالك لجميع المهام المطلوبة وتجربتها بنجاح على المحاكي أو الأردوينو الحقيقي، اضغط على الزر أدناه للحصول على المكافأة.
            </p>
            <button 
              onClick={handleComplete}
              disabled={completed}
              className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                completed 
                  ? 'bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/30 cursor-not-allowed' 
                  : 'bg-[#00FF00] text-black hover:bg-[#00CC00] shadow-[0_0_20px_rgba(0,255,0,0.2)]'
              }`}
            >
              {completed ? (
                <>تم استلام الجائزة <CheckCircle size={24} /></>
              ) : (
                <>لقد أنهيت التحدي <Trophy size={24} /></>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}