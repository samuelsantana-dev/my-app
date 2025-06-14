import Image from 'next/image';

interface SkypeContactCardProps {
  id: string;
  name: string;
  username: string;
  location: string;
  contactType: string;
  imageUrl: string;
}

export default function SkypeContactCard({
  id,
  name,
  username,
  location,
  contactType,
  imageUrl,
}: SkypeContactCardProps) {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 relative rounded overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Profile of ${name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Skype</h2>
          <p className="text-sm text-gray-400">Contact Type: {contactType}</p>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <p><span className="font-medium">Id:</span> {id}</p>
        <p><span className="font-medium">Name:</span> {name}</p>
        <p><span className="font-medium">Username:</span> {username}</p>
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
