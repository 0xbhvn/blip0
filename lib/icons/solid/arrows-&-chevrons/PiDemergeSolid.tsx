import React from 'react';

/**
 * PiDemergeSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiDemergeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDemergeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'demerge icon',
  ...props
}: PiDemergeSolidProps): JSX.Element {
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
      <path d="M10.108 3.3a21.6 21.6 0 0 0-5.554-.21A1.62 1.62 0 0 0 3.09 4.554c-.17 1.842-.1 3.708.21 5.554a1 1 0 0 0 1.744.486 52 52 0 0 1 1.97-2.166L11 12.414V20a1 1 0 1 0 2 0v-8a1 1 0 0 0-.293-.707L8.428 7.014a52 52 0 0 1 2.166-1.97 1 1 0 0 0-.486-1.744Z" fill="currentColor"/><path d="M19.446 3.09c-1.842-.17-3.708-.1-5.554.21a1 1 0 0 0-.486 1.744q1.11.956 2.166 1.97l-1.28 1.279a1 1 0 0 0 1.415 1.414l1.279-1.279a52 52 0 0 1 1.97 2.166 1 1 0 0 0 1.744-.486c.31-1.846.38-3.712.21-5.554a1.62 1.62 0 0 0-1.465-1.464Z" fill="currentColor"/>
    </svg>
  );
}
