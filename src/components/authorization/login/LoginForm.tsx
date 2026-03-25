import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormErrorMessage from "@/components/common/FormErrorMessage";
import { useLogin } from "@/hooks/useLogin";
import type { LoginCredentials } from "@/lib/api/auth.api";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { login, isLoading } = useLogin();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const credentials: LoginCredentials = {
      login: data.email,
      password: data.password,
    };

    await login(credentials);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-3 md:space-y-4"
    >
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Mail className="size-4 md:size-5" />
        </div>

        <Input
          type="email"
          placeholder="Sarahen@gmail.com"
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
          <Lock className="size-4 md:size-5" />
        </div>
        <Input
          type="password"
          placeholder="••••••••"
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

      <div className="text-left">
        <a
          href="#"
          className="text-xs md:text-sm text-gray-600 hover:text-gray-900 hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-10 md:h-12 bg-[#014162] hover:bg-[#014162]/90 text-white font-medium text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Logging in..." : "Continue"}
      </Button>
    </form>
  );
}
