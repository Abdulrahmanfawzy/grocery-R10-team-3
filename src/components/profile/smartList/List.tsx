import { Button } from "@/components/ui/button";
import { useGetSmartList } from "@/lib/api/profile/smartListApi/use-getSmartList";
import type { ListInterface } from "@/types/profile/smartList/ListTypes";
import { ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import EmptyState from "../dashboard/EmptyState";

const List = () => {
  const { data, isLoading, isError } = useGetSmartList();
  console.log(data);

  if (isLoading) return <div className="">Loading...</div>;

  const lists: ListInterface = data;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        {lists.data.length > 0 ? (
          lists.data.map((list) => (
            <div
              key={list.id}
              className={`rounded-lg border border-border p-5 bg-card`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src={list?.image_url || "/Image (2).png"}
                    alt={list.name}
                    className="w-15 h-15 rounded-lg object-cover "
                  />
                  <div>
                    <h3 className="font-semibold text-card-foreground">
                      {list.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {list.meals.length} items
                    </p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" className="gap-1 cursor-pointer">
                  <ShoppingCart className="w-3 h-3" /> Add All to Cart
                </Button>
                <Button className="cursor-pointer" variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
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
    </div>
  );
};

export default List;
