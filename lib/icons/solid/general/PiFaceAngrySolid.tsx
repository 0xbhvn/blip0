import React from 'react';

/**
 * PiFaceAngrySolid icon from the solid style in general category.
 */
interface PiFaceAngrySolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceAngrySolid({
  size = 24,
  color,
  className,
  ariaLabel = 'face-angry icon',
  ...props
}: PiFaceAngrySolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12Zm8.238-2.919a1 1 0 0 1-1.147 1.639l-1.229-.86A1 1 0 1 1 8.86 8.22zm4.971 1.639a1 1 0 1 1-1.147-1.639l1.229-.86a1 1 0 1 1 1.147 1.638zm1.207 6.095a1 1 0 0 1-1.414-.014 4 4 0 0 0-2.856-1.2c-1.12 0-2.13.458-2.857 1.2a1 1 0 1 1-1.428-1.4 6 6 0 0 1 4.285-1.8 5.98 5.98 0 0 1 4.284 1.8 1 1 0 0 1-.014 1.414Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
