// constants/dummyData.js

export const heroData = {
  heading: "Next-Gen Tech, Delivered.",
  subheading: "Discover our curated collection of premium electronics and accessories designed to elevate your everyday workflow.",
  ctaText: "Shop the Collection",
  ctaLink: "/products",
  // We'll use a placeholder image for now
  imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop", 
};

export const categoriesData = [
  { id: 1, name: "Laptops", slug: "laptops" },
  { id: 2, name: "Accessories", slug: "accessories" },
  { id: 3, name: "Audio", slug: "audio" },
  { id: 4, name: "Monitors", slug: "monitors" },
];

export const productsData = [
  {
    id: 101,
    title: "Pro Dev Laptop 16-inch",
    price: 1999.99,
    category: "Laptops",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 102,
    title: "Mechanical Keyboard V2",
    price: 149.50,
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 103,
    title: "Noise-Cancelling Studio Headphones",
    price: 299.00,
    category: "Audio",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 104,
    title: "Ultra-Wide Curved Monitor",
    price: 699.99,
    category: "Monitors",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
  },
];