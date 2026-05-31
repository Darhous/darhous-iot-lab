"use client";

import React, { useState } from "react";
import { challengesData } from "@/data/challenges";
import { Target, Search, Filter, Trophy, Star, CheckCircle } from "lucide-react";
import { markChallengeCompleted, getProgress } from "@/lib/progress";

const CATEGORIES = ["الكل", "مبتدئ", "متوسط", "صعب"];

export default function ChallengesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [completedChallenges, setCompletedChallenges] = useState<string[]>(
    typeof window !== "undefined" ? getProgress().completedChallenges : []
  );

  const displayedChallenges = challengesData.filter(ch => {
    const matchSearch = ch.title.includes(searchQuery) || ch.description.includes(searchQuery);
    const matchCat = selectedCategory === "الكل" || ch.level === selectedCategory;
    return matchSearch && matchCat;
  });

  const handleComplete = (id: string, xp: number) => {
    markChallengeCompleted(id, xp);
    setCompletedChallenges(prev => [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <Target className="w-10 h-10 text-[#00FF00]" />
            التحديات والمهمات
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            أكمل 40 تحدي ومهمة برمجية لاختبار مهاراتك واكسب نقاط الخبرة (XP) والشارات لتطوير مستواك.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن تحدي..." 
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedChallenges.length === 0 ? (
            <div className="col-span-full text-center py-12 text-neutral-500">لا توجد نتائج مطابقة لبحثك.</div>
          ) : (
            displayedChallenges.map((challenge) => {
              const isCompleted = completedChallenges.includes(challenge.id);
              
              return (
                <div key={challenge.id} className={`bg-neutral-900 border rounded-2xl p-6 transition-all duration-300 flex flex-col group h-full relative overflow-hidden ${
                  isCompleted ? "border-[#00FF00]/50" : "border-neutral-800 hover:border-[#00FF00]/30"
                }`}>
                  {isCompleted && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#00FF00]/10 rounded-bl-full flex items-start justify-end p-2 border-b border-l border-[#00FF00]/30">
                      <CheckCircle className="w-5 h-5 text-[#00FF00]" />
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      challenge.level === "مبتدئ" ? "bg-blue-500/20 text-blue-400" :
                      challenge.level === "متوسط" ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-red-500/20 text-red-400"
                    }`}>
                      {challenge.level}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500 font-bold bg-yellow-500/10 px-2 py-1 rounded">
                      <Star className="w-4 h-4" /> {challenge.xpReward} XP
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-2 pr-8">{challenge.title}</h3>
                  <p className="text-neutral-400 text-sm mb-6">{challenge.description}</p>
                  
                  <div className="space-y-2 mb-6 flex-grow">
                    <h4 className="text-sm font-bold text-white mb-2">المهام المطلوبة:</h4>
                    {challenge.tasks.map((task, i) => (
                      <div key={i} className="flex gap-2 text-sm text-neutral-300">
                        <span className="text-[#00FF00] mt-0.5">•</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>

                  {challenge.badgeId && (
                    <div className="flex items-center gap-2 mb-6 p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm font-bold text-yellow-500">يمنح شارة خاصة!</span>
                    </div>
                  )}

                  <button 
                    disabled={isCompleted}
                    onClick={() => handleComplete(challenge.id, challenge.xpReward)}
                    className={`w-full py-3 rounded-xl font-bold transition-colors ${
                      isCompleted 
                        ? "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                        : "bg-neutral-800 hover:bg-[#00FF00] hover:text-black"
                    }`}
                  >
                    {isCompleted ? "تم الإنجاز" : "إعلان الإنجاز"}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}