export interface LearningPath {
  id: string;
  title: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  duration: string;
  status: "active" | "locked";
  modules: number;
  overview: string;
  prerequisites: string[];
  skillsGained: string[];
  relatedLessons: string[];
  relatedProjects: string[];
}

export const pathsData: LearningPath[] = [
  {
    id: "arduino-basics",
    title: "أساسيات الأردوينو",
    level: "مبتدئ",
    duration: "4 ساعات",
    status: "active",
    modules: 5,
    overview: "تعلم المبادئ الأساسية للإلكترونيات وكيفية برمجة لوحة Arduino Uno من الصفر.",
    prerequisites: ["لا يوجد"],
    skillsGained: ["C++ Basics", "Digital & Analog I/O", "Circuit Design"],
    relatedLessons: ["what-is-arduino", "digital-output-led", "breadboard-basics"],
    relatedProjects: ["led-blink", "traffic-light"]
  },
  {
    id: "electronics-fundamentals",
    title: "أساسيات الإلكترونيات",
    level: "مبتدئ",
    duration: "6 ساعات",
    status: "active",
    modules: 6,
    overview: "فهم المكونات الإلكترونية الأساسية كالمقاومات والمكثفات وكيفية بناء الدوائر.",
    prerequisites: ["لا يوجد"],
    skillsGained: ["Ohm's Law", "Reading Schematics", "Multimeter Usage"],
    relatedLessons: ["breadboard-basics", "relay-safety"],
    relatedProjects: ["led-blink"]
  },
  {
    id: "sensors-actuators",
    title: "الحساسات والمحركات",
    level: "متوسط",
    duration: "8 ساعات",
    status: "active",
    modules: 8,
    overview: "تعلم كيفية قراءة البيانات من البيئة المحيطة والتحكم في المحركات بأنواعها.",
    prerequisites: ["أساسيات الأردوينو"],
    skillsGained: ["Sensor Calibration", "Motor PWM", "I2C Communication"],
    relatedLessons: ["ultrasonic-sensor", "dht11-sensor", "servo-control"],
    relatedProjects: ["smart-parking", "servo-door-lock"]
  },
  {
    id: "esp32-iot",
    title: "مشاريع إنترنت الأشياء (ESP32)",
    level: "متقدم",
    duration: "10 ساعات",
    status: "active",
    modules: 10,
    overview: "ابدأ رحلتك مع إنترنت الأشياء، واربط أجهزتك بشبكة الـ WiFi والأنظمة السحابية.",
    prerequisites: ["الحساسات والمحركات"],
    skillsGained: ["WiFi & Bluetooth", "HTTP/MQTT Protocols", "Cloud Dashboards"],
    relatedLessons: ["esp32-wifi-basics", "sensor-dashboard"],
    relatedProjects: ["iot-temperature-dashboard", "weather-station"]
  },
  {
    id: "robotics-track",
    title: "مسار الروبوتات",
    level: "متوسط",
    duration: "12 ساعة",
    status: "active",
    modules: 7,
    overview: "كيف تبني أول روبوت ذكي يتحرك، يتجنب العقبات، ويتتبع الخطوط.",
    prerequisites: ["الحساسات والمحركات"],
    skillsGained: ["Motor Drivers", "Kinematics", "PID Control basics"],
    relatedLessons: ["servo-control", "line-follower-concept"],
    relatedProjects: ["line-follower-robot", "obstacle-avoiding-robot"]
  },
  {
    id: "smart-home",
    title: "أتمتة المنازل الذكية",
    level: "متقدم",
    duration: "15 ساعة",
    status: "active",
    modules: 9,
    overview: "بناء أنظمة ذكية للتحكم بالمنزل، الأبواب، والإضاءة عن بعد.",
    prerequisites: ["مشاريع إنترنت الأشياء (ESP32)"],
    skillsGained: ["Relays & AC Control", "Smart Hub Integration", "Security Sensors"],
    relatedLessons: ["relay-safety", "smart-home-mini"],
    relatedProjects: ["smart-home-panel", "rfid-access"]
  },
  {
    id: "industrial-iot",
    title: "الإنترنت الصناعي (IIoT)",
    level: "متقدم",
    duration: "20 ساعة",
    status: "active",
    modules: 12,
    overview: "تطبيقات متقدمة للصناعة والمصانع واستخدام بروتوكولات قوية.",
    prerequisites: ["مشاريع إنترنت الأشياء (ESP32)"],
    skillsGained: ["Modbus", "PLC Basics", "Industrial Sensors"],
    relatedLessons: [],
    relatedProjects: ["industrial-tank-monitor"]
  },
  {
    id: "ai-iot",
    title: "الذكاء الاصطناعي مع IoT",
    level: "متقدم",
    duration: "18 ساعة",
    status: "active",
    modules: 8,
    overview: "دمج الذكاء الاصطناعي مع الأجهزة باستخدام TinyML ورؤية الحاسب.",
    prerequisites: ["مسار الروبوتات", "مشاريع إنترنت الأشياء (ESP32)"],
    skillsGained: ["TinyML", "Edge AI", "Camera Vision"],
    relatedLessons: [],
    relatedProjects: ["ai-camera-sensor", "voice-controlled-robot"]
  },
  {
    id: "micropython",
    title: "MicroPython للصناع",
    level: "متوسط",
    duration: "6 ساعات",
    status: "active",
    modules: 5,
    overview: "برمجة اللوحات الإلكترونية باستخدام لغة بايثون بدلاً من C++.",
    prerequisites: ["لا يوجد (يفضل أساسيات بايثون)"],
    skillsGained: ["MicroPython Syntax", "REPL", "Python Hardware Libraries"],
    relatedLessons: [],
    relatedProjects: []
  },
  {
    id: "cloud-dashboards",
    title: "لوحات التحكم السحابية",
    level: "متوسط",
    duration: "8 ساعات",
    status: "active",
    modules: 6,
    overview: "تصميم واجهات برمجية لربط وعرض بيانات الحساسات الحية.",
    prerequisites: ["مشاريع إنترنت الأشياء (ESP32)"],
    skillsGained: ["Firebase API", "Blynk App", "Custom Dashboards"],
    relatedLessons: ["sensor-dashboard"],
    relatedProjects: ["energy-monitoring-concept"]
  }
];
