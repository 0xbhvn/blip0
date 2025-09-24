import React from 'react';

/**
 * PiWineGlassEmptyStroke icon from the stroke style in food category.
 */
interface PiWineGlassEmptyStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWineGlassEmptyStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'wine-glass-empty icon',
  ...props
}: PiWineGlassEmptyStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13c3.6 0 6-2.736 6-6.111A10 10 0 0 0 16.698 2H7.302A10 10 0 0 0 6 6.889C6 10.264 8.4 13 12 13Zm0 0v9m4 0H8" fill="none"/>
    </svg>
  );
}
