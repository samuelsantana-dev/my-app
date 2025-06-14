import { Copy, Search } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
interface SkypeContactCardProps {
  id: string;
  name: string;
  username: string;
  gender: string;
  age: string;
  location: string;
  contactType: string;
  imageUrl: string;
}
export default function SkypeContactCard({
  id,
  name,
  username,
  location,
  gender,
  age,
  contactType,
  imageUrl,
}: SkypeContactCardProps) {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 relative rounded overflow-hidden">
          <img
            src={imageUrl}
            alt={`Profile of ${name}`}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Skype</h2>
          <p className="text-sm text-gray-400">Contact Type: {contactType}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <p><span className="font-medium">Id:</span> {id}</p>
        <div className="flex items-center gap-2">
          <p><span className="font-medium">Name:</span> {name}</p>
          <button
            onClick={() => copyToClipboard(name)}
            className="ml-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            title="Copiar nome"
          >
            <Copy size={18} />
          </button>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            title="Pesquisar no Google"
          >
            <Search size={18} />
          </a>
        </div>
        <p><span className="font-medium">Username:</span> {username}</p>
        <p><span className="font-medium">Gender:</span> {gender}</p>
        <p><span className="font-medium">Age:</span> {age}</p>
        <p><span className="font-medium">Location:</span> {location}</p>
      </div>

      <div className="mt-4">
        <span className="inline-block bg-blue-800 text-xs px-3 py-1 rounded-full">
          {location.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
