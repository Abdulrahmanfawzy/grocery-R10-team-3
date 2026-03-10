import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Truck, Clock, Zap, Timer, Car } from "lucide-react";
import {
  deliverySchema,
  type DeliveryFormData,
} from "@/lib/schemas/delivery.schema";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { setDelivery } from "@/lib/store/checkoutSlice";

export const DeliveryDetails = () => {
  const dispatch = useAppDispatch();
  const savedDelivery = useAppSelector((state) => state.checkout.delivery);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DeliveryFormData>({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      fulfilmentMethod: savedDelivery?.fulfilmentMethod ?? "delivery",
      address: savedDelivery?.address ?? "",
      city: savedDelivery?.city ?? "",
      provenance: savedDelivery?.provenance ?? "",
      postalCode: savedDelivery?.postalCode ?? "",
      scheduleDelivery: savedDelivery?.scheduleDelivery ?? "now",
      deliverySpeed: savedDelivery?.deliverySpeed ?? "standard",
    },
    mode: "onBlur",
  });

  const selectedMethod = watch("fulfilmentMethod");

  const onSubmit = (data: DeliveryFormData) => {
    dispatch(
      setDelivery({
        fulfilmentMethod: data.fulfilmentMethod,
        address: data.address,
        city: data.city,
        provenance: data.provenance,
        postalCode: data.postalCode,
        scheduleDelivery: data.scheduleDelivery,
        deliverySpeed: data.deliverySpeed,
        estimatedArrival: savedDelivery?.estimatedArrival,
        addressId: savedDelivery?.addressId,
      }),
    );
  };

  return (
    <section>
      <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">
        Customize Your Delivery
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-gray-100 p-8 rounded-2xl space-y-8 bg-white shadow-sm">
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">
              Fulfilment Method
            </label>
            <div className="flex gap-15">
              <Button
                type="button"
                className={`flex-1 gap-2 h-11 rounded-lg cursor-pointer ${
                  selectedMethod === "delivery"
                    ? "bg-[#a3a3a3] hover:bg-[#8e8e8e] text-white"
                    : "bg-[#c2c2bc] hover:bg-[#b1b1aa] text-[#555]"
                }`}
                onClick={() => setValue("fulfilmentMethod", "delivery")}
              >
                <Truck size={18} /> Delivery
              </Button>
              <Button
                type="button"
                variant="secondary"
                className={`flex-1 gap-2 h-11 rounded-lg cursor-pointer ${
                  selectedMethod === "pickup"
                    ? "bg-[#a3a3a3] hover:bg-[#8e8e8e] text-white"
                    : "bg-[#c2c2bc] hover:bg-[#b1b1aa] text-[#555]"
                }`}
                onClick={() => setValue("fulfilmentMethod", "pickup")}
              >
                <Car size={18} /> Pick-Up
              </Button>
            </div>
            {errors.fulfilmentMethod && (
              <p className="text-red-500 text-sm">
                {errors.fulfilmentMethod.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Address
              </label>
              <Input
                {...register("address")}
                placeholder="Villa 14, Street 23, District 5, New Cairo, Cairo 11835"
                className={`h-12 bg-gray-50/50 border-gray-200 ${
                  errors.address ? "border-red-500" : ""
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Input
                  {...register("city")}
                  placeholder="City"
                  className={`h-11 bg-gray-50/50 border-gray-200 ${
                    errors.city ? "border-red-500" : ""
                  }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Input
                  {...register("provenance")}
                  placeholder="Provenance"
                  className={`h-11 bg-gray-50/50 border-gray-200 ${
                    errors.provenance ? "border-red-500" : ""
                  }`}
                />
                {errors.provenance && (
                  <p className="text-red-500 text-sm">
                    {errors.provenance.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Input
                  {...register("postalCode")}
                  placeholder="Postal Code"
                  className={`h-11 bg-gray-50/50 border-gray-200 ${
                    errors.postalCode ? "border-red-500" : ""
                  }`}
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Schedule Delivery
                </label>
                <div className="flex gap-15">
                  <Button
                    type="button"
                    className={` gap-2 h-10 text-xs hover:bg-gray-500 ${
                      watch("scheduleDelivery") === "now"
                        ? "bg-[#a3a3a3] text-white"
                        : "bg-[#c2c2bc] text-[#555]"
                    }`}
                    onClick={() => setValue("scheduleDelivery", "now")}
                  >
                    <Timer size={14} /> Deliver Now
                  </Button>
                  <Button
                    type="button"
                    className={` gap-2 h-10 text-xs hover:bg-gray-500 ${
                      watch("scheduleDelivery") === "later"
                        ? "bg-[#a3a3a3] text-white"
                        : "bg-[#c2c2bc] text-[#555]"
                    }`}
                    onClick={() => setValue("scheduleDelivery", "later")}
                  >
                    <Clock size={14} /> Deliver Later
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700">
                  Delivery Speed
                </label>
                <div className="flex gap-15">
                  <Button
                    type="button"
                    className={` gap-2 h-10 text-xs hover:bg-gray-500 ${
                      watch("deliverySpeed") === "standard"
                        ? "bg-[#a3a3a3] text-white"
                        : "bg-[#c2c2bc] text-[#555]"
                    }`}
                    onClick={() => setValue("deliverySpeed", "standard")}
                  >
                    <Truck size={14} /> Standard
                  </Button>
                  <Button
                    type="button"
                    className={` gap-2 h-10 text-xs hover:bg-gray-500 ${
                      watch("deliverySpeed") === "priority"
                        ? "bg-[#a3a3a3] text-white"
                        : "bg-[#c2c2bc] text-[#555]"
                    }`}
                    onClick={() => setValue("deliverySpeed", "priority")}
                  >
                    <Zap size={14} /> Priority
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-sm font-medium text-gray-700 mr-3">
              Estimated Arrival
            </label>
            <Input
              readOnly
              value="45 Min, 30/1/25 at 2:30 PM"
              className="h-11 bg-gray-50/50 border-gray-200 text-gray-400 w-full md:w-1/2"
            />
          </div>
        </div>
      </form>
    </section>
  );
};
