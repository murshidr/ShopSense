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
    price: 10499,
    description: 'Minimalist lighting for your workspace. Adjustable color temperature for deep focus sessions.',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&q=80',
    tags: ['minimalist', 'office', 'lighting', 'warm'],
    persona: ['Professional', 'Student']
  },
  {
    id: '2',
    name: 'K3 Ultra-slim Mechanical Keyboard',
    category: 'Electronics',
    price: 6999,
    description: 'Precision typing with tactile feedback. Sleek low-profile design for maximum ergonomics.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83aca2?w=800&q=80',
    tags: ['keyboard', 'mechanical', 'wireless', 'ergonomic'],
    persona: ['Developer', 'Gamer']
  },
  {
    id: '3',
    name: 'Aether Noise Cancelling Headphones',
    category: 'Electronics',
    price: 24999,
    description: 'Industry-leading noise cancellation. Perfect for focus in busy Indian city environments.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    tags: ['audio', 'headphones', 'noise-cancelling', 'music'],
    persona: ['Professional', 'Traveler']
  },
  {
    id: '4',
    name: 'Zen Silk Sleep Mask',
    category: 'Beauty',
    price: 2799,
    description: '100% pure mulberry silk for a restful night. Gentle on skin and blocks all light.',
    image: 'https://images.unsplash.com/photo-1585250001966-77a834eaa002?w=800&q=80',
    tags: ['sleep', 'wellness', 'silk', 'relaxation'],
    persona: ['Self-care', 'Traveler']
  },
  {
    id: '5',
    name: 'Lumina Smart Planter',
    category: 'Home',
    price: 4499,
    description: 'Self-watering system with integrated growth lights. Ideal for indoor apartment gardening.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
    tags: ['plants', 'home', 'smart', 'decor'],
    persona: ['Hobbyist', 'Homeowner']
  },
  {
    id: '6',
    name: 'Prism Leather Carryall',
    category: 'Fashion',
    price: 14499,
    description: 'Handcrafted leather with organized compartments for your laptop and daily essentials.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
    tags: ['leather', 'bag', 'fashion', 'tech'],
    persona: ['Professional', 'Fashionista']
  },
  {
    id: '7',
    name: 'Velocity Smart Watch',
    category: 'Electronics',
    price: 19499,
    description: 'Advanced fitness tracking with an elegant OLED display. Stays charged for days.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    tags: ['watch', 'fitness', 'smart', 'tech'],
    persona: ['Athlete', 'Techie']
  },
  {
    id: '8',
    name: 'Oak & Steel Coffee Press',
    category: 'Home',
    price: 3599,
    description: 'Double-walled insulation keeps your brew hot. Modern design for the contemporary kitchen.',
    image: 'https://images.unsplash.com/photo-1544787210-282dd05c2ad3?w=800&q=80',
    tags: ['coffee', 'kitchen', 'home', 'breakfast'],
    persona: ['Foodie', 'Student']
  }
];
