import React from 'react';

/**
 * PiSpatialCurvedScreenSolid icon from the solid style in ar-&-vr category.
 */
interface PiSpatialCurvedScreenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpatialCurvedScreenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'spatial-curved-screen icon',
  ...props
}: PiSpatialCurvedScreenSolidProps): React.ReactElement {
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
      <path d="M22.999 4.267a2 2 0 0 0-2.614-1.83l-.01.003-.638.19a28 28 0 0 1-16.112-.19l-.01-.003c-.034-.01-.075-.023-.111-.032a2 2 0 0 0-2.503 1.862L1 4.383V16.61l.001.116a2 2 0 0 0 2.503 1.862l.111-.032.01-.003a28 28 0 0 1 16.749 0l.01.003.112.032A2 2 0 0 0 23 16.726V4.383z" fill="currentColor"/><path d="M8 19.996a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M11 19.996a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
