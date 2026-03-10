import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSpecialNotes } from "../../../lib/api/SpecialNotesApi";

export const SpecialNotes = () => {
  const { register, setValue, watch, handleSubmit } = useForm({
    defaultValues: {
      specialNotes: "",
    },
  });

  const currentNotes = watch("specialNotes") || "";

  const {
    data: specialNotes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["specialNotes"],
    queryFn: getSpecialNotes,
  });

  const addNote = (note: string) => {
    const newNote = currentNotes ? `${currentNotes.trim()}, ${note}` : note;

    setValue("specialNotes", newNote, { shouldValidate: true });
  };

  const onSubmit = (data: { specialNotes: string }) => {
    console.log("Notes Submitted:", data);
  };
  const navigate = useNavigate();

  const commonNotes = specialNotes?.map((note) => note.note) || [];

  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">Special Notes</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-gray-100 p-8 rounded-2xl space-y-6 bg-white shadow-sm">
          <div className="flex flex-wrap gap-4">
            {isLoading ? (
              <p className="text-gray-400 text-sm">Loading notes...</p>
            ) : error ? (
              <p className="text-red-400 text-sm">Failed to load notes</p>
            ) : (
              commonNotes.map((note) => (
                <Badge
                  key={note}
                  variant="outline"
                  className="py-3 px-5 font-normal text-gray-500 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer text-sm transition-all active:scale-95 select-none"
                  onClick={() => addNote(note)}
                >
                  {note}
                </Badge>
              ))
            )}
          </div>

          <div className="pt-2">
            <Input
              {...register("specialNotes")}
              placeholder="Add any specific instructions for the driver..."
              className="h-12 bg-gray-50/30 border-gray-200 rounded-xl focus-visible:ring-1 focus-visible:ring-[#004a61]"
            />
          </div>
        </div>

        <div className="mt-10">
          <Button
            onClick={() => navigate("/checkout2")}
            type="submit"
            className="w-full md:w-72 bg-[#004a61] hover:bg-[#003649] h-12 text-lg rounded-lg font-semibold"
          >
            Continue Checkout
          </Button>
        </div>
      </form>
    </section>
  );
};
