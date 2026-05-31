export const projectsData = [
  {
    id: "led-blink",
    title: "LED Blink",
    titleAr: "وميض الليد (LED Blink)",
    difficulty: "Beginner",
    estimatedTime: "15 min",
    components: ["Arduino Uno", "LED", "Resistor 220Ω", "Breadboard"],
    learningOutcomes: ["Digital Output", "Basic C++ Syntax", "delay() function"],
    wiringSummary: "Connect LED anode to Pin 13, cathode to GND through resistor.",
    code: `void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}`,
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "traffic-light",
    title: "Traffic Light System",
    titleAr: "نظام إشارة المرور",
    difficulty: "Beginner",
    estimatedTime: "30 min",
    components: ["Arduino Uno", "Red LED", "Yellow LED", "Green LED", "3x Resistors", "Breadboard"],
    learningOutcomes: ["Multiple Digital Outputs", "Sequencing Logic"],
    wiringSummary: "Red to Pin 13, Yellow to Pin 12, Green to Pin 11.",
    code: `void setup() { /* ... */ }\nvoid loop() { /* ... */ }`,
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "smart-parking",
    title: "Smart Parking Sensor",
    titleAr: "حساس الركن الذكي",
    difficulty: "Intermediate",
    estimatedTime: "45 min",
    components: ["Arduino Uno", "HC-SR04 Ultrasonic", "Buzzer", "LEDs"],
    learningOutcomes: ["Distance Measurement", "Sound Output", "If/Else Logic"],
    wiringSummary: "Trig to 9, Echo to 10. Buzzer to 8.",
    code: `// Code for parking sensor`,
    simulatorLink: "https://wokwi.com/projects/new/arduino-uno"
  },
  {
    id: "iot-temp-dashboard",
    title: "IoT Temperature Dashboard",
    titleAr: "لوحة تحكم حرارة IoT",
    difficulty: "Advanced",
    estimatedTime: "90 min",
    components: ["ESP32", "DHT11", "Jumper Wires"],
    learningOutcomes: ["WiFi Connection", "HTTP Requests", "Reading Sensors"],
    wiringSummary: "DHT Data to Pin 4 on ESP32, VCC to 3.3V, GND to GND.",
    code: `// Code for ESP32 WiFi Temp Sensor`,
    simulatorLink: "https://wokwi.com/projects/new/esp32"
  }
];
