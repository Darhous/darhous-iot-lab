"use client";

import { useState } from "react";
import { Bot, User, Send, Cpu } from "lucide-react";
import { getLocalMentorResponse } from "@/lib/mentor/localMentor";

export default function MentorPage() {
  const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([
    { sender: 'bot', text: 'أهلاً بك في المساعد الذكي لمعمل إنترنت الأشياء. كيف يمكنني مساعدتك في برمجتك اليوم؟ هل لديك سؤال عن الأردوينو، الكود، أو مكون معين؟' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    const currentInput = input;
    setInput("");
    
    // Simulate thinking delay
    setTimeout(() => {
      const response = getLocalMentorResponse(currentInput);
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    }, 1000);
  };

  return (
    <div className="px-4 md:px-16 pt-8 max-w-4xl mx-auto space-y-6 pb-20">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Bot className="w-10 h-10 text-secondary-fixed-dim" />
          المعلم الآلي (AI Mentor)
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-2xl">
          هذا المساعد مبرمج حالياً بقواعد محلية للإجابة عن الأساسيات، وسيرتبط لاحقاً بنموذج لغوي كبير.
        </p>
      </div>

      <div className="glass-panel p-6 rounded-2xl flex flex-col h-[500px]">
        <div className="flex-grow overflow-y-auto space-y-4 mb-4 pr-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-tertiary text-on-tertiary' : 'bg-secondary text-on-secondary'}`}>
                {msg.sender === 'user' ? <User size={16}/> : <Cpu size={16}/>}
              </div>
              <div className={`p-3 max-w-[80%] rounded-xl font-body-sm leading-relaxed ${msg.sender === 'user' ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-surface-container-high text-on-surface'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mt-auto relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="اسأل عن أي حساس أو مكون..."
            className="w-full bg-surface-container-high border border-outline text-on-surface rounded-full py-3 px-6 pl-14 focus:outline-none focus:border-primary font-body-sm"
          />
          <button 
            onClick={handleSend}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-on-primary rounded-full hover:brightness-110 transition-colors"
          >
            <Send size={18} className="rtl:-scale-x-100" />
          </button>
        </div>
      </div>
    </div>
  );
}