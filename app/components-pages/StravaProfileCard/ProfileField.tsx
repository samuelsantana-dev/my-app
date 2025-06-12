import { Copy, Search, ExternalLink } from 'lucide-react';

type ProfileFieldProps = {
  label: string;
  value: string;
  copyable?: boolean;
  searchable?: boolean;
  externalSearch?: boolean;
};

const ProfileField = ({ 
  label, 
  value, 
  copyable = false, 
  searchable = false, 
  externalSearch = false 
}: ProfileFieldProps) => (
  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
    <span className="text-gray-500">{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-gray-800 font-medium">{value}</span>
      
      {copyable && (
        <button className="text-gray-400 hover:text-gray-600">
          <Copy className="w-4 h-4" />
        </button>
      )}
      
      {searchable && (
        <button className="text-gray-400 hover:text-gray-600">
          <Search className="w-4 h-4" />
        </button>
      )}
      
      {externalSearch && (
        <a 
          href={`https://google.com/search?q=site%3Afacebook.com%20OR%20site%3Ainstagram.com%20OR%20site%3Ax.com%20%22${value}%22`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-600"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  </div>
);

export default ProfileField;