# Darhous IoT Lab (Arduinoverse)

Darhous IoT Lab is a futuristic, immersive, standalone educational web application designed for learning Arduino, IoT, robotics, and smart home automation.

## Features

- **Futuristic Dark Mode UI:** Glassmorphism, neon accents, and a precise grid layout.
- **Arabic-First Design:** Full RTL layout support tailored for MENA makers.
- **Embedded Simulator Hub:** Integrates Wokwi and links to CircuitJS for hardware-free learning.
- **Interactive Projects Galaxy:** Filterable library of IoT and Arduino projects with complete guides and code.
- **AI Mentor (Demo):** A chat interface providing technical assistance and code explanations.
- **Student Dashboard:** Local-first progress tracking and XP points.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React, React Icons
- **Animations:** Framer Motion (Coming soon / Ready)

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

## Simulator Integration Notes

- **Wokwi** is embedded legally via `iframe` without removing attribution.
- **CircuitJS** and **Tinkercad** are provided as external launcher links with clear indicators.

## Deployment to Vercel

This platform uses a static-first Next.js architecture and is perfectly suited for Vercel.
1. Import the repository into your Vercel account.
2. The default build settings (`npm run build`, `next start`) work out-of-the-box.

## How to integrate later into Darhous AI Academy

The application is structured to be loosely coupled:
- The design system (Tailwind colors, layout files) can be exported or synced.
- The `src/data` folder acts as a pseudo-CMS and can easily be replaced by API calls to Supabase or the main academy backend.
- The AI Mentor component in `src/app/mentor/page.tsx` is ready to be wired to the academy's Gemini/OpenAI RAG endpoint.

## Credits
Designed by Ahmed Darhous ©
