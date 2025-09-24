import React from 'react';

/**
 * PiSidebarDefaultSolid icon from the solid style in general category.
 */
interface PiSidebarDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-default icon',
  ...props
}: PiSidebarDefaultSolidProps): JSX.Element {
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
      <path d="M18.724 2.654c-.7-.356-1.463-.51-2.359-.583C15.491 2 14.407 2 13.044 2h-2.052c-.757 0-1.425 0-2.011.011-1.535.03-2.7.131-3.705.643a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C2 8.509 2 9.593 2 10.956v2.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c1.004.512 2.17.613 3.705.643.586.011 1.254.011 2.011.011h2.052c1.363 0 2.447 0 3.321-.071.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321v-2.088c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622ZM13 4c1.417 0 2.419 0 3.203.065.771.063 1.243.182 1.613.371a4 4 0 0 1 1.748 1.748c.189.37.308.842.371 1.613C20 8.581 20 9.583 20 11v2c0 1.417 0 2.419-.065 3.203-.063.771-.182 1.243-.371 1.613a4 4 0 0 1-1.748 1.748c-.37.189-.841.308-1.613.371C15.419 20 14.417 20 13 20h-2l-1-.001V4h1z" fill="currentColor"/>
    </svg>
  );
}
