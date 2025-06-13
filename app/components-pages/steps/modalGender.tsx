'use client';

import { useState } from 'react';
import { Copy, X } from 'lucide-react';
import Image from 'next/image';

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
  icon?: React.ReactNode;
  expandable?: boolean;
}

type GendersModalProps = {
  card: StatsCard;
  onClose?: () => void;
};

export default function GendersModal({ card, onClose }: GendersModalProps) {
  const [visible, setVisible] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar texto:', err);
    }
  };

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div
    className="fixed inset-0 w-full h-full z-50 flex items-center justify-center"
    style={{ background: 'rgba(0,0,0,0.4)' }}
  >
    <section
      className="bg-white rounded-lg max-w-xl w-full mx-4 p-6 shadow-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <header className="flex items-center justify-between border-b pb-2 mb-4">
        <h2 id="modal-title" className="text-xl font-bold">
          {card.title}
        </h2>
        <button
          onClick={handleClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
      </header>

      <div className="mb-4">
        <p className="text-3xl font-bold">{card.count}</p>
        {card.subtitle && (
          <p className="text-sm text-gray-600">{card.subtitle}</p>
        )}
      </div>

      {card.items && card.items.length > 0 && (
        <div className="space-y-4 max-h-60 overflow-y-auto">
          {card.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-2"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={40}
                height={40}
                className="rounded"
              />
              <p className="text-base font-medium text-gray-800 flex-1 select-text">
                {item.name}
              </p>
              <button
                onClick={() => handleCopy(item.name, item.id)}
                className="text-gray-700 hover:text-gray-900"
                aria-label="Copiar texto"
              >
                <Copy size={20} />
              </button>
            </div>
          ))}
          {copiedId && (
            <p className="text-sm text-green-600 mt-2">Texto copiado!</p>
          )}
        </div>
      )}

      {!card.items && (
        <p className="text-gray-500 italic">Nenhum item para mostrar.</p>
      )}

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleClose}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </section>
      </div>
  );
}
