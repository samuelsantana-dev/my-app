import { User, Languages, X } from 'lucide-react';
import Image from 'next/image';

type BadgeProps = {
  icon: 'user' | 'languages' | 'x' | 'flag';
  text: string;
  color?: string;
  flagUrl?: string;
};

const iconComponents = {
  user: User,
  languages: Languages,
  x: X,
};

const Badge = ({ icon, text, color, flagUrl }: BadgeProps) => {
  const IconComponent = icon !== 'flag' ? iconComponents[icon] : undefined;

  return (
    <span className={`inline-flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-xs ${color ? `text-${color}-500` : ''}`}>
      {icon === 'flag' && flagUrl ? (
        <Image 
          src={flagUrl}
          alt="Flag"
          width={12}
          height={12}
          className="rounded-full"
        />
      ) : (
        IconComponent ? <IconComponent className={`w-3 h-3 ${color ? `text-${color}-500` : ''}`} /> : null
      )}
      {text}
    </span>
  );
};
export default Badge