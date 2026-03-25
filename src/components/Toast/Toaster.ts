import { toast } from "sonner";

export const successToast = (message: string) => {
  toast.success(message, {
    className: "bg-green-50 border border-green-200 text-green-800",
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    className: "bg-red-50 border border-red-200 text-red-800",
  });
};
