import Link from "next/link";
import { Route, CheckCircle, Lock, Clock, Layers } from "lucide-react";
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
          <Link href={`/paths/${path.id}`} key={path.id} className={`glass-card p-6 rounded-xl flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${path.status === 'locked' ? 'opacity-75 grayscale hover:grayscale-0' : 'hover:border-primary-fixed-dim'}`}>
            {path.status === 'locked' && (
              <div className="absolute top-4 left-4">
                <Lock className="text-outline w-5 h-5" />
              </div>
            )}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-label-mono px-2 py-1 rounded ${path.status === 'active' ? 'bg-primary-container/20 text-primary-fixed-dim' : 'bg-surface-container-high text-outline'}`}>
                {path.level}
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-2">{path.title}</h3>
            <p className="font-body-sm text-on-surface-variant mb-6 line-clamp-2">{path.overview}</p>
            <div className="flex flex-wrap gap-4 mt-auto mb-6">
              <span className="font-label-mono text-xs text-outline flex items-center gap-1">
                <Layers size={14}/> {path.modules} وحدات
              </span>
              <span className="font-label-mono text-xs text-outline flex items-center gap-1">
                <Clock size={14}/> {path.duration}
              </span>
            </div>
            <div>
              <button className={`w-full py-2 rounded-lg font-label-mono transition-colors flex justify-center items-center gap-2 ${path.status === 'active' ? 'bg-secondary-container text-on-secondary-container hover:brightness-110' : 'bg-surface-container text-outline cursor-not-allowed'}`}>
                {path.status === 'active' ? (
                  <>متابعة التعلم <CheckCircle size={16} /></>
                ) : (
                  'مغلق'
                )}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}