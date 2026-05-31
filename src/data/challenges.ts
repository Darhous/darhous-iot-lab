export interface Challenge {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  badgeUnlock?: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  tasks: string[];
}

export const challengesData: Challenge[] = [
  {
    id: "first-circuit",
    title: "الدائرة الأولى",
    description: "قم ببناء دائرة تشغيل ليد بنجاح على المحاكي.",
    xpReward: 50,
    badgeUnlock: "Maker",
    level: "مبتدئ",
    tasks: ["أضف الأردوينو", "وصل الليد بالمقاومة", "ارفع الكود واجعل الليد يومض"]
  },
  {
    id: "blink-no-code",
    title: "وميض من الذاكرة",
    description: "اكتب كود وميض الليد (Blink) بدون النظر إلى الأمثلة الجاهزة.",
    xpReward: 60,
    level: "مبتدئ",
    tasks: ["تعريف المنفذ كمخرج", "استخدام digitalWrite", "تطبيق تأخير زمني مناسب"]
  },
  {
    id: "fix-resistor",
    title: "إصلاح المقاومة الخاطئة",
    description: "في هذا التحدي، الليد يحترق باستمرار. اكتشف قيمة المقاومة المناسبة لليد 2 فولت ببطارية 9 فولت.",
    xpReward: 70,
    level: "مبتدئ",
    tasks: ["تطبيق قانون أوم", "استبدال المقاومة في الدائرة", "تشغيل المحاكي بنجاح"]
  },
  {
    id: "button-input",
    title: "قراءة الزر",
    description: "استخدم زر ضغط لتشغيل الليد طالما الزر مضغوط، وإطفائه عند تركه.",
    xpReward: 80,
    level: "مبتدئ",
    tasks: ["توصيل الزر مع Pull-down", "قراءة الحالة باستخدام digitalRead", "برمجة الجملة الشرطية"]
  },
  {
    id: "traffic-light-logic",
    title: "منطق إشارة المرور",
    description: "برمج إشارة مرور تعمل تلقائياً مع توقيت آمن للأصفر.",
    xpReward: 100,
    badgeUnlock: "Traffic Controller",
    level: "متوسط",
    tasks: ["توصيل 3 ليدات", "برمجة التتابع الزمني", "عدم تداخل الإشارات"]
  },
  {
    id: "measure-distance",
    title: "قياس المسافة الدقيق",
    description: "استخدم حساس HC-SR04 واعرض المسافة بالسنتيمتر في مراقب السيريال.",
    xpReward: 120,
    level: "متوسط",
    tasks: ["برمجة نبضة الـ Trig", "استخدام pulseIn", "حساب المسافة الرياضي"]
  },
  {
    id: "sensor-master",
    title: "سيد الحساسات",
    description: "اقرأ بيانات حساس التراسونيك واستخدمها لتشغيل صوت تحذيري عند مسافة 10 سم.",
    xpReward: 150,
    badgeUnlock: "Sensor Master",
    level: "متوسط",
    tasks: ["قراءة المسافة", "كتابة شرط if", "تشغيل الـ Buzzer"]
  },
  {
    id: "servo-distance",
    title: "رادار السيرفو",
    description: "اجعل محرك السيرفو يوجه حساس المسافة يميناً ويساراً كأنه رادار.",
    xpReward: 180,
    level: "متوسط",
    tasks: ["توصيل السيرفو", "برمجة حلقة for للمسح", "أخذ قراءة مسافة عند كل زاوية"]
  },
  {
    id: "iot-architect",
    title: "مهندس إنترنت الأشياء",
    description: "توصيل ESP32 بشبكة الواي فاي وعرض IP Address على الشاشة التسلسلية.",
    xpReward: 200,
    badgeUnlock: "Engineer",
    level: "متقدم",
    tasks: ["تضمين مكتبة WiFi", "كتابة بيانات الشبكة", "الطباعة في Serial Monitor"]
  },
  {
    id: "send-temp",
    title: "إرسال الحرارة للسحابة",
    description: "برمج ESP32 لقراءة حساس DHT11 وإرسال البيانات كطلب HTTP.",
    xpReward: 250,
    level: "متقدم",
    tasks: ["تجهيز الواي فاي", "قراءة DHT11", "إرسال HTTP GET/POST"]
  },
  {
    id: "smart-irrigation-logic",
    title: "منطق الري الذكي",
    description: "صمم الكود بحيث تعمل المضخة فقط إذا كانت الرطوبة أقل من 30% والوقت ليس ظهراً.",
    xpReward: 300,
    badgeUnlock: "Smart Farmer",
    level: "متقدم",
    tasks: ["استخدام حساس التربة", "استخدام LDR للضوء", "دمج الشروط بـ AND"]
  }
];
