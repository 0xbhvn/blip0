import React from 'react';

/**
 * PiCeilingLampOnStroke icon from the stroke style in appliances category.
 */
interface PiCeilingLampOnStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCeilingLampOnStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ceiling-lamp-on icon',
  ...props
}: PiCeilingLampOnStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9Zm0 0V2m0 19v-1m4.5-.134L16 19m-8.5.866L8 19m7-5a3 3 0 1 1-6 0z" fill="none"/>
    </svg>
  );
}
