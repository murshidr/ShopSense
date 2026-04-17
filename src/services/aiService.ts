import { type SearchPreferences, type RecommendationResult, getRecommendations } from './recommendationEngine';
import { products } from '../data/products';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const getAIRecommendations = async (prefs: SearchPreferences): Promise<RecommendationResult[]> => {
  if (!GROQ_API_KEY) {
    console.warn("Groq API Key not found. Falling back to heuristic engine.");
    return getRecommendations(prefs);
  }

  const systemPrompt = `You are an expert AI Retail Assistant for ShopSense. 
  Your goal is to recommend the best products from our catalog based on user preferences.
  
  CATALOG:
  ${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, category: p.category, price: p.price, description: p.description })))}
  
  USER PREFERENCES:
  Query: ${prefs.query}
  Budget: ₹${prefs.budget}
  Category: ${prefs.category}
  Persona: ${prefs.persona}
  
  INSTRUCTIONS:
  1. Select the top 3 products from the catalog that best match the user's needs.
  2. For each product, provide a short, persuasive reason why it fits.
  3. Assign a match percentage (0-100).
  4. Return ONLY a JSON object with this structure: { "recommendations": [{ "id": "product_id", "matchScore": 95, "reason": "..." }] }`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: "Recommend products for me." }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);
    const aiChoices = content.recommendations || content;

    return aiChoices.map((choice: any) => {
      const productId = String(choice.id);
      const product = products.find(p => p.id === productId) || products[0];
      return {
        product,
        matchScore: Number(choice.matchScore) || 0,
        reason: String(choice.reason || "Matched based on your preferences")
      };
    }).slice(0, 3);

  } catch (error) {
    console.error("Groq AI Error:", error);
    return getRecommendations(prefs);
  }
};
