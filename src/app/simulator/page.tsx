"use client";

import React, { useState } from "react";
import { simulatorsData } from "@/data/simulators";
import { MonitorPlay, Search, Filter, ExternalLink } from "lucide-react";

const CATEGORIES = ["الكل", "أردوينو", "ESP32", "محركات", "شاشات", "حساسات", "أخرى"];

export default function SimulatorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  let displayedSimulators = simulatorsData.filter(sim => {
    const matchSearch = sim.title.includes(searchQuery) || sim.description.includes(searchQuery);
    const matchCat = selectedCategory === "الكل" || sim.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <MonitorPlay className="w-10 h-10 text-[#00FF00]" />
            مركز المحاكاة
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            اختر من بين 35 قالب جاهز للمحاكاة، وابدأ بكتابة وتجربة الأكواد مباشرة على منصة Wokwi بدون الحاجة لشراء أي قطع.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن محاكاة..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-[#00FF00]/50 transition-colors"
            />
          </div>
          <div className="relative md:w-64">
            <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-3 pr-12 pl-4 text-white focus:outline-none focus:border-[#00FF00]/50 transition-colors appearance-none cursor-pointer"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedSimulators.length === 0 ? (
            <div className="col-span-full text-center py-12 text-neutral-500">لا توجد نتائج مطابقة لبحثك.</div>
          ) : (
            displayedSimulators.map((sim) => (
              <div key={sim.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 flex flex-col group h-full">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-neutral-800 text-[#00FF00] text-xs font-bold rounded-full mb-3 inline-block">
                    {sim.category}
                  </span>
                  <h3 className="font-bold text-lg leading-tight">{sim.title}</h3>
                </div>
                <p className="text-neutral-400 text-sm mb-6 flex-grow">{sim.description}</p>
                <a 
                  href={`https://wokwi.com/projects/${sim.wokwiId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-neutral-800 hover:bg-[#00FF00] hover:text-black rounded-xl font-bold transition-colors mt-auto"
                >
                  تشغيل المحاكي
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}