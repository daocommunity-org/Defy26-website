"use client";

import React from 'react';
import { CategoryList, Category } from '@/components/ui/category-list';
import { Layers, User, Coins, Package } from 'lucide-react';

// Using the same track data from the original card stack
const trackCategories: Category[] = [
  {
    id: 1,
    title: 'Account Abstraction',
    subtitle: 'Create user-friendly and secure solutions for managing accounts in decentralized applications. Think of innovative ways to simplify user interactions with blockchain-based platforms, making Web3 experiences as seamless as Web2.',
    onClick: () => console.log('Account Abstraction selected'),
    icon: <User className="w-8 h-8" />,
  },
  {
    id: 2,
    title: 'DeFi (Decentralized Finance)',
    subtitle: 'Build and analyse prototypes for decentralised financial systems. Design digital solutions for lending, trading, and other financial services—all without depending on traditional institutions.',
    onClick: () => console.log('DeFi selected'),
    icon: <Coins className="w-8 h-8" />,
  },
  {
    id: 3,
    title: 'Public Goods',
    subtitle: 'Develop decentralized supply chain projects that promote transparency, efficiency, and sustainability. Focus on traceability, authenticity, and ethical practices, creating solutions that benefit the broader community.',
    onClick: () => console.log('Public Goods selected'),
    icon: <Package className="w-8 h-8" />,
  },
];

const CategoryListDemo = () => {
  return (
    <CategoryList
      title="TRACKS"
      categories={trackCategories}
    />
  );
};

export default CategoryListDemo;
