import React from 'react';

/**
 * PiWindowDockTopLeftSolid icon from the solid style in devices category.
 */
interface PiWindowDockTopLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowDockTopLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'window-dock-top-left icon',
  ...props
}: PiWindowDockTopLeftSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M2 8.759v6.481c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392.541.044 1.206.044 2.01.044h8.484c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.043-.541.043-1.205.043-2.009V8.758c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 3 17.046 3 16.242 3H7.759c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 7.29 2 7.955 2 8.759ZM10.223 6H6.777c-.12 0-.262 0-.387.01a1.5 1.5 0 0 0-.571.154 1.5 1.5 0 0 0-.655.655 1.5 1.5 0 0 0-.154.571C5 7.516 5 7.658 5 7.777v3.446c0 .12 0 .261.01.387.013.199.065.393.153.571a1.5 1.5 0 0 0 .656.655c.178.088.372.14.571.154.125.01.268.01.387.01h3.446c.12 0 .261 0 .387-.01.199-.013.393-.066.571-.154a1.5 1.5 0 0 0 .655-.655 1.5 1.5 0 0 0 .154-.571c.01-.125.01-.268.01-.387V7.777c0-.12 0-.261-.01-.387a1.5 1.5 0 0 0-.154-.571 1.5 1.5 0 0 0-.655-.655 1.5 1.5 0 0 0-.571-.154C10.485 6 10.342 6 10.223 6Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
