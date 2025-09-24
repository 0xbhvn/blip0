import React from 'react';

/**
 * PiBagSackPouchStroke icon from the stroke style in general category.
 */
interface PiBagSackPouchStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBagSackPouchStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bag-sack-pouch icon',
  ...props
}: PiBagSackPouchStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.887 6.988a5.9 5.9 0 0 0-1.85-.298h-2.074q-.482 0-.945.076m4.869.222c6.185 2.031 8.735 13.808.922 14.777a31 31 0 0 1-7.618 0C.007 20.75 3.194 7.875 10.018 6.766m4.869.222 1.777-4.444-.65-.26a3.98 3.98 0 0 0-3.68.384 3.97 3.97 0 0 1-2.985.59l-.977-.195 1.646 3.703" fill="none"/>
    </svg>
  );
}
