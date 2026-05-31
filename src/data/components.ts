export interface ComponentData {
  id: string;
  name: string;
  arabicName: string;
  category: "Boards" | "Sensors" | "Actuators" | "Displays" | "Basic";
  description: string;
  pins: { name: string; desc: string }[];
  wiringNotes: string;
  safetyNotes: string;
  exampleUsage: string;
  relatedLessons: string[];
  relatedProjects: string[];
}

export const componentsData: ComponentData[] = [
  {
    id: "arduino-uno", name: "Arduino Uno", arabicName: "أردوينو أونو", category: "Boards",
    description: "اللوحة الأساسية للمبتدئين. تحتوي على متحكم ATmega328P.",
    pins: [{ name: "5V/3.3V", desc: "مصدر طاقة" }, { name: "GND", desc: "الأرضي" }, { name: "D0-D13", desc: "مخارج/مداخل رقمية" }, { name: "A0-A5", desc: "مداخل تماثلية" }],
    wiringNotes: "استخدم كابل USB للبرمجة، وتجنب توصيل الأحمال الكبيرة (كالمحركات) مباشرة بمنافذها.",
    safetyNotes: "الحد الأقصى للتيار لكل منفذ هو 40mA. تجنب القفلات الكهربائية.",
    exampleUsage: "التحكم في الليدات، قراءة الحساسات البسيطة.",
    relatedLessons: ["what-is-arduino"], relatedProjects: ["led-blink"]
  },
  {
    id: "arduino-nano", name: "Arduino Nano", arabicName: "أردوينو نانو", category: "Boards",
    description: "نسخة مصغرة من الأونو، مثالية للمشاريع الصغيرة وتركب مباشرة على لوحة التجارب.",
    pins: [{ name: "VCC/GND", desc: "الطاقة" }, { name: "D0-D13", desc: "رقمي" }, { name: "A0-A7", desc: "تماثلي (مداخل أكثر)" }],
    wiringNotes: "نفس توصيل الأونو، ولكن انتبه لترتيب الأطراف لأنه يختلف.",
    safetyNotes: "نفس تحذيرات الأونو.",
    exampleUsage: "تصميم الدوائر المدمجة أو الروبوتات الصغيرة.",
    relatedLessons: [], relatedProjects: []
  },
  {
    id: "esp32", name: "ESP32", arabicName: "لوحة ESP32", category: "Boards",
    description: "لوحة قوية جداً بمعالج ثنائي النواة وتدعم WiFi و Bluetooth.",
    pins: [{ name: "3V3", desc: "يعمل على 3.3 فولت!" }, { name: "GPIOs", desc: "منافذ متعددة الاستخدامات تدعم PWM/Touch/ADC" }],
    wiringNotes: "المنافذ تعمل بـ 3.3V. توصيل 5V مباشرة بمنفذ قد يحرقه.",
    safetyNotes: "اسحب تياراً من مصدر خارجي دائماً للمكونات الإضافية.",
    exampleUsage: "مشاريع إنترنت الأشياء والتحكم بالمنزل.",
    relatedLessons: ["esp32-wifi-basics"], relatedProjects: ["smart-home-panel"]
  },
  {
    id: "esp8266", name: "ESP8266 (NodeMCU)", arabicName: "لوحة NodeMCU", category: "Boards",
    description: "النسخة الأقدم من ESP32، ممتازة ورخيصة لمشاريع WiFi البسيطة.",
    pins: [{ name: "3V3", desc: "الطاقة" }, { name: "D0-D8", desc: "رقمي" }, { name: "A0", desc: "منفذ تماثلي واحد فقط" }],
    wiringNotes: "المنفذ التماثلي يقبل حتى 3.3V فقط، انتبه عند قراءة الحساسات 5V.",
    safetyNotes: "نفس تحذيرات ESP32.",
    exampleUsage: "إرسال البيانات للسحابة كدرجات الحرارة.",
    relatedLessons: [], relatedProjects: ["iot-temp-dash"]
  },
  {
    id: "breadboard", name: "Breadboard", arabicName: "لوحة التجارب", category: "Basic",
    description: "أداة لبناء الدوائر الكهربائية المؤقتة بدون لحام.",
    pins: [], wiringNotes: "المسارات الحمراء/الزرقاء متصلة أفقياً، باقي النقاط متصلة عمودياً.",
    safetyNotes: "لا تتحمل التيارات العالية جداً (أكثر من 1-2 أمبير قد يذيب البلاستيك).",
    exampleUsage: "تجربة أي دائرة قبل لحامها.",
    relatedLessons: ["breadboard-basics"], relatedProjects: []
  },
  {
    id: "led", name: "LED", arabicName: "مصباح LED", category: "Basic",
    description: "صمام ثنائي باعث للضوء، يستخدم كمؤشر بصري.",
    pins: [{ name: "Anode (طويل)", desc: "موجب" }, { name: "Cathode (قصير)", desc: "سالب" }],
    wiringNotes: "يجب توصيله بمقاومة (مثل 220 أوم) لحمايته.",
    safetyNotes: "توصيله بدون مقاومة سيحرقه فوراً.",
    exampleUsage: "أضواء التحذير والإشارات.",
    relatedLessons: ["digital-output-led"], relatedProjects: ["led-blink"]
  },
  {
    id: "resistor", name: "Resistor", arabicName: "مقاومة كهربائية", category: "Basic",
    description: "تُحد من تدفق التيار في الدائرة.",
    pins: [{ name: "بدون قطبية", desc: "يمكن تركيبه في أي اتجاه" }],
    wiringNotes: "تُقرأ قيمته عن طريق الألوان المرسومة عليه.",
    safetyNotes: "استخدام مقاومة ضعيفة قد يسبب احتراق المكون المحمي.",
    exampleUsage: "حماية الليدات، ومقاومات Pull-up للأزرار.",
    relatedLessons: ["breadboard-basics"], relatedProjects: []
  },
  {
    id: "potentiometer", name: "Potentiometer", arabicName: "مقاومة متغيرة (بوتنشيومتر)", category: "Basic",
    description: "مقاومة يمكن تغيير قيمتها عن طريق تدوير مقبض.",
    pins: [{ name: "VCC/GND", desc: "الأطراف الخارجية" }, { name: "Signal", desc: "الطرف الأوسط" }],
    wiringNotes: "الطرف الأوسط يوصل بـ Analog In.",
    safetyNotes: "عكس الـ VCC و الـ Signal قد يحدث قفلة.",
    exampleUsage: "التحكم في شدة الصوت أو السطوع.",
    relatedLessons: ["analog-input-pot"], relatedProjects: []
  },
  {
    id: "push-button", name: "Push Button", arabicName: "زر ضغط", category: "Basic",
    description: "مفتاح يقوم بإيصال التيار عند الضغط عليه فقط.",
    pins: [{ name: "Terminals", desc: "أطراف التوصيل (عادة 4 أطراف، كل اثنين متصلين معاً داخلياً)" }],
    wiringNotes: "يحتاج لمقاومة Pull-up أو Pull-down لمعرفة الحالة بدقة.",
    safetyNotes: "آمن للاستخدام.",
    exampleUsage: "أزرار التحكم.",
    relatedLessons: ["digital-input-button"], relatedProjects: []
  },
  {
    id: "buzzer", name: "Buzzer", arabicName: "جرس (بزر)", category: "Actuators",
    description: "يصدر صوتاً عند تزويده بالطاقة.",
    pins: [{ name: "VCC (+)", desc: "موجب" }, { name: "GND (-)", desc: "سالب" }],
    wiringNotes: "النوع الـ Active يعمل بمجرد توصيل طاقة، الـ Passive يحتاج لإشارة PWM (الدالة tone).",
    safetyNotes: "عكس الأقطاب لن يشغله.",
    exampleUsage: "أجهزة الإنذار.",
    relatedLessons: [], relatedProjects: ["fire-alarm"]
  },
  {
    id: "servo-motor", name: "Servo Motor", arabicName: "محرك سيرفو", category: "Actuators",
    description: "محرك يتحرك لزوايا محددة (0-180) بدقة، يحتوي على تروس ومتحكم داخلي.",
    pins: [{ name: "VCC (أحمر)", desc: "5V" }, { name: "GND (بني/أسود)", desc: "GND" }, { name: "Signal (أصفر/برتقالي)", desc: "PWM" }],
    wiringNotes: "يحتاج لإشارة PWM.",
    safetyNotes: "لا تقم بتحريكه يدوياً بقوة كي لا تكسر تروسه البلاستيكية الداخلية.",
    exampleUsage: "الأذرع الروبوتية والأقفال الذكية.",
    relatedLessons: ["servo-control"], relatedProjects: ["servo-door-lock"]
  },
  {
    id: "dc-motor", name: "DC Motor", arabicName: "محرك تيار مستمر (DC)", category: "Actuators",
    description: "محرك يلف باستمرار، يُستخدم لعجلات الروبوتات.",
    pins: [{ name: "Terminal 1", desc: "طاقة" }, { name: "Terminal 2", desc: "طاقة" }],
    wiringNotes: "توصيله مباشرة بالأردوينو سيحرقه، يجب استخدام Motor Driver.",
    safetyNotes: "سحب التيار العالي يتطلب بطاريات خارجية.",
    exampleUsage: "عجلات الروبوت، المراوح.",
    relatedLessons: ["line-follower-concept"], relatedProjects: ["line-follower-robot"]
  },
  {
    id: "l298n", name: "L298N", arabicName: "درايفر المحركات L298N", category: "Actuators",
    description: "وحدة تتيح للأردوينو التحكم في سرعة واتجاه محركي DC باستخدام طاقة خارجية.",
    pins: [{ name: "IN1-IN4", desc: "لتحديد الاتجاه" }, { name: "ENA/ENB", desc: "لتحديد السرعة (PWM)" }, { name: "12V/GND", desc: "مصدر الطاقة للمحركات" }],
    wiringNotes: "وصل أقطاب المحركات بمخارج Out1-Out4.",
    safetyNotes: "لا تنسخ توصيل GND الأردوينو بـ GND البطارية والـ L298N (Common Ground).",
    exampleUsage: "تشغيل الروبوتات المتنقلة.",
    relatedLessons: ["line-follower-concept"], relatedProjects: ["obstacle-avoiding-robot"]
  },
  {
    id: "hcsr04", name: "HC-SR04", arabicName: "حساس المسافة فوق الصوتي", category: "Sensors",
    description: "يقيس المسافة عن طريق إرسال موجات فوق صوتية وحساب وقت عودتها.",
    pins: [{ name: "VCC", desc: "5V" }, { name: "Trig", desc: "نرسل نبضة منه" }, { name: "Echo", desc: "نقرأ النبضة منه" }, { name: "GND", desc: "الأرضي" }],
    wiringNotes: "يحتاج لمنفذين رقميين.",
    safetyNotes: "تجنب تغطيته أو تعريضه للماء.",
    exampleUsage: "تجنب الاصطدام للروبوتات، قياس مستوى الخزانات.",
    relatedLessons: ["ultrasonic-sensor"], relatedProjects: ["smart-parking", "ultrasonic-meter"]
  },
  {
    id: "dht11", name: "DHT11 / DHT22", arabicName: "حساس الحرارة والرطوبة", category: "Sensors",
    description: "يقيس درجة حرارة الغرفة والرطوبة النسبية.",
    pins: [{ name: "VCC", desc: "5V/3.3V" }, { name: "Data", desc: "نقرأ منه الإشارة الرقمية المعقدة" }, { name: "GND", desc: "الأرضي" }],
    wiringNotes: "يحتاج لمقاومة Pull-up (4.7k) غالباً مدمجة في الموديول.",
    safetyNotes: "DHT11 دقيق للمتوسطات فقط، DHT22 أدق بكثير.",
    exampleUsage: "محطات الطقس، تشغيل التكييف التلقائي.",
    relatedLessons: ["dht11-sensor"], relatedProjects: ["weather-station"]
  },
  {
    id: "oled-i2c", name: "OLED Display", arabicName: "شاشة OLED", category: "Displays",
    description: "شاشة صغيرة عالية الوضوح لعرض النصوص والأشكال.",
    pins: [{ name: "VCC/GND", desc: "الطاقة" }, { name: "SCL/SDA", desc: "بروتوكول I2C" }],
    wiringNotes: "توصل بمنافذ الـ I2C (في الأونو A4 و A5).",
    safetyNotes: "هشة جداً قابلة للكسر بسهولة.",
    exampleUsage: "عرض قراءات الحساسات أو رسم واجهات مستخدم.",
    relatedLessons: ["oled-basics"], relatedProjects: ["industrial-tank-monitor"]
  },
  {
    id: "lcd-16x2", name: "LCD 16x2", arabicName: "شاشة LCD", category: "Displays",
    description: "تعرض سطرين، كل سطر 16 حرفاً. يُنصح باستخدام نسخة بقطعة I2C لتوفير الأسلاك.",
    pins: [{ name: "I2C Pins", desc: "VCC, GND, SDA, SCL" }],
    wiringNotes: "إذا كانت بدون I2C ستحتاج لتوصيل 12 سلكاً ومقاومة متغيرة للإضاءة.",
    safetyNotes: "آمنة.",
    exampleUsage: "الآلة الحاسبة، عرض أرقام بسيطة.",
    relatedLessons: [], relatedProjects: ["ultrasonic-meter"]
  },
  {
    id: "relay-module", name: "Relay Module", arabicName: "وحدة الريلاي (المرحل)", category: "Actuators",
    description: "مفتاح كهرومغناطيسي، يُمكّن الدوائر الضعيفة (5 فولت) من إغلاق دوائر قوية (220 فولت).",
    pins: [{ name: "IN", desc: "الإشارة من الأردوينو" }, { name: "NO/NC/COM", desc: "أطراف تيار المنزل (AC)" }],
    wiringNotes: "توصيل حمل كهربائي يقطع أحد سلكي الكهرباء ويمر عبر الـ COM و NO.",
    safetyNotes: "خطر جداً إذا لمست أسلاك الـ 220 فولت. افصل كهرباء المنزل أثناء التركيب.",
    exampleUsage: "المنازل الذكية لتشغيل المصابيح والأجهزة.",
    relatedLessons: ["relay-safety"], relatedProjects: ["smart-home-mini"]
  },
  {
    id: "pir-sensor", name: "PIR Sensor", arabicName: "حساس الحركة PIR", category: "Sensors",
    description: "يكتشف الحركة عن طريق التغير في الأشعة تحت الحمراء الصادرة عن الأجسام الحارة (الإنسان).",
    pins: [{ name: "VCC", desc: "5V" }, { name: "OUT", desc: "يعطي إشارة HIGH عند كشف حركة" }, { name: "GND", desc: "GND" }],
    wiringNotes: "يحتوي على مقبضين (Potentiometers) لتعديل حساسية المسافة وزمن استمرار الإشارة.",
    safetyNotes: "يتأثر بأشعة الشمس المباشرة أو تيارات الهواء الساخن.",
    exampleUsage: "أنظمة الإنذار، تشغيل الإضاءة تلقائياً.",
    relatedLessons: [], relatedProjects: []
  },
  {
    id: "rfid-rc522", name: "RFID RC522", arabicName: "قارئ كروت RFID", category: "Sensors",
    description: "يقرأ الموجات الراديوية للبطاقات الذكية.",
    pins: [{ name: "SDA, SCK, MOSI, MISO", desc: "أطراف بروتوكول SPI" }],
    wiringNotes: "يجب تشغيله على 3.3V، إدخال 5V يحرق الموديول.",
    safetyNotes: "لا تقم بتوصيل VCC الخاص به بالـ 5V.",
    exampleUsage: "أنظمة فتح الأبواب وتسجيل الحضور.",
    relatedLessons: [], relatedProjects: ["rfid-access", "attendance-device"]
  },
  {
    id: "soil-moisture", name: "Soil Moisture", arabicName: "حساس رطوبة التربة", category: "Sensors",
    description: "يقيس نسبة الماء في التربة عن طريق التوصيلية.",
    pins: [{ name: "A0", desc: "مخرج تماثلي للقراءة الدقيقة" }, { name: "D0", desc: "مخرج رقمي يعمل عند حد معين" }],
    wiringNotes: "ينصح بتغليف اللوحة الإلكترونية الخاصة به لتجنب تلفها بالماء.",
    safetyNotes: "الأقطاب النحاسية تتأكل سريعاً بسبب التحليل الكهربائي في التربة المبللة.",
    exampleUsage: "ري النباتات الأوتوماتيكي.",
    relatedLessons: [], relatedProjects: ["smart-irrigation"]
  },
  {
    id: "flame-sensor", name: "Flame Sensor", arabicName: "حساس اللهب", category: "Sensors",
    description: "يكتشف الأشعة تحت الحمراء الصادرة عن النار.",
    pins: [{ name: "A0/D0", desc: "مثل حساس التربة يمتلك مخرجين" }],
    wiringNotes: "يوجه ناحية المنطقة المراد حمايتها.",
    safetyNotes: "لا تضعه قريباً جداً من النار حتى لا يذوب.",
    exampleUsage: "إنذار الحرائق.",
    relatedLessons: [], relatedProjects: ["fire-alarm"]
  },
  {
    id: "ldr-sensor", name: "LDR (Photoresistor)", arabicName: "المقاومة الضوئية LDR", category: "Sensors",
    description: "مقاومة تقل قيمتها كلما زاد الضوء المسلط عليها.",
    pins: [{ name: "Legs", desc: "توصّل كمجزئ جهد (Voltage Divider) مع مقاومة 10k" }],
    wiringNotes: "تُوصل إحدى الأرجل بـ 5V والأخرى بـ Analog In ومقاومة للأرضي.",
    safetyNotes: "آمنة جداً.",
    exampleUsage: "تشغيل أضواء الشارع تلقائياً في الليل.",
    relatedLessons: [], relatedProjects: []
  },
  {
    id: "mq-gas-sensor", name: "MQ Gas Sensor", arabicName: "حساس الغاز (MQ-2)", category: "Sensors",
    description: "يكتشف الدخان والغازات القابلة للاشتعال.",
    pins: [{ name: "A0/D0", desc: "المخارج" }],
    wiringNotes: "يحتوي على سخان داخلي ويحتاج تياراً عالياً نسبياً.",
    safetyNotes: "سيصبح ساخناً عند التشغيل، هذا طبيعي.",
    exampleUsage: "كشف تسرب الغاز في المطبخ.",
    relatedLessons: [], relatedProjects: ["fire-alarm"]
  }
];
