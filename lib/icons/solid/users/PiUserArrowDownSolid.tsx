import React from 'react';

/**
 * PiUserArrowDownSolid icon from the solid style in users category.
 */
interface PiUserArrowDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserArrowDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-arrow-down icon',
  ...props
}: PiUserArrowDownSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M11 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" fill="currentColor"/><path d="M16 14.1a5 5 0 0 0-1-.1H7a5 5 0 0 0-5 5 3 3 0 0 0 3 3h9.417a18 18 0 0 1-.817-1.012 3 3 0 0 1 2.4-4.8z" fill="currentColor"/><path d="M19 23c-.38 0-.76-.127-1.073-.38a16 16 0 0 1-2.727-2.832 1 1 0 1 1 1.6-1.2q.555.74 1.2 1.398V15a1 1 0 1 1 2 0v4.986q.645-.658 1.2-1.398a1 1 0 1 1 1.6 1.2 16 16 0 0 1-2.727 2.832c-.312.253-.693.38-1.073.38Z" fill="currentColor"/>
    </svg>
  );
}
