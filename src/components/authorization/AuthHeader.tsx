interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="text-left mb-6 md:mb-8">
      <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
        {title}
      </h1>
      <p className="text-xs md:text-base text-gray-600">{subtitle}</p>
    </div>
  );
}
