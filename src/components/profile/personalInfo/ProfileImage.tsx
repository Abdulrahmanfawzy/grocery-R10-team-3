import { useUpdateImage } from "@/lib/api/profile/personalInfoApi/use-getProfile";
import type { ProfileDataInterface } from "@/lib/types/Profile/Profile";
import { Loader, Plus } from "lucide-react";
import { useForm } from "react-hook-form";

type ProfileImage = {
  image: FileList;
};

interface Props {
  profileData: ProfileDataInterface;
}

const ProfileImage = ({ profileData }: Props) => {
  const { mutate, isPending, isError } = useUpdateImage();

  const { register } = useForm<ProfileImage>();

  function onSubmit(data: ProfileImage) {
    const file = data.image[0];

    if (file) {
      mutate({ image: file });
    }
  }
  return (
    <div>
      <div className="mt-8">
        <h3 className="font-semibold">Profile Picture</h3>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-17 h-17 overflow-hidden rounded-full">
            <img
              src={profileData?.me?.profile_picture || "/ImageWithFallback.png"}
              alt={profileData?.me?.name || "User Photo"}
              className="w-full h-full rounded-full object-cover "
            />
          </div>
          <div className="">
            <input
              type="file"
              id="update-img"
              accept="image/*"
              {...register("image")}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  mutate({ image: file });
                }
              }}
              className="hidden"
            />
            <label
              htmlFor="update-img"
              className="bg-primary flex items-center gap-1 cursor-pointer rounded-sm w-fit p-1 text-accent text-xs"
            >
              {isPending ? (
                <Loader className="spin-in w-4" />
              ) : (
                <Plus className="w-4" />
              )}
              <span>{isPending ? "Loading..." : "Upload New Photo"}</span>
            </label>

            <p className="mt-4 opacity-50 text-sm">
              JPG, PNG or GIF. Max size 5MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
