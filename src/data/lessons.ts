export const lessonsData = [
  {
    id: "what-is-arduino",
    title: "What is Arduino?",
    titleAr: "ما هو الأردوينو؟",
    duration: "10 min",
    content: "الأردوينو هو لوح تطوير إلكتروني مفتوح المصدر يتكون من دائرة إلكترونية مع متحكم دقيق يبرمج عن طريق الكمبيوتر. يستخدم لابتكار مشاريع إلكترونية تفاعلية.",
    componentsNeeded: [],
    codeExample: ""
  },
  {
    id: "digital-output",
    title: "Digital Output: LED Blink",
    titleAr: "المخرج الرقمي: وميض ليد",
    duration: "20 min",
    content: "في هذا الدرس سنتعلم كيف نخرج إشارة رقمية (Digital) من الأردوينو لتشغيل ليد وإطفائه.",
    componentsNeeded: ["Arduino Uno", "LED"],
    codeExample: "digitalWrite(13, HIGH);"
  },
  {
    id: "analog-input",
    title: "Analog Input: Potentiometer",
    titleAr: "المدخل التماثلي: المقاومة المتغيرة",
    duration: "25 min",
    content: "تعلم كيفية قراءة قيم متغيرة (Analog) من 0 إلى 1023 باستخدام المقاومة المتغيرة.",
    componentsNeeded: ["Arduino Uno", "Potentiometer"],
    codeExample: "int val = analogRead(A0);"
  },
  {
    id: "esp32-wifi",
    title: "ESP32 WiFi Basics",
    titleAr: "أساسيات الواي فاي مع ESP32",
    duration: "40 min",
    content: "كيف تربط لوحة ESP32 بشبكة الإنترنت وتطبع عنوان الـ IP.",
    componentsNeeded: ["ESP32"],
    codeExample: "WiFi.begin(ssid, password);"
  }
];
