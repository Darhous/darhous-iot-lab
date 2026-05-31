"use client";

import { useEffect, useState } from "react";
import { LayoutDashboard, Star, BookOpen, ShieldAlert, Zap } from "lucide-react";
import { getProgress } from "@/lib/progress";

export default function DashboardPage() {
  const [progress, setProgress] = useState({ xp: 0, completedLessons: [], badges: [] });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(getProgress());
  }, []);

  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12 pb-20">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <LayoutDashboard className="w-10 h-10 text-secondary-fixed-dim" />
          لوحة التحكم والإحصائيات
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          تابع تقدمك في التعلم، المهام المنجزة، ونقاط الخبرة التي جمعتها.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-xl border-t-4 border-primary text-center">
          <Star className="w-8 h-8 text-primary mx-auto mb-2" />
          <h3 className="font-headline-sm text-outline mb-1">إجمالي النقاط (XP)</h3>
          <p className="font-display-md text-on-surface">{progress.xp}</p>
        </div>
        <div className="glass-card p-6 rounded-xl border-t-4 border-secondary text-center">
          <BookOpen className="w-8 h-8 text-secondary mx-auto mb-2" />
          <h3 className="font-headline-sm text-outline mb-1">الدروس المكتملة</h3>
          <p className="font-display-md text-on-surface">{progress.completedLessons.length}</p>
        </div>
        <div className="glass-card p-6 rounded-xl border-t-4 border-tertiary text-center">
          <ShieldAlert className="w-8 h-8 text-tertiary mx-auto mb-2" />
          <h3 className="font-headline-sm text-outline mb-1">الأوسمة</h3>
          <p className="font-display-md text-on-surface">{progress.badges.length}</p>
        </div>
        <div className="glass-card p-6 rounded-xl border-t-4 border-warning text-center">
          <Zap className="w-8 h-8 text-warning mx-auto mb-2" />
          <h3 className="font-headline-sm text-outline mb-1">مستوى الصانع</h3>
          <p className="font-display-sm text-on-surface mt-2">{progress.xp > 500 ? 'متقدم' : progress.xp > 100 ? 'هاوي' : 'مبتدئ'}</p>
        </div>
      </div>
      
      <div className="glass-panel p-8 rounded-2xl text-center">
        <p className="text-on-surface-variant mb-4">
          ملاحظة: البيانات محفوظة حالياً في متصفحك (Local Storage). سيتم دمجها مع الحسابات السحابية لاحقاً.
        </p>
      </div>
    </div>
  );
}