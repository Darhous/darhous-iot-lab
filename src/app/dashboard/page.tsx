"use client";

import { useState, useEffect } from "react";
import { LayoutDashboard, Award, History, Trophy, Cpu } from "lucide-react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="px-4 md:px-16 pt-8 max-w-[1600px] mx-auto flex gap-8">
      
      {/* Main Content Area */}
      <div className="flex-1 space-y-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="font-headline-xl text-primary mb-2 text-4xl">مرحباً بعودتك، صانع!</h1>
            <p className="font-body-lg text-on-surface-variant">الأنظمة متصلة. جاهز لمتابعة التعلم.</p>
          </div>
          <div className="glass-panel px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim pulse-dot"></span>
            <span className="font-label-mono text-tertiary-fixed-dim text-sm">Hardware Uplink Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress Card */}
          <div className="glass-panel rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 blur-3xl rounded-full pointer-events-none"></div>
            <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-2">
              <History className="text-primary-fixed-dim" /> تقدم المسار الحالي
            </h2>
            <div className="flex justify-center mb-6 w-32 h-32 mx-auto">
              <CircularProgressbar 
                value={75} 
                text="75%" 
                styles={buildStyles({
                  pathColor: '#00f2ff',
                  textColor: '#e1fdff',
                  trailColor: 'rgba(0, 219, 231, 0.1)',
                  pathTransitionDuration: 1.5,
                })}
              />
            </div>
            <div className="space-y-3 font-label-mono text-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">أساسيات الأردوينو</span>
                <span className="text-primary">مكتمل</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">الحساسات الذكية</span>
                <span className="text-tertiary-fixed-dim">قيد الدراسة</span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="glass-panel rounded-xl p-6 md:col-span-2 flex flex-col justify-between">
             <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-2">
              <LayoutDashboard className="text-outline" /> إحصائيات المعمل
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container/50 p-6 rounded-lg border border-outline-variant/10 text-center">
                <div className="font-headline-xl text-primary text-4xl mb-2">12</div>
                <div className="font-label-caps text-on-surface-variant">دائرة مكتملة</div>
              </div>
              <div className="bg-surface-container/50 p-6 rounded-lg border border-outline-variant/10 text-center">
                <div className="font-headline-xl text-secondary-fixed-dim text-4xl mb-2">350</div>
                <div className="font-label-caps text-on-surface-variant">سطر برمجي (XP)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges / Credentials */}
        <div className="glass-panel rounded-xl p-6">
          <h2 className="font-headline-md text-on-surface mb-6 flex items-center gap-2">
            <Trophy className="text-tertiary-fixed-dim" /> الشارات المكتسبة
          </h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-full bg-surface border-2 border-primary-container flex items-center justify-center neon-glow">
                <Award className="text-primary-fixed-dim w-10 h-10" />
              </div>
              <span className="font-label-caps text-primary">MAKER</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-full bg-surface border-2 border-secondary-fixed-dim flex items-center justify-center shadow-[0_0_15px_rgba(208,188,255,0.4)]">
                <Cpu className="text-secondary-fixed-dim w-10 h-10" />
              </div>
              <span className="font-label-caps text-secondary-fixed-dim">ENGINEER</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-50 grayscale">
              <div className="w-20 h-20 rounded-full bg-surface border-2 border-outline-variant flex items-center justify-center">
                <Award className="text-outline w-10 h-10" />
              </div>
              <span className="font-label-caps text-outline">INNOVATOR (مغلق)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}