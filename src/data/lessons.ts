export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  componentsNeeded: string[];
  wiringNotes: string;
  codeExample: string;
  commonMistakes: string;
  simulatorLink?: string;
  nextLessonId?: string;
}

export const lessonsData: Lesson[] = [
  {
    id: "what-is-arduino",
    title: "ما هو الأردوينو؟",
    description: "مقدمة شاملة عن اللوحة وأجزائها وكيفية عملها.",
    content: "الأردوينو هو عبارة عن لوحة تطوير إلكترونية مفتوحة المصدر تتكون من متحكم دقيق (Microcontroller). تُستخدم لقراءة الإشارات من الحساسات والتحكم في المحركات والإضاءة. ميزة الأردوينو هي بساطة اللغة البرمجية وسهولة التوصيل.",
    componentsNeeded: ["Arduino Uno"],
    wiringNotes: "لا يوجد توصيل في هذا الدرس، فقط قم بتوصيل اللوحة بالكمبيوتر باستخدام كابل USB.",
    codeExample: "// لا يوجد كود هنا",
    commonMistakes: "البعض يظن أن الأردوينو حاسوب متكامل (مثل Raspberry Pi)، ولكنه متحكم دقيق يؤدي مهمة واحدة مبرمجة.",
    nextLessonId: "digital-output-led"
  },
  {
    id: "digital-output-led",
    title: "المخرج الرقمي: وميض LED",
    description: "أول خطوة لك في البرمجة: تشغيل وإطفاء ضوء (Blink).",
    content: "في هذا الدرس سنتعلم كيف نتحكم في مخرج رقمي (Digital Output) لإرسال إشارة 5 فولت (HIGH) أو 0 فولت (LOW).",
    componentsNeeded: ["Arduino Uno", "LED", "220Ω Resistor", "Breadboard"],
    wiringNotes: "قم بتوصيل الطرف الموجب (الطويل) للـ LED بمنفذ 13، والطرف السالب بمقاومة 220 أوم ومنها إلى الـ GND.",
    codeExample: "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}",
    commonMistakes: "نسيان وضع المقاومة قد يؤدي لاحتراق الـ LED. وضع الـ LED بشكل معكوس سيمنعه من الإضاءة.",
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno",
    nextLessonId: "breadboard-basics"
  },
  {
    id: "breadboard-basics",
    title: "لوحة التجارب والمقاومات",
    description: "فهم كيفية استخدام الـ Breadboard لبناء الدوائر بدون لحام.",
    content: "الـ Breadboard (لوحة التجارب) مقسمة لخطوط طولية وعرضية. مسار الطاقة (الأحمر والأزرق) يكون متصلاً بشكل أفقي، بينما منطقة العمل متصلة بشكل رأسي (كل 5 نقاط).",
    componentsNeeded: ["Breadboard", "Jumpers", "Resistors"],
    wiringNotes: "انتبه لعدم توصيل الموجب والسالب معاً مباشرة (Short Circuit).",
    codeExample: "// فهم المبادئ لا يحتاج لكود",
    commonMistakes: "الخطأ الأكثر شيوعاً هو عدم إدخال الأسلاك بشكل جيد أو فهم اتجاه التوصيل الرأسي/الأفقي بشكل خاطئ.",
    nextLessonId: "digital-input-button"
  },
  {
    id: "digital-input-button",
    title: "المدخل الرقمي: زر الضغط",
    description: "كيفية قراءة حالة زر الضغط واستخدامه لتشغيل إضاءة.",
    content: "لقراءة إشارة رقمية، نستخدم `digitalRead`. يمكن أن يكون الزر مضغوطاً (HIGH) أو غير مضغوط (LOW) بناءً على طريقة توصيل المقاومة (Pull-up / Pull-down).",
    componentsNeeded: ["Arduino Uno", "Push Button", "10kΩ Resistor", "LED"],
    wiringNotes: "وصل أحد أطراف الزر بالـ 5V، والطرف الآخر بمنفذ 2 وبمقاومة 10K متصلة بالـ GND (Pull-down).",
    codeExample: "int buttonPin = 2;\nint ledPin = 13;\nvoid setup() {\n  pinMode(buttonPin, INPUT);\n  pinMode(ledPin, OUTPUT);\n}\nvoid loop() {\n  if(digitalRead(buttonPin) == HIGH) {\n    digitalWrite(ledPin, HIGH);\n  } else {\n    digitalWrite(ledPin, LOW);\n  }\n}",
    commonMistakes: "عدم استخدام مقاومة الـ Pull-down يجعل القراءة غير مستقرة وتتأثر بالتشويش (Floating pin).",
    nextLessonId: "analog-input-pot"
  },
  {
    id: "analog-input-pot",
    title: "المدخل التماثلي: المقاومة المتغيرة",
    description: "قراءة قيم متغيرة (0-1023) باستخدام منفذ Analog.",
    content: "بينما المداخل الرقمية تقرأ 0 أو 1 فقط، المداخل التماثلية (A0 إلى A5) يمكنها قراءة نطاق من القيم يمثل فرق الجهد، مما يمكننا من قراءة حساسات درجات الحرارة أو مقبض الصوت.",
    componentsNeeded: ["Arduino Uno", "Potentiometer (10k)"],
    wiringNotes: "وصل الطرفين الخارجيين للمقاومة المتغيرة بـ 5V و GND، والطرف الأوسط بمنفذ A0.",
    codeExample: "void setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int val = analogRead(A0);\n  Serial.println(val);\n  delay(100);\n}",
    commonMistakes: "توصيل الأطراف الخارجية ببعضها بدلاً من 5V و GND يسبب قفلة (Short circuit).",
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno",
    nextLessonId: "pwm-led-fade"
  },
  {
    id: "pwm-led-fade",
    title: "مفهوم الـ PWM وتخفيت الإضاءة",
    description: "التحكم بشدة إضاءة LED أو سرعة محرك باستخدام PWM.",
    content: "PWM (Pulse Width Modulation) هي تقنية لمحاكاة الإشارة التماثلية باستخدام إشارة رقمية نبضية. المنافذ التي تدعمها في الأردوينو معلمة بعلامة (~).",
    componentsNeeded: ["Arduino Uno", "LED", "220Ω Resistor"],
    wiringNotes: "توصيل LED بمنفذ يدعم الـ PWM مثل منفذ رقم 9 أو 3.",
    codeExample: "int brightness = 0;\nint fadeAmount = 5;\nvoid setup() {\n  pinMode(9, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, brightness);\n  brightness = brightness + fadeAmount;\n  if(brightness <= 0 || brightness >= 255) {\n    fadeAmount = -fadeAmount;\n  }\n  delay(30);\n}",
    commonMistakes: "استخدام `analogWrite` على منفذ لا يدعم الـ PWM (بدون علامة ~).",
    nextLessonId: "servo-control"
  },
  {
    id: "servo-control",
    title: "التحكم بمحرك السيرفو",
    description: "كيفية توجيه السيرفو إلى زوايا دقيقة (0-180 درجة).",
    content: "محرك السيرفو يحتوي على تروس ومتحكم داخلي، نستخدم مكتبة `Servo.h` لإرسال الزاوية المطلوبة وهو سيتكفل بالباقي.",
    componentsNeeded: ["Arduino Uno", "Servo Motor (SG90)"],
    wiringNotes: "الأحمر للـ 5V، البني للـ GND، والبرتقالي (الإشارة) لمنفذ رقم 9.",
    codeExample: "#include <Servo.h>\nServo myServo;\nvoid setup() {\n  myServo.attach(9);\n}\nvoid loop() {\n  myServo.write(90); // زاوية 90\n  delay(1000);\n  myServo.write(0);\n  delay(1000);\n}",
    commonMistakes: "توصيل سيرفو كبير الحجم مباشرة بـ 5V الأردوينو قد يتسبب في إعادة تشغيل اللوحة بسبب سحب التيار العالي.",
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno",
    nextLessonId: "ultrasonic-sensor"
  },
  {
    id: "ultrasonic-sensor",
    title: "حساس المسافة (Ultrasonic)",
    description: "استخدام الموجات فوق الصوتية لقياس المسافات.",
    content: "يعمل حساس HC-SR04 بفكره مشابهة للخفاش أو الرادار، يُرسل نبضة صوتية ويحسب الوقت الذي تستغرقه للعودة لتقدير المسافة.",
    componentsNeeded: ["Arduino Uno", "HC-SR04 Sensor"],
    wiringNotes: "VCC->5V, GND->GND, Trig->9, Echo->10.",
    codeExample: "long duration;\nint distance;\nvoid setup() {\n  pinMode(9, OUTPUT);\n  pinMode(10, INPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  digitalWrite(9, LOW);\n  delayMicroseconds(2);\n  digitalWrite(9, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(9, LOW);\n  duration = pulseIn(10, HIGH);\n  distance = duration * 0.034 / 2;\n  Serial.println(distance);\n  delay(500);\n}",
    commonMistakes: "خطأ في معادلة حساب المسافة، أو تركيب Trig مكان Echo.",
    nextLessonId: "dht11-sensor"
  },
  {
    id: "dht11-sensor",
    title: "حساس الحرارة والرطوبة DHT11",
    description: "كيفية قراءة المتغيرات البيئية باستخدام مكتبات جاهزة.",
    content: "قراءة الحرارة والرطوبة تحتاج لتواصل رقمي معقد نوعاً ما، لذلك نعتمد على مكتبات جاهزة (مثل Adafruit DHT sensor library) لتسهيل العمل.",
    componentsNeeded: ["Arduino Uno", "DHT11 Sensor"],
    wiringNotes: "VCC للـ 5V، GND للـ GND، و Data لمنفذ رقم 2.",
    codeExample: "#include <DHT.h>\n#define DHTPIN 2\n#define DHTTYPE DHT11\nDHT dht(DHTPIN, DHTTYPE);\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  Serial.print(\"Temp: \"); Serial.println(t);\n  delay(2000);\n}",
    commonMistakes: "محاولة قراءة الحساس بسرعة كبيرة (يجب الانتظار ثانيتين بين كل قراءة).",
    nextLessonId: "oled-basics"
  },
  {
    id: "oled-basics",
    title: "أساسيات شاشة OLED",
    description: "عرض النصوص والرسومات على شاشة OLED صغيرة.",
    content: "تعمل الشاشات عادة ببروتوكول I2C والذي يحتاج إلى سلكين فقط (SDA و SCL) بالإضافة للطاقة. نستخدم مكتبات Adafruit_SSD1306 و Adafruit_GFX.",
    componentsNeeded: ["Arduino Uno", "OLED Display 0.96 (I2C)"],
    wiringNotes: "VCC->5V, GND->GND, SDA->A4, SCL->A5 (في Arduino Uno).",
    codeExample: "/* تحتاج لتنزيل المكتبات واستخدام الكود الافتراضي المعقد للشاشة */",
    commonMistakes: "عدم تطابق العنوان I2C الخاص بالشاشة (غالباً 0x3C أو 0x3D).",
    nextLessonId: "relay-safety"
  },
  {
    id: "relay-safety",
    title: "الريلاي (Relay) والسلامة",
    description: "كيفية التحكم بالأجهزة المنزلية بجهد 220 فولت بأمان.",
    content: "الريلاي هو مفتاح كهرومغناطيسي، يسمح لنا باستخدام إشارة الأردوينو الضعيفة (5 فولت) لفتح وإغلاق دائرة ذات تيار عالٍ جداً. السلامة هي الأهم عند التعامل مع الجهد العالي (AC).",
    componentsNeeded: ["Arduino Uno", "Relay Module 5V"],
    wiringNotes: "توصيل إشارة الريلاي بمخرج رقمي. أطراف الـ AC (NO, COM, NC) يتم التعامل معها بحذر شديد.",
    codeExample: "void setup() {\n  pinMode(8, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(8, HIGH); // تشغيل الريلاي\n  delay(5000);\n  digitalWrite(8, LOW); // إطفاء\n  delay(5000);\n}",
    commonMistakes: "لمس أطراف الريلاي أثناء توصيله بكهرباء المنزل مما يعرضك لصعقة خطيرة.",
    nextLessonId: "esp32-wifi-basics"
  },
  {
    id: "esp32-wifi-basics",
    title: "أساسيات ESP32 و WiFi",
    description: "ربط متحكم ESP32 بشبكة الواي فاي المحلية.",
    content: "على عكس الأردوينو العادي، يمتلك ESP32 شريحة WiFi مدمجة، مما يجعله القلب النابض لمشاريع إنترنت الأشياء.",
    componentsNeeded: ["ESP32 Development Board"],
    wiringNotes: "لا يوجد توصيل، يعتمد على الـ WiFi الداخلي.",
    codeExample: "#include <WiFi.h>\nconst char* ssid = \"Your_SSID\";\nconst char* password = \"Your_PASS\";\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(\".\");\n  }\n  Serial.println(\"Connected!\");\n}\nvoid loop() {}",
    commonMistakes: "نسيان تغيير اسم الشبكة وكلمة المرور في الكود، أو أن الشبكة تعمل بتردد 5GHz (ESP32 يدعم 2.4GHz فقط).",
    nextLessonId: "sensor-dashboard"
  },
  {
    id: "sensor-dashboard",
    title: "إرسال البيانات للوحة التحكم",
    description: "كيف ترسل بيانات حساسات ESP32 إلى سحابة.",
    content: "بعد الاتصال بالواي فاي، نستخدم بروتوكولات مثل HTTP أو MQTT لإرسال البيانات لمنصات مثل Blynk أو ThingSpeak.",
    componentsNeeded: ["ESP32", "DHT11 Sensor"],
    wiringNotes: "نفس توصيل الـ DHT11 ولكن على منافذ ESP32.",
    codeExample: "// يتطلب كود متقدم للربط مع ThingSpeak مثلاً",
    commonMistakes: "عدم إدراج API Key صحيح الخاص باللوحة السحابية.",
    nextLessonId: "smart-home-mini"
  },
  {
    id: "smart-home-mini",
    title: "مشروع منزلي مصغر",
    description: "تطبيق عملي: نظام تحكم في إضاءة الغرفة ومروحة بناءً على الحرارة.",
    content: "سنقوم بدمج الحساسات (الحرارة، المسافة) مع المحركات والريلاي لنبني نموذج منزل ذكي متكامل.",
    componentsNeeded: ["Arduino Uno", "DHT11", "Relay", "Fan", "LED"],
    wiringNotes: "تجميع للدروس السابقة في دائرة واحدة معقدة.",
    codeExample: "// الكود يدمج شروط الحرارة لتشغيل الريلاي",
    commonMistakes: "سحب تيار عالي من الأردوينو بدلاً من استخدام مصدر طاقة خارجي للمحركات.",
    nextLessonId: "line-follower-concept"
  },
  {
    id: "line-follower-concept",
    title: "مفهوم روبوت تتبع الخط",
    description: "الأساس النظري لروبوتات المسار وكيف تعمل.",
    content: "يعتمد الروبوت المتتبع للخط (Line Follower) على حساسين أو أكثر للأشعة تحت الحمراء (IR Sensors). تقرأ هذه الحساسات انعكاس الضوء من السطح (أبيض أم أسود) وتقرر سرعة المحركات اليمنى واليسرى لإبقاء الروبوت في المسار.",
    componentsNeeded: ["IR Sensors", "L298N Motor Driver", "DC Motors", "Arduino Uno"],
    wiringNotes: "توصيل الحساسات للمداخل الرقمية، وتوصيل الموتور درايفر بمنافذ الـ PWM.",
    codeExample: "int leftSensor = 2; int rightSensor = 3;\nvoid loop() {\n  if(digitalRead(leftSensor)==LOW && digitalRead(rightSensor)==LOW) {\n    // Forward\n  } else if (digitalRead(leftSensor)==HIGH) {\n    // Turn Right\n  }\n}",
    commonMistakes: "عدم معايرة الحساسات بمفك صغير لتناسب الإضاءة الحالية في الغرفة.",
    nextLessonId: ""
  }
];
