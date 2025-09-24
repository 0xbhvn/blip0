import React from 'react';

/**
 * PiCeilingLampOffStroke icon from the stroke style in appliances category.
 */
interface PiCeilingLampOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCeilingLampOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ceiling-lamp-off icon',
  ...props
}: PiCeilingLampOffStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9Zm0 0V4m3 12a3 3 0 1 1-6 0z" fill="none"/>
    </svg>
  );
}
