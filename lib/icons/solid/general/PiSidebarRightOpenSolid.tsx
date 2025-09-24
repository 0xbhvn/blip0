import React from 'react';

/**
 * PiSidebarRightOpenSolid icon from the solid style in general category.
 */
interface PiSidebarRightOpenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSidebarRightOpenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'sidebar-right-open icon',
  ...props
}: PiSidebarRightOpenSolidProps): React.ReactElement {
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
      <path d="M9.912 8.191a1 1 0 1 1 1.176 1.618A14.3 14.3 0 0 0 8.696 12c.707.815 1.51 1.55 2.392 2.191a1 1 0 0 1-1.176 1.618A16.3 16.3 0 0 1 6.8 12.85c-.4-.497-.4-1.203 0-1.7a16.3 16.3 0 0 1 3.112-2.96Z" fill="currentColor"/><path fillRule="evenodd" d="M7.635 2.071c-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C2 8.509 2 9.593 2 10.956v2.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583.874.071 1.958.071 3.321.071h2.052c.757 0 1.425 0 2.011-.011 1.535-.03 2.7-.131 3.705-.643a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321v-2.088c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-1.004-.512-2.17-.613-3.705-.643C14.432 2 13.765 2 13.008 2h-2.052c-1.363 0-2.447 0-3.321.071Zm.162 1.994C8.581 4 9.583 4 11 4h2l1 .001V20h-3c-1.417 0-2.419 0-3.203-.065-.771-.063-1.243-.182-1.613-.371a4 4 0 0 1-1.748-1.748c-.189-.37-.308-.841-.371-1.613C4 15.419 4 14.417 4 13v-2c0-1.417 0-2.419.065-3.203.063-.771.182-1.243.371-1.613a4 4 0 0 1 1.748-1.748c.37-.189.842-.308 1.613-.371Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
