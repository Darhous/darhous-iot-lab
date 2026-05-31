"use client";

import { useState } from "react";
import { Bot, User, Send, Cpu, Link as LinkIcon } from "lucide-react";
import { getLocalMentorResponse, MentorResponse } from "@/lib/mentor/localMentor";
import Link from "next/link";

type MessageType = {
  sender: 'user' | 'bot';
  text: string;
  links?: { title: string; url: string }[];
};

export default function MentorPage() {
  const [messages, setMessages] = useState<MessageType[]>([
    { 
      sender: 'bot', 
      text: 'أهلاً بك في المساعد الذكي لدارحوس IoT Lab. كيف يمكنني مساعدتك في مشروعك اليوم؟ يمكنك سؤالي عن المكونات، دوائر التوصيل، أو شرح الأكواد.' 
    }
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = () => {
    if (!input.trim() || isThinking) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const currentInput = input;
    setInput("");
    setIsThinking(true);
    
    // Simulate thinking delay
    setTimeout(() => {
      const response: MentorResponse = getLocalMentorResponse(currentInput);
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: response.message,
        links: response.suggestedLinks 
      }]);
      setIsThinking(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-6 pb-20">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight flex items-center gap-3">
            <Bot className="w-10 h-10 text-[#00FF00]" />
            المعلم الآلي (AI Mentor)
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            هذا المساعد مبرمج حالياً بقواعد محلية (V2) للإجابة عن الأساسيات وتوجيهك داخل المنصة، وسيرتبط لاحقاً بنموذج Claude الذكي في تحديث قادم.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl flex flex-col h-[500px] shadow-2xl">
          <div className="flex-grow overflow-y-auto space-y-6 mb-6 pr-2 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === 'user' 
                    ? 'bg-neutral-800 text-white border border-neutral-700' 
                    : 'bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/30 shadow-[0_0_10px_rgba(0,255,0,0.1)]'
                }`}>
                  {msg.sender === 'user' ? <User size={20}/> : <Cpu size={20}/>}
                </div>
                <div className={`flex flex-col gap-2 max-w-[80%] ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-4 rounded-2xl text-sm md:text-base leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-neutral-800 text-white rounded-tr-none' 
                      : 'bg-neutral-800/50 text-neutral-200 rounded-tl-none border border-neutral-700/50'
                  }`}>
                    {msg.text}
                  </div>
                  
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                      {msg.links.map((link, lIdx) => (
                        <Link 
                          key={lIdx} 
                          href={link.url}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00FF00]/10 hover:bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/20 rounded-lg text-xs font-bold transition-colors"
                        >
                          <LinkIcon size={12} />
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isThinking && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/30">
                  <Cpu size={20}/>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-800/50 rounded-tl-none border border-neutral-700/50 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-[#00FF00] animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3 mt-auto relative bg-neutral-800/50 p-2 rounded-full border border-neutral-700">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اسأل المعلم الآلي عن مشاريعك..."
              disabled={isThinking}
              className="w-full bg-transparent text-white border-none py-2 px-4 focus:outline-none focus:ring-0 disabled:opacity-50"
            />
            <button 
              onClick={handleSend}
              disabled={isThinking || !input.trim()}
              className="p-3 bg-[#00FF00] text-black rounded-full hover:bg-[#00CC00] disabled:opacity-50 disabled:hover:bg-[#00FF00] transition-colors shrink-0"
            >
              <Send size={18} className="rtl:-scale-x-100" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}