import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import { lessonsData } from "@/data/lessons";

export default function LessonsPage() {
  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <BookOpen className="w-10 h-10 text-secondary-fixed-dim" />
          مكتبة الدروس
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          شروحات نظرية وعملية خطوة بخطوة لكل المفاهيم البرمجية والإلكترونية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessonsData.map((lesson, index) => (
          <Link href={`/lessons/${lesson.id}`} key={lesson.id} className="glass-card p-6 rounded-xl group hover:border-secondary-fixed-dim transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-label-mono px-2 py-1 rounded bg-surface-container-high text-outline">
                درس {index + 1}
              </span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-2 group-hover:text-secondary-fixed-dim transition-colors">{lesson.title}</h3>
            <p className="font-body-sm text-on-surface-variant mb-6 line-clamp-2">{lesson.description}</p>
            <div className="flex items-center gap-2 text-primary font-label-mono text-sm group-hover:translate-x-[-8px] rtl:group-hover:translate-x-[8px] transition-transform">
              اقرأ الدرس <ArrowLeft size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}