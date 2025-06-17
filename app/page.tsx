"use client"
import { useEffect, useState } from "react";
import { Users, Activity, Database } from "lucide-react";
import { PremiumModulesCard } from "./components-pages/PremiumModulesCard";
import { SearchBar } from "./components-pages/SearchBar";
import { SelectActionCard } from "./components-pages/SelectActionCard";
import SkypeContactCard from "./components-pages/StravaProfileCard/indext";
import {EmailAddresses} from "./components-pages/EmailAddresses"
import { DataBreachTable } from "./components-pages/DataBreachTable";
import { BreachedAccounts } from "./components-pages/BreachedAccounts";
import { ProfilePicture } from "./components-pages/ProfilePicture";
import PaletteView from "./components-pages/PalletView";
import { Timeline } from "./components-pages/TimeLine";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const cardsData = [
  {
    title: "Total Users",
    count: "1,234",
    subtitle: "+12% from last month",
    items: [
      { id: "1", name: "Active", imageUrl: "https://via.placeholder.com/40?text=A" },
      { id: "2", name: "Registered", imageUrl: "https://via.placeholder.com/40?text=R" },
    ],
    icon: <Users className="h-6 w-6" />,
    expandable: true,
  },
  {
    title: "Active Sessions",
    count: "567",
    subtitle: "+8.2% from last week",
    items: [], // sem items para testar vazio
    icon: <Activity className="h-6 w-6" />,
    expandable: false,
  },
  {
    title: "Database Size",
    count: "45.2 GB",
    items: [
      { id: "3", name: "MySQL", imageUrl: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
      { id: "4", name: "Backups",   imageUrl: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png" },
      { id: "5", name: "Archives", imageUrl: "https://cdn-icons-png.flaticon.com/512/2991/2991100.png" },
    ],
    icon: <Database className="h-6 w-6" />,
    expandable: true,
  },
  {
    title: "Server Load",
    count: "78%",
    subtitle: "Optimal range: 40-70%",
    items: [
      { id: "6", name: "CPU", imageUrl: "https://via.placeholder.com/40?text=C" },
      { id: "7", name: "Memory", imageUrl: "https://via.placeholder.com/40?text=M" },
      { id: "8", name: "Disk", imageUrl: "https://via.placeholder.com/40?text=D" },
    ],
    icon: <Database className="h-6 w-6" />,
    expandable: true,
  },
];


  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <span className="mt-4 text-gray-500">Carregando...</span>
      </div>
    );
  }

const nodes = [
  { id: 'padlet1', data: { label: 'Padlet' }, position: { x: 100, y: 100 } },
  { id: 'padlet2', data: { label: 'Padlet' }, position: { x: 100, y: 200 } },
  { id: 'bandlab', data: { label: 'Bandlab' }, position: { x: 250, y: 150 } },
  { id: 'trello', data: { label: 'Trello' }, position: { x: 400, y: 100 } },
  { id: 'upwork', data: { label: 'Upwork' }, position: { x: 550, y: 150 } },
  { id: 'growth', data: { label: 'Growth' }, position: { x: 700, y: 150 } },
  { id: 'mapmyrun', data: { label: 'MapMyRun' }, position: { x: 850, y: 150 } },
  { id: 'strava', data: { label: 'Strava' }, position: { x: 300, y: 350 } },
  { id: 'garmin', data: { label: 'Garmin' }, position: { x: 450, y: 350 } },
  { id: 'padlet3', data: { label: 'Padlet' }, position: { x: 600, y: 350 } },
  { id: 'polarsteps', data: { label: 'Polarsteps' }, position: { x: 750, y: 350 } },
  // outros nodes podem ser adicionados aqui de forma similar...
];

const edges = [
  { id: 'e1', source: 'padlet1', target: 'padlet2', label: '' },
  { id: 'e2', source: 'bandlab', target: 'padlet1', label: '' },
  { id: 'e3', source: 'trello', target: 'padlet1', label: '' },
  { id: 'e4', source: 'upwork', target: 'padlet1', label: '' },
  { id: 'e5', source: 'growth', target: 'padlet1', label: '' },
  { id: 'e6', source: 'mapmyrun', target: 'padlet1', label: '' },
  { id: 'e7', source: 'strava', target: 'bandlab', label: '' },
  { id: 'e8', source: 'garmin', target: 'bandlab', label: '' },
  { id: 'e9', source: 'padlet3', target: 'bandlab', label: '' },
  { id: 'e10', source: 'polarsteps', target: 'bandlab', label: '' },
];
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 p-4">
      <div className="w-full max-w-8xl">
        <SearchBar />
      </div>

      <div className="w-full max-w-8xl">
        <Timeline />
      </div>
      
      <div className="w-full max-w-8xl">
        <PremiumModulesCard />
      </div>

      <div className="w-full max-w-8xl">
         <PaletteView nodes={nodes} edges={edges} />
      </div>

      <div className="w-full max-w-8xl">
        <DataBreachTable />
      </div>

      <div className="w-full max-w-8xl">
        <SelectActionCard cards={cardsData} />
      </div>

      <div className="w-full max-w-8xl flex justify-between flex-wrap gap-4">
        <div className="w-full max-w-8xl">
          <BreachedAccounts />
        </div>
         <div className="">
           
           <ProfilePicture />
         </div>
      </div>

    <div className="w-full max-w-8xl">
      <EmailAddresses 
        count={2} 
        emails={['sandro@gmail.com']} 
      />
    </div>
      <div className="w-full max-w-8xl">
       <SkypeContactCard
        id="dato.basharuli"
        name="Dato Basharuli"
        username="dato.basharuli"
        gender="male"
        age="30"
        location="Georgia, dusheti"
        contactType="Skype4Consumer"
        imageUrl="https://dgalywyr863hv.cloudfront.net/pictures/athletes/3139947/10763598/2/large.jpg"
      />
      </div>
    </div>
  );
}