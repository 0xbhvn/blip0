import React from 'react';

/**
 * PiSwipeLeftHandStroke icon from the stroke style in general category.
 */
interface PiSwipeLeftHandStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwipeLeftHandStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swipe-left-hand icon',
  ...props
}: PiSwipeLeftHandStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.325 2c-.79.37-1.527.84-2.193 1.396a.32.32 0 0 0-.107.18l-.001.004m1.51 2.341a10 10 0 0 1-1.48-2.136.32.32 0 0 1-.03-.205m0 0L14 3.577m.024.003c2.94.45 5.599 1.752 7.716 3.647M8.763 20.205l-5.788-5.207a.79.79 0 0 1 .004-1.18 3.16 3.16 0 0 1 3.884-.243l1.767 1.21-2.588-9.66A2 2 0 1 1 9.905 4.09l1.553 5.796 4.852-.47c3.558-.346 4.734 3.472 4.452 6.37-.496 5.103-8.24 7.801-12 4.419Z" fill="none"/>
    </svg>
  );
}
