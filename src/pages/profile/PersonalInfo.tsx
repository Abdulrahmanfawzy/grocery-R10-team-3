import Notifications from "@/components/profile/personalInfo/Notifications";
import ProfileDetails from "@/components/profile/personalInfo/ProfileDetails";
import ProfileImage from "@/components/profile/personalInfo/ProfileImage";
import { errorToast, successToast } from "@/components/Toast/Toaster";
import { useGetNotifications } from "@/lib/api/profile/personalInfoApi/use-getNotifications";
import type { ProfileDataInterface } from "@/lib/types/Profile/Profile";

import { useOutletContext } from "react-router-dom";

function PersonalInfo() {
  const { data } = useGetNotifications();
  const notificationsData = data?.data;
  const profileData = useOutletContext<ProfileDataInterface>();
  return (
    <>
      <h3 className=" font-semibold mb-2">Personal Information</h3>
      <p className="text-sm opacity-70">
        Manage your personal details and preferences
      </p>

      {/*  Picture  */}
      <ProfileImage profileData={profileData} />

      <ProfileDetails profileData={profileData} />

      {/* Notification  */}
      <Notifications notifications={notificationsData} />
    </>
  );
}

export default PersonalInfo;
