import { ChevronDown, Mail, Copy, Search } from 'lucide-react';

interface EmailAddressesProps {
  count?: number;
  emails: string[];
}

export function EmailAddresses({ count = 1, emails }: EmailAddressesProps) {
    function copyToClipboard(email: string) {
      navigator.clipboard.writeText(email);
      alert('Email copied to clipboard!');
    }
  return (
    <div className="border rounded mt-2.5 min-w-max">
      <div className="flex items-center justify-start px-3 py-2">
        <button className="focus:outline-none">
          <div className="flex items-center justify-start gap-1">
            <ChevronDown className="w-4 h-4" />
            <p className="font-medium">
              Email Addresses <span className="font-normal">({count})</span>
            </p>
          </div>
        </button>
      </div>

      <div className="opacity-100 transition-opacity duration-200">
        <div className="min-w-max px-4 py-2">
          <div className="flex gap-6 flex-nowrap mb-2">
            {emails.map((email, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 border  rounded whitespace-nowrap min-w-max px-3 py-1.5"
              >
                <Mail className="w-4 h-4" />
                <p className="text-sm whitespace-nowrap">{email}</p>
                <div className="flex gap-1 items-center ml-2">
                  <button
                    className="p-1 rounded hover:bg-gray-700 focus:outline-none"
                    title="Copy email address"
                    onClick={() => copyToClipboard(email)}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    className="p-1 rounded hover:bg-gray-700 focus:outline-none"
                    title="Search email address"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}