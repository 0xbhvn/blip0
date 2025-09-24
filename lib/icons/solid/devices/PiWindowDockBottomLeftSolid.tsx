import React from 'react';

/**
 * PiWindowDockBottomLeftSolid icon from the solid style in devices category.
 */
interface PiWindowDockBottomLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowDockBottomLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'window-dock-bottom-left icon',
  ...props
}: PiWindowDockBottomLeftSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M2 15.24V8.759c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.289 3 6.954 3 7.758 3h8.484c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C22 7.289 22 7.953 22 8.757v6.484c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.542.043-1.206.043-2.01.043H7.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 16.709 2 16.044 2 15.24Zm8.223 2.759H6.777c-.12 0-.262 0-.387-.01a1.5 1.5 0 0 1-.571-.154 1.5 1.5 0 0 1-.655-.655 1.5 1.5 0 0 1-.154-.571C5 16.483 5 16.341 5 16.222v-3.446c0-.12 0-.261.01-.387.013-.198.065-.393.153-.571a1.5 1.5 0 0 1 .656-.655 1.5 1.5 0 0 1 .571-.154c.125-.01.268-.01.387-.01h3.446c.12 0 .261 0 .387.01.199.013.393.066.571.154a1.5 1.5 0 0 1 .655.655c.088.178.14.372.154.571.01.125.01.268.01.387v3.446c0 .12 0 .261-.01.387a1.5 1.5 0 0 1-.154.571 1.5 1.5 0 0 1-.655.655 1.5 1.5 0 0 1-.571.154c-.125.01-.268.01-.387.01Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
