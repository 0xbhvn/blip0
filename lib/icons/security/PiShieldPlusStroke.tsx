import React from 'react';

/**
 * PiShieldPlusStroke icon from the stroke style in security category.
 */
interface PiShieldPlusStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShieldPlusStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'shield-plus icon',
  ...props
}: PiShieldPlusStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.132 15v-3m0 0V9m0 3h-3m3 0h3m-4.25-9.632L5.496 4.313a3 3 0 0 0-1.98 2.707l-.127 3.308a11 11 0 0 0 5.543 9.979l1.521.867a3 3 0 0 0 2.915.032l1.489-.807a11 11 0 0 0 5.728-10.516l-.227-2.95a3 3 0 0 0-1.972-2.592L12.92 2.368a3 3 0 0 0-2.038 0Z" fill="none"/>
    </svg>
  );
}
