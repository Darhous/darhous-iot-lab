import Link from "next/link";
import { Route, CheckCircle, Clock, Layers } from "lucide-react";
import { pathsData } from "@/data/paths";

export default function PathsPage() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Route className="w-10 h-10 text-secondary-fixed-dim" />
          مسارات التعلم (Learning Paths)
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          اختر المسار المناسب لمستواك، وابدأ رحلتك من الصفر وحتى بناء أنظمة ذكية معقدة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pathsData.map((path) => (
          <Link href={`/paths/${path.id}`} key={path.id} className={`glass-card p-6 rounded-xl flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary-fixed-dim`}>
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-label-mono px-2 py-1 rounded bg-surface-container-high text-outline`}>
                {path.level}
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-2">{path.title}</h3>
            <p className="font-body-sm text-on-surface-variant mb-6 line-clamp-2">{path.description}</p>
            <div className="flex flex-wrap gap-4 mt-auto mb-6">
              <span className="font-label-mono text-xs text-outline flex items-center gap-1">
                <Layers size={14}/> {path.modules.length} وحدات
              </span>
              <span className="font-label-mono text-xs text-outline flex items-center gap-1">
                <Clock size={14}/> {path.duration}
              </span>
            </div>
            <div>
              <button className={`w-full py-2 rounded-lg font-label-mono transition-colors flex justify-center items-center gap-2 bg-secondary-container text-on-secondary-container hover:brightness-110`}>
                <>متابعة التعلم <CheckCircle size={16} /></>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}