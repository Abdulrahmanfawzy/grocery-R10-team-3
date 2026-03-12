import { Button } from "@/components/ui/button";
import {
  Briefcase,
  CheckCircle,
  Clock,
  Home,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";

const addresses = [
  {
    icon: Home,
    label: "Home",
    address: "Villa 14, Street 23, District 5, New Cairo, Cairo",
    instructions: "Ring doorbell. Leave at door if no answer.",
  },
  {
    icon: Briefcase,
    label: "Work",
    address: "Office 9, Floor 2, 26 Talaat Harb Street, Downtown Cairo, 11511",
    instructions: "Ring doorbell. Leave at door if no answer.",
  },
];

const deliveryWindows = [
  { label: "Morning", time: "8:00 AM - 12:00 PM", selected: true },
  { label: "Afternoon", time: "12:00 PM - 5:00 PM", selected: false },
  { label: "Evening", time: "5:00 PM - 8:00 PM", selected: true },
];

const Addresses = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Delivery Addresses
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your delivery locations and preferences
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-1" /> Add Address
        </Button>
      </div>

      {addresses.map((addr) => (
        <div
          key={addr.label}
          className="bg-card rounded-lg border border-border p-6 my-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <addr.icon className="w-5 h-5 text-card-foreground" />
              <h2 className="font-semibold text-card-foreground">
                {addr.label}
              </h2>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Pencil className="w-3 h-3 mr-1" /> Edit
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="w-3 h-3 mr-1" /> Cancel
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{addr.address}</p>
          <div className="bg-muted rounded-lg p-3">
            <p className="text-sm font-medium text-primary">
              📋 Delivery Instructions
            </p>
            <p className="text-sm text-muted-foreground">{addr.instructions}</p>
          </div>
        </div>
      ))}

      {/* Preferred Delivery Windows */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-card-foreground" />
          <h2 className="font-semibold text-card-foreground">
            Preferred Delivery Windows
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Select your preferred time slots for deliveries
        </p>
        <div className="grid grid-cols-3 gap-3">
          {deliveryWindows.map((w) => (
            <div
              key={w.label}
              className={`border rounded-lg p-4 text-center ${
                w.selected ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                <p
                  className={`text-sm font-semibold ${w.selected ? "text-primary" : "text-card-foreground"}`}
                >
                  {w.label}
                </p>
                {w.selected && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{w.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Addresses;
