import { Badge, Calendar, Clock, HelpCircle } from 'lucide-react';
import ProfileField from './ProfileField';

const StravaProfileCard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden flex flex-col md:flex-row">
      {/* Profile Info Section */}
      <div className="flex-1 p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4">
           <img
          src="https://dgalywyr863hv.cloudfront.net/pictures/athletes/3139947/10763598/2/large.jpg"
          alt="Profile"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Strava</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <Calendar className="w-4 h-4" />
              <span>Last Seen</span>
              <span>26/04/2024</span>
              <span>09:17:20</span>
              <HelpCircle className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-3">
          <ProfileField label="Id" value="3139947" copyable />
          <ProfileField 
            label="Name" 
            value="Juliano Nobrega" 
            copyable 
            searchable 
            externalSearch
          />
          <ProfileField label="First Name" value="Juliano" copyable />
          <ProfileField label="Last Name" value="Nobrega" copyable />
          <ProfileField label="Language" value="English" />
          <ProfileField 
            label="Username" 
            value="juliano_nobrega" 
            copyable 
            searchable
          />
          
          {/* Creation Date */}
          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
            <span className="text-gray-500">Creation Date</span>
            <div className="flex gap-2">
              <span className="text-sm bg-gray-50 border border-gray-100 rounded px-2 py-1">
                3 October, 2013
              </span>
              <span className="text-sm bg-gray-50 border border-gray-100 rounded px-2 py-1 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                14:44 PM
                <span className="text-xs bg-gray-100 rounded px-1">-03:00</span>
              </span>
            </div>
          </div>

          {/* Location Info */}
          <ProfileField label="City" value="São Paulo" />
          <ProfileField label="State" value="São Paulo" />
          <ProfileField label="Country" value="República Federativa do Brasil" />
          <ProfileField label="Gender" value="Male" />
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          <Badge />
          <Badge />
          <Badge  />
          <Badge 
            
          />
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-64 md:shrink-0">
         <img
          src="https://dgalywyr863hv.cloudfront.net/pictures/athletes/3139947/10763598/2/large.jpg"
          alt="Profile"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default StravaProfileCard;