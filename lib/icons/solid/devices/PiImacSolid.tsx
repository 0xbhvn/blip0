import React from 'react';

/**
 * PiImacSolid icon from the solid style in devices category.
 */
interface PiImacSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiImacSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'imac icon',
  ...props
}: PiImacSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M4.364 1c-.39 0-.74 0-1.03.024a2.5 2.5 0 0 0-.969.248 2.5 2.5 0 0 0-1.093 1.093 2.5 2.5 0 0 0-.248.968C1 3.625 1 3.975 1 4.363v10.273c0 .39 0 .74.024 1.03.025.313.083.644.248.969a2.5 2.5 0 0 0 1.093 1.092c.325.166.656.224.968.25.292.023.642.023 1.03.023h4.032l-.3 3H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-.095l-.3-3h4.031c.39 0 .74 0 1.03-.024.313-.025.644-.083.969-.248a2.5 2.5 0 0 0 1.092-1.093 2.5 2.5 0 0 0 .25-.968c.023-.292.023-.642.023-1.03V4.363c0-.39 0-.74-.024-1.03a2.5 2.5 0 0 0-.248-.969 2.5 2.5 0 0 0-1.093-1.093 2.5 2.5 0 0 0-.968-.248C20.375 1 20.025 1 19.637 1zm5.741 20 .3-3h3.19l.3 3zM3 14h18v.6c0 .437 0 .704-.017.904a1.3 1.3 0 0 1-.034.215l-.004.008a.5.5 0 0 1-.218.218l-.008.004-.032.009a1 1 0 0 1-.183.025c-.2.016-.468.017-.904.017H4.4c-.437 0-.704 0-.904-.017a1.3 1.3 0 0 1-.215-.034l-.008-.004a.5.5 0 0 1-.219-.218l-.003-.008-.009-.031a1 1 0 0 1-.025-.184c-.016-.2-.017-.467-.017-.904z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
