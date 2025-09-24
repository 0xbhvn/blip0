import React from 'react';

/**
 * PiSafeSolid icon from the solid style in money-&-payments category.
 */
interface PiSafeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSafeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'safe icon',
  ...props
}: PiSafeSolidProps): JSX.Element {
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
      <path d="M7 12c0-.827.335-1.576.876-2.12l.003-.001.002-.003A3 3 0 0 1 10 9a3 3 0 0 1 2.116.874l.005.005.005.005A3 3 0 1 1 7 12Z" fill="currentColor"/><path fillRule="evenodd" d="M6.759 3H17.24c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C23 7.29 23 7.954 23 8.758v6.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748 3.4 3.4 0 0 1-.816.286V21a1 1 0 1 1-2 0v-.002q-.356.002-.757.002H6.757q-.402 0-.757-.002V21a1 1 0 1 1-2 0v-.15a3.4 3.4 0 0 1-.816-.286 4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C1 16.71 1 16.046 1 15.242V8.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C5.29 3 5.954 3 6.758 3Zm-.295 4.05A1 1 0 1 0 5.05 8.464l.778.779A5 5 0 0 0 5 12c0 1.019.305 1.967.828 2.757l-.778.779a1 1 0 1 0 1.414 1.414l.779-.778C8.033 16.695 8.98 17 10 17a5 5 0 0 0 2.757-.828l.779.778a1 1 0 1 0 1.414-1.414l-.778-.779c.523-.79.828-1.738.828-2.757s-.305-1.967-.828-2.757l.778-.779a1 1 0 0 0-1.414-1.414l-.779.778A5 5 0 0 0 10 7c-1.02 0-1.967.305-2.757.828zM20 11a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
