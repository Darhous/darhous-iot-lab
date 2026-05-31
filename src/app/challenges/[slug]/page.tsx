"use client";

import { challengesData } from "@/data/challenges";
import { notFound } from "next/navigation";
import { Trophy, Star, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { addXP } from "@/lib/progress";
import { useState, useEffect } from "react";

export default function ChallengeDetailPage({ params }: { params: { slug: string } }) {
  const challenge = challengesData.find(c => c.id === params.slug);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    const data = localStorage.getItem("iot_progress");
    if (data) {
      const progress = JSON.parse(data);
      if (progress.badges && progress.badges.includes(challenge?.badgeUnlock)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCompleted(true);
      }
    }
  }, [challenge]);

  if (!challenge) {
    notFound();
  }

  const handleComplete = () => {
    addXP(challenge.xpReward);
    // also save badge logic here in a real app
    setCompleted(true);
    alert(`تهانينا! حصلت على ${challenge.xpReward} نقطة خبرة.`);
  };

  return (
    <div className="px-4 md:px-16 pt-8 pb-20 max-w-5xl mx-auto space-y-12">
      <Link href="/challenges" className="text-sm font-label-mono text-outline hover:text-primary transition-colors flex items-center gap-1">
        <ArrowLeft size={16} /> العودة للتحديات
      </Link>
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden text-center">
        <Trophy className="w-16 h-16 text-secondary-fixed-dim mx-auto mb-4" />
        <h1 className="font-headline-xl text-on-surface mb-4">{challenge.title}</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {challenge.description}
        </p>
        <div className="mt-6 flex justify-center gap-4">
           <span className="text-sm font-label-mono px-4 py-2 rounded-full bg-surface-container-high text-outline">
            {challenge.level}
          </span>
          <span className="text-sm font-label-mono px-4 py-2 rounded-full bg-tertiary-container/20 text-tertiary-fixed-dim flex items-center gap-2">
            <Star size={16} /> +{challenge.xpReward} XP
          </span>
        </div>
      </div>

      <div className="glass-card p-6 rounded-xl">
        <h3 className="font-headline-md text-on-surface mb-4">المهام المطلوبة لإكمال التحدي:</h3>
        <ul className="space-y-4 font-body-md text-on-surface-variant">
          {challenge.tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="text-outline shrink-0 mt-1 w-5 h-5" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={handleComplete}
          disabled={completed}
          className={`px-8 py-4 rounded-xl font-headline-sm flex items-center gap-3 transition-all ${completed ? 'bg-surface-container text-outline cursor-not-allowed' : 'bg-primary text-on-primary hover:brightness-110 shadow-glow-primary'}`}
        >
          {completed ? (
            <>تم إكمال التحدي بنجاح <CheckCircle size={24} /></>
          ) : (
            <>إعلان إكمال التحدي <Trophy size={24} /></>
          )}
        </button>
      </div>
    </div>
  );
}