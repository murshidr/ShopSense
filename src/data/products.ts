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
  {
    id: '1',
    name: 'Halo Ambient Task Lamp',
    category: 'Home',
    price: 129,
    description: 'Fits your minimalist office aesthetic perfectly. Adjustable warm color temperature aligns with your previous preferences.',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&q=80',
    tags: ['minimalist', 'office', 'lighting', 'warm'],
    persona: ['Professional', 'Student']
  },
  {
    id: '2',
    name: 'K3 Ultra-slim Wireless Keyboard',
    category: 'Electronics',
    price: 84,
    description: 'Tactile feedback for extended typing sessions. Low profile design for ergonomic comfort.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83aca2?w=800&q=80',
    tags: ['keyboard', 'mechanical', 'wireless', 'ergonomic'],
    persona: ['Developer', 'Gamer']
  },
  {
    id: '3',
    name: 'Aether Noise Cancelling Headphones',
    category: 'Electronics',
    price: 299,
    description: 'Immersive sound with industry-leading noise cancellation. Perfect for focus in busy environments.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    tags: ['audio', 'headphones', 'noise-cancelling', 'music'],
    persona: ['Professional', 'Traveler']
  },
  {
    id: '4',
    name: 'Zen Silk Sleep Mask',
    category: 'Beauty',
    price: 35,
    description: '100% mulberry silk for a restful night. Gentle on skin and blocks all light.',
    image: 'https://images.unsplash.com/photo-1585250001966-77a834eaa002?w=800&q=80',
    tags: ['sleep', 'wellness', 'silk', 'relaxation'],
    persona: ['Self-care', 'Traveler']
  },
  {
    id: '5',
    name: 'Lumina Smart Planter',
    category: 'Home',
    price: 55,
    description: 'Self-watering system with integrated growth lights. Perfect for indoor herbs.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    tags: ['plants', 'home', 'smart', 'decor'],
    persona: ['Hobbyist', 'Homeowner']
  },
  {
    id: '6',
    name: 'Prism Leather Carryall',
    category: 'Fashion',
    price: 180,
    description: 'Handcrafted Italian leather with organized compartments for all your tech essentials.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    tags: ['leather', 'bag', 'fashion', 'tech'],
    persona: ['Professional', 'Fashionista']
  },
  {
    id: '7',
    name: 'Velocity Smart Watch',
    category: 'Electronics',
    price: 240,
    description: 'Track your fitness, sleep, and heart rate with a stunning OLED display.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    tags: ['watch', 'fitness', 'smart', 'tech'],
    persona: ['Athlete', 'Techie']
  },
  {
    id: '8',
    name: 'Oak & Steel Coffee Press',
    category: 'Home',
    price: 45,
    description: 'Classic French press with a modern twist. Double-walled insulation keeps coffee hot.',
    image: 'https://images.unsplash.com/photo-1544787210-282dd05c2ad3?w=800&q=80',
    tags: ['coffee', 'kitchen', 'home', 'breakfast'],
    persona: ['Foodie', 'Student']
  }
];
