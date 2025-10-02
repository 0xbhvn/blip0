import React from 'react';

/**
 * PiTrendlineDownSquareSolid icon from the solid style in chart-&-graph category.
 */
interface PiTrendlineDownSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrendlineDownSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'trendline-down-square icon',
  ...props
}: PiTrendlineDownSquareSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M10.956 2h2.088c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359.071.874.071 1.958.071 3.321v2.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071h-2.088c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.491 2 14.407 2 13.044v-2.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.509 2 9.593 2 10.956 2Zm-3.02 6.648a1 1 0 0 0-1.872.704 10.04 10.04 0 0 0 4.21 5.088l.25.15a1 1 0 0 0 1.388-.372l1.405-2.53c1.23.91 2.19 2.18 2.747 3.664a1 1 0 1 0 1.872-.704 10.04 10.04 0 0 0-4.21-5.088l-.25-.15a1 1 0 0 0-1.388.372l-1.405 2.53a8.1 8.1 0 0 1-2.747-3.664Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
