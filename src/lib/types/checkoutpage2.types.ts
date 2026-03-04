export interface CardOptionProps {
  id: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export interface MethodBadgeProps {
  label: string;
  sub: string;
  icon: React.ReactNode;
}

export interface SummaryItemProps {
  title: string;
  price: string;
  image?: string;
}
