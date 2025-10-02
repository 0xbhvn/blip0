import React from 'react';

/**
 * PiMetaStroke icon from the stroke style in apps-&-social category.
 */
interface PiMetaStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMetaStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'meta icon',
  ...props
}: PiMetaStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10.106c1.832-2.887 3.111-4.33 4.82-4.33 5.552 0 6.655 12.447 2.075 12.447-2.971 0-5.78-5.817-6.895-8.117Zm0 0c-1.832-2.887-3.112-4.33-4.82-4.33-5.552 0-6.655 12.447-2.075 12.447 2.966 0 5.79-5.814 6.895-8.117Z" fill="none"/>
    </svg>
  );
}
