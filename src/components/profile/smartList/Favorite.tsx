import { Button } from "@/components/ui/button";
import { useGetFavorites } from "@/lib/api/profile/smartListApi/use-getFavorite";
import type { FavoriteInterface } from "@/types/profile/smartList/FavoritesTypes";
import EmptyState from "../dashboard/EmptyState";
import { ShoppingBag } from "lucide-react";

const Favorite = () => {
  const { data, isLoading } = useGetFavorites();
  console.log(data);

  if (isLoading) return <div className="">Loading...</div>;
  const favorites: FavoriteInterface = data;
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-card-foreground">
            {" "}
            Favorite Items
          </h2>
          <button className="text-sm text-primary font-medium hover:underline">
            Manage Favorites
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {favorites.data.length > 0 ? (
            favorites.data.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium text-card-foreground">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.price}
                    </p>
                  </div>
                </div>
                <Button className="cursor-pointer" size="sm">
                  Add
                </Button>
              </div>
            ))
          ) : (
            <EmptyState
              icon={ShoppingBag}
              title="You don't have list"
              description="Go shop to fill your list"
              actionLabel="Go Shopping"
            />
          )}
        </div>

        <Button variant="outline" className="w-full mt-4 cursor-pointer">
          Add All Favorites to Cart
        </Button>
      </div>
    </div>
  );
};

export default Favorite;
