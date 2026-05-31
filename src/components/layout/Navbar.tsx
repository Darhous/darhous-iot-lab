import Link from "next/link";
import { 
  Rocket, Terminal, LayoutDashboard, Route, Cpu, Box, LayoutTemplate, MessageSquareCode
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 h-20 bg-surface/80 backdrop-blur-xl border-b border-surface-tint/20 shadow-[0_0_15px_rgba(0,242,255,0.15)]">
      <div className="flex items-center gap-4">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-primary-fixed-dim tracking-tight">
          Darhous IoT Lab
        </Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">الرئيسية</Link>
        <Link href="/paths" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">المسارات</Link>
        <Link href="/lessons" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">الدروس</Link>
        <Link href="/simulator" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">المحاكي</Link>
        <Link href="/projects" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">المشاريع</Link>
        <Link href="/code-lab" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">الأكواد</Link>
        <Link href="/components" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">المكونات</Link>
        <Link href="/challenges" className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors">التحديات</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/mentor" className="hidden md:flex text-secondary-fixed-dim hover:text-secondary-fixed font-label-mono text-label-mono items-center gap-2 transition-colors">
          <MessageSquareCode size={18} />
          المساعد الذكي
        </Link>
        <Link href="/dashboard" className="bg-gradient-to-r from-surface-tint to-secondary-container text-white font-label-mono text-label-mono px-6 py-2 rounded-lg neon-border-hover transition-all flex items-center gap-2">
          <LayoutDashboard size={18} />
          لوحة الطالب
        </Link>
      </div>
    </nav>
  );
}
