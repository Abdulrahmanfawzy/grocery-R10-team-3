import Favorite from "@/components/profile/smartList/Favorite";
import List from "@/components/profile/smartList/List";
import { Button } from "@/components/ui/button";
import { favorites, lists } from "@/lib/constants/smartList/MockData";
import { Plus, ShoppingCart, Trash2 } from "lucide-react";

const SmartList = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Smart Lists & Favorites
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Organize your shopping with custom lists
          </p>
        </div>
        <Button className="cursor-pointer">
          <Plus className="w-4 h-4 mr-1" /> Create New List
        </Button>
      </div>

      {/* Lists */}
      <List />

      {/* Favorite Items */}
      <Favorite />

      {/* Archived */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-1">
          Archived Lists
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          View and restore your archived shopping lists
        </p>
        <button className="text-sm text-primary font-medium hover:underline cursor-pointer">
          View Archived Lists (3)
        </button>
      </div>
    </>
  );
};

export default SmartList;
