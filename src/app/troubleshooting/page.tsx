"use client";

import React, { useState } from "react";
import { Wrench, ChevronDown, ChevronUp, AlertTriangle, CheckCircle } from "lucide-react";
import { troubleshootingData } from "@/data/troubleshooting";

export default function TroubleshootingPage() {
  const [openGuide, setOpenGuide] = useState<string | null>(null);

  const toggleGuide = (id: string) => {
    setOpenGuide(openGuide === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <Wrench className="w-10 h-10 text-[#00FF00]" />
            دليل استكشاف الأخطاء وإصلاحها
          </h1>
          <p className="text-xl text-neutral-400">
            واجهتك مشكلة؟ لا تقلق، معظم المشاكل التقنية لها حلول سريعة. ابحث عن مشكلتك هنا.
          </p>
        </div>

        <div className="space-y-4">
          {troubleshootingData.map((guide) => (
            <div 
              key={guide.id}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${openGuide === guide.id ? 'border-[#00FF00]/50 bg-neutral-900' : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700'}`}
            >
              <button
                onClick={() => toggleGuide(guide.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-right"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h3 className="font-bold text-lg">{guide.title}</h3>
                  </div>
                </div>
                {openGuide === guide.id ? <ChevronUp className="text-[#00FF00]" /> : <ChevronDown className="text-neutral-500" />}
              </button>

              {openGuide === guide.id && (
                <div className="px-6 pb-6 pt-2 border-t border-neutral-800/50 mt-2">
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-2">الأعراض</h4>
                    <p className="text-neutral-300 text-sm">{guide.symptoms}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-[#FF3333] flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        الأسباب المحتملة
                      </h4>
                      <ul className="space-y-2">
                        {guide.likelyCauses.map((cause, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                            <span className="text-[#FF3333] mt-0.5">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-[#00FF00] flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        خطوات التشخيص والحل
                      </h4>
                      <ol className="space-y-3">
                        {guide.diagnosisSteps.map((step, i) => (
                          <li key={i} className="flex gap-3 text-sm text-neutral-300 bg-neutral-800/30 p-3 rounded-lg">
                            <span className="font-bold text-[#00FF00] shrink-0">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <h4 className="font-bold text-blue-400 mb-2">حل سريع</h4>
                    <p className="text-sm text-neutral-300">{guide.quickFix}</p>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-2">نصيحة وقائية</h4>
                    <p className="text-sm text-neutral-300">{guide.preventionTip}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
