// A local rule-based AI mentor for offline/V2 usage

export interface MentorResponse {
  message: string;
  suggestedLinks?: { title: string; url: string }[];
}

export function getLocalMentorResponse(query: string): MentorResponse {
  const normalized = query.toLowerCase();

  // Keyword matching rules
  if (normalized.includes("مقاومة") || normalized.includes("resistor")) {
    return {
      message: "المقاومة تستخدم لتقليل مرور التيار لحماية القطع الإلكترونية مثل الليد. القيمة الشائعة لليد هي 220 أوم.",
      suggestedLinks: [{ title: "مكون: المقاومات", url: "/components/resistor" }]
    };
  }

  if (normalized.includes("قانون اوم") || normalized.includes("ohm")) {
    return {
      message: "قانون أوم ينص على أن الجهد (V) يساوي التيار (I) مضروباً في المقاومة (R). أو V = I × R.",
      suggestedLinks: [{ title: "مكون: المقاومات", url: "/components/resistor" }]
    };
  }

  if (normalized.includes("مسافة") || normalized.includes("ultrasonic") || normalized.includes("hc-sr04")) {
    return {
      message: "حساس المسافة الموجي (Ultrasonic) يرسل موجة صوتية عبر دبوس Trig ويستقبل الصدى عبر Echo. يمكن حساب المسافة بالمعادلة: Distance = (Time × 0.034) / 2.",
      suggestedLinks: [
        { title: "حساس المسافة", url: "/components/hc-sr04" },
        { title: "كود حساس المسافة", url: "/code-lab" }
      ]
    };
  }

  if (normalized.includes("خطأ") || normalized.includes("error") || normalized.includes("مشكلة")) {
    return {
      message: "يبدو أنك تواجه مشكلة تقنية. لقد قمنا بتجميع أشهر المشاكل التي تواجه المبتدئين في دليل استكشاف الأخطاء.",
      suggestedLinks: [{ title: "دليل استكشاف الأخطاء", url: "/troubleshooting" }]
    };
  }

  if (normalized.includes("محرك") || normalized.includes("سيرفو") || normalized.includes("motor")) {
    return {
      message: "المحركات تسحب تياراً عالياً جداً! لا توصلها مباشرة بمنافذ الأردوينو لتجنب حرقه. استخدم دائماً (درايفر) مثل L298N للـ DC، أو افصل طاقة السيرفو عن الأردوينو.",
      suggestedLinks: [{ title: "مكون: L298N", url: "/components/l298n" }]
    };
  }

  if (normalized.includes("كيف ابدا") || normalized.includes("start") || normalized.includes("مسار")) {
    return {
      message: "أفضل طريقة للبدء هي اتباع خارطة طريق منظمة. لقد جهزنا لك مسارات تغطي من الصفر وحتى الاحتراف.",
      suggestedLinks: [{ title: "خرائط الطريق", url: "/roadmaps" }]
    };
  }

  // Fallback response
  return {
    message: "مرحباً! أنا المرشد الذكي لمنصة دارحوس لإنترنت الأشياء. يمكنك سؤالي عن المكونات، الأكواد، وتوصيل الدوائر وسأحاول مساعدتك."
  };
}
