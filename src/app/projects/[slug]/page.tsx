import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import { Cpu, Clock, CheckCircle, Wrench, AlertTriangle, Code2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.id === params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="px-4 md:px-16 pt-8 pb-20 max-w-5xl mx-auto space-y-12">
      <div className="space-y-4">
        <Link href="/projects" className="text-sm font-label-mono text-outline hover:text-primary transition-colors flex items-center gap-1 mb-6">
          <ArrowLeft size={16} /> العودة للمشاريع
        </Link>
        <div className="flex items-center gap-4 mb-2">
          <span className="bg-surface-container-high text-outline text-sm font-label-mono px-3 py-1 rounded-full">
            {project.difficulty}
          </span>
          <span className="bg-surface-container-high text-outline text-sm font-label-mono px-3 py-1 rounded-full flex items-center gap-2">
            <Clock size={14}/> {project.timeEstimate}
          </span>
        </div>
        <h1 className="font-headline-xl text-on-surface flex items-center gap-4">
          <Cpu className="text-tertiary-fixed-dim" />
          {project.title}
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-tertiary-fixed-dim mb-4 flex items-center gap-2">
              <Wrench /> قائمة القطع
            </h3>
            <ul className="space-y-3 font-body-sm text-on-surface">
              {project.components.map((comp, i) => (
                <li key={i} className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
                  <span>{comp.name}</span>
                  <span className="bg-surface-container px-2 py-1 rounded text-xs">x{comp.qty}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-primary-fixed-dim mb-4 flex items-center gap-2">
              <CheckCircle /> مخرجات التعلم
            </h3>
            <ul className="list-disc list-inside space-y-2 font-body-sm text-on-surface-variant">
              {project.learningOutcomes.map((out, i) => (
                <li key={i}>{out}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-secondary-fixed-dim mb-4 flex items-center gap-2">
              <Code2 /> التوصيل
            </h3>
            <p className="font-body-sm text-on-surface leading-relaxed">
              {project.wiringSummary}
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-headline-md text-warning mb-4 flex items-center gap-2">
              <CheckCircle /> خطوات التنفيذ
            </h3>
            <ol className="list-decimal list-inside space-y-3 font-body-sm text-on-surface">
              {project.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-outline-variant">
        <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex justify-between items-center">
          <span className="font-label-mono text-sm text-on-surface">مقتطف الكود الأساسي</span>
        </div>
        <pre className="p-4 bg-[#1e1e1e] text-green-400 font-mono text-sm overflow-x-auto" dir="ltr">
          <code>{project.codeSnippet}</code>
        </pre>
      </div>

      <div className="glass-card p-6 rounded-xl border border-error/50">
        <h3 className="font-headline-md text-error mb-4 flex items-center gap-2">
          <AlertTriangle /> استكشاف الأخطاء وإصلاحها
        </h3>
        <ul className="list-disc list-inside space-y-2 font-body-sm text-on-surface">
          {project.troubleshooting.map((trouble, i) => (
            <li key={i}>{trouble}</li>
          ))}
        </ul>
      </div>

      {project.simulatorLink && (
        <div className="flex justify-center pt-8">
          <a href={project.simulatorLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-tertiary text-on-tertiary rounded-xl font-headline-sm flex items-center gap-3 hover:brightness-110 transition-all shadow-glow-tertiary">
            <Cpu size={24} /> محاكاة هذا المشروع الآن
          </a>
        </div>
      )}
    </div>
  );
}