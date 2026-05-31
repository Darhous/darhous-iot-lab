import { Globe2, ArrowUpRight } from "lucide-react";
import { ecosystemMap } from "@/config/ecosystem";

export default function EcosystemPage() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12 pb-20">
      <div className="space-y-4 text-center mb-12">
        <Globe2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline-xl text-on-surface">
          منظومة Darhous التعليمية
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          هذا المعمل (IoT Lab) هو جزء من منظومة شاملة قيد التطوير لتقديم تجربة تعليمية تقنية متكاملة من الصفر للاحتراف.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemMap.map((node) => (
          <div key={node.id} className={`glass-card p-6 rounded-xl border flex flex-col h-full ${node.status === 'active' ? 'border-primary-fixed-dim shadow-glow-primary bg-primary/5' : 'border-outline-variant bg-surface-container/50 opacity-80'}`}>
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-label-mono px-2 py-1 rounded ${node.status === 'active' ? 'bg-primary-container text-primary' : 'bg-surface-container-high text-outline'}`}>
                {node.status === 'active' ? 'متوفر حالياً' : 'مخطط للتطوير'}
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-2">{node.name}</h3>
            <p className="font-body-sm text-on-surface-variant mb-6 flex-grow">{node.description}</p>
            {node.status === 'active' && node.url !== '#' && (
              <a href={node.url} className="text-sm font-label-mono text-primary flex items-center gap-1 hover:brightness-110">
                زيارة المنصة <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}