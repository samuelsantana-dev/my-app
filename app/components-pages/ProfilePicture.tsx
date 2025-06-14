import React from 'react';
import { ShieldAlert, Database, AlertCircle, Skull } from 'lucide-react';
import { Download } from 'lucide-react'; 
import { handleDownload } from '../../lib/utils'; 

export const ProfilePicture = () => {
  const breaches = [
    {
      platform: 'Operation Endgame 2.0',
      description: 'Breached on Operation Endgame 2.0',
      icon: <ShieldAlert className="w-5 h-5 text-orange-500" />
    },
    {
      platform: 'ALIEN TXTBASE',
      description: 'Breached on ALIEN TXTBASE Stealer Logs',
      icon: <Database className="w-5 h-5 text-blue-500" />
    },
    {
      platform: 'Stealer Logs',
      description: 'Breached on Stealer Logs, Jan 2025',
      icon: <AlertCircle className="w-5 h-5 text-yellow-500" />
    },
    {
      platform: 'Multiple',
      description: 'Breached 9 times in 2024 (HaveIBeenPwned!)',
      icon: <Skull className="w-5 h-5 text-red-500" />
    },
    {
      platform: 'Multiple',
      description: 'Breached 9 times in 2024 (HaveIBeenPwned!)',
      icon: <Skull className="w-5 h-5 text-red-500" />
    },
    {
      platform: 'Multiple',
      description: 'Breached 9 times in 2024 (HaveIBeenPwned!)',
      icon: <Skull className="w-5 h-5 text-red-500" />
    }
  ];

  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Data Breach History</h2>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
    <div className="max-h-60 overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {breaches.map((breach, index) => (
                <tr key={index}>
                  <td className="flex gap-2 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {breach.icon}
                    {breach.platform}
                  </td>
                  <td>
                  <button
                    onClick={() => handleDownload('/path/to/file', `${breach.platform}.txt`)}
                    className="ml-2 p-1 rounded hover:bg-gray-200"
                    title="Download"
                  >
                    <Download size={18} />
                  </button>
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
