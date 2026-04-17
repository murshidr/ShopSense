import { products } from '../data/products';
import type { Product } from '../data/products';

export interface SearchPreferences {
  query: string;
  budget: number;
  category: string;
  persona: string;
}

export interface RecommendationResult {
  product: Product;
  matchScore: number;
  reason: string;
}

export const getRecommendations = (prefs: SearchPreferences): RecommendationResult[] => {
  const scoredProducts = products.map(product => {
    let score = 0;
    let matchReasons: string[] = [];

    // 1. Keyword match in name, tags, or description
    const queryLower = prefs.query.toLowerCase();
    const nameLower = product.name.toLowerCase();
    const tagsMatch = product.tags.some(tag => queryLower.includes(tag.toLowerCase()));
    
    if (nameLower.includes(queryLower) || tagsMatch) {
      score += 40;
      matchReasons.push(`Matches your search for "${prefs.query}"`);
    }

    // 2. Category match
    if (prefs.category !== 'All' && product.category === prefs.category) {
      score += 20;
      matchReasons.push(`Fits the ${prefs.category} category you selected`);
    }

    // 3. Budget fit
    const budgetDiff = Math.abs(product.price - prefs.budget);
    const budgetScore = Math.max(0, 20 - (budgetDiff / prefs.budget) * 20);
    score += budgetScore;
    if (product.price <= prefs.budget) {
      matchReasons.push(`Well within your $${prefs.budget} budget`);
    } else {
      matchReasons.push(`A premium option slightly above your budget`);
    }

    // 4. Persona match
    if (product.persona.includes(prefs.persona)) {
      score += 20;
      matchReasons.push(`Ideal for a ${prefs.persona} like you`);
    }

    // Normalize score to max 100
    const finalScore = Math.min(Math.round(score), 99);

    return {
      product,
      matchScore: finalScore,
      reason: matchReasons[0] || "A great general fit for your needs."
    };
  });

  // Sort by score and take top 3
  return scoredProducts
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3);
};
