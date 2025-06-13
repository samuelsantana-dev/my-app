'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import GendersModal from './steps/modalGender';

interface StatsItem {
  id: string;
  name: string;
  imageUrl: string;
}

interface StatsCard {
  title: string;
  count: number | string;
  subtitle?: string;
  items?: StatsItem[];
  icon: React.ReactNode;
  expandable?: boolean;
}

interface SelectActionCardProps {
  cards: StatsCard[];
}

export function SelectActionCard({ cards }: SelectActionCardProps) {
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);
  const [expandedCardIndex, setExpandedCardIndex] = React.useState<number | null>(null);

  const viewModal = (index: number) => {
    setExpandedCardIndex(index);
  };

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
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">{card.title}</div>
              {card.icon}
            </div>
            <div className="text-3xl font-bold">{card.count}</div>
            {card.subtitle && (
              <div className="text-sm text-muted-foreground">{card.subtitle}</div>
            )}
            {card.expandable && (
              <div className="mt-2 text-right">
                <span
                  className="text-[10px] text-purple-500 underline cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    viewModal(index);
                  }}
                >
                  Expand
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      {expandedCardIndex !== null && (
        <GendersModal
          card={cards[expandedCardIndex]} // Passa o card inteiro
          onClose={() => setExpandedCardIndex(null)}
        />
      )}
    </div>
  );
}
