import Link from 'next/link';
import { Rocket, Terminal, Compass, Cpu, Wifi } from 'lucide-react';

export default function Home() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-[1600px] mx-auto space-y-[120px]">
      
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 space-y-12 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-surface-tint/30">
            <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></div>
            <span className="font-label-mono text-label-caps text-tertiary-fixed-dim">SYSTEM ONLINE</span>
          </div>
          <h1 className="font-headline-xl text-primary glow-text text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Arduino & IoT<br />كما لم تره من قبل
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl text-lg md:text-xl leading-relaxed">
            ابنِ أجهزة ذكية، روبوتات، وأنظمة إنترنت الأشياء (IoT) من الصفر حتى الاحتراف. 
            بيئة تفاعلية غامرة صُممت خصيصاً للمهندسين والمبتكرين.
          </p>
          <div className="flex flex-wrap gap-6 pt-6">
            <Link href="/paths" className="bg-gradient-to-r from-surface-tint to-secondary-container text-white font-label-mono px-8 py-3 rounded-lg neon-border-hover transition-all flex items-center gap-2">
              <span>ابدأ التعلم</span>
              <Rocket size={20} />
            </Link>
            <Link href="/simulator" className="glass-card font-label-mono px-8 py-3 rounded-lg neon-border-hover transition-all text-primary-fixed-dim flex items-center gap-2">
              <span>افتح المحاكي</span>
              <Terminal size={20} />
            </Link>
            <Link href="/projects" className="text-on-surface-variant hover:text-primary-fixed-dim font-label-mono px-4 py-3 transition-colors flex items-center gap-2">
              <span>استكشف المشاريع</span>
              <Compass size={20} />
            </Link>
          </div>
        </div>
        
        {/* Decorative Visual */}
        <div className="w-full md:w-1/2 relative h-[500px]">
          <div className="absolute inset-0 glass-card rounded-xl overflow-hidden flex items-center justify-center neon-border-hover group">
            <div className="absolute inset-0 bg-gradient-to-br from-surface-tint/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <Cpu className="text-surface-tint/40 group-hover:text-surface-tint/80 transition-colors w-40 h-40 drop-shadow-[0_0_30px_rgba(0,219,231,0.5)]" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 glass-panel p-8 rounded-xl">
        <div className="text-center">
          <div className="font-headline-xl text-primary text-4xl mb-2">12</div>
          <div className="font-label-caps text-on-surface-variant">مسارات التعلم</div>
        </div>
        <div className="text-center">
          <div className="font-headline-xl text-secondary-fixed-dim text-4xl mb-2">50+</div>
          <div className="font-label-caps text-on-surface-variant">المشاريع</div>
        </div>
        <div className="text-center">
          <div className="font-headline-xl text-tertiary-fixed-dim text-4xl mb-2">24</div>
          <div className="font-label-caps text-on-surface-variant">مكون إلكتروني</div>
        </div>
        <div className="text-center">
          <div className="font-headline-xl text-primary-fixed-dim text-4xl mb-2">100+</div>
          <div className="font-label-caps text-on-surface-variant">أكواد جاهزة</div>
        </div>
        <div className="text-center">
          <div className="font-headline-xl text-primary text-4xl mb-2">8</div>
          <div className="font-label-caps text-on-surface-variant">محاكيات مدمجة</div>
        </div>
      </section>

      {/* Featured Learning Paths Placeholder */}
      <section className="space-y-8">
        <h2 className="font-headline-lg text-primary flex items-center gap-4">
          <Wifi className="text-tertiary-fixed-dim" /> 
          المسارات المقترحة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl hover:border-surface-tint transition-all group">
            <h3 className="font-headline-md text-primary-fixed-dim mb-2">أساسيات الأردوينو</h3>
            <p className="font-body-md text-on-surface-variant mb-4">تعلم برمجة لوحات الأردوينو وبناء الدوائر الإلكترونية الأولى لك.</p>
            <Link href="/paths/arduino-basics" className="text-primary group-hover:text-primary-fixed transition-colors text-sm font-label-mono">ابدأ المسار ←</Link>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-secondary-fixed-dim transition-all group">
            <h3 className="font-headline-md text-secondary-fixed-dim mb-2">مشاريع إنترنت الأشياء</h3>
            <p className="font-body-md text-on-surface-variant mb-4">ربط ESP32 بالإنترنت وإرسال البيانات لمنصات الكلاود.</p>
            <Link href="/paths/esp32-iot" className="text-secondary-fixed-dim group-hover:text-secondary-fixed transition-colors text-sm font-label-mono">ابدأ المسار ←</Link>
          </div>
          <div className="glass-card p-6 rounded-xl hover:border-tertiary-fixed-dim transition-all group">
            <h3 className="font-headline-md text-tertiary-fixed-dim mb-2">أتمتة المنزل الذكي</h3>
            <p className="font-body-md text-on-surface-variant mb-4">تحكم في الإضاءة والأجهزة عبر حساسات الحركة والموبايل.</p>
            <Link href="/paths/smart-home" className="text-tertiary-fixed-dim group-hover:text-tertiary-fixed transition-colors text-sm font-label-mono">ابدأ المسار ←</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
