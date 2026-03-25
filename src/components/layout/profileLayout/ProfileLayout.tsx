import MobileSideBar from "@/components/common/sideBar/MobileSideBar";
import SideBar from "@/components/common/sideBar/SideBar";
import { Button } from "@/components/ui/button";
import { useGetProfile } from "@/lib/api/profile/personalInfoApi/use-getProfile";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  const { data, isLoading, isError, isSuccess } = useGetProfile();

  const [open, setOpen] = useState(false);
  function onClose() {
    setOpen((prev) => !prev);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading profile</div>;

  return (
    <div className="relative flex lg:max-w-5xl md:max-w-7xl w-screen mx-auto  my-10 lg:gap-5">
      <div className="sticky top-0 left-0  lg:hidden ">
        <Button onClick={onClose} className="border rounded-lg  ">
          <Menu className="" />
        </Button>
      </div>
      <MobileSideBar onClose={onClose} open={open} profileData={data.data} />
      <SideBar profileData={data.data} />
      <main className="flex-1 p-5 lg:p-0 ">
        <Outlet context={data.data} />
      </main>
    </div>
  );
}

export default ProfileLayout;
