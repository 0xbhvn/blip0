import React from 'react';

/**
 * PiScissorsRightCutStroke icon from the stroke style in editing category.
 */
interface PiScissorsRightCutStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScissorsRightCutStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'scissors-right-cut icon',
  ...props
}: PiScissorsRightCutStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18.708 19.264-7.388-7.389m0 0 7.388-7.389m-7.388 7.389-3.04 3.039m3.039-3.039L8.28 8.836m0 6.078a3.167 3.167 0 1 0-4.478 4.478 3.167 3.167 0 0 0 4.478-4.478Zm0-6.078a3.167 3.167 0 1 0-4.479-4.478A3.167 3.167 0 0 0 8.28 8.836Zm8.844 3.039h-1m5 0h-1" fill="none"/>
    </svg>
  );
}
