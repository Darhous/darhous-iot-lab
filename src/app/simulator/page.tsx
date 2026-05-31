import { simulatorsData } from "@/data/simulators";
import { MonitorPlay, ExternalLink, AlertCircle } from "lucide-react";

export default function SimulatorPage() {
  return (
    <div className="px-4 md:px-16 pt-8 pb-20 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <MonitorPlay className="w-10 h-10 text-tertiary-fixed-dim" />
          بيئة المحاكاة
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          جرب الأكواد والدوائر الإلكترونية بأمان على المتصفح قبل تنفيذها على أرض الواقع.
        </p>
      </div>

      <div className="bg-surface-container-high p-4 rounded-lg flex items-start gap-3 border border-warning/50">
        <AlertCircle className="text-warning shrink-0 mt-0.5" />
        <p className="font-body-sm text-on-surface-variant">
          نحن نوفر هنا روابط ومساحات عمل جاهزة لأفضل المحاكيات العالمية (مثل Wokwi و Tinkercad). عند النقر على أي محاكي خارجي سيتم توجيهك أو فتح نافذة المحاكي.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {simulatorsData.map((sim) => (
          <div key={sim.id} className="glass-card p-6 rounded-xl border border-outline-variant flex flex-col h-full hover:border-tertiary-fixed-dim transition-colors">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-label-mono px-2 py-1 rounded bg-tertiary-container text-tertiary-fixed-dim">
                {sim.engine}
              </span>
              <span className="text-xs font-label-mono text-outline">
                {sim.difficulty}
              </span>
            </div>
            
            <h3 className="font-headline-lg text-on-surface mb-3">{sim.title}</h3>
            <p className="font-body-md text-on-surface-variant mb-6 flex-grow">{sim.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {sim.tags.map((tag, i) => (
                <span key={i} className="text-[10px] px-2 py-1 bg-surface-container rounded border border-outline-variant text-outline">
                  {tag}
                </span>
              ))}
            </div>

            {sim.embedUrl ? (
              <div className="w-full h-96 rounded-lg overflow-hidden border border-outline-variant relative">
                <iframe src={sim.embedUrl} className="w-full h-full" title={sim.title}></iframe>
              </div>
            ) : (
              <a href={sim.externalUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-on-primary rounded-lg font-headline-sm flex justify-center items-center gap-2 hover:brightness-110 transition-all shadow-glow-primary">
                فتح {sim.engine} في نافذة جديدة <ExternalLink size={20} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}