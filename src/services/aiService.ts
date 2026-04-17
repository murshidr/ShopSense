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
  Your goal is to recommend the best products based on the user's preferences.
  
  CATALOG:
  ${JSON.stringify(products.map(p => ({ id: p.id, name: p.name, category: p.category, price: p.price, description: p.description })))}
  
  USER PREFERENCES:
  Query: ${prefs.query}
  Budget: ₹${prefs.budget}
  Category: ${prefs.category}
  Persona: ${prefs.persona}
  
  INSTRUCTIONS:
  1. Try to select products from the CATALOG that fit the user's query.
  2. If the user's query requests something NOT in the catalog (like a specific clothing item, car, etc.), you MUST invent a highly realistic, premium product that perfectly matches their query.
  3. Return exactly 3 products.
  4. For each product, assign a match percentage (0-100) and a short, persuasive reason why it fits.
  5. Return ONLY a JSON object with this structure: 
  { 
    "recommendations": [
      { 
        "id": "product_id_or_new_id", 
        "name": "Product Name", 
        "category": "Category", 
        "price": 999, 
        "description": "Short description",
        "matchScore": 95, 
        "reason": "..." 
      }
    ] 
  }`;

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
          { role: "user", content: "Recommend 3 products for me based on my preferences." }
        ],
        temperature: 0.3,
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();
    const content = JSON.parse(data.choices[0].message.content);
    const aiChoices = content.recommendations || content;

    return aiChoices.map((choice: any) => {
      const productId = String(choice.id);
      const existingProduct = products.find(p => p.id === productId);
      
      const product = existingProduct || {
        id: productId || Math.random().toString(),
        name: choice.name || "Custom Item",
        category: choice.category || prefs.category,
        price: Number(choice.price) || prefs.budget,
        description: choice.description || choice.reason,
        image: \`https://image.pollinations.ai/prompt/premium%20\${encodeURIComponent(choice.name || prefs.query)}%20product%20photography%20minimalist%20background?width=800&height=600&nologo=true\`,
        tags: [prefs.category.toLowerCase(), 'custom'],
        persona: [prefs.persona]
      };

      return {
        product,
        matchScore: Number(choice.matchScore) || 90,
        reason: String(choice.reason || "Perfectly matched to your unique preferences")
      };
    }).slice(0, 3);

  } catch (error) {
    console.error("Groq AI Error:", error);
    return getRecommendations(prefs);
  }
};
