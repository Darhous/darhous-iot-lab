import Link from "next/link";
import { Compass, Clock, Cpu, ChevronLeft } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsGalaxy() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-[1600px] mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Compass className="w-10 h-10 text-primary-fixed-dim" />
          مكتبة المشاريع (Projects Galaxy)
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          استكشف مجموعة واسعة من مشاريع الأردوينو وإنترنت الأشياء بدءاً من المبتدئين وحتى المستويات المتقدمة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="glass-card p-6 rounded-xl hover:border-primary-fixed-dim transition-all group flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded bg-surface border border-outline-variant flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <span className="bg-primary-container/20 text-primary-fixed-dim text-xs font-label-mono px-2 py-1 rounded">
                {project.difficulty}
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">{project.titleAr}</h3>
            <div className="font-label-mono text-outline flex items-center gap-2 mb-4">
              <Clock size={16} /> {project.estimatedTime}
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant/30 flex justify-between items-center text-primary-fixed-dim text-sm font-label-mono opacity-80 group-hover:opacity-100">
              <span>عرض تفاصيل المشروع</span>
              <ChevronLeft size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}