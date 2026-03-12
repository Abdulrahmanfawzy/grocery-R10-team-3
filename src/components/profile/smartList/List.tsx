import { Button } from "@/components/ui/button";
import type { ListInterface } from "@/types/profile/smartList/ListTypes";
import { Box, Loader2, ShoppingBag, Trash2 } from "lucide-react";
import EmptyState from "../dashboard/EmptyState";
import { useDeleteList } from "@/lib/api/profile/smartListApi/use-deleteSmartList";
import { useState } from "react";
import EditList from "./listDialog/EditList";
import { Link } from "react-router-dom";
interface Props {
  lists: ListInterface;
}

const List = ({ lists }: Props) => {
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const { mutate } = useDeleteList();

  const handleClick = (id: number) => {
    setDeletingId(id);

    mutate(id, {
      onSettled: () => {
        setDeletingId(null);
      },
    });
  };

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
                <Button
                  key={list.id}
                  variant={"destructive"}
                  className="bg-red-400 cursor-pointer"
                  onClick={() => handleClick(list.id)}
                >
                  {deletingId === list.id ? (
                    <Loader2 className="w-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <div className="flex items-center justify-between w-full mt-5">
                <Link
                  to={`/profile/list-items/${list.id}`}
                  state={{ id: list.id }}
                >
                  <Button size="sm" className="gap-1 cursor-pointer">
                    <Box className="w-3 h-3" /> View All items
                  </Button>
                </Link>
                <EditList
                  id={list.id}
                  defaultValues={{
                    name: list.name,
                    description: list.description,
                    meal_ids: list.meals.map((meal) => meal.id),
                  }}
                />
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
