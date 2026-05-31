"use client";

import React, { useState } from "react";
import { codeExamplesData } from "@/data/codeExamples";
import { Code2, Search, Filter } from "lucide-react";
import { globalSearch, getFilteredItems } from "@/lib/search";

const CATEGORIES = ["الكل", "أساسيات", "حساسات", "محركات", "شاشات", "متقدم"];

export default function CodeLabPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // Filter based on search and category
  let displayedExamples = codeExamplesData;
  
  if (searchQuery) {
    const searchRes = globalSearch(searchQuery);
    displayedExamples = searchRes.codeExamples;
  }
  
  displayedExamples = getFilteredItems(
    displayedExamples,
    selectedCategory,
    null,
    (item) => item.category
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <Code2 className="w-10 h-10 text-[#00FF00]" />
            معمل الأكواد (Code Lab)
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            مكتبة ضخمة تضم 80 كود برمجي جاهز للنسخ، مصنفة ومنظمة لتسريع بناء مشاريعك الذكية.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن كود معين..." 
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

        <div className="space-y-8">
          {displayedExamples.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">لا توجد نتائج مطابقة لبحثك.</div>
          ) : (
            displayedExamples.map((example) => (
              <div key={example.id} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl group hover:border-[#00FF00]/30 transition-colors duration-300">
                <div className="p-6 bg-neutral-800/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-neutral-800">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-neutral-800 text-[#00FF00] text-xs font-bold rounded-full">
                        {example.category}
                      </span>
                      <h3 className="font-bold text-xl">{example.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-0 border-b lg:border-b-0 lg:border-l border-neutral-800 rtl:lg:border-r rtl:lg:border-l-0 relative">
                    <button 
                      onClick={() => navigator.clipboard.writeText(example.code)}
                      className="absolute top-4 left-4 px-3 py-1 bg-neutral-800 text-neutral-400 hover:text-white rounded text-xs transition-colors"
                    >
                      نسخ الكود
                    </button>
                    <pre className="p-6 bg-[#0A0A0A] text-[#00FF00] font-mono text-sm overflow-x-auto h-full" dir="ltr">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                  <div className="p-6 space-y-6 bg-neutral-900/50 flex flex-col justify-center">
                    <div>
                      <h4 className="font-bold text-lg text-white mb-2">شرح الكود</h4>
                      <p className="text-neutral-400 leading-relaxed">
                        {example.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}