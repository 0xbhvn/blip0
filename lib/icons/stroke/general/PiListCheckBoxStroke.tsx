import React from 'react';

/**
 * PiListCheckBoxStroke icon from the stroke style in general category.
 */
interface PiListCheckBoxStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListCheckBoxStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-check-box icon',
  ...props
}: PiListCheckBoxStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12h9m-9 6h9M12 6h9M3 16.105 4.897 18a12.14 12.14 0 0 1 3.694-4M4 10h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Z" fill="none"/>
    </svg>
  );
}
