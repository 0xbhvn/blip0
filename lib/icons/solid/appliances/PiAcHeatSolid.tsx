import React from 'react';

/**
 * PiAcHeatSolid icon from the solid style in appliances category.
 */
interface PiAcHeatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcHeatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-heat icon',
  ...props
}: PiAcHeatSolidProps): React.ReactElement {
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
      <path d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3zm11 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M16.61 14.221a1 1 0 0 1 1.302.041c1.694 1.55 2.904 2.878 2.904 5.16 0 1.938-1.62 3.578-3.58 3.578-1.958 0-3.578-1.64-3.578-3.579 0-.645.232-1.288.588-1.731a1 1 0 0 1 1.348-.198c.3.207.485.203.566.187.09-.017.211-.081.326-.257.24-.365.354-1.112-.114-1.92a1 1 0 0 1 .238-1.28Z" fill="currentColor"/>
    </svg>
  );
}
