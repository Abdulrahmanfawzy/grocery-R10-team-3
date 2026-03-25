import { Switch } from "@/components/ui/switch";
import { ChevronDown, Sun, Trash2 } from "lucide-react";
const notificationPreference = [
  { name: "order-updates", title: "Order Updates" },
  { name: "promotional", title: "Promotional Emails" },
  { name: "insights", title: "Nutrition Insights" },
  { name: "alerts", title: "Price Alerts" },
];
const Settings = () => {
  return (
    <>
      <>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Manage app preferences and privacy settings
        </p>
      </>

      {/* Language */}
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <h2 className="font-semibold text-card-foreground mb-3">Language</h2>
        <label className="text-sm text-muted-foreground mb-1 block">
          Preferred Language
        </label>
        <div className="relative">
          <select
            id="language"
            name="language"
            className=" cursor-pointer appearance-none border border-border rounded-full px-6 py-2 text-sm text-card-foreground bg-transparent outline-none"
          >
            <option value="en-US">English (US)</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
          {/*  dropdown  */}
          <div className="pointer-events-none absolute left-27 top-1/2 -translate-y-1/2">
            <ChevronDown className="w-4 h-4 text-muted-foreground " />
          </div>
          {/*  dropdown  */}
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-3">Appearance</h2>
        <label htmlFor="mode" className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-card-foreground" />
            <div>
              <p className="text-sm font-medium text-card-foreground">
                Dark Mode
              </p>
              <p className="text-xs text-muted-foreground">
                Switch between light and dark theme
              </p>
            </div>
          </div>
          <Switch id="mode" />
        </label>
      </div>

      {/* Notification Preference */}
      <div className="bg-card rounded-lg my-5 border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-4">
          Notification Preference
        </h2>
        <div className="space-y-3">
          {notificationPreference.map((label) => (
            <label
              htmlFor={label.name}
              key={label.name}
              className="flex items-center justify-between py-1"
            >
              <span className="text-sm text-card-foreground">{label.title}</span>
              <Switch id={label.name} defaultChecked />
            </label>
          ))}
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-4">
          Data Management
        </h2>
        <div className="space-y-3">
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm font-medium text-card-foreground">
              Download Your Data
            </p>
            <p className="text-xs text-muted-foreground">
              Get a copy of your account information
            </p>
          </div>
          <div className="bg-destructive/10 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Trash2 className="w-4 h-4 text-destructive" />
              <p className="text-sm font-medium text-destructive">
                Delete Account
              </p>
            </div>
            <p className="text-xs text-destructive/70">
              Permanently delete your account and data
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
