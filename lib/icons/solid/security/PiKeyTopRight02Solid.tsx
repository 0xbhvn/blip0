import React from 'react';

/**
 * PiKeyTopRight02Solid icon from the solid style in security category.
 */
interface PiKeyTopRight02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyTopRight02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-top-right-02 icon',
  ...props
}: PiKeyTopRight02SolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9.25 10.508a5.5 5.5 0 1 0 4.243 4.243l2.043-2.044A1 1 0 0 0 15.83 12v-1.12h1.12a1 1 0 0 0 .708-.294l2.121-2.121a1 1 0 0 0 .293-.707v-2.83a1 1 0 0 0-1-1h-2.828a1 1 0 0 0-.707.294zm-3.643 5.227a1.1 1.1 0 0 1 1.867-.623l1.414 1.414a1.1 1.1 0 0 1-.623 1.867 2.35 2.35 0 0 1-2.658-2.658Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
