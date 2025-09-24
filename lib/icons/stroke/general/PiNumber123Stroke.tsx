import React from 'react';

/**
 * PiNumber123Stroke icon from the stroke style in general category.
 */
interface PiNumber123StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNumber123Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'number-123 icon',
  ...props
}: PiNumber123StrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.997 16V8c-1.032.252-1.82.963-2.288 1.899m10.902 6.1H8.627v-.82c1.448-1.014 2.932-2.116 4.119-3.446.793-.888.88-2.217.026-3.11-.694-.724-1.894-.962-2.82-.602-.624.243-.98.73-1.325 1.269m8.01 5.276c.346.538.702 1.025 1.327 1.268.925.36 2.125.122 2.819-.603.854-.892.766-2.221-.026-3.11l-2.655-.621L20.757 8h-4.12" fill="none"/>
    </svg>
  );
}
