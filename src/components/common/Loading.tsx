import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? 90 : prev + Math.random() * 15));
    }, 400);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-8">
          {/* Animated grocery bag */}
          <div className="relative">
            <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg
                className="h-10 w-10 text-primary animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            {/* Floating dots */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-accent"
                style={{
                  top: -4 + i * 2,
                  left: 16 + i * 16,
                  animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-48">
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-center">
              Loading your groceries…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
