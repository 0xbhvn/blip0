import React from 'react';

/**
 * PiCreditCardArrowRepeatSolid icon from the solid style in money-&-payments category.
 */
interface PiCreditCardArrowRepeatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCreditCardArrowRepeatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'credit-card-arrow-repeat icon',
  ...props
}: PiCreditCardArrowRepeatSolidProps): React.ReactElement {
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
      <path d="M15.643 3H8.357C7.273 3 6.4 3 5.691 3.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 5.73c-.302.592-.428 1.233-.487 1.961q-.012.15-.021.309h21.926l-.02-.309c-.06-.728-.186-1.369-.488-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C17.6 3 16.727 3 15.643 3Z" fill="currentColor"/><path fillRule="evenodd" d="M1 13.643V10h22v2.654a3 3 0 0 0-1.877.154 6.99 6.99 0 0 0-6.042-.888 7 7 0 0 0-2.342 1.268 3 3 0 0 0-.993 3.095 3.46 3.46 0 0 0-1.805 1.897A13 13 0 0 0 9.187 21h-.83c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 15.6 1 14.727 1 13.643ZM5.85 12a1 1 0 1 0 0 2h3.3a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/><path d="M16.283 15.735a3 3 0 0 1 3.214.948 9 9 0 0 1-.308-.137 1 1 0 1 0-.848 1.811c.82.384 1.683.664 2.57.836q.105.02.21.025a1.47 1.47 0 0 0 1.423-.895c.352-.833.6-1.706.74-2.6a1 1 0 0 0-1.977-.306q-.022.139-.048.278a5 5 0 0 0-7.25-.962 1 1 0 0 0 1.27 1.544 3 3 0 0 1 1.004-.542Z" fill="currentColor"/><path d="M13.272 17.98a1.47 1.47 0 0 0-1.47.93c-.33.841-.555 1.72-.67 2.618a1 1 0 1 0 1.984.255l.033-.234a5 5 0 0 0 7.225.9 1 1 0 0 0-1.275-1.54 3 3 0 0 1-4.28-.467q.195.073.385.157a1 1 0 0 0 .8-1.834c-.83-.361-1.7-.62-2.592-.768a2 2 0 0 0-.14-.016Z" fill="currentColor"/>
    </svg>
  );
}
