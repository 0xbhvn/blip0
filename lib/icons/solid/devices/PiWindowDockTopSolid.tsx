import React from 'react';

/**
 * PiWindowDockTopSolid icon from the solid style in devices category.
 */
interface PiWindowDockTopSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowDockTopSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'window-dock-top icon',
  ...props
}: PiWindowDockTopSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M22 15.24V8.759c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.711 3 17.046 3 16.242 3H7.758c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 7.289 2 7.953 2 8.757v6.484c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392.542.043 1.206.043 2.01.043h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.542.044-1.207.044-2.011ZM6.777 12.999h10.446c.12 0 .262 0 .387-.01.145-.012.353-.043.571-.154a1.5 1.5 0 0 0 .655-.655c.112-.218.142-.426.154-.571.01-.125.01-.268.01-.387V7.776c0-.12 0-.262-.01-.387a1.5 1.5 0 0 0-.153-.571 1.5 1.5 0 0 0-.656-.655 1.5 1.5 0 0 0-.571-.154 5 5 0 0 0-.387-.01H6.777c-.12 0-.261 0-.387.01a1.5 1.5 0 0 0-.571.153 1.5 1.5 0 0 0-.655.656c-.089.178-.14.372-.154.571a5 5 0 0 0-.01.387v3.446c0 .12 0 .261.01.387.012.145.042.353.154.571a1.5 1.5 0 0 0 .655.655c.178.088.372.14.571.154.126.01.268.01.387.01Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
