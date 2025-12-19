export interface Workshop {
  id: string;
  title: string;
  category: string;
  city: string;
  address: string;
  type: 'حضوری' | 'آنلاین';
  duration: number; // hours
  capacity: number;
  price: number;
  image: string;
  images?: string[];
  description: string;
  whatYouMake: string[];
  suitableFor: string;
  level: 'مبتدی' | 'متوسط' | 'پیشرفته';
  host: Host;
  sessions: Session[];
  rating: number;
  reviewCount: number;
  reviews?: Review[];
  badges?: string[];
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  workshopCount?: number;
}

export interface Session {
  id: string;
  date: string; // ISO date string
  time: string; // HH:mm
  availableSpots: number;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  workshopId: string;
  sessionId: string;
  participantCount: number;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

