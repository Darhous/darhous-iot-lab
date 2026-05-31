import { Layers, Cpu, Radio, Zap } from "lucide-react";

export default function ComponentsLibraryPage() {
  const components = [
    {
      id: "arduino-uno",
      name: "Arduino Uno R3",
      category: "Boards",
      desc: "اللوحة الأساسية للمبتدئين. تحتوي على 14 مخرج رقمي و6 مداخل تماثلية.",
      icon: <Cpu className="w-12 h-12 text-primary-fixed-dim" />
    },
    {
      id: "esp32",
      name: "ESP32",
      category: "IoT",
      desc: "لوحة متطورة تدعم WiFi و Bluetooth لتطبيقات إنترنت الأشياء.",
      icon: <Radio className="w-12 h-12 text-secondary-fixed-dim" />
    },
    {
      id: "led",
      name: "LED",
      category: "Actuators",
      desc: "صمام ثنائي باعث للضوء. يحتاج لمقاومة لحمايته من الاحتراق.",
      icon: <Zap className="w-12 h-12 text-tertiary-fixed-dim" />
    },
    {
      id: "ultrasonic",
      name: "HC-SR04 Ultrasonic",
      category: "Sensors",
      desc: "حساس لقياس المسافة باستخدام الموجات فوق الصوتية.",
      icon: <Layers className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Layers className="w-10 h-10 text-primary" />
          موسوعة المكونات الإلكترونية
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          تعرف على القطع الإلكترونية، طريقة توصيلها، وأكوادها الأساسية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {components.map((comp) => (
          <div key={comp.id} className="glass-card p-6 rounded-xl text-center group hover:-translate-y-2 transition-transform cursor-pointer">
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
              {comp.icon}
            </div>
            <h3 className="font-headline-md text-on-surface mb-2">{comp.name}</h3>
            <span className="bg-surface-container-high text-outline text-xs font-label-mono px-2 py-1 rounded inline-block mb-4">
              {comp.category}
            </span>
            <p className="font-body-md text-sm text-on-surface-variant line-clamp-3">
              {comp.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}