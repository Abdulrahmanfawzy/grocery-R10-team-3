import AuthHeader from "@/components/authorization/AuthHeader";
import AuthLeftSide from "@/components/authorization/AuthLeftSide";
import SignUpForm from "@/components/authorization/signup/SignUpForm";
import SocialLoginButtons from "@/components/authorization/SocialLoginButtons";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr_1.5fr] bg-white">
      <AuthLeftSide />

      <div className="flex items-center justify-start p-4 md:p-10 lg:p-18">
        <div className="w-full max-w-md">
          <AuthHeader
            title="Create your account!"
            subtitle="Enter your Full Details"
          />

          <div className="space-y-4 md:space-y-6">
            <SignUpForm />

            <SocialLoginButtons dividerText="Sign Up With" />
          </div>

          <div className="mt-6 md:mt-8 text-center">
            <p className="text-xs md:text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-blue-900 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
