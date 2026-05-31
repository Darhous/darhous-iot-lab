import Link from "next/link";
import { Route, CheckCircle, Lock } from "lucide-react";

export default function PathsPage() {
  const paths = [
    {
      id: "arduino-basics",
      title: "أساسيات الأردوينو",
      level: "مبتدئ",
      duration: "4 ساعات",
      status: "active",
      modules: 8
    },
    {
      id: "sensors-actuators",
      title: "الحساسات والمحركات",
      level: "متوسط",
      duration: "6 ساعات",
      status: "locked",
      modules: 12
    },
    {
      id: "esp32-iot",
      title: "مشاريع إنترنت الأشياء",
      level: "متقدم",
      duration: "10 ساعات",
      status: "locked",
      modules: 15
    }
  ];

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
        {paths.map((path) => (
          <div key={path.id} className={`glass-card p-6 rounded-xl flex flex-col relative overflow-hidden ${path.status === 'locked' ? 'opacity-75 grayscale hover:grayscale-0' : 'hover:border-primary-fixed-dim'}`}>
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
            <p className="font-label-mono text-sm text-on-surface-variant mb-6 flex items-center gap-4">
              <span>{path.modules} وحدات</span>
              <span>{path.duration}</span>
            </p>
            <div className="mt-auto">
              <button className={`w-full py-2 rounded-lg font-label-mono transition-colors flex justify-center items-center gap-2 ${path.status === 'active' ? 'bg-secondary-container text-on-secondary-container hover:brightness-110' : 'bg-surface-container text-outline cursor-not-allowed'}`}>
                {path.status === 'active' ? (
                  <>متابعة التعلم <CheckCircle size={16} /></>
                ) : (
                  'مغلق'
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}