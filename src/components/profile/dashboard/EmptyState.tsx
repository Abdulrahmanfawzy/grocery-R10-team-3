import type { LucideIcon } from "lucide-react";
import { Button } from "../../ui/button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center animate-[scale-bubble_0.5s_ease-out]">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary/60" />
          </div>
        </div>
        {/* Decorative dots */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent/60 animate-[scale-bubble_0.5s_ease-out_0.2s_both]" />
        <div className="absolute -bottom-2 -left-2 w-2 h-2 rounded-full bg-primary/30 animate-[scale-bubble_0.5s_ease-out_0.4s_both]" />
        <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-success/40 animate-[scale-bubble_0.5s_ease-out_0.3s_both]" />
      </div>

      <h3 className="text-base font-semibold text-card-foreground mb-1">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-xs mb-5">
        {description}
      </p>

      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          size="sm"
          className="animate-[scale-bubble_0.4s_ease-out_0.5s_both]"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
