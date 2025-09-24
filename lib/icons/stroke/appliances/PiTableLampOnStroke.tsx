import React from 'react';

/**
 * PiTableLampOnStroke icon from the stroke style in appliances category.
 */
interface PiTableLampOnStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTableLampOnStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'table-lamp-on icon',
  ...props
}: PiTableLampOnStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18v-6m-3 9h6m-9-6-1 2m13-2 1 2m1-5-2.727-7.67A2 2 0 0 0 15.389 3H8.612a2 2 0 0 0-1.885 1.33L4 12zm-4 9v-1a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1z" fill="none"/>
    </svg>
  );
}
