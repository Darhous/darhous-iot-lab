"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle, AlertTriangle, ShieldCheck } from "lucide-react";

// Import all data sources
import { pathsData } from "@/data/paths";
import { lessonsData } from "@/data/lessons";
import { projectsData } from "@/data/projects";
import { componentsData } from "@/data/components";
import { codeExamplesData } from "@/data/codeExamples";
import { simulatorsData } from "@/data/simulators";
import { challengesData } from "@/data/challenges";
import { roadmapsData } from "@/data/roadmaps";
import { troubleshootingData } from "@/data/troubleshooting";
import { examsData } from "@/data/exams";

export default function AdminPreview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const targetStats = {
    paths: 18,
    lessons: 60,
    projects: 60,
    capstones: 12,
    components: 80,
    codeExamples: 80,
    simulators: 35,
    challenges: 40,
    roadmaps: 8,
    troubleshooting: 10,
    exams: 10
  };

  const currentStats = {
    paths: pathsData.length,
    lessons: lessonsData.length,
    projects: projectsData.filter(p => p.difficulty !== "تخرج").length,
    capstones: projectsData.filter(p => p.difficulty === "تخرج").length,
    components: componentsData.length,
    codeExamples: codeExamplesData.length,
    simulators: simulatorsData.length,
    challenges: challengesData.length,
    roadmaps: roadmapsData.length,
    troubleshooting: troubleshootingData.length,
    exams: examsData.length
  };

  const getStatus = (current: number, target: number) => {
    if (current >= target) return { color: "text-[#00FF00]", icon: <CheckCircle className="w-5 h-5 text-[#00FF00]" /> };
    return { color: "text-[#FF3333]", icon: <AlertTriangle className="w-5 h-5 text-[#FF3333]" /> };
  };

  const renderStatRow = (label: string, current: number, target: number) => {
    const status = getStatus(current, target);
    return (
      <div className="flex justify-between items-center p-4 border-b border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
        <div className="flex items-center gap-3">
          {status.icon}
          <span className="font-bold text-lg">{label}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className={`font-black text-xl ${status.color}`}>{current}</div>
            <div className="text-xs text-neutral-500">الهدف: {target}</div>
          </div>
          <div className="w-24 h-2 bg-neutral-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${current >= target ? 'bg-[#00FF00]' : 'bg-[#FF3333]'}`} 
              style={{ width: `${Math.min(100, (current / target) * 100)}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-black tracking-tight flex items-center justify-center gap-3">
            <ShieldCheck className="w-10 h-10 text-[#00FF00]" />
            لوحة الإدارة - فحص الإنتاج (V2)
          </h1>
          <p className="text-xl text-neutral-400">
            متابعة إتمام أهداف منصة Darhous IoT Lab للنسخة الثانية (V2) قبل دمجها مع أكاديمية دارحوس.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 bg-neutral-800/50 border-b border-neutral-700 font-bold text-lg flex justify-between">
            <span>القسم</span>
            <span>حالة الاكتمال</span>
          </div>
          
          {renderStatRow("مسارات التعلم (Paths)", currentStats.paths, targetStats.paths)}
          {renderStatRow("الدروس النظرية والتطبيقية", currentStats.lessons, targetStats.lessons)}
          {renderStatRow("المشاريع العملية", currentStats.projects, targetStats.projects)}
          {renderStatRow("مشاريع التخرج (Capstones)", currentStats.capstones, targetStats.capstones)}
          {renderStatRow("القطع الإلكترونية (Components)", currentStats.components, targetStats.components)}
          {renderStatRow("أكواد جاهزة (Code Lab)", currentStats.codeExamples, targetStats.codeExamples)}
          {renderStatRow("قوالب المحاكاة (Simulators)", currentStats.simulators, targetStats.simulators)}
          {renderStatRow("التحديات البرمجية", currentStats.challenges, targetStats.challenges)}
          {renderStatRow("خرائط الطريق (Roadmaps)", currentStats.roadmaps, targetStats.roadmaps)}
          {renderStatRow("أدلة الأخطاء (Troubleshooting)", currentStats.troubleshooting, targetStats.troubleshooting)}
          {renderStatRow("الاختبارات المصغرة (Exams)", currentStats.exams, targetStats.exams)}
        </div>
      </div>
    </div>
  );
}