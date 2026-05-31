import Link from "next/link";
import { PackageOpen, ArrowLeft } from "lucide-react";
import { componentsData } from "@/data/components";

export default function ComponentsPage() {
  const categories = ["Boards", "Sensors", "Actuators", "Displays", "Basic"];

  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <PackageOpen className="w-10 h-10 text-secondary-fixed-dim" />
          مكتبة المكونات
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          تعرف على كل القطع الإلكترونية، طريقة توصيلها، أطرافها (Pins)، والمشاريع التي تستخدمها.
        </p>
      </div>

      {categories.map((cat) => {
        const catItems = componentsData.filter(c => c.category === cat);
        if (catItems.length === 0) return null;
        
        return (
          <div key={cat} className="space-y-6">
            <h2 className="font-headline-lg text-on-surface border-b border-outline-variant pb-2">{cat}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {catItems.map((comp) => (
                <Link href={`/components/${comp.id}`} key={comp.id} className="glass-card p-4 rounded-xl group hover:border-primary-fixed-dim transition-all">
                  <h3 className="font-headline-md text-on-surface mb-1 group-hover:text-primary-fixed-dim transition-colors">{comp.name}</h3>
                  <p className="font-body-sm text-outline mb-4">{comp.arabicName}</p>
                  <div className="flex justify-end text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowLeft size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}