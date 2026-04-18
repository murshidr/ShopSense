# Work Plan: ShopSense Improvements - DETAILED

## Objective
Implement 3 key improvements:
1. Connect Firebase properly for real operational insights
2. Expand product catalog from 8 to 50+ products
3. Fix and enhance AI service for smarter recommendations

---

## API KEYS (Provided by User)

### Firebase Config
```
apiKey: "AIzaSyDp1L_LLPKIxtiGxsFvqdASp0wNiGFqNvQ"
authDomain: "shopsense-50c7b.firebaseapp.com"
projectId: "shopsense-50c7b"
storageBucket: "shopsense-50c7b.firebasestorage.app"
messagingSenderId: "65199642099"
appId: "1:65199642099:web:ed0689cce5f1ecad39ae86"
```

### Groq API Key
```
gsk_REDACTED
```

---

## Task 1: Fix Firebase Configuration

### 1.1 Create .env.local file
**File:** `.env.local`
**Content:**
```
VITE_FIREBASE_API_KEY=AIzaSyDp1L_LLPKIxtiGxsFvqdASp0wNiGFqNvQ
VITE_FIREBASE_AUTH_DOMAIN=shopsense-50c7b.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=shopsense-50c7b
VITE_FIREBASE_STORAGE_BUCKET=shopsense-50c7b.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=65199642099
VITE_FIREBASE_APP_ID=1:65199642099:web:ed0689cce5f1ecad39ae86
VITE_GROQ_API_KEY=gsk_REDACTED
```

### 1.2 Create .env.example template
**File:** `.env.example`
**Content:**
```
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# AI Service (Groq - Free tier)
VITE_GROQ_API_KEY=your_groq_api_key
```

### 1.3 Update firebase.ts
**File:** `src/services/firebase.ts`
**Change:** Replace entire content with:

```typescript
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
```

---

## Task 2: Expand Product Catalog

### 2.1 Replace products.ts with 50+ products
**File:** `src/data/products.ts`
**Change:** Replace entire content with expanded product array (50+ products)

**Product Structure:**
```typescript
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
  persona: string[];
}
```

**Categories to include:**
- Home (12 products): Planters, organizers, desk accessories, lighting, decor
- Electronics (15 products): Webcams, monitors, chargers, cables, speakers, headphones, tablets
- Fashion (15 products): Bags, wallets, watches, belts, sunglasses, jewelry
- Beauty (12 products): Skincare, tools, wellness products, cosmetics

**Personas:**
- Professional, Student, Traveler, Gamer, Techie, Fashionista, Athlete, Hobbyist, Homeowner, Self-care

---

## Task 3: Fix & Enhance AI Service

### 3.1 Update aiService.ts
**File:** `src/services/aiService.ts`
**Change:** Update to use VITE_GROQ_API_KEY from env variables (already configured correctly)

**Key functions:**
- `getAIRecommendations(prefs: SearchPreferences)` - Uses Groq API with LLaMA model
- Falls back to heuristic engine if API key missing or fails
- Returns 3 recommendations with match scores

### 3.2 Verify aiService.ts uses env variable
**Check:** Line 4 should have `const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;`

---

## Task 4: Verification Steps

### 4.1 Build verification
```bash
npm run build
```
Expected: No TypeScript errors

### 4.2 Dev server test
```bash
npm run dev
```
Expected: App runs without errors

### 4.3 Functionality checks
- [ ] Products display (50+ items)
- [ ] Search returns results
- [ ] Filters work (budget, category, persona)
- [ ] AI recommendations work (if API key works)
- [ ] No console errors

---

## Task 5: GitHub Push

### 5.1 Check git status
```bash
git status
```

### 5.2 Stage changes
```bash
git add .
```

### 5.3 Commit
```bash
git commit -m "feat: Implement 3 key improvements - Firebase, 50+ products, AI service"
```

### 5.4 Push
```bash
git push origin main
```

---

## Implementation Order

1. ✅ Create `.env.local` with provided keys
2. ✅ Create `.env.example` template
3. ✅ Update `src/services/firebase.ts`
4. ✅ Update `src/data/products.ts` (50+ products)
5. ✅ Verify `src/services/aiService.ts` uses env var
6. ✅ Run `npm run build` - verify no errors
7. ✅ Run `npm run dev` - test functionality
8. ✅ Git add, commit, push

---

## Important Notes

- **.env.local is already in .gitignore** - Keys won't be committed
- **Firebase will only work** when VITE_FIREBASE_* env vars are present
- **Groq API** has free tier - can be used immediately with provided key
- **Fallback** - If AI fails, system falls back to heuristic recommendation engine