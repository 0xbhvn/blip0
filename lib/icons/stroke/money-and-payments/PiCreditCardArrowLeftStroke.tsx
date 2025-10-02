import React from 'react';

/**
 * PiCreditCardArrowLeftStroke icon from the stroke style in money-&-payments category.
 */
interface PiCreditCardArrowLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCreditCardArrowLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'credit-card-arrow-left icon',
  ...props
}: PiCreditCardArrowLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.41 22.573a13 13 0 0 1-2.275-2.191.6.6 0 0 1-.135-.38m2.41-2.572c-.846.634-1.61 1.37-2.275 2.191a.6.6 0 0 0-.135.38m0 0h6M2 9h.006m0 0h19.988M2.006 9C2 9.413 2 9.876 2 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 20 6.16 20 8.4 20H12M2.006 9c.018-1.35.096-2.16.43-2.816a4 4 0 0 1 1.748-1.748C5.04 4 6.16 4 8.4 4h7.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.334.655.412 1.466.43 2.816m0 0H22m-.006 0c.006.413.006.876.006 1.4v3.2c0 .814 0 1.48-.02 2.039M6 13h3" fill="none"/>
    </svg>
  );
}
