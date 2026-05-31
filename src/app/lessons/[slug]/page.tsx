import { lessonsData } from "@/data/lessons";
import { notFound } from "next/navigation";
import { BookOpen, Cpu, AlertTriangle, Lightbulb, PlayCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return lessonsData.map((lesson) => ({
    slug: lesson.id,
  }));
}

export default function LessonDetailPage({ params }: { params: { slug: string } }) {
  const lesson = lessonsData.find(l => l.id === params.slug);
  
  if (!lesson) {
    notFound();
  }

  return (
    <div className="px-4 md:px-16 pt-8 pb-20 max-w-5xl mx-auto space-y-12">
      <div className="space-y-4">
        <Link href="/lessons" className="text-sm font-label-mono text-outline hover:text-primary transition-colors flex items-center gap-1 mb-6">
          <ArrowLeft size={16} /> العودة للدروس
        </Link>
        <h1 className="font-headline-xl text-on-surface flex items-center gap-4">
          <BookOpen className="text-secondary-fixed-dim" />
          {lesson.title}
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          {lesson.description}
        </p>
      </div>

      <div className="glass-panel p-8 rounded-2xl bg-surface-container/50">
        <h2 className="font-headline-lg mb-4 text-primary-fixed-dim">شرح الدرس</h2>
        <p className="font-body-md leading-relaxed text-on-surface whitespace-pre-line">
          {lesson.content}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl border-t-4 border-tertiary-fixed-dim">
            <h3 className="font-headline-md text-tertiary-fixed-dim mb-4 flex items-center gap-2">
              <Cpu /> المكونات المطلوبة
            </h3>
            <ul className="list-disc list-inside space-y-2 font-body-sm text-on-surface">
              {lesson.componentsNeeded.map((comp, i) => (
                <li key={i}>{comp}</li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl border-t-4 border-warning">
            <h3 className="font-headline-md text-warning mb-4 flex items-center gap-2">
              <Lightbulb /> ملاحظات التوصيل
            </h3>
            <p className="font-body-sm text-on-surface leading-relaxed">
              {lesson.wiringNotes}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 rounded-xl border-t-4 border-error">
            <h3 className="font-headline-md text-error mb-4 flex items-center gap-2">
              <AlertTriangle /> أخطاء شائعة
            </h3>
            <p className="font-body-sm text-on-surface leading-relaxed">
              {lesson.commonMistakes}
            </p>
          </div>
        </div>
      </div>

      {lesson.codeExample && lesson.codeExample !== "// لا يوجد كود هنا" && lesson.codeExample !== "// فهم المبادئ لا يحتاج لكود" && (
        <div className="rounded-xl overflow-hidden border border-outline-variant">
          <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex justify-between items-center">
            <span className="font-label-mono text-sm text-on-surface">كود الدرس (C++)</span>
          </div>
          <pre className="p-4 bg-[#1e1e1e] text-green-400 font-mono text-sm overflow-x-auto" dir="ltr">
            <code>{lesson.codeExample}</code>
          </pre>
        </div>
      )}

      <div className="flex flex-wrap gap-4 pt-8 border-t border-outline-variant">
        {lesson.simulatorLink && (
          <a href={lesson.simulatorLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-tertiary text-on-tertiary rounded-lg font-label-mono flex items-center gap-2 hover:brightness-110 transition-all shadow-glow-tertiary">
            <PlayCircle size={20} /> جرب الكود في المحاكي
          </a>
        )}
        
        {lesson.nextLessonId && (
          <Link href={`/lessons/${lesson.nextLessonId}`} className="px-6 py-3 bg-primary text-on-primary rounded-lg font-label-mono flex items-center gap-2 hover:brightness-110 transition-all mr-auto shadow-glow-primary">
            الدرس التالي <ArrowLeft size={20} />
          </Link>
        )}
      </div>
    </div>
  );
}