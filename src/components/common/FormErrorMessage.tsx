import { AlertCircle } from "lucide-react";

interface FormErrorMessageProps {
  message?: string;
}

export default function FormErrorMessage({ message }: FormErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-1.5 mt-1.5 text-red-600 animate-in fade-in slide-in-from-top-1 duration-200">
      <AlertCircle className="size-3.5 flex-shrink-0" />
      <span className="text-xs font-medium">{message}</span>
    </div>
  );
}
