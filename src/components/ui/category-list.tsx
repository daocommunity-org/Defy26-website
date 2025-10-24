"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Define the type for a single category item
export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

// Define the props for the CategoryList component
export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full bg-background text-foreground p-8", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-6 text-primary-foreground">
              {headerIcon}
            </div>
          )}
          <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-wide text-center text-primary">{title}</h2>
          {subtitle && (
            <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground">{subtitle}</h2>
          )}
        </div>

        {/* Categories List */}
        <div className="space-y-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer rounded-lg",
                  // Hover state styles
                  hoveredItem === category.id
                    ? 'min-h-[180px] border-primary shadow-lg shadow-primary/20 bg-primary/5'
                    : 'min-h-[140px] border-border hover:border-primary/50'
                )}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-4 left-4 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
                    </div>
                  </>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-full px-8 md:px-10 py-6">
                  <div className="flex-1 pr-6">
                    <h3
                      className={cn(
                        "font-bold transition-colors duration-300 mb-3",
                        category.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl',
                        hoveredItem === category.id ? 'text-primary' : 'text-foreground'
                      )}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "transition-colors duration-300 text-sm md:text-base leading-relaxed",
                           hoveredItem === category.id ? 'text-foreground/90' : 'text-muted-foreground'
                        )}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon appears on the right on hover */}
                  {category.icon && hoveredItem === category.id && (
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
