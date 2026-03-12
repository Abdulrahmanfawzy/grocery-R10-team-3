import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  smartListSchema,
  useEditList,
  type SmartListFormValues,
} from "@/lib/api/profile/smartListApi/use-editSmartList";

type EditListProps = {
  id: number;
  defaultValues?: SmartListFormValues;
};

function EditList({ id, defaultValues }: EditListProps) {
  const { mutate, isPending } = useEditList();
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SmartListFormValues>({
    resolver: zodResolver(smartListSchema),
    defaultValues: defaultValues ?? { name: "", description: "", meal_ids: [] },
  });

  const mealIds = watch("meal_ids");

  const addMealId = () => {
    const val = Number(inputRef.current?.value);
    if (!val) return;
    if (!mealIds.includes(val)) {
      setValue("meal_ids", [...mealIds, val]);
    }
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeMealId = (mealId: number) => {
    setValue(
      "meal_ids",
      mealIds.filter((m) => m !== mealId),
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addMealId();
    }
  };

  const onSubmit = (data: SmartListFormValues) => {
    mutate({ id, ...data });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit List</DialogTitle>
            <DialogDescription>
              Make changes to your List here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-destructive mt-1">
                  {errors.name.message}
                </p>
              )}
            </Field>

            <Field>
              <Label htmlFor="description-1">Description</Label>
              <Input id="description-1" {...register("description")} />
              {errors.description && (
                <p className="text-xs text-destructive mt-1">
                  {errors.description.message}
                </p>
              )}
            </Field>

            <Field>
              <Label>Meal IDs</Label>
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  type="number"
                  placeholder="Enter meal ID"
                  onKeyDown={handleKeyDown}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={addMealId}
                  className="cursor-pointer"
                >
                  Add
                </Button>
              </div>
              {errors.meal_ids && (
                <p className="text-xs text-destructive mt-1">
                  {errors.meal_ids.message}
                </p>
              )}
              {mealIds.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {mealIds.map((mealId) => (
                    <span
                      key={mealId}
                      className="flex items-center gap-1 bg-muted text-sm px-2 py-1 rounded-md"
                    >
                      {mealId}
                      <button
                        type="button"
                        onClick={() => removeMealId(mealId)}
                        className="text-muted-foreground cursor-pointer hover:text-destructive"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline" type="button" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer"
            >
              {isPending ? (
                <Loader2 className="w-4 animate-spin" />
              ) : (
                "Save changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditList;
