import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Lock } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormErrorMessage from "@/components/common/FormErrorMessage";
import { useSignup } from "@/hooks/useSignup";
import type { SignupCredentials } from "@/lib/api/auth.api";

type Inputs = {
  username: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
  agree_terms: boolean;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const { signup, isLoading } = useSignup();
  const password = watch("password");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const credentials: SignupCredentials = {
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
      password_confirmation: data.password_confirmation,
      agree_terms: data.agree_terms ? 1 : 0,
    };

    await signup(credentials);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-3 md:space-y-4"
    >
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <User className="size-4 md:size-5" />
        </div>

        <Input
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
        />
        <FormErrorMessage message={errors.username?.message} />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Mail className="size-4 md:size-5" />
        </div>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
        />
        <FormErrorMessage message={errors.email?.message} />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Phone className="size-4 md:size-5" />
        </div>
        <Input
          type="tel"
          placeholder="Phone"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[+]?[\d\s()-]{10,}$/,
              message: "Please enter a valid phone number",
            },
          })}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
        />
        <FormErrorMessage message={errors.phone?.message} />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Lock className="size-4 md:size-5" />
        </div>
        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
        />
        <FormErrorMessage message={errors.password?.message} />
      </div>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Lock className="size-4 md:size-5" />
        </div>
        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("password_confirmation", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          className="pl-10 md:pl-11 h-10 md:h-12 text-sm md:text-base"
        />
        <FormErrorMessage message={errors.password_confirmation?.message} />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="agree_terms"
          {...register("agree_terms", {
            required: "You must agree to the terms and conditions",
          })}
        />
        <label
          htmlFor="agree_terms"
          className="text-xs md:text-sm text-gray-700 cursor-pointer select-none"
        >
          I agree to the terms and conditions
        </label>
      </div>
      <FormErrorMessage message={errors.agree_terms?.message} />

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-10 md:h-12 bg-[#014162] hover:bg-[#014162]/90 text-white font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Creating Account..." : "Continue"}
      </Button>
    </form>
  );
}
