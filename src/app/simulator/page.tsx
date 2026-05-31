import Link from "next/link";
import { Terminal, Play, Server, Layers } from "lucide-react";

export default function SimulatorHub() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-[1600px] mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Terminal className="w-10 h-10 text-tertiary-fixed-dim" />
          مركز المحاكاة
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          اختبر الدوائر الإلكترونية واكتب الأكواد البرمجية مباشرة من المتصفح باستخدام Wokwi و CircuitJS بدون الحاجة لمكونات حقيقية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Wokwi Embedded Simulator */}
        <div className="glass-panel p-6 rounded-xl flex flex-col h-[600px] space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-md text-primary-fixed-dim flex items-center gap-2">
              <Server size={24} /> محاكي Wokwi (Arduino)
            </h2>
            <span className="bg-primary-container/20 text-primary-fixed px-3 py-1 rounded text-sm font-label-mono">M1</span>
          </div>
          <div className="flex-1 rounded-lg overflow-hidden border border-outline-variant/30 bg-black">
            <iframe
              src="https://wokwi.com/projects/305569065545499202?hideWokwiLogo=1"
              width="100%"
              height="100%"
              title="Wokwi Embedded"
              className="border-0"
              allow="clipboard-write"
            ></iframe>
          </div>
          <p className="font-label-mono text-sm text-outline">
            مدمج بأمان من Wokwi.
          </p>
        </div>

        {/* Fallback Simulator Cards */}
        <div className="space-y-6">
          <h2 className="font-headline-md text-secondary-fixed-dim flex items-center gap-2">
            <Layers size={24} /> أدوات المحاكاة الخارجية
          </h2>
          
          <div className="glass-card p-6 rounded-xl border border-secondary-fixed-dim/30 hover:border-secondary-fixed-dim transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-fixed-dim/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="font-headline-md text-on-surface mb-2">محاكي الدوائر (CircuitJS)</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              محاكي إلكترونيات تماثلية ممتاز لدراسة الجهد، التيار، وقانون أوم (Ohm's Law).
            </p>
            <a href="https://www.falstad.com/circuit/" target="_blank" rel="noopener noreferrer" className="bg-secondary-container text-on-secondary-container font-label-mono px-6 py-2 rounded flex items-center w-fit gap-2 hover:brightness-110 transition-all">
              <Play size={16} /> افتح في نافذة جديدة
            </a>
          </div>

          <div className="glass-card p-6 rounded-xl border border-outline-variant hover:border-primary-fixed-dim transition-all group relative overflow-hidden">
            <h3 className="font-headline-md text-on-surface mb-2">Tinkercad Circuits</h3>
            <p className="font-body-md text-on-surface-variant mb-6">
              مثالي للمبتدئين لبناء دوائر Arduino مع Breadboard بشكل ثلاثي الأبعاد مبسط.
            </p>
            <a href="https://www.tinkercad.com/circuits" target="_blank" rel="noopener noreferrer" className="border border-outline-variant text-on-surface-variant hover:text-primary-fixed-dim hover:border-primary-fixed-dim font-label-mono px-6 py-2 rounded flex items-center w-fit gap-2 transition-all">
              <Play size={16} /> افتح في نافذة جديدة
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}