import { codeExamplesData } from "@/data/codeExamples";
import { Code2, PlayCircle, AlertTriangle } from "lucide-react";

export default function CodeLabPage() {
  return (
    <div className="px-4 md:px-16 pt-8 pb-20 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Code2 className="w-10 h-10 text-secondary-fixed-dim" />
          معمل الأكواد (Code Lab)
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          أكواد جاهزة للنسخ والاستخدام الفوري لمختلف الحساسات والمحركات، مع شرح لكل سطر والأخطاء الشائعة.
        </p>
      </div>

      <div className="space-y-8">
        {codeExamplesData.map((example) => (
          <div key={example.id} className="glass-card rounded-xl overflow-hidden border border-outline-variant">
            <div className="p-6 bg-surface-container/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2 py-1 bg-primary-container text-primary-fixed-dim text-xs font-label-mono rounded">
                    {example.board}
                  </span>
                  <h3 className="font-headline-md text-on-surface">{example.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {example.components.map((comp, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-surface-container-high rounded border border-outline-variant text-outline">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
              {example.simulatorLink && (
                <a href={example.simulatorLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-tertiary-container text-tertiary-fixed-dim rounded font-label-mono text-sm flex items-center gap-2 hover:brightness-110 transition-all shrink-0">
                  <PlayCircle size={16} /> جرب في المحاكي
                </a>
              )}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-0 border-b lg:border-b-0 lg:border-l border-outline-variant rtl:lg:border-r rtl:lg:border-l-0">
                <pre className="p-6 bg-[#1e1e1e] text-green-400 font-mono text-sm overflow-x-auto h-full" dir="ltr">
                  <code>{example.code}</code>
                </pre>
              </div>
              <div className="p-6 space-y-6 bg-surface-container/20">
                <div>
                  <h4 className="font-headline-sm text-primary-fixed-dim mb-2">شرح الكود</h4>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {example.explanation}
                  </p>
                </div>
                <div className="p-4 bg-error-container/10 border border-error/30 rounded-lg">
                  <h4 className="font-headline-sm text-error mb-2 flex items-center gap-2">
                    <AlertTriangle size={16} /> أخطاء شائعة جداً
                  </h4>
                  <p className="font-body-sm text-on-surface leading-relaxed">
                    {example.commonErrors}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}