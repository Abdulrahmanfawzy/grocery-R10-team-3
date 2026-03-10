interface DecorativeCornerProps {
  className?: string;
}

export const DecorativeCorner = ({ className = "" }: DecorativeCornerProps) => {
  return (
    <>
      <div 
        className={`absolute bottom-0 right-0 w-12 h-12 bg-[#D1D5DB] ${className}`}
        style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
      />
      <div className="absolute bottom-12 right-0 w-12 h-px bg-black/5" />
    </>
  );
};
