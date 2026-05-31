import { Code2, Copy, Play } from "lucide-react";

export default function CodeLabPage() {
  const snippets = [
    {
      id: 1,
      title: "وميض الليد (Blink LED)",
      board: "Arduino Uno",
      code: `void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}`,
    },
    {
      id: 2,
      title: "قراءة حساس مسافة (Ultrasonic)",
      board: "Arduino Uno",
      code: `long duration;\nint distance;\n\nvoid setup() {\n  pinMode(9, OUTPUT); // Trig\n  pinMode(10, INPUT); // Echo\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(9, LOW);\n  delayMicroseconds(2);\n  digitalWrite(9, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(9, LOW);\n  duration = pulseIn(10, HIGH);\n  distance = duration * 0.034 / 2;\n  Serial.println(distance);\n}`,
    }
  ];

  return (
    <div className="px-4 md:px-16 pt-8 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="font-headline-xl text-primary flex items-center gap-4">
          <Code2 className="w-10 h-10 text-secondary-fixed-dim" />
          معمل الأكواد (Code Lab)
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl">
          أكواد جاهزة للنسخ والاستخدام في مشاريعك. ابحث عن الكود المناسب للوحة والحساس الخاص بك.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {snippets.map((snippet) => (
          <div key={snippet.id} className="glass-panel p-6 rounded-xl flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline-md text-on-surface">{snippet.title}</h3>
              <span className="bg-surface-container-high text-outline text-xs font-label-mono px-2 py-1 rounded">
                {snippet.board}
              </span>
            </div>
            <div className="relative flex-1 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4 overflow-x-auto">
              <pre className="font-label-mono text-sm text-primary-fixed-dim" dir="ltr">
                {snippet.code}
              </pre>
              <button className="absolute top-2 right-2 bg-surface p-2 rounded border border-outline-variant hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary">
                <Copy size={16} />
              </button>
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button className="flex items-center gap-2 text-sm font-label-mono text-secondary-fixed-dim hover:text-secondary-fixed transition-colors">
                <Play size={16} /> جرب في المحاكي
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}