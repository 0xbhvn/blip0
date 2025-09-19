import React from 'react';

/**
 * PiNotificationBellCheckStroke icon from the stroke style in alerts category.
 */
interface PiNotificationBellCheckStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotificationBellCheckStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'notification-bell-check icon',
  ...props
}: PiNotificationBellCheckStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.159 17.724a60 60 0 0 1-3.733-.297 1.587 1.587 0 0 1-1.33-2.08c.161-.485.324-.963.367-1.478l.355-4.26a7.207 7.207 0 0 1 14.365 0l.355 4.262c.043.515.206.993.367 1.479a1.587 1.587 0 0 1-1.33 2.077 60 60 0 0 1-3.732.297m-5.684 0v.434a2.842 2.842 0 0 0 5.684 0v-.434m-5.684 0q2.841.135 5.684 0M9 11.259l2.036 2.034A13 13 0 0 1 15 9" fill="none"/>
    </svg>
  );
}
