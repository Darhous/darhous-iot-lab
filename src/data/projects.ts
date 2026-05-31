export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: "مبتدئ" | "متوسط" | "متقدم";
  timeEstimate: string;
  hardwareTags: string[];
  components: { name: string; qty: number }[];
  learningOutcomes: string[];
  wiringSummary: string;
  codeSnippet: string;
  steps: string[];
  troubleshooting: string[];
  extensionIdeas: string[];
  simulatorLink?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: "led-blink",
    title: "إشارة مرور مصغرة",
    description: "بناء إشارة مرور متكاملة مبرمجة زمنياً باستخدام 3 مصابيح LED (أحمر، أصفر، أخضر).",
    difficulty: "مبتدئ",
    timeEstimate: "30 دقيقة",
    hardwareTags: ["Arduino", "LEDs"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "LED (Red, Yellow, Green)", qty: 3 },
      { name: "220Ω Resistor", qty: 3 },
      { name: "Breadboard", qty: 1 }
    ],
    learningOutcomes: ["استخدام أكثر من مخرج رقمي في وقت واحد", "فهم الدالات الزمنية delay بشكل منطقي"],
    wiringSummary: "وصل الـ LED الأحمر بالمنفذ 13، الأصفر بالمنفذ 12، والأخضر بالمنفذ 11، مع مقاومات 220 أوم لكل منها.",
    codeSnippet: "void setup() {\n  pinMode(13, OUTPUT);\n  pinMode(12, OUTPUT);\n  pinMode(11, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH); delay(5000);\n  digitalWrite(13, LOW); digitalWrite(12, HIGH); delay(2000);\n  digitalWrite(12, LOW); digitalWrite(11, HIGH); delay(5000);\n  digitalWrite(11, LOW); digitalWrite(12, HIGH); delay(2000);\n  digitalWrite(12, LOW);\n}",
    steps: ["قم بتوصيل المكونات على لوحة التجارب", "افتح محرر كود الأردوينو واكتب الكود", "تأكد من اختيار البوردة الصحيحة وارفع الكود"],
    troubleshooting: ["إذا لم يضيء أحد الألوان، تأكد من أن الطرف الموجب للـ LED متصل بمنفذ الأردوينو وليس العكس."],
    extensionIdeas: ["إضافة زر ضغط يسمح للمشاة بطلب العبور وقطع الإشارة الخضراء بعد ثوانٍ."],
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "smart-parking",
    title: "موقف سيارات ذكي",
    description: "استخدام حساس الموجات فوق الصوتية لاكتشاف وجود سيارة في الموقف وإضاءة LED يعبر عن الحالة.",
    difficulty: "مبتدئ",
    timeEstimate: "45 دقيقة",
    hardwareTags: ["Arduino", "Ultrasonic", "LED"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "HC-SR04", qty: 1 },
      { name: "LED (Red, Green)", qty: 2 }
    ],
    learningOutcomes: ["قراءة بيانات من حساس خارجي", "استخدام شروط if/else بناءً على المتغيرات"],
    wiringSummary: "الحساس: VCC لـ 5V، GND لـ GND، Trig لـ 9، Echo لـ 10. الـ LEDs للأحمر 3 والأخضر 4.",
    codeSnippet: "// إعداد الحساس والمخارج\nlong duration, distance;\nvoid setup() { pinMode(9, OUTPUT); pinMode(10, INPUT); pinMode(3, OUTPUT); pinMode(4, OUTPUT); }\nvoid loop() {\n  // قراءة الحساس...\n  if(distance < 10) { digitalWrite(3, HIGH); digitalWrite(4, LOW); } // موقف ممتلئ\n  else { digitalWrite(3, LOW); digitalWrite(4, HIGH); } // موقف فارغ\n}",
    steps: ["وصل الحساس والليدات", "حساب مسافة وجود السيارة باستخدام pulseIn", "برمجة الليدات كإشارة بصرية"],
    troubleshooting: ["قراءات عشوائية؟ تأكد أن الحساس ثابت وأسلاكه غير مهتزة."],
    extensionIdeas: ["إضافة شاشة LCD لطباعة عدد المواقف الفارغة في المبنى."],
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "ultrasonic-meter",
    title: "متر قياس رقمي",
    description: "حساب المسافة وعرضها على شاشة LCD بدقة.",
    difficulty: "متوسط",
    timeEstimate: "1 ساعة",
    hardwareTags: ["Arduino", "Ultrasonic", "LCD"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "HC-SR04", qty: 1 },
      { name: "LCD 16x2 I2C", qty: 1 }
    ],
    learningOutcomes: ["بروتوكول I2C للاتصال بالشاشة", "معالجة النصوص (String formatting)"],
    wiringSummary: "الشاشة I2C إلى A4, A5. الحساس إلى 9, 10.",
    codeSnippet: "#include <LiquidCrystal_I2C.h>\nLiquidCrystal_I2C lcd(0x27,16,2);\n// كود الحساب ثم: lcd.print(distance); lcd.print(\" cm\");",
    steps: ["توصيل الشاشة والبحث عن عنوانها", "توصيل الحساس", "دمج كود الحساس مع كود الشاشة"],
    troubleshooting: ["الشاشة لا تعرض شيء؟ تأكد من ضبط الإضاءة الخلفية (Contrast) بمفك صغير من الخلف."],
    extensionIdeas: ["إضافة زر لتحويل وحدة القياس من سم إلى إنش."]
  },
  {
    id: "servo-door-lock",
    title: "قفل باب باستخدام السيرفو",
    description: "فتح قفل باستخدام محرك سيرفو عبر لوحة مفاتيح (Keypad).",
    difficulty: "متوسط",
    timeEstimate: "1.5 ساعة",
    hardwareTags: ["Arduino", "Servo", "Keypad"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "Servo Motor", qty: 1 },
      { name: "4x4 Keypad", qty: 1 }
    ],
    learningOutcomes: ["مصفوفات لوحة المفاتيح", "مكتبة Keypad.h", "تحريك السيرفو"],
    wiringSummary: "الكيباد للمنافذ الرقمية (2 إلى 9)، السيرفو للمنفذ 10.",
    codeSnippet: "// يحتاج الكود لتعريف مصفوفة 4x4 واستخدام Keypad.h\n// عند تطابق الرقم السري: myServo.write(90);",
    steps: ["توصيل الكيباد", "برمجة المصفوفة", "إضافة منطق كلمة المرور"],
    troubleshooting: ["الكيباد يقرأ أرقاماً خاطئة؟ تأكد من ترتيب أسلاك الصفوف والأعمدة (Rows/Cols)."],
    extensionIdeas: ["إضافة جرس (Buzzer) يصدر صوتاً تحذيرياً عند إدخال كلمة سر خاطئة 3 مرات."]
  },
  {
    id: "rfid-access",
    title: "نظام دخول بالبطاقات (RFID)",
    description: "قراءة كروت RFID واستخدامها لفتح باب.",
    difficulty: "متوسط",
    timeEstimate: "1.5 ساعة",
    hardwareTags: ["Arduino", "RFID", "Relay"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "RC522 RFID Module", qty: 1 },
      { name: "Relay Module", qty: 1 }
    ],
    learningOutcomes: ["بروتوكول SPI", "قراءة المعرفات الفريدة (UID)"],
    wiringSummary: "RFID يعتمد على منافذ الـ SPI (10, 11, 12, 13).",
    codeSnippet: "// استخدام مكتبة MFRC522\n// if (rfid.uid.uidByte matches known ID) { unlock(); }",
    steps: ["توصيل موديول الـ SPI بحذر (يعمل بـ 3.3V)", "قراءة المعرف الفريد", "تصريح الدخول أو الرفض"],
    troubleshooting: ["عدم قراءة الكارت يعني غالباً أن التوصيلات لـ MOSI/MISO/SCK معكوسة أو الموديول متصل بـ 5V واحتَرَق."],
    extensionIdeas: ["حفظ البطاقات المسموح لها في الـ EEPROM الخاص بالأردوينو."]
  },
  {
    id: "fire-alarm",
    title: "نظام إنذار حريق ذكي",
    description: "استخدام حساس الغاز واللهب لإطلاق صافرة إنذار.",
    difficulty: "متوسط",
    timeEstimate: "1 ساعة",
    hardwareTags: ["Arduino", "Gas Sensor", "Flame Sensor", "Buzzer"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "MQ-2 Gas Sensor", qty: 1 },
      { name: "Flame Sensor", qty: 1 },
      { name: "Buzzer", qty: 1 }
    ],
    learningOutcomes: ["قراءة المداخل التماثلية المتعددة", "منطق بوليان (AND/OR)"],
    wiringSummary: "حساسات التماثلية لـ A0 و A1، البزر لـ 8.",
    codeSnippet: "if(analogRead(A0) > 400 || digitalRead(A1) == LOW) { tone(8, 1000); } else { noTone(8); }",
    steps: ["توصيل الحساسات", "معايرة حد الخطر", "تفعيل الجرس"],
    troubleshooting: ["حساس الغاز يحتاج لدقائق حتى يسخن قبل إعطاء قراءة دقيقة."],
    extensionIdeas: ["إضافة ESP32 لإرسال رسالة نصية عند الحريق."]
  },
  {
    id: "smart-irrigation",
    title: "نظام ري ذكي",
    description: "حساس رطوبة التربة يتحكم في مضخة مياه تلقائياً.",
    difficulty: "متقدم",
    timeEstimate: "2 ساعة",
    hardwareTags: ["Arduino", "Soil Moisture Sensor", "Relay", "Water Pump"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "Soil Moisture Sensor", qty: 1 },
      { name: "Relay Module", qty: 1 },
      { name: "Mini Water Pump 5V/12V", qty: 1 }
    ],
    learningOutcomes: ["التعامل مع بيئات قاسية للحساسات", "التحكم بمضخات عن طريق ريلاي"],
    wiringSummary: "الحساس على A0، والريلاي على 7. المضخة تُوصل بدائرة الريلاي (NO/COM) بمصدر طاقة منفصل.",
    codeSnippet: "int moisture = analogRead(A0);\nif(moisture < 300) { digitalWrite(7, HIGH); } // التربة جافة، شغل المضخة\nelse { digitalWrite(7, LOW); }",
    steps: ["قراءة مستوى الرطوبة", "توصيل الريلاي بالمضخة بأمان", "تفعيل المضخة لفترة قصيرة لمنع إغراق النبتة"],
    troubleshooting: ["الحساسات الرخيصة تتأكسد بسرعة في التربة، ينصح باستخدام حساسات Capacitive."],
    extensionIdeas: ["إرسال مستوى رطوبة التربة إلى تطبيق على الموبايل."]
  },
  {
    id: "weather-station",
    title: "محطة طقس سحابية",
    description: "إرسال بيانات الحرارة والرطوبة لسحابة وعرضها في رسوم بيانية.",
    difficulty: "متقدم",
    timeEstimate: "2.5 ساعة",
    hardwareTags: ["ESP32", "DHT11", "WiFi"],
    components: [
      { name: "ESP32", qty: 1 },
      { name: "DHT11", qty: 1 }
    ],
    learningOutcomes: ["اتصال ESP32 بالواي فاي", "بروتوكول HTTP GET/POST", "منصات ThingSpeak"],
    wiringSummary: "DHT11 موصل بـ GPIO 4 في ESP32.",
    codeSnippet: "// كود يشمل WiFi.begin وإرسال HTTP Request",
    steps: ["إنشاء حساب ThingSpeak", "برمجة ESP32 للاتصال بالشبكة", "رفع البيانات برمجياً كل 15 ثانية"],
    troubleshooting: ["فشل الاتصال بالواي فاي عادة بسبب عدم دعم الشريحة لتردد 5GHz."],
    extensionIdeas: ["إضافة حساس ضغط جوي BMP280 لمحطة أكثر احترافية."]
  },
  {
    id: "smart-home-panel",
    title: "لوحة تحكم للمنزل الذكي",
    description: "تطبيق ويب محلي (Web Server) مدمج في ESP32 للتحكم في 4 مخارج (غرف).",
    difficulty: "متقدم",
    timeEstimate: "3 ساعات",
    hardwareTags: ["ESP32", "Relay (4-channel)"],
    components: [
      { name: "ESP32", qty: 1 },
      { name: "4-Channel Relay", qty: 1 }
    ],
    learningOutcomes: ["بناء Web Server مدمج", "HTML/CSS داخل الأردوينو", "التحكم المباشر عبر الشبكة"],
    wiringSummary: "الريلايات الأربعة لـ GPIOs 26, 27, 14, 12.",
    codeSnippet: "// استخدام مكتبة WebServer.h لبناء واجهة أزرار والتحكم بالريلاي",
    steps: ["تجهيز صفحة HTML بسيطة", "دمجها في كود C++", "التحكم في المخارج عند استقبال طلب (Request)"],
    troubleshooting: ["عدم القدرة على الوصول للموقع: تأكد أن الهاتف والـ ESP32 على نفس شبكة الواي فاي وتأكد من الـ IP."],
    extensionIdeas: ["استخدام تطبيق مثل Blynk بدلاً من الـ Web Server لسهولة الوصول من خارج المنزل."]
  },
  {
    id: "iot-temp-dash",
    title: "داشبورد حرارة IoT",
    description: "استخدام Firebase لحفظ وعرض القراءات الحية.",
    difficulty: "متقدم",
    timeEstimate: "3 ساعات",
    hardwareTags: ["ESP8266", "Firebase", "Temperature Sensor"],
    components: [
      { name: "NodeMCU ESP8266", qty: 1 },
      { name: "LM35 or DHT11", qty: 1 }
    ],
    learningOutcomes: ["قواعد بيانات Realtime", "مكتبة FirebaseESP8266"],
    wiringSummary: "توصيل الحساس بمنافذ NodeMCU.",
    codeSnippet: "// كود رفع القيمة لـ Firebase",
    steps: ["تجهيز مشروع Firebase", "رفع الكود", "بناء واجهة ويب بسيطة لقراءة البيانات (اختياري)"],
    troubleshooting: ["مشاكل الـ SSL/TLS مع Firebase تحتاج لتحديث المكتبات دورياً."],
    extensionIdeas: []
  },
  {
    id: "voice-controlled-robot",
    title: "روبوت يُتحكم به بالصوت",
    description: "استخدام تطبيق هاتف ذكي (Bluetooth) لتحليل الصوت وإرسال أوامر تحرك للروبوت.",
    difficulty: "متقدم",
    timeEstimate: "4 ساعات",
    hardwareTags: ["Arduino", "Bluetooth HC-05", "Robot Chassis"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "HC-05 Bluetooth", qty: 1 },
      { name: "L298N", qty: 1 },
      { name: "2 DC Motors", qty: 2 }
    ],
    learningOutcomes: ["الاتصال التسلسلي بلوتوث (Serial Bluetooth)", "تحليل النصوص الواردة (String parsing)"],
    wiringSummary: "HC-05: TX لـ RX (0) و RX لـ TX (1). محركات للـ L298N.",
    codeSnippet: "if(Serial.available()) { String cmd = Serial.readString(); if(cmd == \"امش\") { forward(); } }",
    steps: ["تجميع الروبوت", "توصيل البلوتوث", "برمجة الأوامر"],
    troubleshooting: ["يجب فصل بلوتوث RX/TX عند رفع الكود للأردوينو، وإلا سيفشل الرفع."],
    extensionIdeas: []
  },
  {
    id: "line-follower-robot",
    title: "روبوت متتبع الخطوط",
    description: "بناء الروبوت الكلاسيكي المتتبع للخط الأسود بسرعات متفاوتة.",
    difficulty: "متوسط",
    timeEstimate: "3 ساعات",
    hardwareTags: ["Arduino", "IR Sensors", "Robot Chassis"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "2x IR Sensor", qty: 2 },
      { name: "L298N Driver", qty: 1 },
      { name: "2 DC Motors", qty: 2 }
    ],
    learningOutcomes: ["معايرة الحساسات التناظرية", "حركة المحركات النسبية"],
    wiringSummary: "حساسات IR لـ 2 و 3. الـ L298N لمنافذ الـ PWM.",
    codeSnippet: "if(left == BLACK && right == WHITE) { turnLeft(); }",
    steps: ["تثبيت الحساسات وتوجيهها للأسفل", "اختبار قراءات الأسود والأبيض", "برمجة المنطق الحركي"],
    troubleshooting: ["إذا كان الروبوت يهتز بشدة، قم بتقليل سرعة الـ PWM وتأكد من ارتفاع الحساسات عن الأرض."],
    extensionIdeas: ["استخدام 5 حساسات وتطبيق خوارزمية PID لتتبع فائق النعومة."]
  },
  {
    id: "obstacle-avoiding-robot",
    title: "روبوت يتجنب العقبات",
    description: "روبوت يتحرك بحرية وعندما يواجه حائطاً يدور للبحث عن مسار مفتوح.",
    difficulty: "متوسط",
    timeEstimate: "2.5 ساعة",
    hardwareTags: ["Arduino", "Ultrasonic", "Servo", "Robot Chassis"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "HC-SR04", qty: 1 },
      { name: "Servo", qty: 1 },
      { name: "L298N Driver", qty: 1 }
    ],
    learningOutcomes: ["دمج السيرفو مع الالتراسونيك كرادار مصغر"],
    wiringSummary: "تثبيت حساس المسافة فوق السيرفو الموجه للأمام.",
    codeSnippet: "if(distance < 20) { stop(); lookLeft(); lookRight(); turn(bestDirection); }",
    steps: ["تجميع رادار السيرفو", "برمجة دالات النظر لليمين واليسار", "اتخاذ القرار الحركي"],
    troubleshooting: ["البطاريات تضعف بسرعة عند تشغيل كل هذه القطع، يفضل استخدام بطاريات Li-ion 18650."],
    extensionIdeas: []
  },
  {
    id: "ai-camera-sensor",
    title: "مفهوم رؤية الحاسب (ESP32-CAM)",
    description: "استخدام كاميرا رخيصة لعمل بث مباشر والتعرف على الوجوه.",
    difficulty: "متقدم",
    timeEstimate: "4 ساعات",
    hardwareTags: ["ESP32-CAM", "FTDI"],
    components: [
      { name: "ESP32-CAM Module", qty: 1 },
      { name: "FTDI Programmer", qty: 1 }
    ],
    learningOutcomes: ["برمجة الكاميرات الدقيقة", "تفعيل Web Server مع بث فيديو"],
    wiringSummary: "يجب ربط GPIO 0 بـ GND أثناء الرفع عبر المبرمج.",
    codeSnippet: "// استخدام مثال CameraWebServer المدمج في بيئة الأردوينو",
    steps: ["إعداد المبرمج", "تفعيل المكاتب", "تجربة البث الحي"],
    troubleshooting: ["مشاكل الطاقة شائعة جداً، إذا انقطع البث تأكد أن المصدر يعطي 5V 2A على الأقل."],
    extensionIdeas: []
  },
  {
    id: "industrial-tank-monitor",
    title: "مراقب خزانات صناعي",
    description: "نظام قياس مستوى السائل الصناعي باستخدام حساس Ultrasonic مقاوم للماء وعرضه على شاشة.",
    difficulty: "متوسط",
    timeEstimate: "2 ساعة",
    hardwareTags: ["Arduino", "Waterproof Ultrasonic", "OLED"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "JSN-SR04T Sensor", qty: 1 },
      { name: "OLED Display", qty: 1 }
    ],
    learningOutcomes: ["استخدام حساسات صناعية مغلقة", "رسم نسبة مئوية (Progress bar) على شاشة OLED"],
    wiringSummary: "الحساس الصناعي يُوصل مثل الـ HC-SR04 تماماً.",
    codeSnippet: "int percentage = map(distance, maxDepth, 0, 0, 100);",
    steps: ["قياس عمق الخزان الكلي لعمل Mapping", "تصميم الواجهة على الشاشة"],
    troubleshooting: ["الحساس الصناعي قد يكون له مسافة عمياء (Blind spot) تصل لـ 20 سم، يجب مراعاة ذلك."],
    extensionIdeas: ["تشغيل مضخة تلقائياً عندما يهبط المستوى عن 20%."]
  },
  {
    id: "energy-monitoring",
    title: "مراقب استهلاك الطاقة",
    description: "قياس التيار المتردد (AC) وحساب الاستهلاك الواط/ساعة وإرساله للسحابة.",
    difficulty: "متقدم",
    timeEstimate: "3 ساعات",
    hardwareTags: ["ESP32", "Current Sensor", "AC"],
    components: [
      { name: "ESP32", qty: 1 },
      { name: "SCT-013 Non-invasive Current Sensor", qty: 1 }
    ],
    learningOutcomes: ["قياس التيار المتردد", "حسابات الطاقة الرياضية", "مكتبة EmonLib"],
    wiringSummary: "تحتاج لدائرة بسيطة لرفع الإشارة المترددة (Voltage bias) ليقرأها الـ ESP32 بأمان.",
    codeSnippet: "EmonLib emon1;\nemon1.current(ADC_PIN, 111.1);\ndouble Irms = emon1.calcIrms(1480);",
    steps: ["تجهيز دائرة الـ Bias", "تثبيت حساس SCT حول سلك واحد فقط من أسلاك الكهرباء", "قراءة التيار وحساب الواط"],
    troubleshooting: ["قياس سلكين معاً (الموجب والسالب) سيعطي قراءة صفر دائماً. يجب قياس سلك واحد (Line) فقط."],
    extensionIdeas: ["حساب الفاتورة الشهرية وعرضها على الهاتف."]
  },
  {
    id: "attendance-device",
    title: "جهاز حضور وانصراف (RFID + WiFi)",
    description: "قراءة كارت الموظف/الطالب وتسجيل وقت الحضور مباشرة في Google Sheets.",
    difficulty: "متقدم",
    timeEstimate: "4 ساعات",
    hardwareTags: ["ESP8266", "RFID RC522", "Google Sheets API"],
    components: [
      { name: "ESP8266 NodeMCU", qty: 1 },
      { name: "RFID RC522", qty: 1 },
      { name: "Buzzer", qty: 1 }
    ],
    learningOutcomes: ["ربط الأردوينو بخدمات جوجل", "برمجة Google Apps Script", "HTTPS Requests"],
    wiringSummary: "SPI wiring للـ RFID مع NodeMCU.",
    codeSnippet: "// إرسال HTTPS GET request لرابط Google Script المجهز ليتلقى الـ UID",
    steps: ["تجهيز ملف اكسيل وجوجل سكريبت", "برمجة الـ ESP لإرسال الـ ID", "إطلاق صوت للتأكيد"],
    troubleshooting: ["إعدادات الـ HTTPS تحتاج لـ SSL Fingerprint أو تجاوز الشهادة في المكتبات الحديثة."],
    extensionIdeas: ["إضافة شاشة تعرض اسم الموظف بعد تمرير الكارت."]
  },
  {
    id: "led-matrix-display",
    title: "شاشة عرض نصوص متحركة",
    description: "عرض نصوص وإعلانات تتدحرج على شاشة مصابيح (LED Matrix).",
    difficulty: "متوسط",
    timeEstimate: "1.5 ساعة",
    hardwareTags: ["Arduino", "MAX7219"],
    components: [
      { name: "Arduino Uno", qty: 1 },
      { name: "MAX7219 8x8 Matrix Module (Cascaded)", qty: 1 }
    ],
    learningOutcomes: ["التحكم بمصفوفات الليدات", "مكتبات الـ MD_Parola أو LedControl"],
    wiringSummary: "توصيل SPI (DIN, CS, CLK) بمنافذ 11, 10, 13.",
    codeSnippet: "P.print(\"Darhous IoT Lab\");",
    steps: ["توصيل الشاشة", "استخدام مكتبة Parola للتأثيرات", "كتابة النص"],
    troubleshooting: ["الشاشة تستهلك طاقة كبيرة إذا تم إضاءة جميع الليدات، انتبه لمصدر الطاقة."],
    extensionIdeas: ["ربطها بالبلوتوث لتغيير النص من الهاتف المحمول."]
  }
];
