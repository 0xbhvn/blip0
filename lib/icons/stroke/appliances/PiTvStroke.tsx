import React from 'react';

/**
 * PiTvStroke icon from the stroke style in appliances category.
 */
interface PiTvStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTvStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'tv icon',
  ...props
}: PiTvStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m20 21-2-3M4 21l2-3m-1.6 0h15.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V6.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C20.861 4 20.441 4 19.6 4H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 5.139 2 5.559 2 6.4v9.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163Z" fill="none"/>
    </svg>
  );
}
