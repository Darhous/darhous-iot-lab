import { componentsData } from "@/data/components";
import { notFound } from "next/navigation";
import { PackageOpen, Zap, ArrowRight, DollarSign, ExternalLink } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return componentsData.map((comp) => ({
    slug: comp.id,
  }));
}

export default function ComponentDetailPage({ params }: { params: { slug: string } }) {
  const comp = componentsData.find(c => c.id === params.slug);
  
  if (!comp) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#00FF00]/30 py-12 px-4 sm:px-6 lg:px-8 mt-16 font-cairo" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/components" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#00FF00] transition-colors">
          <ArrowRight size={20} />
          <span>العودة لموسوعة المكونات</span>
        </Link>
        
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/30 text-sm font-bold px-4 py-2 rounded-full">
              {comp.category}
            </span>
            {comp.priceRange && (
              <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1">
                <DollarSign size={16} /> السعر التقريبي: {comp.priceRange}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-6 flex items-center gap-4 text-white">
            <PackageOpen className="text-[#00FF00] w-12 h-12 shrink-0" />
            {comp.name}
          </h1>
          
          <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
            {comp.description}
          </p>

          {comp.buyLink && (
            <div className="mt-8">
              <a href={comp.buyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00FF00] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#00CC00] transition-colors">
                <span>رابط الشراء المقترح</span>
                <ExternalLink size={18} />
              </a>
            </div>
          )}
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="text-[#00FF00]" /> الأطراف والتوصيلات (Pins)
          </h3>
          <div className="grid gap-4">
            {comp.pins.length > 0 ? comp.pins.map((pin, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-neutral-800/50 border border-neutral-700/50 p-4 rounded-xl gap-4">
                <span className="font-bold text-[#00FF00] text-lg bg-[#00FF00]/10 px-4 py-2 rounded-lg inline-block text-center min-w-[100px]">{pin.name}</span>
                <span className="text-neutral-300 text-lg sm:text-right flex-1">{pin.description}</span>
              </div>
            )) : <div className="text-neutral-500 p-4 text-center">لا توجد أطراف محددة</div>}
          </div>
        </div>

      </div>
    </div>
  );
}