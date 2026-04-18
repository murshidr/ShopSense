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

export const products: Product[] = [
  // Home (12 products)
  {
    id: '1',
    name: 'Halo Ambient Task Lamp',
    category: 'Home',
    price: 10499,
    description: 'Minimalist lighting for your workspace. Adjustable color temperature for deep focus sessions.',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&q=80',
    tags: ['minimalist', 'office', 'lighting', 'warm'],
    persona: ['Professional', 'Student']
  },
  {
    id: '2',
    name: 'Lumina Smart Planter',
    category: 'Home',
    price: 4499,
    description: 'Self-watering system with integrated growth lights. Ideal for indoor apartment gardening.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    tags: ['plants', 'home', 'smart', 'decor'],
    persona: ['Hobbyist', 'Homeowner']
  },
  {
    id: '3',
    name: 'Oak & Steel Coffee Press',
    category: 'Home',
    price: 3599,
    description: 'Double-walled insulation keeps your brew hot. Modern design for the contemporary kitchen.',
    image: 'https://images.unsplash.com/photo-1544787210-282dd05c2ad3?w=800&q=80',
    tags: ['coffee', 'kitchen', 'home', 'breakfast'],
    persona: ['Foodie', 'Student']
  },
  {
    id: '4',
    name: 'Aura Essential Oil Diffuser',
    category: 'Home',
    price: 2899,
    description: 'Ultrasonic diffuser with ambient lighting. Creates a calming atmosphere for work or relaxation.',
    image: 'https://images.unsplash.com/photo-1608514578147-380d0d8fb870?w=800&q=80',
    tags: ['wellness', 'home', 'aroma', 'relax'],
    persona: ['Self-care', 'Professional']
  },
  {
    id: '5',
    name: 'ErgoMesh Desk Chair',
    category: 'Home',
    price: 18500,
    description: 'Breathable mesh back with lumbar support. Perfect for long hours of productive work.',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
    tags: ['furniture', 'office', 'ergonomic', 'chair'],
    persona: ['Professional', 'Developer', 'Gamer']
  },
  {
    id: '6',
    name: 'Zenith Standing Desk',
    category: 'Home',
    price: 32000,
    description: 'Motorized standing desk with memory presets. Stay active while you work.',
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80',
    tags: ['furniture', 'desk', 'ergonomic', 'health'],
    persona: ['Professional', 'Techie']
  },
  {
    id: '7',
    name: 'Minimalist Desk Mat',
    category: 'Home',
    price: 1299,
    description: 'Premium vegan leather desk mat. Protects your desk and adds a touch of elegance.',
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80',
    tags: ['office', 'accessories', 'leather', 'minimalist'],
    persona: ['Professional', 'Student']
  },
  {
    id: '8',
    name: 'Cable Management Box',
    category: 'Home',
    price: 999,
    description: 'Hide unsightly cables and power strips. Keeps your workspace clean and organized.',
    image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80',
    tags: ['organization', 'office', 'clean', 'home'],
    persona: ['Techie', 'Homeowner']
  },
  {
    id: '9',
    name: 'Acoustic Wall Panels',
    category: 'Home',
    price: 4500,
    description: 'Sound-absorbing panels for your home office or studio. Improves audio quality and reduces echo.',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80',
    tags: ['audio', 'office', 'decor', 'sound'],
    persona: ['Professional', 'Gamer', 'Techie']
  },
  {
    id: '10',
    name: 'Geometric Bookends',
    category: 'Home',
    price: 1499,
    description: 'Modern geometric bookends to keep your library organized and stylish.',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&q=80',
    tags: ['decor', 'books', 'home', 'modern'],
    persona: ['Student', 'Homeowner']
  },
  {
    id: '11',
    name: 'Smart WiFi Plugs (Pack of 2)',
    category: 'Home',
    price: 1999,
    description: 'Control your appliances from your phone. Set schedules and monitor energy usage.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    tags: ['smart', 'home', 'wifi', 'automation'],
    persona: ['Techie', 'Homeowner']
  },
  {
    id: '12',
    name: 'Himalayan Salt Lamp',
    category: 'Home',
    price: 1899,
    description: 'Natural salt lamp that emits a warm, soothing glow. Perfect for relaxation.',
    image: 'https://images.unsplash.com/photo-1536585150965-74898fc82200?w=800&q=80',
    tags: ['decor', 'lighting', 'wellness', 'warm'],
    persona: ['Self-care', 'Hobbyist']
  },

  // Electronics (15 products)
  {
    id: '13',
    name: 'K3 Ultra-slim Mechanical Keyboard',
    category: 'Electronics',
    price: 6999,
    description: 'Precision typing with tactile feedback. Sleek low-profile design for maximum ergonomics.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83aca2?w=800&q=80',
    tags: ['keyboard', 'mechanical', 'wireless', 'ergonomic'],
    persona: ['Developer', 'Gamer', 'Techie']
  },
  {
    id: '14',
    name: 'Aether Noise Cancelling Headphones',
    category: 'Electronics',
    price: 24999,
    description: 'Industry-leading noise cancellation. Perfect for focus in busy environments.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    tags: ['audio', 'headphones', 'noise-cancelling', 'music'],
    persona: ['Professional', 'Traveler', 'Techie']
  },
  {
    id: '15',
    name: 'Velocity Smart Watch',
    category: 'Electronics',
    price: 19499,
    description: 'Advanced fitness tracking with an elegant OLED display. Stays charged for days.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    tags: ['watch', 'fitness', 'smart', 'tech'],
    persona: ['Athlete', 'Techie']
  },
  {
    id: '16',
    name: 'Vision 4K Pro Webcam',
    category: 'Electronics',
    price: 12500,
    description: 'Ultra HD webcam with auto-framing and low-light correction. Look your best on calls.',
    image: 'https://images.unsplash.com/photo-1587826588267-31fc0f8ec944?w=800&q=80',
    tags: ['webcam', 'video', 'office', 'streaming'],
    persona: ['Professional', 'Techie']
  },
  {
    id: '17',
    name: 'UltraWide 34" Curved Monitor',
    category: 'Electronics',
    price: 45000,
    description: 'Immersive curved display for ultimate productivity and gaming.',
    image: 'https://images.unsplash.com/photo-1527443154391-42721dc337e6?w=800&q=80',
    tags: ['monitor', 'display', 'office', 'gaming'],
    persona: ['Developer', 'Gamer', 'Professional']
  },
  {
    id: '18',
    name: 'ErgoMouse Pro',
    category: 'Electronics',
    price: 5500,
    description: 'Vertical ergonomic mouse designed to reduce wrist strain during long sessions.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80',
    tags: ['mouse', 'ergonomic', 'wireless', 'office'],
    persona: ['Professional', 'Developer']
  },
  {
    id: '19',
    name: 'PowerHub 100W GaN Charger',
    category: 'Electronics',
    price: 3999,
    description: 'Compact charger with 3 USB-C and 1 USB-A port. Charge all your devices simultaneously.',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80',
    tags: ['charger', 'power', 'travel', 'tech'],
    persona: ['Traveler', 'Techie']
  },
  {
    id: '20',
    name: 'Braided USB-C Cable (2m)',
    category: 'Electronics',
    price: 1299,
    description: 'Durable nylon braided cable with fast charging and fast data transfer capabilities.',
    image: 'https://images.unsplash.com/photo-1620023645391-7667fa502574?w=800&q=80',
    tags: ['cable', 'usb-c', 'durable', 'tech'],
    persona: ['Techie', 'Student']
  },
  {
    id: '21',
    name: 'Sonic Mini Bluetooth Speaker',
    category: 'Electronics',
    price: 3499,
    description: 'Waterproof portable speaker with surprisingly big sound. Take your music anywhere.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    tags: ['speaker', 'audio', 'portable', 'music'],
    persona: ['Traveler', 'Hobbyist']
  },
  {
    id: '22',
    name: 'Slate 11" Pro Tablet',
    category: 'Electronics',
    price: 55000,
    description: 'Powerful tablet for creativity and entertainment. Features a stunning 120Hz display.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    tags: ['tablet', 'tech', 'creative', 'display'],
    persona: ['Student', 'Professional', 'Techie']
  },
  {
    id: '23',
    name: 'Digital Stylus Pen',
    category: 'Electronics',
    price: 7500,
    description: 'Precision stylus for digital art and note-taking. Magnetic attachment and wireless charging.',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
    tags: ['stylus', 'tablet', 'creative', 'accessories'],
    persona: ['Student', 'Hobbyist']
  },
  {
    id: '24',
    name: 'Wireless Charging Pad',
    category: 'Electronics',
    price: 2499,
    description: 'Sleek Qi-certified wireless charger for your phone and earbuds.',
    image: 'https://images.unsplash.com/photo-1586795495810-7aa010f3dbf0?w=800&q=80',
    tags: ['charger', 'wireless', 'tech', 'desk'],
    persona: ['Techie', 'Professional']
  },
  {
    id: '25',
    name: 'Smart Desk Lamp with Qi',
    category: 'Electronics',
    price: 4999,
    description: 'Adjustable LED desk lamp with built-in wireless charging base.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    tags: ['lighting', 'smart', 'charger', 'office'],
    persona: ['Student', 'Professional']
  },
  {
    id: '26',
    name: 'Portable SSD 1TB',
    category: 'Electronics',
    price: 11500,
    description: 'Rugged portable solid-state drive with blazing fast transfer speeds.',
    image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=800&q=80',
    tags: ['storage', 'ssd', 'portable', 'tech'],
    persona: ['Developer', 'Traveler']
  },
  {
    id: '27',
    name: 'VR Headset Pro',
    category: 'Electronics',
    price: 35000,
    description: 'Standalone virtual reality headset for immersive gaming and experiences.',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80',
    tags: ['vr', 'gaming', 'tech', 'entertainment'],
    persona: ['Gamer', 'Techie']
  },

  // Fashion (15 products)
  {
    id: '28',
    name: 'Prism Leather Carryall',
    category: 'Fashion',
    price: 14499,
    description: 'Handcrafted leather with organized compartments for your laptop and daily essentials.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    tags: ['leather', 'bag', 'fashion', 'tech'],
    persona: ['Professional', 'Fashionista']
  },
  {
    id: '29',
    name: 'Urban Canvas Backpack',
    category: 'Fashion',
    price: 4500,
    description: 'Water-resistant canvas backpack with a sleek profile and padded laptop sleeve.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    tags: ['bag', 'backpack', 'urban', 'travel'],
    persona: ['Student', 'Traveler']
  },
  {
    id: '30',
    name: 'Minimalist Bifold Wallet',
    category: 'Fashion',
    price: 2200,
    description: 'Slim leather wallet with RFID protection. Holds essential cards and cash without the bulk.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    tags: ['wallet', 'leather', 'accessories', 'minimalist'],
    persona: ['Professional', 'Traveler']
  },
  {
    id: '31',
    name: 'Classic Chronograph Watch',
    category: 'Fashion',
    price: 12500,
    description: 'Timeless stainless steel watch with a genuine leather strap and chronograph dials.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
    tags: ['watch', 'accessories', 'classic', 'fashion'],
    persona: ['Professional', 'Fashionista']
  },
  {
    id: '32',
    name: 'Aviator Sunglasses',
    category: 'Fashion',
    price: 3500,
    description: 'Polarized sunglasses with a classic aviator frame. UV400 protection.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    tags: ['sunglasses', 'eyewear', 'summer', 'accessories'],
    persona: ['Traveler', 'Fashionista']
  },
  {
    id: '33',
    name: 'Reversible Leather Belt',
    category: 'Fashion',
    price: 2800,
    description: 'Two versatile colors in one premium leather belt. Black on one side, brown on the other.',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80',
    tags: ['belt', 'leather', 'accessories', 'versatile'],
    persona: ['Professional', 'Fashionista']
  },
  {
    id: '34',
    name: 'Sterling Silver Minimalist Ring',
    category: 'Fashion',
    price: 1800,
    description: 'Simple, elegant sterling silver ring for everyday wear.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?w=800&q=80',
    tags: ['jewelry', 'ring', 'silver', 'minimalist'],
    persona: ['Fashionista', 'Self-care']
  },
  {
    id: '35',
    name: 'Weekender Duffle Bag',
    category: 'Fashion',
    price: 8500,
    description: 'Spacious canvas duffle bag for short trips. Features a separate shoe compartment.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    tags: ['bag', 'travel', 'duffle', 'weekend'],
    persona: ['Traveler', 'Athlete']
  },
  {
    id: '36',
    name: 'Cashmere Scarf',
    category: 'Fashion',
    price: 4200,
    description: 'Ultra-soft cashmere scarf for warmth and style during colder months.',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
    tags: ['scarf', 'winter', 'cashmere', 'fashion'],
    persona: ['Fashionista', 'Professional']
  },
  {
    id: '37',
    name: 'Blue Light Blocking Glasses',
    category: 'Fashion',
    price: 1500,
    description: 'Stylish frames with lenses that reduce digital eye strain.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    tags: ['glasses', 'health', 'office', 'eyewear'],
    persona: ['Developer', 'Student']
  },
  {
    id: '38',
    name: 'Performance Running Shoes',
    category: 'Fashion',
    price: 9500,
    description: 'Lightweight running shoes with responsive cushioning for maximum energy return.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    tags: ['shoes', 'running', 'sports', 'fitness'],
    persona: ['Athlete', 'Traveler']
  },
  {
    id: '39',
    name: 'Activewear Tech Jacket',
    category: 'Fashion',
    price: 6500,
    description: 'Water-resistant, breathable jacket for outdoor activities and morning runs.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    tags: ['jacket', 'activewear', 'outdoor', 'fitness'],
    persona: ['Athlete', 'Traveler']
  },
  {
    id: '40',
    name: 'Everyday Tote Bag',
    category: 'Fashion',
    price: 3200,
    description: 'Durable cotton canvas tote with interior pockets. Perfect for groceries or books.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    tags: ['bag', 'tote', 'casual', 'everyday'],
    persona: ['Student', 'Hobbyist']
  },
  {
    id: '41',
    name: 'Leather Watch Strap',
    category: 'Fashion',
    price: 1800,
    description: 'Premium replacement leather strap for smartwatches and traditional timepieces.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
    tags: ['watch', 'strap', 'leather', 'accessories'],
    persona: ['Fashionista', 'Techie']
  },
  {
    id: '42',
    name: 'Silk Tie and Pocket Square Set',
    category: 'Fashion',
    price: 2500,
    description: 'Elegant 100% silk tie with matching pocket square for formal occasions.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
    tags: ['tie', 'formal', 'silk', 'accessories'],
    persona: ['Professional', 'Fashionista']
  },

  // Beauty & Wellness (12 products)
  {
    id: '43',
    name: 'Zen Silk Sleep Mask',
    category: 'Beauty',
    price: 2799,
    description: '100% pure mulberry silk for a restful night. Gentle on skin and blocks all light.',
    image: 'https://images.unsplash.com/photo-1585250001966-77a834eaa002?w=800&q=80',
    tags: ['sleep', 'wellness', 'silk', 'relaxation'],
    persona: ['Self-care', 'Traveler']
  },
  {
    id: '44',
    name: 'Hydrating Face Serum',
    category: 'Beauty',
    price: 3500,
    description: 'Hyaluronic acid and Vitamin C serum for glowing, hydrated skin.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    tags: ['skincare', 'serum', 'hydration', 'beauty'],
    persona: ['Self-care', 'Fashionista']
  },
  {
    id: '45',
    name: 'Jade Roller & Gua Sha Set',
    category: 'Beauty',
    price: 1500,
    description: 'Authentic jade stone tools for facial massage and reducing puffiness.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80',
    tags: ['massage', 'skincare', 'jade', 'wellness'],
    persona: ['Self-care', 'Hobbyist']
  },
  {
    id: '46',
    name: 'Organic Lip Balm Trio',
    category: 'Beauty',
    price: 899,
    description: 'Nourishing lip balms made with beeswax, shea butter, and essential oils.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80',
    tags: ['lipbalm', 'organic', 'skincare', 'beauty'],
    persona: ['Self-care', 'Student']
  },
  {
    id: '47',
    name: 'Deep Cleansing Clay Mask',
    category: 'Beauty',
    price: 1200,
    description: 'Purifying clay mask that draws out impurities and tightens pores.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    tags: ['mask', 'skincare', 'cleansing', 'beauty'],
    persona: ['Self-care', 'Homeowner']
  },
  {
    id: '48',
    name: 'Aromatherapy Bath Salts',
    category: 'Beauty',
    price: 1800,
    description: 'Epsom salts infused with lavender and chamomile for a relaxing soak.',
    image: 'https://images.unsplash.com/photo-1600266719875-1033b006c9bc?w=800&q=80',
    tags: ['bath', 'salt', 'relax', 'wellness'],
    persona: ['Self-care', 'Athlete']
  },
  {
    id: '49',
    name: 'Electric Sonic Toothbrush',
    category: 'Beauty',
    price: 4500,
    description: 'Advanced sonic technology for a superior clean. Includes 3 brush heads.',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=800&q=80',
    tags: ['dental', 'toothbrush', 'health', 'wellness'],
    persona: ['Techie', 'Professional']
  },
  {
    id: '50',
    name: 'Precision Grooming Kit',
    category: 'Beauty',
    price: 3200,
    description: 'Complete stainless steel grooming kit in a premium leather travel case.',
    image: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&q=80',
    tags: ['grooming', 'kit', 'travel', 'accessories'],
    persona: ['Traveler', 'Professional']
  },
  {
    id: '51',
    name: 'Vitamin D3 Gummies',
    category: 'Beauty',
    price: 999,
    description: 'Daily supplement for immune support and bone health. Delicious fruit flavor.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    tags: ['supplements', 'vitamins', 'health', 'wellness'],
    persona: ['Self-care', 'Athlete']
  },
  {
    id: '52',
    name: 'Massage Gun Pro',
    category: 'Beauty',
    price: 8500,
    description: 'Deep tissue percussion massager for muscle recovery and pain relief.',
    image: 'https://images.unsplash.com/photo-1620000000000-000000000000?w=800&q=80', // Placeholder
    tags: ['massage', 'recovery', 'fitness', 'wellness'],
    persona: ['Athlete', 'Techie']
  },
  {
    id: '53',
    name: 'Yoga Mat with Alignment Lines',
    category: 'Beauty',
    price: 2400,
    description: 'Non-slip eco-friendly yoga mat with guides for perfect posture.',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    tags: ['yoga', 'fitness', 'mat', 'wellness'],
    persona: ['Athlete', 'Self-care']
  },
  {
    id: '54',
    name: 'Thermal Water Spray',
    category: 'Beauty',
    price: 1100,
    description: 'Soothing and refreshing facial mist for sensitive skin. Perfect for travel.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80',
    tags: ['skincare', 'spray', 'refresh', 'travel'],
    persona: ['Traveler', 'Self-care']
  }
];
