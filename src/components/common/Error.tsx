import{ useEffect, useState } from "react";
import { Button } from "../ui/button";
import { AlertTriangle, Bug, Home, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface ErrorPageProps {
  error?: Error;
  resetError?: () => void;
}

const Error = ({ error, resetError }: ErrorPageProps) => {
  const [mounted, setMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg">
          {/* Animated icon */}
          <div
            className={`mb-8 flex justify-center transition-all duration-700 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <div className="relative">
              <div className="h-28 w-28 rounded-full bg-destructive/10 flex items-center justify-center animate-pulse">
                <AlertTriangle
                  className="h-14 w-14 text-destructive"
                  strokeWidth={1.5}
                />
              </div>
              <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive animate-bounce" />
            </div>
          </div>

          <h1
            className={`text-3xl font-bold text-foreground mb-3 transition-all duration-500 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Something went wrong
          </h1>
          <p
            className={`text-muted-foreground mb-6 transition-all duration-500 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We hit an unexpected error. Try refreshing or head back to the
            dashboard.
          </p>

          {error && (
            <div
              className={`mb-6 transition-all duration-500 delay-400 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Bug className="h-3.5 w-3.5" />
                {showDetails ? "Hide" : "Show"} error details
              </button>
              {showDetails && (
                <div className="mt-3 rounded-lg bg-muted p-4 text-left">
                  <p className="font-mono text-xs text-destructive break-all">
                    {error.message}
                  </p>
                </div>
              )}
            </div>
          )}

          <div
            className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-500 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button onClick={resetError || (() => window.location.reload())}>
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
