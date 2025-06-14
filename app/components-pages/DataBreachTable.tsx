import React from 'react';
import { ShieldAlert, Database, AlertCircle, Skull } from 'lucide-react';

export const DataBreachTable = () => {
  const breaches = [
    {
      platform: 'Operation Endgame 2.0',
      description: 'Breached on Operation Endgame 2.0',
      integrity: 'Compromised',
      timestamp: '2025-05-23 00:00:00',
      icon: <ShieldAlert className="w-5 h-5 text-orange-500" />
    },
    {
      platform: 'ALIEN TXTBASE',
      description: 'Breached on ALIEN TXTBASE Stealer Logs',
      integrity: 'Compromised',
      timestamp: '2024',
      icon: <Database className="w-5 h-5 text-blue-500" />
    },
    {
      platform: 'Stealer Logs',
      description: 'Breached on Stealer Logs, Jan 2025',
      integrity: 'Compromised',
      timestamp: '2025',
      icon: <AlertCircle className="w-5 h-5 text-yellow-500" />
    },
    {
      platform: 'Multiple',
      description: 'Breached 9 times in 2024 (HaveIBeenPwned!)',
      integrity: 'Severely Compromised',
      timestamp: '2024',
      icon: <Skull className="w-5 h-5 text-red-500" />
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Data Breach History</h2>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-y-auto max-h-96"> {/* Scrollable container */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Integrity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {breaches.map((breach, index) => (
                <tr key={index}>
                  <td className="flex gap-2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {breach.icon}
                    {breach.platform}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {breach.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${breach.integrity.includes('Severely') ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'}`}>
                      {breach.integrity}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {breach.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
