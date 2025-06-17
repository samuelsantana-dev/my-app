import React, { useState, useRef, useEffect } from 'react';
import { TimelineItem } from './TimelineItem';
import { ChevronDown, Plus, Minus, RotateCcw } from 'lucide-react';

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  category: 'latest' | 'creation' | 'hibp';
  icon: string;
  color: string;
  description?: string;
  details?: string;
}

const timelineData: TimelineEvent[] = [
  { id: '1', year: 2010, title: 'Project Start', category: 'creation', icon: '🌱', color: 'bg-green-500', description: 'Initial project conception' },
  { id: '2', year: 2011, title: 'First Release', category: 'hibp', icon: '🚀', color: 'bg-blue-500', description: 'Beta version launched' },
  { id: '3', year: 2012, title: 'Major Update', category: 'hibp', icon: '⭐', color: 'bg-blue-500', description: 'Core features implemented' },
  { id: '4', year: 2013, title: 'Security Audit', category: 'creation', icon: '🔒', color: 'bg-green-500', description: 'Security improvements' },
  { id: '5', year: 2014, title: 'API Launch', category: 'hibp', icon: '🔗', color: 'bg-blue-500', description: 'Public API released' },
  { id: '6', year: 2015, title: 'Mobile App', category: 'latest', icon: '📱', color: 'bg-orange-500', description: 'Mobile application' },
  { id: '7', year: 2016, title: 'Partnership', category: 'hibp', icon: '🤝', color: 'bg-blue-500', description: 'Strategic partnerships' },
  { id: '8', year: 2017, title: 'Global Expansion', category: 'latest', icon: '🌍', color: 'bg-orange-500', description: 'International launch' },
  { id: '9', year: 2018, title: 'AI Integration', category: 'creation', icon: '🤖', color: 'bg-green-500', description: 'Machine learning features' },
  { id: '10', year: 2019, title: 'Enterprise Edition', category: 'hibp', icon: '🏢', color: 'bg-blue-500', description: 'Business solutions' },
  { id: '11', year: 2020, title: 'Cloud Migration', category: 'hibp', icon: '☁️', color: 'bg-blue-500', description: 'Infrastructure upgrade' },
  { id: '12', year: 2021, title: 'Real-time Features', category: 'latest', icon: '⚡', color: 'bg-orange-500', description: 'Live updates' },
  { id: '13', year: 2022, title: 'Analytics Dashboard', category: 'hibp', icon: '📊', color: 'bg-blue-500', description: 'Advanced reporting' },
  { id: '14', year: 2023, title: 'Privacy Updates', category: 'creation', icon: '🛡️', color: 'bg-green-500', description: 'Enhanced privacy controls' },
  { id: '15', year: 2024, title: 'Latest Innovation', category: 'latest', icon: '💎', color: 'bg-orange-500', description: 'Cutting-edge features' },
  { id: '16', year: 2025, title: 'Future Vision', category: 'latest', icon: '🔮', color: 'bg-purple-500', description: 'Next generation platform' }
];

export const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const years = Array.from(
    { length: 2027 - 2010 }, 
    (_, i) => 2010 + i
  );

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(selectedEvent?.id === event.id ? null : event);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setSelectedEvent(null);
    if (timelineContainerRef.current) {
      timelineContainerRef.current.scrollLeft = 0;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'latest': return 'Latest Activity';
      case 'creation': return 'Acct. Creation';
      case 'hibp': return 'Hibp';
      default: return category;
    }
  };

  // Handle mouse wheel zoom
  useEffect(() => {
    const container = timelineContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
          handleZoomIn();
        } else {
          handleZoomOut();
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            title="Reset Zoom"
            aria-label="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div 
        ref={timelineContainerRef}
        className="border-2 border-gray-700 rounded-lg p-4 overflow-x-auto"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div 
          className="relative min-w-full"
          style={{ 
            transform: `scaleX(${zoomLevel})`, 
            transformOrigin: 'left',
            minWidth: `${years.length * 80}px`
          }}
        >
          {/* Year Labels */}
          <div className="flex justify-between mb-4 text-sm text-gray-400">
            {years.map((year) => (
              <div key={year} className="flex-1 text-center min-w-[80px]">
                {year}
              </div>
            ))}
          </div>

          {/* Timeline Grid */}
          <div className="relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex">
              {years.map((year, index) => (
                <div 
                  key={year} 
                  className="flex-1 border-l border-gray-700 min-w-[80px]"
                  style={{ borderLeftWidth: index === 0 ? '0' : '1px' }}
                />
              ))}
            </div>

            {/* Category Rows */}
            {['latest', 'creation', 'hibp'].map((category) => (
              <div key={category} className="relative h-16 mb-8">
                <div className="absolute inset-0 flex">
                  {years.map((year) => {
                    const events = timelineData.filter(
                      event => event.year === year && event.category === category
                    );
                    return (
                      <div key={`${category}-${year}`} className="flex-1 min-w-[80px] relative">
                        {events.map((event, eventIndex) => (
                          <TimelineItem
                            key={event.id}
                            event={event}
                            isSelected={selectedEvent?.id === event.id}
                            onClick={() => handleEventClick(event)}
                            style={{
                              position: 'absolute',
                              left: '50%',
                              top: `${eventIndex * 25}px`,
                              transform: 'translateX(-50%)'
                            }}
                          />
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};