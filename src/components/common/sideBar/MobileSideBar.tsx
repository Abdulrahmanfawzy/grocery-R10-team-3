import { Button } from "@/components/ui/button";
import { menuItems } from "@/lib/constants/sideBar/MockData";
import type { Data, ProfileDataInterface } from "@/lib/types/Profile/Profile";
import { Gift, LogOut, X } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  profileData: ProfileDataInterface;
}

const MobileSideBar = ({ open, onClose, profileData }: MobileSidebarProps) => {
  const location = useLocation();

  // Close Sidebar when path name change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <div className={`fixed inset-0 z-[100] lg:hidden w-fit`}>
      <aside
        className={`absolute top-0 left-0 h-full w-[280px] bg-card shadow-2xl flex flex-col duration-300 transition-all ${
          open ? "translate-x-0" : "-translate-x-72"
        }`}
      >
        {/* Header profile */}
        <div className="p-5 bg-primary relative overflow-hidden">
          <Button
            onClick={onClose}
            className="ms-auto w-fit block   cursor-pointer"
          >
            <X className="w-full cursor-pointer" />
          </Button>

          <div className="flex items-center gap-3 relative z-10 mt-2">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-xl font-bold text-accent-foreground shadow-lg ring-2 ring-primary-foreground/20">
              <img
                src={
                  profileData.me?.profile_picture || "/ImageWithFallback.png"
                }
                alt={profileData.me?.name || "Unknown"}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-primary-foreground text-lg">
                {profileData.me?.name || "Unknown"}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/20 rounded-full px-2 py-0.5 mt-0.5">
                <Gift className="w-3 h-3" /> Gold Member
              </span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm mb-0.5 transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium shadow-md"
                    : "text-card-foreground hover:bg-muted hover:translate-x-1 "
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${
                    isActive ? "bg-primary-foreground/15" : "bg-muted"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                </div>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <Button
            variant={"secondary"}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default MobileSideBar;
