'use client';

import * as React from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface StatsCard {
  title: string;
  count: number | string;
  subtitle?: string;
  items?: string[];
  icon: React.ReactNode;
  expandable?: boolean;
}

interface SelectActionCardProps {
  cards: StatsCard[];
}

export function SelectActionCard({ cards }: SelectActionCardProps) {
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);

  return (
    <div className="m-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {cards.map((card, index) => (
        <Card
          key={index}
          onClick={() => setSelectedCard(index)}
          className={cn(
            'transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer',
            selectedCard === index && 'border-l-4 border-primary bg-secondary/50'
          )}
        >
          <CardContent className="h-[8rem] flex flex-col justify-between p-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-black">{card.title}</CardTitle>
              <div className="text-xl text-black">{card.icon}</div>
            </div>

            {/* Count */}
            <div className="text-2xl font-bold text-black">{card.count}</div>

            {/* Subtitle */}
            {card.subtitle && (
              <CardDescription className="text-xs text-black">
                {card.subtitle}
              </CardDescription>
            )}

            {/* Badges */}
            {card.items && card.items.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                {card.items.slice(0, 3).map((item, i) => (
                  <Badge key={i} variant="outline" className="text-[10px]">
                    {item}
                  </Badge>
                ))}
                {card.items.length > 3 && (
                  <Badge variant="default" className="text-[10px]">
                    +{card.items.length - 3}
                  </Badge>
                )}
              </div>
            )}

            {/* Expand */}
            {card.expandable && (
              <div className="mt-2 text-right">
                <span className="text-[10px] text-purple-500 underline cursor-pointer">Expand</span>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
