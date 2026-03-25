import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/schemas/contact.schema";
import { CircleCheck } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { setContact } from "@/lib/store/checkoutSlice";

export const ContactForm = () => {
  const dispatch = useAppDispatch();
  const savedContact = useAppSelector((state) => state.checkout.contact);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: savedContact?.firstName ?? "",
      lastName: savedContact?.lastName ?? "",
      phone: savedContact?.phone ?? "",
      email: savedContact?.email ?? "",
      createAccount: savedContact?.createAccount ?? false,
    },
    mode: "onBlur",
  });

  const onSubmit = (data: ContactFormData) => {
    dispatch(
      setContact({
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        createAccount: data.createAccount,
      }),
    );
  };

  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
        Contact Information
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-100 p-8 rounded-2xl shadow-sm bg-white">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <Input
              {...register("firstName")}
              placeholder="Yousef"
              className={`h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Input
              {...register("lastName")}
              placeholder="Sheha"
              className={`h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <Input
              {...register("phone")}
              placeholder="+20 ***********"
              className={`h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              {...register("email")}
              placeholder="Sarahem@gmail.com"
              className={`h-12 bg-gray-50/30 border-gray-200 focus:bg-white transition-all ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="md:col-span-2 flex items-center space-x-2 mt-2">
            <CircleCheck size={20} className="text-gray-400" />
            <label
              htmlFor="create-account"
              className="text-sm text-gray-500 cursor-pointer"
            >
              Create an account for easier check-out next time
            </label>
          </div>
        </div>
      </form>
    </section>
  );
};
