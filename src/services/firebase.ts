import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp, getDocs, query, orderBy, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

let db: any = null;

try {
  if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("Firebase initialized successfully");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export const logShopperQuery = async (queryData: any) => {
  if (!db) {
    console.log("(Mock Mode) Would log:", queryData);
    return true;
  }
  
  try {
    await addDoc(collection(db, "queries"), {
      ...queryData,
      timestamp: serverTimestamp()
    });
    console.log("Query logged to Firestore");
    return true;
  } catch (error) {
    console.error("Error logging query:", error);
    return false;
  }
};

export const fetchRetailerInsights = async () => {
  if (!db) {
    return { topCategory: "Home Office", avgBudget: 24500, topPersona: "Professional", trend: "Minimalist", totalQueries: 0 };
  }
  
  try {
    const q = query(collection(db, "queries"), orderBy("timestamp", "desc"), limit(100));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      return { topCategory: "Home Office", avgBudget: 24500, topPersona: "Professional", trend: "Minimalist", totalQueries: 0 };
    }
    
    const queries = snapshot.docs.map(doc => doc.data());
    
    const categoryCount: Record<string, number> = {};
    const personaCount: Record<string, number> = {};
    let totalBudget = 0;
    
    queries.forEach((q: any) => {
      if (q.category) categoryCount[q.category] = (categoryCount[q.category] || 0) + 1;
      if (q.persona) personaCount[q.persona] = (personaCount[q.persona] || 0) + 1;
      if (q.budget) totalBudget += q.budget;
    });
    
    const topCategory = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "Home";
    const topPersona = Object.entries(personaCount).sort((a, b) => b[1] - a[1])[0]?.[0] || "Professional";
    const avgBudget = Math.round(totalBudget / queries.length);
    
    return { topCategory, avgBudget, topPersona, trend: "Growing", totalQueries: queries.length };
  } catch (error) {
    return { topCategory: "Home Office", avgBudget: 24500, topPersona: "Professional", trend: "Minimalist", totalQueries: 0 };
  }
};
