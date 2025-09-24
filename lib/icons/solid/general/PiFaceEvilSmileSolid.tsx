import React from 'react';

/**
 * PiFaceEvilSmileSolid icon from the solid style in general category.
 */
interface PiFaceEvilSmileSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceEvilSmileSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'face-evil-smile icon',
  ...props
}: PiFaceEvilSmileSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12Zm8.328-2.92a1 1 0 1 1-1.147 1.64l-1.229-.861A1 1 0 0 1 8.95 8.22zM9.143 13.9a1 1 0 1 0-1.428 1.4A6 6 0 0 0 12 17.1c1.678 0 3.197-.69 4.285-1.8a1 1 0 0 0-1.428-1.4A4 4 0 0 1 12 15.1c-1.12 0-2.13-.459-2.857-1.2Zm4.434-3.426a1 1 0 0 0 1.392.245l1.229-.86a1 1 0 1 0-1.147-1.639l-1.229.86a1 1 0 0 0-.245 1.394Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
