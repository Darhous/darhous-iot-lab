"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard, Star, BookOpen, Wrench, Target, Trophy, Award } from "lucide-react";
import { getProgress, UserProgress } from "@/lib/progress";

export default function DashboardPage() {
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    completedProjects: [],
    completedChallenges: [],
    xp: 0,
    level: 1
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(getProgress());
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <LayoutDashboard className="w-10 h-10 text-[#00FF00]" />
            لوحة التحكم والإحصائيات
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            تابع تقدمك، المهام المنجزة، ونقاط الخبرة التي جمعتها في رحلتك نحو احتراف إنترنت الأشياء.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          <div className="bg-neutral-900 border border-[#00FF00]/30 p-6 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.1)]">
            <Award className="w-10 h-10 text-[#00FF00] mb-2" />
            <h3 className="text-sm font-bold text-neutral-400 mb-1">المستوى الحالي</h3>
            <p className="text-4xl font-black text-white">{progress.level}</p>
          </div>
          
          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-yellow-500/50 transition-colors">
            <Star className="w-10 h-10 text-yellow-500 mb-2" />
            <h3 className="text-sm font-bold text-neutral-400 mb-1">نقاط الخبرة (XP)</h3>
            <p className="text-4xl font-black text-white">{progress.xp}</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-blue-500/50 transition-colors">
            <BookOpen className="w-10 h-10 text-blue-500 mb-2" />
            <h3 className="text-sm font-bold text-neutral-400 mb-1">الدروس المكتملة</h3>
            <p className="text-4xl font-black text-white">{progress.completedLessons.length}</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-orange-500/50 transition-colors">
            <Wrench className="w-10 h-10 text-orange-500 mb-2" />
            <h3 className="text-sm font-bold text-neutral-400 mb-1">المشاريع المنجزة</h3>
            <p className="text-4xl font-black text-white">{progress.completedProjects.length}</p>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col items-center justify-center hover:border-purple-500/50 transition-colors">
            <Target className="w-10 h-10 text-purple-500 mb-2" />
            <h3 className="text-sm font-bold text-neutral-400 mb-1">التحديات الفائزة</h3>
            <p className="text-4xl font-black text-white">{progress.completedChallenges.length}</p>
          </div>
        </div>
        
        <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl text-center space-y-4">
          <Trophy className="w-12 h-12 text-[#00FF00] mx-auto opacity-50" />
          <h2 className="text-2xl font-bold">رحلتك مستمرة!</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            ملاحظة: البيانات محفوظة حالياً في متصفحك (Local Storage) لضمان السرعة. سيتم دمجها مع الحسابات السحابية عند تسجيل الدخول رسمياً لتكوين ملفك الأكاديمي.
          </p>
        </div>
      </div>
    </div>
  );
}