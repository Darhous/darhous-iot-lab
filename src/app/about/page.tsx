import { Info, Code, Zap } from "lucide-react";
import { brandConfig } from "@/config/brand";

export default function AboutPage() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-4xl mx-auto space-y-12 pb-20">
      <div className="space-y-4 text-center mb-12">
        <Info className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline-xl text-on-surface">عن المنصة</h1>
        <p className="font-body-lg text-on-surface-variant leading-relaxed">
          {brandConfig.description}
        </p>
      </div>

      <div className="glass-panel p-8 rounded-2xl space-y-6">
        <h2 className="font-headline-lg text-primary flex items-center gap-2 border-b border-outline-variant pb-4">
          <Code /> الرؤية التقنية
        </h2>
        <p className="font-body-md text-on-surface-variant leading-relaxed">
          تم تصميم هذه المنصة باستخدام أحدث تقنيات الويب (Next.js 14/15, Tailwind CSS, TypeScript) 
          لتقديم تجربة تعليمية تفاعلية. الهدف ليس فقط تقديم محتوى، بل إنشاء بيئة غامرة ومستقرة للمبتدئين في مجال إنترنت الأشياء والمتحكمات الدقيقة.
        </p>

        <h2 className="font-headline-lg text-secondary-fixed-dim flex items-center gap-2 border-b border-outline-variant pb-4 pt-4">
          <Zap /> لمن هذه المنصة؟
        </h2>
        <ul className="list-disc list-inside space-y-2 font-body-md text-on-surface-variant">
          <li>للطلاب والمهتمين بالإلكترونيات والبرمجة باللغة العربية.</li>
          <li>لصناع الروبوتات وهواة الأتمتة (Makers).</li>
          <li>لمعلمي التكنولوجيا الذين يبحثون عن منهج عملي وموثق.</li>
        </ul>
      </div>

      <div className="text-center text-sm font-label-mono text-outline pt-8">
        الإصدار الحالي: 1.0.0 (Production Release) <br/>
        صممت بواسطة {brandConfig.author}
      </div>
    </div>
  );
}