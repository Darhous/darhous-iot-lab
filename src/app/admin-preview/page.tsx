import { Settings, ShieldCheck, Database, LayoutTemplate } from "lucide-react";
import { pathsData } from "@/data/paths";
import { lessonsData } from "@/data/lessons";
import { projectsData } from "@/data/projects";
import { componentsData } from "@/data/components";

export default function AdminPreviewPage() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12 pb-20">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Settings className="w-10 h-10 text-secondary-fixed-dim" />
          معاينة لوحة الإدارة
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          نظرة عامة على المحتوى المتوفر في المنصة. هذه اللوحة مخصصة للمشرفين لدمج المحتوى لاحقاً بنظام CMS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-xl border border-outline-variant text-center">
          <h3 className="font-headline-sm text-outline mb-1">المسارات</h3>
          <p className="font-display-md text-primary">{pathsData.length}</p>
        </div>
        <div className="glass-card p-6 rounded-xl border border-outline-variant text-center">
          <h3 className="font-headline-sm text-outline mb-1">الدروس</h3>
          <p className="font-display-md text-secondary">{lessonsData.length}</p>
        </div>
        <div className="glass-card p-6 rounded-xl border border-outline-variant text-center">
          <h3 className="font-headline-sm text-outline mb-1">المشاريع</h3>
          <p className="font-display-md text-tertiary">{projectsData.length}</p>
        </div>
        <div className="glass-card p-6 rounded-xl border border-outline-variant text-center">
          <h3 className="font-headline-sm text-outline mb-1">المكونات</h3>
          <p className="font-display-md text-warning">{componentsData.length}</p>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center space-y-4">
        <Database className="w-16 h-16 text-outline mb-2" />
        <h2 className="font-headline-lg text-on-surface">استعداد قواعد البيانات (CMS/Supabase)</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          جميع البيانات معروضة حالياً من ملفات TypeScript محلية في مجلد <code className="text-primary bg-primary/10 px-2 py-1 rounded">src/data/</code>. 
          الهيكلة البرمجية للمشروع مصممة بحيث يمكن استبدال هذه الملفات بـ API Calls أو استعلامات قاعدة بيانات (مثل Supabase أو Sanity) بسهولة تامة.
        </p>
        <div className="flex gap-4 mt-4 text-sm font-label-mono text-outline">
          <span className="flex items-center gap-1"><ShieldCheck size={16}/> Schema Ready</span>
          <span className="flex items-center gap-1"><LayoutTemplate size={16}/> UI Ready</span>
        </div>
      </div>
    </div>
  );
}