import { componentsData } from "@/data/components";
import { notFound } from "next/navigation";
import { PackageOpen, AlertTriangle, Zap, CheckCircle, Code2, ArrowLeft } from "lucide-react";
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
    <div className="px-4 md:px-16 pt-8 pb-20 max-w-5xl mx-auto space-y-12">
      <div className="space-y-4">
        <Link href="/components" className="text-sm font-label-mono text-outline hover:text-primary transition-colors flex items-center gap-1 mb-6">
          <ArrowLeft size={16} /> العودة للمكونات
        </Link>
        <div className="flex items-center gap-4 mb-2">
          <span className="bg-surface-container-high text-outline text-sm font-label-mono px-3 py-1 rounded-full">
            {comp.category}
          </span>
        </div>
        <h1 className="font-headline-xl text-on-surface flex items-center gap-4">
          <PackageOpen className="text-primary-fixed-dim" />
          {comp.name} <span className="text-outline text-2xl">({comp.arabicName})</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {comp.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl border border-primary-fixed-dim/30">
            <h3 className="font-headline-md text-primary-fixed-dim mb-4 flex items-center gap-2">
              <Zap /> الأطراف (Pins)
            </h3>
            <ul className="space-y-3 font-body-sm text-on-surface">
              {comp.pins.length > 0 ? comp.pins.map((pin, i) => (
                <li key={i} className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                  <span className="font-label-mono text-secondary-fixed-dim">{pin.name}</span>
                  <span className="text-sm text-on-surface-variant text-left">{pin.desc}</span>
                </li>
              )) : <li className="text-outline text-sm">لا توجد أطراف محددة</li>}
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-tertiary-fixed-dim mb-4 flex items-center gap-2">
              <CheckCircle /> مثال الاستخدام
            </h3>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              {comp.exampleUsage}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl border-t-4 border-warning">
            <h3 className="font-headline-md text-warning mb-4 flex items-center gap-2">
              <AlertTriangle /> ملاحظات السلامة والتوصيل
            </h3>
            <p className="font-body-sm text-on-surface leading-relaxed mb-4 pb-4 border-b border-outline-variant/30">
              <strong className="text-on-surface">التوصيل:</strong> {comp.wiringNotes}
            </p>
            <p className="font-body-sm text-error leading-relaxed">
              <strong className="text-error">تحذير:</strong> {comp.safetyNotes}
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-secondary-fixed-dim mb-4 flex items-center gap-2">
              <Code2 /> روابط ذات صلة
            </h3>
            <div className="space-y-4">
              {comp.relatedLessons.length > 0 && (
                <div>
                  <h4 className="text-sm font-label-mono text-outline mb-2">دروس تشرح المكون:</h4>
                  <div className="flex flex-wrap gap-2">
                    {comp.relatedLessons.map(l => (
                      <Link href={`/lessons/${l}`} key={l} className="text-xs bg-surface-container px-2 py-1 rounded text-primary hover:bg-surface-container-high transition-colors">
                        {l}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {comp.relatedProjects.length > 0 && (
                <div>
                  <h4 className="text-sm font-label-mono text-outline mb-2">مشاريع تستخدمه:</h4>
                  <div className="flex flex-wrap gap-2">
                    {comp.relatedProjects.map(p => (
                      <Link href={`/projects/${p}`} key={p} className="text-xs bg-surface-container px-2 py-1 rounded text-tertiary hover:bg-surface-container-high transition-colors">
                        {p}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}