"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquareCode, Bot, User, Send, Zap } from "lucide-react";

type Message = { id: string; role: "user" | "mentor"; content: string };

export default function MentorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "mentor", content: "مرحباً يا بطل! أنا المساعد الذكي الخاص بمختبر Darhous IoT. كيف يمكنني مساعدتك في مشروعك اليوم؟" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate rule-based demo response
    setTimeout(() => {
      let botResponse = "عذراً، هذا رد تجريبي محلي. لاحقاً سيتم ربط المساعد بمحرك Gemini أو OpenAI عبر Darhous AI Academy للرد التفصيلي.";
      
      if (userMsg.content.includes("شرح") || userMsg.content.toLowerCase().includes("explain")) {
        botResponse = "يبدو أنك تطلب شرحاً للكود! وظيفة ()setup في الأردوينو تعمل مرة واحدة فقط عند بدء التشغيل، وتستخدم لتعريف المداخل والمخارج.";
      } else if (userMsg.content.includes("مشروع") || userMsg.content.includes("فكرة")) {
        botResponse = "ما رأيك بمشروع (نظام ري ذكي)؟ ستحتاج إلى حساس رطوبة التربة، مضخة مياه صغيرة، وريلاي (Relay). هل أكتب لك الكود المبدئي؟";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: "mentor", content: botResponse }]);
    }, 1000);
  };

  return (
    <div className="px-4 md:px-16 pt-8 max-w-5xl mx-auto h-[calc(100vh-80px)] flex flex-col">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="font-headline-xl text-secondary-fixed-dim flex items-center gap-4 text-3xl">
            <MessageSquareCode className="w-8 h-8" />
            المساعد الذكي (AI Mentor)
          </h1>
          <p className="font-label-mono text-outline mt-2 text-sm">
            ملاحظة: هذه نسخة تجريبية محلية (Local Demo).
          </p>
        </div>
        <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary-fixed-dim pulse-dot"></div>
          <span className="font-label-mono text-secondary-fixed-dim text-sm">متصل</span>
        </div>
      </div>

      <div className="flex-1 glass-panel rounded-t-xl p-6 overflow-y-auto flex flex-col gap-6">
        {messages.map(msg => (
          <div key={msg.id} className={`flex gap-4 max-w-[80%] ${msg.role === "user" ? "mr-auto flex-row-reverse" : "ml-auto"}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary-container text-on-primary-container" : "bg-surface-container-high border border-secondary-fixed-dim text-secondary-fixed-dim"}`}>
              {msg.role === "user" ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className={`p-4 rounded-2xl ${msg.role === "user" ? "bg-primary-container/10 border border-primary-container/30 text-on-surface" : "bg-surface-container-highest border border-outline-variant/30 text-on-surface"}`}>
              <p className="font-body-md leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="glass-card p-4 rounded-b-xl border-t-0 flex gap-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="اسألني عن الأردوينو، الإلكترونيات، أو اطلب المساعدة في الكود..."
          className="flex-1 bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-secondary-fixed-dim transition-colors"
        />
        <button 
          onClick={handleSend}
          className="bg-secondary-container text-on-secondary-container px-6 rounded-lg hover:brightness-110 transition-all flex items-center justify-center"
        >
          <Send size={20} className="rtl:-scale-x-100" />
        </button>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {["اشرح لي كود البداية (Blink)", "كيف أقرأ حساس مسافة؟", "ما هو الريلاي؟", "اقترح مشروعاً ممتعاً"].map((suggestion, i) => (
          <button 
            key={i}
            onClick={() => setInput(suggestion)}
            className="whitespace-nowrap font-label-mono text-xs text-outline border border-outline-variant rounded-full px-4 py-2 hover:bg-surface-container-high hover:text-on-surface transition-colors"
          >
            <Zap size={12} className="inline mr-1" /> {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}