import { useForm, Controller } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import {
  notificationData,
  toFormValues,
  useUpdateNotifications,
  type NotificationPayload,
} from "@/lib/api/profile/personalInfoApi/use-getNotifications";
import { Button } from "@/components/ui/button";
import type { NotificationsInterface } from "@/types/profile/personalInfo/Notifications";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
interface Props {
  notifications: NotificationsInterface;
}

const Notifications = ({ notifications }: Props) => {
  const { mutate, isPending } = useUpdateNotifications();
  const { control, handleSubmit, reset } = useForm<NotificationPayload>({
    defaultValues: notifications ? toFormValues(notifications) : undefined,
  });

  useEffect(() => {
    if (notifications) {
      reset(toFormValues(notifications));
    }
  }, [notifications, reset]);

  const onSubmit = (data: NotificationPayload) => {
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-card rounded-lg border border-border p-4 mt-7">
          <h2 className="font-semibold text-card-foreground">
            Notification Preference
          </h2>
          <p className="text-sm my-4 text-muted-foreground mb-4">
            Manage notification based on your preference
          </p>

          {notificationData.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-semibold text-card-foreground mb-3">
                {section.title}
              </h3>
              <div
                className={`space-y-3 bg-[#F7FCFF] p-3 rounded-md shadow ${
                  sectionIndex !== notificationData.length - 1 ? "mb-6" : ""
                }`}
              >
                {section.items.map((item, itemIndex) => (
                  <Controller
                    key={item.name}
                    name={item.name}
                    control={control}
                    render={({ field }) => (
                      <label
                        htmlFor={item.name}
                        className={`flex items-center cursor-pointer justify-between p-2 ${
                          itemIndex !== 0 ? "border-t" : ""
                        }`}
                      >
                        <span className="text-sm text-card-foreground">
                          {item.label}
                        </span>
                        <Switch
                          id={item.name}
                          checked={field.value === 1}
                          onCheckedChange={(checked) =>
                            field.onChange(checked ? 1 : 0)
                          }
                          className="cursor-pointer"
                        />
                      </label>
                    )}
                  />
                ))}
              </div>
            </div>
          ))}

          <Button
            type="submit"
            className="mt-6 px-4 py-2 cursor-pointer rounded-md text-sm font-medium"
          >
            {isPending ? (
              <Loader2  className="w-8 spin-in" />
            ) : (
              "Save Preferences"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Notifications;
