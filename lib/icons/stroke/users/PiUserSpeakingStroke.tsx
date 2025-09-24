import React from 'react';

/**
 * PiUserSpeakingStroke icon from the stroke style in users category.
 */
interface PiUserSpeakingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserSpeakingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-speaking icon',
  ...props
}: PiUserSpeakingStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 4c.375.926.581 1.94.581 3s-.206 2.074-.581 3m2.8-8c.767 1.5 1.2 3.2 1.2 5s-.433 3.5-1.2 5M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-8 8h8a4 4 0 0 1 4 4 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 4 4 0 0 1 4-4Z" fill="none"/>
    </svg>
  );
}
