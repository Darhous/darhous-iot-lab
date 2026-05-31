# Darhous IoT Lab (Arduinoverse) - V2

Darhous IoT Lab is a futuristic, immersive, standalone educational web application designed for learning Arduino, IoT, robotics, and smart home automation. The **V2 Release** is the ultimate Production Content & Completion pass, providing the most robust Arabic platform for IoT makers.

## 🚀 V2 Features & Content Volume

- **18 Learning Paths:** From absolute beginner basics to advanced Industrial IoT and AI integration.
- **60+ Lessons:** Detailed theoretical and practical lessons.
- **72 Projects:** Step-by-step practical guides, including 12 Capstone Graduation Projects.
- **80 Electronic Components:** An encyclopedia detailing pins, specs, and prices.
- **80 Code Examples:** "Code Lab" library for ready-to-copy snippets with Arabic explanations.
- **35 Simulator Templates:** Direct Wokwi integration with various starting setups.
- **40 Challenges & Missions:** Skill-testing challenges offering XP and badges.
- **8 Roadmaps:** Structured career and learning guides for learners.
- **10 Troubleshooting Guides:** Solutions to the most common beginner issues.
- **10 Mini Exams:** Self-assessment quizzes.
- **AI Mentor (V2 Local Rule-based):** Chat interface that intelligently guides users based on keywords to the correct platform resources.
- **Arabic-First Design:** Full RTL layout tailored for MENA makers with premium aesthetic.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Darhous/darhous-iot-lab
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Open `http://localhost:3000` in your browser.

## How to integrate later into Darhous AI Academy

The application is structured to be loosely coupled:
- The `src/data` folder acts as a pseudo-CMS containing all V2 content. It can easily be replaced by API calls to the main academy backend.
- The AI Mentor component in `src/lib/mentor/localMentor.ts` and `src/app/mentor/page.tsx` is ready to be swapped with the academy's Gemini/OpenAI endpoint.

## Credits
Designed by Ahmed Darhous ©
