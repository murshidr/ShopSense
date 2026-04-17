# ShopSense: Intelligent AI Retail Assistant

ShopSense is a premium, demo-ready retail and e-commerce assistant built to redefine personalized shopping and operational intelligence.

## 🏆 Vertical: Retail & E-commerce

### The Problem
Traditional e-commerce search is fragmented. Shoppers struggle to find products that fit their specific context, budget, and persona, while retailers lack real-time visibility into consumer intent patterns.

### Our Solution
ShopSense acts as a **Digital Personal Shopper**. It translates natural language intent into high-accuracy recommendations using a heuristic-based intelligence engine, while simultaneously providing retailers with actionable demand insights.

## 🚀 Key Features

### For the Shopper
- **Natural Language Assistant**: Context-aware search for a more human-like experience.
- **Persona-Based Matching**: Tailored results for Professionals, Students, Techies, and more.
- **Visual Compatibility Score**: Real-time match percentages (e.g., "96% Match") based on budget, category, and preferences.
- **Premium UX**: Clean, Apple-inspired interface with a focus on whitespace and readability.

### For the Retailer
- **Live Insight Dashboard**: Tracks category trends, average shopper budget, and emerging personas.
- **Demand Intelligence**: Captures exact shopper "intent patterns" to inform inventory decisions.
- **Minimalist Complexity**: Professional metrics without the noise of traditional analytics suites.

## 🧠 Approach and Logic

### 1. Heuristic Recommendation Engine
The core logic (`recommendationEngine.ts`) uses a multi-weighted scoring system:
- **Keyword Density**: 40% (Intent match)
- **Persona Alignment**: 20% (Contextual fit)
- **Category Match**: 20% (Structural fit)
- **Budget Proximity**: 20% (Financial fit)
This ensures the "Best Choice" is mathematically the most logical fit for the user's specific context.

### 2. Operational Data Logging
Every search query is captured as an "Intent Log," which feeds the Retailer Insight Panel. In a production environment, this data is persisted to **Google Firebase Firestore** for real-time aggregation.

## 🛠️ Google Services Used
- **Firebase Firestore**: Used as the primary data lake for capturing shopper intent and serving aggregated operational insights to the retailer.
- **Google Fonts**: Inter & Outfit families for a premium, accessible typographic hierarchy.

## 📦 Tech Stack
- **React 18** + **TypeScript**
- **Vite** (Lightning-fast build tool)
- **Vanilla CSS** (Custom design system for < 1MB footprint)
- **Lucide Icons** & **DiceBear Avatars**

## 📝 Setup and Run
1. Clone the repo: `git clone https://github.com/murshidr/ShopSense.git`
2. Install: `npm install`
3. Dev: `npm run dev`
4. Build: `npm run build`

---
Built with a focus on **UX First** — because in retail, the experience is the product.
