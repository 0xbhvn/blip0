import React from 'react';

/**
 * PiHeartBreakSolid icon from the solid style in general category.
 */
interface PiHeartBreakSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeartBreakSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'heart-break icon',
  ...props
}: PiHeartBreakSolidProps): JSX.Element {
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
      <path d="M12 3.836C10.147 1.93 7.612 1.605 5.458 2.42A6.925 6.925 0 0 0 1 8.944c0 3.944 2.508 7.208 4.957 9.41a22.7 22.7 0 0 0 3.55 2.613 14 14 0 0 0 1.372.718c.192.085.375.157.54.21.14.044.357.105.581.105s.44-.06.58-.105c.166-.053.35-.125.541-.21.385-.17.854-.413 1.371-.718a22.7 22.7 0 0 0 3.552-2.614C20.492 16.153 23 12.888 23 8.944a6.92 6.92 0 0 0-4.46-6.52c-1.574-.594-3.351-.582-4.917.21q.38.41.71.903c1.01 1.4 1.818 2.842 2.181 4.658.089.443-.099.895-.474 1.146l-.005.002-3.35 2.21c.27 1.203.745 2.288 1.531 3.01a1 1 0 0 1-1.351 1.473c-1.399-1.282-2-3.137-2.265-4.739-.07-.417.112-.836.464-1.07l.004-.003 3.349-2.209c-.33-1.184-.915-2.215-1.716-3.322l-.023-.033a5 5 0 0 0-.676-.825z" fill="currentColor"/>
    </svg>
  );
}
