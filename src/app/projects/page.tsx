import Link from "next/link";
import { Cpu, Zap, Clock, Wrench } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Cpu className="w-10 h-10 text-tertiary-fixed-dim" />
          مشاريع إنترنت الأشياء
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          طبق ما تعلمته في مشاريع حقيقية. من إشارات المرور وحتى أنظمة الذكاء الاصطناعي والمنازل الذكية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="glass-card p-6 rounded-xl flex flex-col group hover:-translate-y-2 hover:border-tertiary-fixed-dim transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-label-mono px-2 py-1 rounded ${project.difficulty === 'مبتدئ' ? 'bg-primary-container text-primary-fixed-dim' : project.difficulty === 'متوسط' ? 'bg-tertiary-container text-tertiary-fixed-dim' : 'bg-error-container text-error'}`}>
                {project.difficulty}
              </span>
              <span className="text-xs font-label-mono text-outline flex items-center gap-1">
                <Clock size={12}/> {project.timeEstimate}
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-2 group-hover:text-tertiary-fixed-dim transition-colors">{project.title}</h3>
            <p className="font-body-sm text-on-surface-variant mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.hardwareTags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-[10px] px-2 py-1 bg-surface-container-high rounded border border-outline-variant text-outline flex items-center gap-1">
                  <Wrench size={10} /> {tag}
                </span>
              ))}
            </div>

            <div className="w-full py-2 rounded-lg font-label-mono text-center border border-outline-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors flex justify-center items-center gap-2">
              <Zap size={16} /> ابدأ المشروع
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}