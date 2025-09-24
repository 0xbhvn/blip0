import React from 'react';

/**
 * PiShieldRemoveStroke icon from the stroke style in security category.
 */
interface PiShieldRemoveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShieldRemoveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'shield-remove icon',
  ...props
}: PiShieldRemoveStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-4.25-9.632L5.362 4.314A3 3 0 0 0 3.383 7.02l-.127 3.309A11 11 0 0 0 8.8 20.307l1.52.867a3 3 0 0 0 2.915.032l1.489-.806a11 11 0 0 0 5.728-10.516l-.227-2.95a3 3 0 0 0-1.972-2.592l-5.465-1.974a3 3 0 0 0-2.038 0Z" fill="none"/>
    </svg>
  );
}
