# ShopSense: Intelligent AI Retail Assistant

ShopSense is a cutting-edge, lightweight single-page application built for the AMD Prompt-a-thon. It leverages AI to bridge the gap between shopper personalization and retailer intelligence.

## 🚀 Vertical: Retail & E-commerce

Our solution focuses on two core personas:
1. **The Modern Shopper**: Who seeks a curated, personal shopping experience without the noise of irrelevant options.
2. **The Strategic Retailer**: Who needs real-time insights into consumer trends and inventory demand to optimize operations.

## 🧠 Approach and Logic

### 1. Personalization Engine (Shopper Side)
ShopSense uses a multi-dimensional preference model (Style, Budget, Occasion, Interests) to curate products. The logic is designed to simulate a high-touch personal shopper experience. 
- **Adaptive Filtering**: Instead of basic keyword matching, the AI analyzes the "vibe" and "context" of the user's input.
- **Dynamic UI**: The interface adapts to provide a "Glassmorphic" premium feel, emphasizing the futuristic nature of AI-driven retail.

### 2. Operational Intelligence (Retailer Side)
Behind the scenes, the app aggregates simulated consumer data to provide retailers with a "Command Center" view.
- **Sentiment & Engagement Analysis**: Tracks how users interact with various styles.
- **Predictive Demand**: Uses aggregate preference data to forecast which categories will trend next, allowing for smarter inventory management.

## 🛠️ How the Solution Works

- **Frontend**: Built with **React** and **TypeScript** for a robust, maintainable codebase.
- **Styling**: Pure **Vanilla CSS** with CSS Variables (HSL) to ensure maximum performance and minimal bundle size (under 1MB goal).
- **Animations**: Custom CSS keyframes for smooth, non-blocking visual feedback.
- **AI Integration**: Designed to integrate with **Google Gemini API** for natural language understanding of user interests.

## 📝 Assumptions Made

- **API Connectivity**: We assume a baseline internet connection for AI services; however, the UI is built to handle loading states and local mock data gracefully if the API is unavailable.
- **Data Privacy**: The solution is designed with a "privacy-first" approach, where user preferences are processed locally for session personalization before being aggregated anonymously for retailer insights.
- **Responsive Design**: We assume users will access the platform from both high-resolution desktops (Retailer view) and mobile devices (Shopper view).

## 📦 Getting Started

1. Clone the repository
2. Run `npm install`
3. Start the development server with `npm run dev`
4. Build for production with `npm run build`

---

Built with ❤️ for the AMD Prompt-a-thon.
