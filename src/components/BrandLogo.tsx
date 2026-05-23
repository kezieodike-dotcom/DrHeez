interface BrandLogoProps {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  compact?: boolean;
  inverted?: boolean;
}

export default function BrandLogo({
  className = '',
  markClassName = 'h-11 w-11',
  showWordmark = true,
  compact = false,
  inverted = false
}: BrandLogoProps) {
  const nameColor = inverted ? 'text-white' : 'text-brand-dark';
  const subColor = inverted ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 96 96"
        role="img"
        aria-label="Dr.Heez Global Ventures logo"
        className={`${markClassName} flex-shrink-0 drop-shadow-sm`}
      >
        <defs>
          <linearGradient id="drheezGold" x1="24" x2="80" y1="16" y2="78" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F1D36B" />
            <stop offset="0.52" stopColor="#D4A017" />
            <stop offset="1" stopColor="#A7740A" />
          </linearGradient>
          <linearGradient id="drheezGreen" x1="14" x2="79" y1="15" y2="82" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#146B49" />
            <stop offset="1" stopColor="#073A28" />
          </linearGradient>
        </defs>

        <path
          d="M65.4 8.6 75 12.4l-1 8 6.8 4.5 7.2-3.2 5.7 8.6-5.4 6.1 2.4 7.8 7.7 2 .1 10.3-7.7 2.1-2.2 7.7 5.6 5.9-5.5 8.8-7.4-3-6.6 4.7.8 8-9.5 4-4.3-6.8-8.1.3-3.9 7-9.8-3.5.4-8.1-6.8-4.4-7.1 3.6-6-8.4 5.1-6.4-2.6-7.6-7.9-1.6-.4-10.3 7.6-2.4 2-7.8-5.9-5.7 5.1-9 7.5 2.7 6.4-4.8-1.1-8 9.4-4.3 4.6 6.6 8-.6 3.6-7.2Z"
          fill="url(#drheezGold)"
          opacity="0.9"
        />
        <circle cx="57" cy="49" r="31" fill="white" />
        <circle cx="57" cy="49" r="26" fill="none" stroke="url(#drheezGreen)" strokeWidth="7" />
        <path d="M57 23v52M35 49h44M42 31c8 10 8 27 0 36M72 31c-8 10-8 27 0 36" fill="none" stroke="url(#drheezGreen)" strokeWidth="6" strokeLinecap="round" />
        <path d="M28.5 9.5C14.7 23.7 8 36.9 8 50.5 8 71.4 24.3 84.8 39.8 87c5.6-16.2 6-33.4.2-51.5-2.5-8-6.4-16.6-11.5-26Z" fill="white" stroke="url(#drheezGreen)" strokeWidth="7" strokeLinejoin="round" />
        <path d="M29 26v51M15 49c6 7.5 13 12.9 22 17M21 33c5.5 7.5 11.5 12 18 15" fill="none" stroke="url(#drheezGreen)" strokeWidth="6" strokeLinecap="round" />
        <path d="M34 68c5-10 13-15 25-15h24" fill="none" stroke="url(#drheezGreen)" strokeWidth="10" strokeLinecap="round" />
        <path d="M60 53h23" fill="none" stroke="url(#drheezGold)" strokeWidth="7" strokeLinecap="square" />
      </svg>

      {showWordmark && (
        <div className={compact ? 'leading-none' : 'leading-tight'}>
          <span className={`font-display font-black ${compact ? 'text-lg' : 'text-xl'} block ${nameColor}`}>
            Dr.Heez <span className="text-brand-gold">Global</span>
          </span>
          <span className={`font-sans ${compact ? 'text-[9px]' : 'text-[10px]'} tracking-widest font-semibold uppercase block ${subColor}`}>
            Ventures
          </span>
        </div>
      )}
    </div>
  );
}
