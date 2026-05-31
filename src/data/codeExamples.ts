export interface CodeExample {
  id: string;
  title: string;
  board: "Arduino C++" | "ESP32 Arduino" | "MicroPython";
  tags: string[];
  components: string[];
  code: string;
  explanation: string;
  commonErrors: string;
  simulatorLink?: string;
}

export const codeExamplesData: CodeExample[] = [
  {
    id: "blink-led",
    title: "وميض الليد (Blink)",
    board: "Arduino C++",
    tags: ["أساسي", "مخارج رقمية"],
    components: ["Arduino Uno", "LED"],
    code: "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}",
    explanation: "يتم تعريف المنفذ 13 كمخرج، ثم نقوم بتشغيله وإطفائه بالتناوب مع انتظار ثانية (1000 مللي ثانية) بينهما.",
    commonErrors: "كتابة حرف 'P' صغيراً في كلمة OUTPUT بدلاً من تكبيره يعطي خطأ لغوي.",
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "read-button",
    title: "قراءة زر ضغط",
    board: "Arduino C++",
    tags: ["مداخل رقمية"],
    components: ["Arduino Uno", "Push Button"],
    code: "void setup() {\n  Serial.begin(9600);\n  pinMode(2, INPUT_PULLUP);\n}\nvoid loop() {\n  int btnState = digitalRead(2);\n  Serial.println(btnState);\n  delay(100);\n}",
    explanation: "استخدمنا INPUT_PULLUP لتفعيل المقاومة الداخلية في الأردوينو، مما يلغي الحاجة لمقاومة خارجية للزر.",
    commonErrors: "عند استخدام PULLUP، الزر غير المضغوط يعطي 1 (HIGH)، وعند الضغط يعطي 0 (LOW)، وهو عكس التفكير المعتاد."
  },
  {
    id: "read-potentiometer",
    title: "قراءة مقاومة متغيرة (Analog)",
    board: "Arduino C++",
    tags: ["مداخل تماثلية"],
    components: ["Arduino Uno", "Potentiometer"],
    code: "void setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int sensorValue = analogRead(A0);\n  Serial.println(sensorValue);\n  delay(100);\n}",
    explanation: "تقوم دالة analogRead بقراءة الجهد وتحويله لرقم من 0 إلى 1023.",
    commonErrors: "محاولة استخدام المنافذ الرقمية (مثل 2, 3) لقراءة تماثلية سيعطي خطأ أو قراءات عشوائية."
  },
  {
    id: "pwm-fade",
    title: "تخفيت الليد بـ PWM",
    board: "Arduino C++",
    tags: ["مخارج تماثلية"],
    components: ["Arduino Uno", "LED"],
    code: "void setup() {}\nvoid loop() {\n  for(int i = 0; i <= 255; i++) {\n    analogWrite(9, i);\n    delay(10);\n  }\n  for(int i = 255; i >= 0; i--) {\n    analogWrite(9, i);\n    delay(10);\n  }\n}",
    explanation: "نستخدم for loop لزيادة قيمة PWM تدريجياً من 0 إلى 255، ثم إنقاصها، مما يعطي تأثيراً ناعماً (Fading).",
    commonErrors: "استخدام منفذ لا يحمل علامة الـ PWM (~) مثل منفذ رقم 8، فلن يعمل التخفيت بل سيومض الليد فقط."
  },
  {
    id: "ultrasonic-code",
    title: "حساب المسافة بحساس HC-SR04",
    board: "Arduino C++",
    tags: ["حساسات"],
    components: ["HC-SR04"],
    code: "long duration;\nint distance;\nvoid setup() {\n  pinMode(9, OUTPUT);\n  pinMode(10, INPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  digitalWrite(9, LOW); delayMicroseconds(2);\n  digitalWrite(9, HIGH); delayMicroseconds(10);\n  digitalWrite(9, LOW);\n  duration = pulseIn(10, HIGH);\n  distance = duration * 0.034 / 2;\n  Serial.println(distance);\n}",
    explanation: "نرسل نبضة قصيرة عبر الـ Trig، ونقرأ زمن وصول الصدى عبر Echo بدالة pulseIn، ثم نحول الزمن لمسافة بالسم.",
    commonErrors: "ضرب القيمة بطول الصوت دون القسمة على 2، مما يعطي مسافة مضاعفة (ذهاب وعودة)."
  },
  {
    id: "dht11-code",
    title: "قراءة الحرارة والرطوبة (DHT11)",
    board: "Arduino C++",
    tags: ["حساسات", "مكتبات"],
    components: ["DHT11"],
    code: "#include <DHT.h>\nDHT dht(2, DHT11);\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  Serial.print(\"H: \"); Serial.print(h);\n  Serial.print(\"% T: \"); Serial.println(t);\n  delay(2000);\n}",
    explanation: "نحتاج لتضمين مكتبة DHT.h واستدعاء دالتي readHumidity و readTemperature.",
    commonErrors: "نسيان delay(2000)، الحساس بطيء جداً ولا يستجيب إن قرأته بسرعة."
  },
  {
    id: "servo-sweep",
    title: "تحريك سيرفو (Sweep)",
    board: "Arduino C++",
    tags: ["محركات"],
    components: ["Servo Motor"],
    code: "#include <Servo.h>\nServo myservo;\nvoid setup() {\n  myservo.attach(9);\n}\nvoid loop() {\n  for (int pos = 0; pos <= 180; pos += 1) {\n    myservo.write(pos);\n    delay(15);\n  }\n  for (int pos = 180; pos >= 0; pos -= 1) {\n    myservo.write(pos);\n    delay(15);\n  }\n}",
    explanation: "دوران تدريجي للسيرفو من الزاوية 0 إلى 180 درجة ثم العكس باستخدام حلقة التكرار.",
    commonErrors: "استهلاك السيرفو لتيار عالي قد يؤدي لتوقف الأردوينو إذا لم تكن التوصيلات ثابتة."
  },
  {
    id: "esp32-wifi",
    title: "الاتصال بالـ WiFi",
    board: "ESP32 Arduino",
    tags: ["شبكات", "إنترنت الأشياء"],
    components: ["ESP32"],
    code: "#include <WiFi.h>\nconst char* ssid = \"YourNetwork\";\nconst char* pass = \"YourPass\";\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(ssid, pass);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"Connected!\");\n}\nvoid loop() {}",
    explanation: "هذا الكود هو حجر الأساس لأي مشروع إنترنت أشياء، يبقيك في while loop حتى يتم الاتصال.",
    commonErrors: "استخدام سرعة Serial 9600 بدلاً من 115200 المعتادة للـ ESP32 يسبب ظهور نصوص غريبة مشفرة."
  },
  {
    id: "esp32-web-server",
    title: "خادم ويب بسيط (Web Server)",
    board: "ESP32 Arduino",
    tags: ["شبكات", "متقدم"],
    components: ["ESP32"],
    code: "#include <WiFi.h>\n#include <WebServer.h>\nWebServer server(80);\nvoid handleRoot() {\n  server.send(200, \"text/html\", \"<h1>Hello from ESP32!</h1>\");\n}\nvoid setup() {\n  // (أضف كود الواي فاي هنا)\n  server.on(\"/\", handleRoot);\n  server.begin();\n}\nvoid loop() {\n  server.handleClient();\n}",
    explanation: "نقوم بإنشاء خادم ويب يستمع على المنفذ 80، وعند الدخول لعنوان الـ IP يتم إرسال نص HTML.",
    commonErrors: "نسيان وضع `server.handleClient()` في حلقة `loop` سيجعل الخادم لا يستجيب للطلبات."
  },
  {
    id: "micropython-blink",
    title: "وميض الليد بالبايثون",
    board: "MicroPython",
    tags: ["أساسي"],
    components: ["ESP32/ESP8266"],
    code: "from machine import Pin\nfrom time import sleep\nled = Pin(2, Pin.OUT)\nwhile True:\n  led.value(1)\n  sleep(1)\n  led.value(0)\n  sleep(1)",
    explanation: "الكود بلغة MicroPython أنظف وأبسط من الـ C++. يتم تعريف الـ Pin واستخدام حلقة while.",
    commonErrors: "عدم الانتباه للمسافات البادئة (Indentation) سيسبب أخطاء بناء في لغة بايثون."
  },
  {
    id: "relay-control",
    title: "تشغيل الريلاي",
    board: "Arduino C++",
    tags: ["محركات", "منزل ذكي"],
    components: ["Relay Module"],
    code: "void setup() { pinMode(8, OUTPUT); }\nvoid loop() {\n  digitalWrite(8, HIGH); delay(2000);\n  digitalWrite(8, LOW); delay(2000);\n}",
    explanation: "الريلاي يتعامل برمجياً تماماً كالـ LED العادي، إشارة للتشغيل وإشارة للإطفاء.",
    commonErrors: "بعض الريلايات تعمل بالمنطق العكسي (Active Low)، أي أن LOW يشغل و HIGH يطفئ."
  },
  {
    id: "dc-motor-l298n",
    title: "تشغيل محرك DC مع L298N",
    board: "Arduino C++",
    tags: ["محركات", "روبوت"],
    components: ["L298N", "DC Motor"],
    code: "void setup() {\n  pinMode(3, OUTPUT);\n  pinMode(4, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(3, HIGH);\n  digitalWrite(4, LOW);\n  // يدور في اتجاه\n  delay(2000);\n  digitalWrite(3, LOW);\n  digitalWrite(4, HIGH);\n  // يعكس الاتجاه\n  delay(2000);\n}",
    explanation: "للتحكم بالاتجاه يجب أن يكون أحد أطراف الإشارة HIGH والآخر LOW. لعكس الاتجاه نعكس الحالتين.",
    commonErrors: "جعل كلا الطرفين HIGH سيؤدي لتوقف المحرك بفرملة قوية."
  },
  {
    id: "lcd-i2c-print",
    title: "الكتابة على شاشة LCD I2C",
    board: "Arduino C++",
    tags: ["شاشات"],
    components: ["LCD 16x2 I2C"],
    code: "#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\nLiquidCrystal_I2C lcd(0x27, 16, 2);\nvoid setup() {\n  lcd.init();\n  lcd.backlight();\n  lcd.setCursor(0,0);\n  lcd.print(\"Darhous IoT\");\n}\nvoid loop() {}",
    explanation: "نبدأ الشاشة ونضيء الخلفية، ثم نحدد المؤشر عند العمود 0 الصف 0، ونكتب النص.",
    commonErrors: "الـ Address الخاص بالشاشة قد يكون 0x3F بدلاً من 0x27، تأكد منه إذا لم تعمل الشاشة."
  },
  {
    id: "pir-motion",
    title: "كشف الحركة (PIR)",
    board: "Arduino C++",
    tags: ["حساسات", "إنذار"],
    components: ["PIR Sensor"],
    code: "void setup() {\n  pinMode(2, INPUT);\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if(digitalRead(2) == HIGH) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}",
    explanation: "الحساس يعطي إشارة HIGH عند كشف حركة، ويحافظ عليها للمدة التي تم ضبطها من المقبض الخلفي.",
    commonErrors: "الحساس يعطي قراءات خاطئة في أول 30 ثانية من توصيله بالكهرباء (وقت التسخين)."
  },
  {
    id: "rgb-led",
    title: "ليد الألوان RGB",
    board: "Arduino C++",
    tags: ["مخارج تماثلية"],
    components: ["RGB LED"],
    code: "void setup() {\n  pinMode(9, OUTPUT);\n  pinMode(10, OUTPUT);\n  pinMode(11, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, 255); // أحمر\n  analogWrite(10, 0);  // أخضر\n  analogWrite(11, 255); // أزرق -> يعطي لون بنفسجي\n}",
    explanation: "دمج قيم الـ PWM للثلاثة ألوان الأساسية يولد أي لون تريده.",
    commonErrors: "الـ RGB من نوع Common Anode يتطلب قيماً عكسية (0 يعني مضاء، 255 يعني مطفأ)."
  },
  {
    id: "millis-delay",
    title: "تعدد المهام (Blink بدون Delay)",
    board: "Arduino C++",
    tags: ["متقدم", "توقيت"],
    components: ["Arduino Uno", "LED"],
    code: "unsigned long previousMillis = 0;\nconst long interval = 1000;\nvoid setup() { pinMode(13, OUTPUT); }\nvoid loop() {\n  unsigned long currentMillis = millis();\n  if (currentMillis - previousMillis >= interval) {\n    previousMillis = currentMillis;\n    digitalWrite(13, !digitalRead(13));\n  }\n}",
    explanation: "بدلاً من استخدام دالة delay التي توقف المعالج تماماً، نستخدم millis لمعرفة الوقت المنقضي وتنفيذ مهام أخرى.",
    commonErrors: "استخدام نوع بيانات int بدلاً من unsigned long لمتغيرات الوقت سيؤدي لعطل برمجي بعد ثوانٍ بسبب امتلاء المتغير."
  },
  {
    id: "rfid-read",
    title: "قراءة كارت RFID",
    board: "Arduino C++",
    tags: ["حساسات", "أمان"],
    components: ["RFID RC522"],
    code: "#include <SPI.h>\n#include <MFRC522.h>\nMFRC522 rfid(10, 9);\nvoid setup() {\n  Serial.begin(9600);\n  SPI.begin();\n  rfid.PCD_Init();\n}\nvoid loop() {\n  if ( ! rfid.PICC_IsNewCardPresent()) return;\n  if ( ! rfid.PICC_ReadCardSerial()) return;\n  Serial.print(\"UID:\");\n  for (byte i = 0; i < rfid.uid.size; i++) {\n    Serial.print(rfid.uid.uidByte[i], HEX);\n  }\n  Serial.println();\n  rfid.PICC_HaltA();\n}",
    explanation: "الكود يقوم بالتهيئة لبروتوكول SPI وقارئ البطاقات، وعند وجود بطاقة يطبع المعرف الفريد لها بصيغة HEX.",
    commonErrors: "التوصيل الخاطئ لمنافذ SPI."
  },
  {
    id: "micropython-dht",
    title: "قراءة DHT11 بالبايثون",
    board: "MicroPython",
    tags: ["حساسات"],
    components: ["ESP8266", "DHT11"],
    code: "import dht\nimport machine\nimport time\nsensor = dht.DHT11(machine.Pin(4))\nwhile True:\n  try:\n    sensor.measure()\n    print('T:', sensor.temperature())\n    time.sleep(2)\n  except:\n    print('Error')\n",
    explanation: "مكتبة DHT مدمجة مسبقاً في MicroPython مما يجعل قراءتها في منتهى السهولة.",
    commonErrors: "عدم كتابة `try-except` قد يوقف البرنامج بالكامل إذا فشل الحساس في أخذ القراءة مرة واحدة."
  },
  {
    id: "map-function",
    title: "دالة التحويل (Map Function)",
    board: "Arduino C++",
    tags: ["رياضيات", "أساسي"],
    components: ["Arduino Uno"],
    code: "void loop() {\n  int val = analogRead(A0); // من 0 لـ 1023\n  int mappedVal = map(val, 0, 1023, 0, 255);\n  analogWrite(9, mappedVal);\n}",
    explanation: "تحول دالة map النطاق الكبير القادم من الحساس إلى نطاق صغير يصلح للـ PWM بكل سهولة.",
    commonErrors: "البعض يظن أن الدالة لا تقبل قراءات سالبة، لكنها تتعامل مع الأرقام السالبة بشكل جيد."
  },
  {
    id: "eeprom-write",
    title: "حفظ البيانات في الذاكرة (EEPROM)",
    board: "Arduino C++",
    tags: ["ذاكرة"],
    components: ["Arduino Uno"],
    code: "#include <EEPROM.h>\nvoid setup() {\n  EEPROM.write(0, 42); // اكتب 42 في العنوان 0\n  int val = EEPROM.read(0);\n  Serial.begin(9600);\n  Serial.println(val);\n}\nvoid loop() {}",
    explanation: "يتم حفظ القيم في ذاكرة الـ EEPROM كي لا تمحى عند انقطاع الكهرباء عن اللوحة.",
    commonErrors: "الكتابة في الذاكرة في كل دورة (داخل الـ loop) سيتسبب بتلف الذاكرة خلال دقائق (لها عمر افتراضي للكتابة)."
  }
];
