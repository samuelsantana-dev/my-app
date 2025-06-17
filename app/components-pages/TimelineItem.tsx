import React from 'react';
import { TimelineEvent } from './TimeLine';

interface TimelineItemProps {
  event: TimelineEvent;
  isSelected: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  event, 
  isSelected, 
  onClick, 
  style 
}) => {
  return (
    <div
      className={`relative cursor-pointer transition-all duration-200 ${isSelected ? 'z-10' : ''}`}
      onClick={onClick}
      style={style}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Event Dot */}
      <div
        className={`w-4 h-4 rounded-full ${event.color} border-2 border-white transform transition-transform ${isSelected ? 'scale-150' : 'scale-100'}`}
      />
      
      {/* Event Tooltip/Label */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 mt-2 p-2 rounded-lg text-xs whitespace-nowrap transition-all duration-200 ${
          isSelected
            ? 'bg-gray-800 text-white shadow-lg opacity-100 visible'
            : 'bg-gray-700 text-gray-300 opacity-0 invisible'
        }`}
        style={{ top: '100%' }}
      >
        {event.title}
        <div className="absolute -top-1 left-1/2 w-2 h-2 bg-gray-800 transform -translate-x-1/2 rotate-45" />
      </div>
      
      {/* Event Icon (shown when selected) */}
      {isSelected && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl">
          {event.icon}
        </div>
      )}
    </div>
  );
};