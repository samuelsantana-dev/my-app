import { Users, Activity, Database } from "lucide-react";
import { PremiumModulesCard } from "./components-pages/PremiumModulesCard";
import { SearchBar } from "./components-pages/SearchBar";
import { SelectActionCard } from "./components-pages/SelectActionCard";

export default function Home() {
const cardsData = [
  {
    title: "Total Users",
    count: "1,234",
    subtitle: "+12% from last month",
    items: ["Active", "Registered"],
    icon: <Users className="h-6 w-6" />,
    expandable: true
  },
  {
    title: "Active Sessions",
    count: "567",
    subtitle: "+8.2% from last week",
    icon: <Activity className="h-6 w-6" />,
    expandable: false
  },
  {
    title: "Database Size",
    count: "45.2 GB",
    items: ["MySQL", "Backups", "Archives"],
    icon: <Database className="h-6 w-6" />,
    expandable: true
  },
  {
    title: "Server Load",
    count: "78%",
    subtitle: "Optimal range: 40-70%",
    items: ["CPU", "Memory", "Disk"],
    icon: <Database className="h-6 w-6" />,
    expandable: true
  }
]
  return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 p-4">
      <div className="w-full max-w-8xl">
        <SearchBar />
      </div>
      
      <div className="w-full max-w-8xl">
        <PremiumModulesCard />
      </div>

      <div className="w-full max-w-8xl">
        <SelectActionCard cards={cardsData} />
      </div>

    </div>
  );
}
