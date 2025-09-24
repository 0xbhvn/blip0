import React from 'react';

/**
 * PiCloudAIStroke icon from the stroke style in ai category.
 */
interface PiCloudAIStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudAIStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-ai icon',
  ...props
}: PiCloudAIStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17zm3.5-12a6.5 6.5 0 0 1 6.168 4.444A5.501 5.501 0 0 1 16.5 20h-10a4.5 4.5 0 0 1-.483-8.974A6.5 6.5 0 0 1 12.5 5Zm.5 5c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.383 3 3 .637-1.617 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3Z" fill="none"/>
    </svg>
  );
}
