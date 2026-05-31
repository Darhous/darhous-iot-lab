"use client";

import React, { useState } from "react";
import Link from "next/link";
import { componentsData } from "@/data/components";
import { Cpu, Search, Filter } from "lucide-react";
import { globalSearch, getFilteredItems } from "@/lib/search";

const CATEGORIES = ["الكل", "أردوينو ومتحكمات", "مستشعرات", "محركات ومخرجات", "شاشات", "طاقة وأسلاك", "أخرى"];

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // Filter based on search and category
  let displayedComponents = componentsData;
  
  if (searchQuery) {
    const searchRes = globalSearch(searchQuery);
    displayedComponents = searchRes.components;
  }
  
  displayedComponents = getFilteredItems(
    displayedComponents,
    selectedCategory,
    null,
    (item) => item.category
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center justify-center gap-3">
            <Cpu className="w-10 h-10 text-[#00FF00]" />
            موسوعة القطع الإلكترونية
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            تعرف على 80 قطعة إلكترونية، وظيفتها، دبابيسها، وطريقة استخدامها لبناء مشاريع إنترنت الأشياء الخاصة بك.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن قطعة (مثل: Arduino, DHT11, مقاومة)..." 
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
          {displayedComponents.length === 0 ? (
            <div className="col-span-full text-center py-12 text-neutral-500">لا توجد نتائج مطابقة لبحثك.</div>
          ) : (
            displayedComponents.map((comp) => (
              <div key={comp.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#00FF00]/50 transition-colors duration-300 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl">{comp.name}</h3>
                  <span className="px-3 py-1 bg-neutral-800 text-[#00FF00] text-xs font-bold rounded-full whitespace-nowrap">
                    {comp.category}
                  </span>
                </div>
                
                <p className="text-neutral-400 text-sm mb-6 flex-grow">
                  {comp.description}
                </p>

                <div className="space-y-3 mt-auto">
                  <h4 className="font-bold text-sm text-white">الدبابيس (Pins):</h4>
                  <div className="space-y-2">
                    {comp.pins?.map((pin: any, i: number) => (
                      <div key={i} className="flex gap-2 text-sm">
                        <span className="font-mono text-[#00FF00] bg-neutral-800 px-2 py-0.5 rounded">{pin.name}</span>
                        <span className="text-neutral-400 line-clamp-1">{pin.description}</span>
                      </div>
                    ))}
                  </div>
                  {comp.priceRange && (
                    <div className="pt-4 border-t border-neutral-800 mt-4 flex justify-between items-center">
                      <span className="text-xs text-neutral-500">متوسط السعر العالمي:</span>
                      <span className="text-sm font-bold text-white">{comp.priceRange}</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}