import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function CardItem({ icon: Icon, title, subtitle, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer hover:border-(--primary-color) transition-colors">
      <Icon className="w-10 h-6" />
      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default CardItem;
