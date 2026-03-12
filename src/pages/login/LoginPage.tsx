import AuthHeader from "@/components/authorization/AuthHeader";
import AuthLeftSide from "@/components/authorization/AuthLeftSide";
import LoginForm from "@/components/authorization/login/LoginForm";
import SocialLoginButtons from "@/components/authorization/SocialLoginButtons";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr_1.5fr] bg-white">
      <AuthLeftSide />

      <div className="flex items-center justify-start p-4 md:p-12 lg:p-24">
        <div className="w-full max-w-md">
          <AuthHeader
            title="Login your account!"
            subtitle="Welcome to Grocery Plus"
          />
          <div className="space-y-4 md:space-y-6">
            <LoginForm />

            <SocialLoginButtons />
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <p className="text-xs md:text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-900 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
