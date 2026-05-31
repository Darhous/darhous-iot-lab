export interface SimulatorData {
  id: string;
  title: string;
  engine: "Wokwi" | "CircuitJS" | "Tinkercad";
  description: string;
  tags: string[];
  difficulty: "مبتدئ" | "متوسط" | "متقدم";
  embedUrl?: string;
  externalUrl?: string;
}

export const simulatorsData: SimulatorData[] = [
  {
    id: "wokwi-uno-blank",
    title: "أردوينو أونو (فارغ)",
    engine: "Wokwi",
    description: "مساحة عمل فارغة لاختبار أكواد الأردوينو الخاصة بك مباشرة على المتصفح.",
    tags: ["Arduino Uno", "C++"],
    difficulty: "مبتدئ",
    embedUrl: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "wokwi-esp32",
    title: "ESP32 WiFi Test",
    engine: "Wokwi",
    description: "تجربة مشاريع إنترنت الأشياء، حيث يقوم المحاكي بمحاكاة شبكة WiFi.",
    tags: ["ESP32", "IoT"],
    difficulty: "متقدم",
    embedUrl: "https://wokwi.com/projects/new/esp32"
  },
  {
    id: "circuitjs-rc",
    title: "دائرة RC (مكثف ومقاومة)",
    engine: "CircuitJS",
    description: "محاكاة لتيار وجهد الدوائر الإلكترونية التناظرية بدقة لفهم المكونات.",
    tags: ["Electronics", "Physics"],
    difficulty: "متوسط",
    externalUrl: "https://www.falstad.com/circuit/"
  },
  {
    id: "tinkercad-circuits",
    title: "Tinkercad Circuits",
    engine: "Tinkercad",
    description: "محاكي سهل يعتمد على التوصيل بالماوس ويدعم بلوكات البرمجة. (يفتح في نافذة خارجية)",
    tags: ["Beginners", "Blocks"],
    difficulty: "مبتدئ",
    externalUrl: "https://www.tinkercad.com/circuits"
  }
];
