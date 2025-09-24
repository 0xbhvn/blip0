import React from 'react';

/**
 * PiRssSimpleStroke icon from the stroke style in apps-&-social category.
 */
interface PiRssSimpleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRssSimpleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'rss-simple icon',
  ...props
}: PiRssSimpleStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4a16 16 0 0 1 16 16M4 11.579A8.42 8.42 0 0 1 12.421 20m-8.011-.421h.011" fill="none"/>
    </svg>
  );
}
