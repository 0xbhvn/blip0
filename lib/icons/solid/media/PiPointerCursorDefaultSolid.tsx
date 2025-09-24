import React from 'react';

/**
 * PiPointerCursorDefaultSolid icon from the solid style in media category.
 */
interface PiPointerCursorDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPointerCursorDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pointer-cursor-default icon',
  ...props
}: PiPointerCursorDefaultSolidProps): React.ReactElement {
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
      <path d="M10.364 2.84c-1.354-.338-2.437-.61-3.302-.743-.873-.135-1.68-.16-2.416.129a4.27 4.27 0 0 0-2.42 2.42c-.289.736-.264 1.543-.13 2.416.135.865.406 1.948.744 3.302l1.354 5.417c.293 1.172.52 2.08.716 2.753.186.643.379 1.21.646 1.602 1.62 2.375 5.077 2.503 6.869.255.295-.37.53-.922.763-1.548.245-.658.539-1.546.918-2.693l.007-.022c.147-.444.194-.58.25-.698a2.28 2.28 0 0 1 1.067-1.066c.117-.057.255-.104.698-.25l.022-.008c1.147-.38 2.035-.673 2.693-.918.626-.233 1.178-.468 1.548-.763 2.248-1.792 2.12-5.25-.255-6.87-.392-.266-.96-.46-1.602-.645-.673-.196-1.581-.423-2.753-.716z" fill="currentColor"/>
    </svg>
  );
}
