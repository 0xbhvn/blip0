import React from 'react';

/**
 * PiNotificationBellOnSolid icon from the solid style in alerts category.
 */
interface PiNotificationBellOnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNotificationBellOnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'notification-bell-on icon',
  ...props
}: PiNotificationBellOnSolidProps): JSX.Element {
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
      <path d="M3.822 9.526a8.207 8.207 0 0 1 16.358 0l.355 4.262c.03.374.15.735.32 1.246a2.587 2.587 0 0 1-2.17 3.387q-1.436.16-2.876.25a3.843 3.843 0 0 1-7.616 0q-1.44-.09-2.877-.25a2.588 2.588 0 0 1-2.17-3.39c.171-.51.29-.872.32-1.245zm6.44 9.24a1.843 1.843 0 0 0 3.478 0l-.294.008a61 61 0 0 1-3.184-.008Z" fill="currentColor"/>
    </svg>
  );
}
