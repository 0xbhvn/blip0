import React from 'react';

/**
 * PiVolumeMuteStroke icon from the stroke style in media category.
 */
interface PiVolumeMuteStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeMuteStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-mute icon',
  ...props
}: PiVolumeMuteStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 10-5 5m5 0-5-5m-3-4.912v13.825c0 1.71-1.934 2.706-3.326 1.711L7.86 18.615a4.9 4.9 0 0 0-1.898-.822A4.93 4.93 0 0 1 2 12.959v-1.918a4.93 4.93 0 0 1 3.963-4.833 4.9 4.9 0 0 0 1.898-.823l2.813-2.009c1.392-.994 3.326 0 3.326 1.712Z" fill="none"/>
    </svg>
  );
}
