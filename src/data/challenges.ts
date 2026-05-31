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
    id: "sensor-master",
    title: "سيد الحساسات",
    description: "اقرأ بيانات حساس التراسونيك واستخدمها لتشغيل صوت تحذيري.",
    xpReward: 100,
    level: "متوسط",
    tasks: ["قراءة المسافة", "كتابة شرط if", "تشغيل الـ Buzzer"]
  },
  {
    id: "iot-architect",
    title: "مهندس إنترنت الأشياء",
    description: "توصيل ESP32 بشبكة الواي فاي وعرض IP Address على الشاشة التسلسلية.",
    xpReward: 200,
    badgeUnlock: "Engineer",
    level: "متقدم",
    tasks: ["تضمين مكتبة WiFi", "كتابة بيانات الشبكة", "الطباعة في Serial Monitor"]
  }
];
