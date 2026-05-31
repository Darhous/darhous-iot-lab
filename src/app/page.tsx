import Link from 'next/link';
import { Rocket, Terminal, Compass, Cpu, Map, Target } from 'lucide-react';
import { pathsData } from '@/data/paths';
import { projectsData } from '@/data/projects';
import { componentsData } from '@/data/components';
import { codeExamplesData } from '@/data/codeExamples';
import { simulatorsData } from '@/data/simulators';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 font-cairo" dir="rtl">
      <div className="max-w-[1600px] mx-auto space-y-[120px] mt-16">
        
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF00]/10 border border-[#00FF00]/30">
              <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse"></div>
              <span className="font-bold text-sm text-[#00FF00]">النسخة الثانية (V2) متاحة الآن</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,255,0,0.1)]">
              Arduino & IoT<br />
              <span className="text-[#00FF00]">كما لم تره من قبل</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-xl leading-relaxed">
              ابنِ أجهزة ذكية، روبوتات، وأنظمة إنترنت الأشياء (IoT) من الصفر حتى الاحتراف. 
              بيئة تفاعلية غامرة صُممت خصيصاً للمهندسين والمبتكرين في العالم العربي.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/paths" className="bg-[#00FF00] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#00CC00] transition-colors flex items-center gap-2">
                <span>ابدأ التعلم الآن</span>
                <Rocket size={20} />
              </Link>
              <Link href="/simulator" className="bg-neutral-900 border border-neutral-800 text-white font-bold px-8 py-4 rounded-xl hover:border-[#00FF00]/50 transition-colors flex items-center gap-2">
                <span>المحاكي المدمج</span>
                <Terminal size={20} />
              </Link>
            </div>
          </div>
          
          {/* Decorative Visual */}
          <div className="w-full md:w-1/2 relative h-[500px]">
            <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden flex items-center justify-center group shadow-[0_0_50px_rgba(0,255,0,0.05)] hover:shadow-[0_0_50px_rgba(0,255,0,0.1)] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/5 to-transparent"></div>
              <Cpu className="text-neutral-800 group-hover:text-[#00FF00] transition-colors duration-700 w-64 h-64" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-6 bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl">
          <div className="text-center">
            <div className="text-5xl font-black text-[#00FF00] mb-2">{pathsData.length}</div>
            <div className="text-sm font-bold text-neutral-500">مسار شامل</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-2">{projectsData.length}</div>
            <div className="text-sm font-bold text-neutral-500">مشروع عملي</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-2">{componentsData.length}</div>
            <div className="text-sm font-bold text-neutral-500">قطعة إلكترونية</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-[#00FF00] mb-2">{codeExamplesData.length}</div>
            <div className="text-sm font-bold text-neutral-500">كود برمجي جاهز</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-2">{simulatorsData.length}</div>
            <div className="text-sm font-bold text-neutral-500">قالب محاكاة</div>
          </div>
        </section>

        {/* Explore More */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-white">كل ما تحتاجه للإبداع</h2>
            <p className="text-neutral-400">منصتنا توفر لك كل الأدوات والمسارات من التفكير حتى التنفيذ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/roadmaps" className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-[#00FF00]/50 transition-all group">
              <Map className="w-12 h-12 text-[#00FF00] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">خرائط الطريق</h3>
              <p className="text-neutral-400">مسارات توجيهية ترشدك من أين تبدأ وكيف تتدرج في مهاراتك حتى تصل لهدفك المهني.</p>
            </Link>
            
            <Link href="/challenges" className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-[#00FF00]/50 transition-all group">
              <Target className="w-12 h-12 text-[#00FF00] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">التحديات البرمجية</h3>
              <p className="text-neutral-400">اختبر مهاراتك من خلال 40 تحدي برمجي وهندسي واكسب نقاط الخبرة.</p>
            </Link>
            
            <Link href="/projects" className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl hover:border-[#00FF00]/50 transition-all group">
              <Compass className="w-12 h-12 text-[#00FF00] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">المشاريع العملية</h3>
              <p className="text-neutral-400">اكتشف أكثر من 70 مشروع تطبيقي مفصل خطوة بخطوة مع الكود ومخططات التوصيل.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
