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
    id: "wokwi-led-blink",
    title: "وميض الليد (Blink)",
    engine: "Wokwi",
    description: "دائرة جاهزة لليد يومض، ابدأ بتغيير سرعة الوميض لتجربة الكود.",
    tags: ["LED", "Basics"],
    difficulty: "مبتدئ",
    embedUrl: "https://wokwi.com/projects/305567166302257730"
  },
  {
    id: "wokwi-traffic-light",
    title: "إشارة المرور",
    engine: "Wokwi",
    description: "محاكاة لثلاثة ليدات تعمل كإشارة مرور. جرب برمجة توقيتاتها.",
    tags: ["Traffic Light", "Logic"],
    difficulty: "مبتدئ",
    embedUrl: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "wokwi-button",
    title: "قراءة زر ضغط",
    engine: "Wokwi",
    description: "استخدم الزر لتشغيل الليد.",
    tags: ["Button", "Input"],
    difficulty: "مبتدئ",
    embedUrl: "https://wokwi.com/projects/305569485123224130"
  },
  {
    id: "wokwi-potentiometer",
    title: "المقاومة المتغيرة",
    engine: "Wokwi",
    description: "قراءة إشارة تماثلية (Analog) من البوتنشيومتر واستخدامها للـ PWM.",
    tags: ["Analog", "ADC"],
    difficulty: "متوسط",
    embedUrl: "https://wokwi.com/projects/305569894747341378"
  },
  {
    id: "wokwi-servo",
    title: "تحريك محرك سيرفو",
    engine: "Wokwi",
    description: "محاكاة لحركة محرك السيرفو بدقة من 0 لـ 180 درجة.",
    tags: ["Servo", "Motors"],
    difficulty: "متوسط",
    embedUrl: "https://wokwi.com/projects/305570087786021442"
  },
  {
    id: "wokwi-ultrasonic",
    title: "حساس المسافة (Ultrasonic)",
    engine: "Wokwi",
    description: "جرب قراءة المسافة وتغييرها في المحاكي يدوياً لاختبار الكود.",
    tags: ["Sensors", "Distance"],
    difficulty: "متوسط",
    embedUrl: "https://wokwi.com/projects/299313271173677576"
  },
  {
    id: "wokwi-dht",
    title: "حساس الحرارة والرطوبة",
    engine: "Wokwi",
    description: "قراءة حساس DHT22/DHT11 وعرض النتيجة في السيريال.",
    tags: ["Temperature", "DHT"],
    difficulty: "متوسط",
    embedUrl: "https://wokwi.com/projects/305572629618131522"
  },
  {
    id: "wokwi-esp32",
    title: "ESP32 WiFi Test",
    engine: "Wokwi",
    description: "تجربة مشاريع إنترنت الأشياء، حيث يقوم المحاكي بمحاكاة شبكة WiFi.",
    tags: ["ESP32", "IoT", "WiFi"],
    difficulty: "متقدم",
    embedUrl: "https://wokwi.com/projects/new/esp32"
  },
  {
    id: "circuitjs-rc",
    title: "دائرة RC (قانون أوم)",
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
