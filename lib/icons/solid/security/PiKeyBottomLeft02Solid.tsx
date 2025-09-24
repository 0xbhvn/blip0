import React from 'react';

/**
 * PiKeyBottomLeft02Solid icon from the solid style in security category.
 */
interface PiKeyBottomLeft02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyBottomLeft02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-bottom-left-02 icon',
  ...props
}: PiKeyBottomLeft02SolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.508 9.25a5.5 5.5 0 1 1 4.243 4.243l-2.044 2.042a1 1 0 0 1-.707.293h-1.121v1.122a1 1 0 0 1-.293.707l-2.122 2.121a1 1 0 0 1-.707.293H4.93a1 1 0 0 1-1-1v-2.828a1 1 0 0 1 .293-.707zm5.227-3.643a1.1 1.1 0 0 0-.623 1.867l1.414 1.414a1.1 1.1 0 0 0 1.867-.623 2.352 2.352 0 0 0-2.658-2.658Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
