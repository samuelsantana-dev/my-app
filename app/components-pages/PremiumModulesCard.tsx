'use client'

import { Search } from 'lucide-react'

export function PremiumModulesCard() {
  return (
    <div className="font-sans rounded-xl border border-gray-300 shadow-sm flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-300 p-5 flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-700">Premium Modules</p>
          <p className="text-sm text-gray-500">
            Changed your mind? No worries! You can still enable premium modules for this search.
            Results will be shown in real time as they load.
          </p>
        </div>
        <div className="self-start md:self-center">
          <select className="px-3 py-2 text-sm border border-gray-300 rounded-md w-full md:w-auto">
            <option defaultValue="en">English</option>
          </select>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col md:flex-row">
        {/* Modules */}
        <div className="w-full md:flex-1 border-b md:border-b-0 md:border-r border-gray-300 p-5">
          <p className="text-lg font-semibold text-gray-700 mb-4">Available Modules</p>
          <div className="flex flex-wrap justify-start gap-4">
            {[
              'aliexpress',
              'bleacher',
              'ebay',
              'edf',
              'samsung',
              'samsunghealth',
              'spirit',
              'steam',
              'thefork',
            ].map((module) => (
              <img
                key={module}
                src={`https://cdn.osint.industries/modules/${module}.png`}
                alt={module}
                className="w-[60px] h-[60px] rounded"
              />
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="w-full md:w-[250px] p-5 flex flex-col items-center justify-center gap-3">
          <p className="text-sm font-medium text-gray-600 text-center">
            This search will cost 3 credits
          </p>
          <button className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white px-5 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto">
            <Search size={20} strokeWidth={2} />
            Run premium modules
          </button>
        </div>
      </div>
    </div>
  )
}
