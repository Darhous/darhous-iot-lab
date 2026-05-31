"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";
import { roadmapsData } from "@/data/roadmaps";

export default function RoadmapsPage() {
  const [activeRoadmap, setActiveRoadmap] = useState(roadmapsData[0]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <Map className="w-10 h-10 text-[#00FF00]" />
            خرائط الطريق
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            اختر مسارك المهني أو الأكاديمي، وسنرشدك خطوة بخطوة للوصول إلى هدفك بأسرع وقت وأعلى كفاءة.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-4">
            {roadmapsData.map((rm) => (
              <button
                key={rm.id}
                onClick={() => setActiveRoadmap(rm)}
                className={`w-full text-right p-4 rounded-xl border transition-all duration-300 ${
                  activeRoadmap.id === rm.id 
                    ? "bg-[#00FF00]/10 border-[#00FF00] shadow-[0_0_20px_rgba(0,255,0,0.1)]"
                    : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50"
                }`}
              >
                <h3 className="font-bold text-lg mb-1">{rm.title}</h3>
                <p className="text-sm text-neutral-400 line-clamp-2">{rm.description}</p>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 sticky top-24">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                {activeRoadmap.title}
              </h2>
              <p className="text-lg text-neutral-300 mb-8">{activeRoadmap.description}</p>

              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#00FF00]/20 before:to-transparent">
                {activeRoadmap.stages.map((stage, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0A0A0A] bg-neutral-800 group-hover:bg-[#00FF00] text-neutral-500 group-hover:text-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_2px_rgba(0,255,0,0.2)] transition-colors duration-300 z-10">
                      <span className="font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-neutral-800 bg-neutral-900/80 hover:border-[#00FF00]/50 transition-colors duration-300">
                      <h4 className="font-bold text-lg mb-2 text-[#00FF00]">{stage.title}</h4>
                      <p className="text-sm text-neutral-300 mb-2">{stage.description}</p>
                      <ul className="space-y-2">
                        {stage.recommendedLessons.map((lesson, tIdx) => (
                          <li key={`l-${tIdx}`} className="flex items-center gap-2 text-xs text-neutral-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            درس: {lesson}
                          </li>
                        ))}
                        {stage.recommendedProjects.map((project, tIdx) => (
                          <li key={`p-${tIdx}`} className="flex items-center gap-2 text-xs text-neutral-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                            مشروع: {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <Link href="/paths" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FF00] text-black font-bold rounded-xl hover:bg-[#00CC00] transition-colors duration-300">
            ابدأ رحلتك الآن
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
