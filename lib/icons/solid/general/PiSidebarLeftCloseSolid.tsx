import React from 'react';

/**
 * PiSidebarLeftCloseSolid icon from the solid style in general category.
 */
interface PiSidebarLeftCloseSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarLeftCloseSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-left-close icon',
  ...props
}: PiSidebarLeftCloseSolidProps): JSX.Element {
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
      <path d="M15.912 8.191a1 1 0 0 1 1.176 1.618A14.3 14.3 0 0 0 14.696 12c.707.815 1.51 1.55 2.392 2.191a1 1 0 0 1-1.176 1.618A16.3 16.3 0 0 1 12.8 12.85c-.4-.497-.4-1.203 0-1.7a16.3 16.3 0 0 1 3.112-2.959Z" fill="currentColor"/><path fillRule="evenodd" d="M16.365 2.071c.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359.071.874.071 1.958.071 3.321v2.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071h-2.052c-.757 0-1.425 0-2.011-.011-1.535-.03-2.7-.131-3.705-.643a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.491 2 14.407 2 13.044v-2.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c1.004-.512 2.17-.613 3.705-.643C9.567 2 10.235 2 10.992 2h2.052c1.363 0 2.447 0 3.321.071Zm-.162 1.994C15.419 4 14.417 4 13 4h-2l-1 .001V20h3c1.417 0 2.419 0 3.203-.065.771-.063 1.243-.182 1.613-.371a4 4 0 0 0 1.748-1.748c.189-.37.308-.841.371-1.613C20 15.419 20 14.417 20 13v-2c0-1.417 0-2.419-.065-3.203-.063-.771-.182-1.243-.371-1.613a4 4 0 0 0-1.748-1.748c-.37-.189-.841-.308-1.613-.371Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
