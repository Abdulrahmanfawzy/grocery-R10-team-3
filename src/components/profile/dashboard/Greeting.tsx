import type { ProfileDataInterface } from "@/lib/types/Profile/Profile";
import type { DashboardData } from "@/types/profile/dashboard/DashboardData";
import { Package, PoundSterling, Star } from "lucide-react";

interface GreetingProps {
  dashboardData: DashboardData;
  profileData: ProfileDataInterface;
}

function Greeting({ dashboardData, profileData }: GreetingProps) {
  console.log(dashboardData);

  const userData = [
    {
      icon: Package,
      label: "Track Orders",
      value: profileData.in_progress_orders.length || 0,
    },
    {
      icon: Star,
      label: "Loyalty Points",
      value: dashboardData.overview?.loyalty_points || 0,
    },
    {
      icon: PoundSterling,
      label: "Store Credit",
      value: dashboardData.overview?.store_credits || 0,
    },
  ];

  return (
    <div className="rounded-lg p-5 text-[#F7FCFF] bg-blue-900 w-full">
      <h2 className="mb-1">
        Welcome back, {profileData?.me?.firstname || "User"}
      </h2>
      <p className="mb-4">Here what's happening with your grocery shopping</p>
      <div
        className="grid grid-cols-1  md:grid-cols-3  gap-3 
        text-blue-900 p-5 md:p-2"
      >
        {userData.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7FCFF] flex flex-col gap-2
            p-5 rounded-lg"
          >
            <item.icon className="w-7 h-7" />
            <span className="text-sm">{item.label}</span>
            <span className="text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Greeting;
