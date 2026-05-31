import Link from "next/link";
import { Trophy, Star, ShieldAlert } from "lucide-react";
import { challengesData } from "@/data/challenges";

export default function ChallengesPage() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Trophy className="w-10 h-10 text-secondary-fixed-dim" />
          التحديات
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          أكمل التحديات البرمجية والإلكترونية لتكسب نقاط خبرة (XP) وتفتح أوسمة الإنجاز.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challengesData.map((challenge) => (
          <Link href={`/challenges/${challenge.id}`} key={challenge.id} className="glass-card p-6 rounded-xl group hover:border-secondary-fixed-dim transition-all">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-label-mono px-2 py-1 rounded bg-surface-container-high text-outline">
                {challenge.level}
              </span>
              <span className="text-xs font-label-mono text-tertiary-fixed-dim flex items-center gap-1">
                <Star size={14} /> +{challenge.xpReward} XP
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-2">{challenge.title}</h3>
            <p className="font-body-sm text-on-surface-variant mb-6">{challenge.description}</p>
            {challenge.badgeUnlock && (
              <div className="flex items-center gap-2 text-xs font-label-mono text-secondary-fixed-dim bg-secondary-container/20 p-2 rounded">
                <ShieldAlert size={14} /> وسام: {challenge.badgeUnlock}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}