import React from 'react';

/**
 * PiNotificationBellCancelStroke icon from the stroke style in alerts category.
 */
interface PiNotificationBellCancelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotificationBellCancelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'notification-bell-cancel icon',
  ...props
}: PiNotificationBellCancelStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.159 17.724a60 60 0 0 1-3.733-.297 1.587 1.587 0 0 1-1.33-2.08c.161-.485.324-.963.367-1.478l.355-4.26a7.207 7.207 0 0 1 14.365 0l.355 4.262c.043.515.206.993.367 1.479a1.587 1.587 0 0 1-1.33 2.077 60 60 0 0 1-3.732.297m-5.684 0v.434a2.842 2.842 0 0 0 5.684 0v-.434m-5.684 0q2.841.135 5.684 0M9.525 13.95 12 11.475m0 0L14.475 9M12 11.475 9.525 9M12 11.475l2.475 2.475" fill="none"/>
    </svg>
  );
}
