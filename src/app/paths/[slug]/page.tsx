import { pathsData } from "@/data/paths";
import { notFound } from "next/navigation";
import { Route, Clock, CheckCircle, GraduationCap, Code2, Cpu } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return pathsData.map((path) => ({
    slug: path.id,
  }));
}

export default function PathDetailPage({ params }: { params: { slug: string } }) {
  const path = pathsData.find(p => p.id === params.slug);
  
  if (!path) {
    notFound();
  }

  return (
    <div className="px-4 md:px-16 pt-8 max-w-5xl mx-auto space-y-12">
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden border border-primary-fixed-dim/30">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed-dim/10 blur-[100px] rounded-full"></div>
        <div className="flex items-center gap-4 mb-4">
          <Route className="text-primary w-8 h-8" />
          <span className="bg-surface-container-high text-outline text-sm font-label-mono px-3 py-1 rounded-full">
            {path.level}
          </span>
          <span className="bg-surface-container-high text-outline text-sm font-label-mono px-3 py-1 rounded-full flex items-center gap-2">
            <Clock size={14}/> {path.duration}
          </span>
        </div>
        <h1 className="font-headline-xl text-on-surface mb-4">{path.title}</h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {path.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-primary-fixed-dim mb-4 flex items-center gap-2">
              <GraduationCap /> المهارات المكتسبة
            </h3>
            <ul className="space-y-3">
              {path.modules.map((module, i) => (
                <li key={i} className="flex items-start gap-3 font-body-md text-on-surface">
                  <CheckCircle className="text-secondary-fixed-dim shrink-0 w-5 h-5" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-error mb-4 flex items-center gap-2">
              متطلبات مسبقة
            </h3>
            <p className="font-body-md text-on-surface-variant">
              {path.prerequisites}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-secondary-fixed-dim mb-4 flex items-center gap-2">
              <Code2 /> دروس هذا المسار
            </h3>
            <div className="space-y-3">
              {path.relatedLessons.length > 0 ? path.relatedLessons.map((lessonId, i) => (
                <Link href={`/lessons/${lessonId}`} key={i} className="block p-3 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors font-body-md text-on-surface border border-outline-variant/30">
                  الدرس {i+1}: {lessonId.replace(/-/g, " ")}
                </Link>
              )) : <p className="text-outline text-sm">لا توجد دروس مخصصة بعد</p>}
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-tertiary-fixed-dim mb-4 flex items-center gap-2">
              <Cpu /> مشاريع تطبيقية
            </h3>
            <div className="flex flex-wrap gap-2">
              {path.relatedProjects.length > 0 ? path.relatedProjects.map((projId, i) => (
                <Link href={`/projects/${projId}`} key={i} className="px-3 py-1 bg-surface-container-high rounded border border-outline-variant text-sm font-label-mono text-on-surface hover:text-primary transition-colors">
                  {projId}
                </Link>
              )) : <p className="text-outline text-sm">لا توجد مشاريع مخصصة بعد</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}