export interface Product {
  id: string;
  name: string;
  category: 'wellness' | 'phones' | 'agro';
  categoryLabel: string;
  description: string;
  priceNGN: number;
  priceUSD: number;
  image: string;
  features?: string[];
  benefits?: string[];
  specs?: { label: string; value: string }[];
  isFeatured?: boolean;
  scientificDisclaimer?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image?: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
