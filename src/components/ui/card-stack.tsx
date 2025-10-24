"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Moon, Sun, RotateCcw, Shuffle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  id: number;
  src: string;
  alt: string;
  track: string;
  title: string;
  description: string;
}

export default function CardStack() {
  const initialCards: Card[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1639762681033-6461efb0efa8?w=1200&h=800&fit=crop&q=80',
      alt: 'Account Abstraction',
      track: 'Account Abstraction',
      title: 'Tracks',
      description:
        'Create user-friendly and secure solutions for managing accounts in decentralized applications. Think of innovative ways to simplify user interactions with blockchain-based platforms, making Web3 experiences as seamless as Web2.'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1642104704074-5f70a0ae0d00?w=1200&h=800&fit=crop&q=80',
      alt: 'DeFi',
      track: 'DeFi (Decentralized Finance)',
      title: 'Tracks',
      description:
        'Build and analyse prototypes for decentralised financial systems. Design digital solutions for lending, trading, and other financial services—all without depending on traditional institutions.'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=80',
      alt: 'Public Goods',
      track: 'Public Goods',
      title: 'Tracks',
      description:
        'Develop decentralized supply chain projects that promote transparency, efficiency, and sustainability. Focus on traceability, authenticity, and ethical practices, creating solutions that benefit the broader community.'
    }
  ];

  const [cards, setCards] = useState<Card[]>(initialCards);
  const [isDark, setIsDark] = useState(true);
  const [dragDirection, setDragDirection] = useState<'up' | 'down' | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);
  const opacity = useTransform(dragY, [-200, -100, 0, 100, 200], [0, 0.5, 1, 0.5, 0]);

  // Configuration
  const offset = 8;
  const scaleStep = 0.06;
  const dimStep = 0.15;
  const stiff = 170;
  const damp = 26;
  const borderRadius = 12;
  const swipeThreshold = 50;

  const spring = {
    type: 'spring' as const,
    stiffness: stiff,
    damping: damp
  };

  const moveToEnd = () => {
    setCards(prev => [...prev.slice(1), prev[0]]);
    setCurrentIndex((prev) => (prev + 1) % initialCards.length);
  };

  const moveToStart = () => {
    setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const resetCards = () => {
    setCards(initialCards);
    setCurrentIndex(0);
  };

  const handleDragEnd = (_: any, info: any) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    if (Math.abs(offset) > swipeThreshold || Math.abs(velocity) > 500) {
      if (offset < 0 || velocity < 0) {
        setDragDirection('up');
        setTimeout(() => {
          moveToEnd();
          setDragDirection(null);
        }, 150);
      } else {
        setDragDirection('down');
        setTimeout(() => {
          moveToStart();
          setDragDirection(null);
        }, 150);
      }
    }
    dragY.set(0);
  };

  // Theme configuration
  const theme = {
    dark: {
      bg: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      toggleBg: 'bg-gray-800/80 hover:bg-gray-700/80',
      toggleBorder: 'border-gray-700',
      infoBox: 'bg-gray-900/90 border-gray-700',
      shadowCard: '0 25px 50px rgba(0, 0, 0, 0.7)',
      shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.4)',
      cardBorder: 'border-2 border-gray-700',
      controlBg: 'bg-gray-800/80 hover:bg-gray-700/80',
      cardInfoBg: 'bg-gradient-to-t from-black/80 to-transparent',
      trackLabel: 'text-primary'
    },
    light: {
      bg: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      toggleBg: 'bg-white/80 hover:bg-gray-100/80',
      toggleBorder: 'border-gray-300',
      infoBox: 'bg-white/90 border-gray-300',
      shadowCard: '0 25px 50px rgba(0, 0, 0, 0.15)',
      shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.08)',
      cardBorder: 'border-2 border-gray-300',
      controlBg: 'bg-white/80 hover:bg-gray-100/80',
      cardInfoBg: 'bg-gradient-to-t from-white/90 to-transparent',
      trackLabel: 'text-primary'
    }
  };

  const currentTheme = isDark ? theme.dark : theme.light;

  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-start bg-background text-foreground transition-all duration-500 relative overflow-hidden pt-24 pb-32`}>
      {/* TRACKS Section Header - matching Event Timeline style */}
      <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-wide text-center text-primary">
        TRACKS
      </h2>

      {/* Side arrows removed per request (navigation via drag/controls only) */}

      {/* Card Stack Container */}
      <div className="relative w-96 aspect-video overflow-visible z-10 mt-0">
        <ul className="relative w-full h-full m-0 p-0">
          <AnimatePresence>
            {cards.map(({ id, src, alt, track, title, description }, i) => {
              const isFront = i === 0;
              const baseZ = cards.length - i;

              return (
                <motion.li
                  key={id}
                  className={`absolute w-full h-full list-none overflow-hidden ${currentTheme.cardBorder}`}
                  style={{
                    borderRadius: `${borderRadius}px`,
                    cursor: isFront ? 'grab' : 'auto',
                    touchAction: 'none',
                    boxShadow: isFront
                      ? currentTheme.shadowCard
                      : currentTheme.shadowCardBack,
                    rotateX: isFront ? rotateX : 0,
                    transformPerspective: 1000
                  }}
                  animate={{
                    top: `${i * offset}%`,
                    scale: 1 - i * scaleStep,
                    zIndex: baseZ,
                    opacity: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.2 }
                  }}
                  transition={spring}
                  drag={isFront ? 'y' : false}
                  dragConstraints={{ top: -80, bottom: 80, left: 0, right: 0 }}
                  dragElastic={0.35}
                  dragMomentum={false}
                  onDrag={(_, info) => {
                    if (isFront) {
                      dragY.set(info.offset.y);
                    }
                  }}
                  onDragEnd={handleDragEnd}
                  whileDrag={
                    isFront
                      ? {
                          zIndex: cards.length + 1,
                          cursor: 'grabbing',
                          scale: 1.05,
                        }
                      : {}
                  }
                  onHoverStart={() => isFront && setShowInfo(true)}
                  onHoverEnd={() => setShowInfo(false)}
                >
                  {/* Opaque card background (no image) */}
                  <div className="absolute inset-0 bg-card border-2 border-primary rounded-lg p-4 flex flex-col justify-between">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${currentTheme.trackLabel}`}>
                        {track}
                      </p>
                    </div>
                    <p className={`${currentTheme.textSecondary} text-sm leading-relaxed`}>{description}</p>
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>

      {/* Bottom navigation/progress removed per request */}
    </div>
  );
}
