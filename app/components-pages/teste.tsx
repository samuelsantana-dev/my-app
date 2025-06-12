'use client';

import { Database, Info } from 'lucide-react';

export function ScannedSourcesCard() {
  return (
    <div className="flex gap-2.5 p-2 rounded-lg bg-gray-100/10">
      <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
        <Database className="w-4 h-4 stroke-gray-400" />
      </div>

      <div className="flex flex-col w-[calc(100%-42px)]">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium leading-5 text-gray-100">Sources Scanned</p>
          <p className="text-sm font-medium leading-5 text-gray-100">
            <b>(482)</b>
          </p>
          <Info className="w-4 h-4 stroke-gray-500" />
          <p className="text-[11px] font-medium leading-5 text-purple-500 underline cursor-pointer">Expand</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          <span className="text-gray-100 text-xs bg-gray-800 px-2 py-0.5 rounded-full">Found: 128</span>
          <span className="text-gray-100 text-xs bg-gray-800 px-2 py-0.5 rounded-full">Not found: 354</span>
        </div>
      </div>
    </div>
  );
}
