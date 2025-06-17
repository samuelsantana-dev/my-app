'use client';

import React from 'react';

type EventItem = {
  year: number;
  label: string;
  icon: string;
};

type TimelineRow = {
  type: string;
  events: EventItem[];
};

type TimelineViewProps = {
  timelineData: TimelineRow[];
  years: number[];
};

export default function TimelineView({ timelineData, years }: TimelineViewProps) {
  return (
    <div className="overflow-x-auto bg-black text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Timeline View</h2>
      <div className="grid grid-cols-[150px_repeat(auto-fit,_minmax(40px,_1fr))] gap-2 border-t border-gray-700">
        <div></div>
        {years.map((year) => (
          <div key={year} className="text-sm text-center text-gray-400 border-l border-gray-700">
            {year}
          </div>
        ))}

        {timelineData.map((row) => (
          <React.Fragment key={row.type}>
            <div className="text-sm font-medium border-r border-gray-700 pr-2 pt-3">{row.type}</div>
            {years.map((year) => {
              const event = row.events.find((e) => e.year === year);
              return (
                <div
                  key={`${row.type}-${year}`}
                  className="h-12 border-l border-gray-700 flex items-center justify-center"
                >
                  {event && (
                    <div className="text-white text-xs flex flex-col items-center space-y-1">
                      <span className="text-lg">{event.icon}</span>
                      <span className="text-[10px]">{event.label}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
