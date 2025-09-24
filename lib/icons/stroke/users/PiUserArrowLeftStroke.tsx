import React from 'react';

/**
 * PiUserArrowLeftStroke icon from the stroke style in users category.
 */
interface PiUserArrowLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserArrowLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-arrow-left icon',
  ...props
}: PiUserArrowLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.4 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.4m5.411 6a15 15 0 0 1-2.654-2.556A.7.7 0 0 1 15 18m2.811-3a15 15 0 0 0-2.654 2.556A.7.7 0 0 0 15 18m0 0h7M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="none"/>
    </svg>
  );
}
