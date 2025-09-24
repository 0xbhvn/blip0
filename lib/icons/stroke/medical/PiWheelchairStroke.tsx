import React from 'react';

/**
 * PiWheelchairStroke icon from the stroke style in medical category.
 */
interface PiWheelchairStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWheelchairStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'wheelchair icon',
  ...props
}: PiWheelchairStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10.6a5.5 5.5 0 1 0 7.793 6.4" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m20 21-2.169-5.06c-.3-.702-.45-1.053-.693-1.31a2 2 0 0 0-.771-.509C16.035 14 15.653 14 14.89 14h-.997c-1.632 0-2.448 0-2.956-.344a2 2 0 0 1-.846-1.293c-.111-.603.216-1.35.87-2.846L12.5 6l-1.376-.25c-1.51-.275-2.264-.412-2.988-.332a5 5 0 0 0-1.832.572c-.64.347-1.183.89-2.268 1.974L3.5 8.5" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" fill="none"/>
    </svg>
  );
}
