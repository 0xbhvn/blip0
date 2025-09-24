import React from 'react';

/**
 * PiRssSquareSolid icon from the solid style in apps-&-social category.
 */
interface PiRssSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRssSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'rss-square icon',
  ...props
}: PiRssSquareSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.956 2h2.088c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359.071.874.071 1.958.071 3.321v2.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071h-2.088c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.491 2 14.407 2 13.044v-2.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.509 2 9.593 2 10.956 2ZM7 6a1 1 0 0 0 0 2 9 9 0 0 1 9 9 1 1 0 1 0 2 0A11 11 0 0 0 7 6Zm0 4.737a1 1 0 0 0 0 2A4.26 4.26 0 0 1 11.263 17a1 1 0 1 0 2 0A6.26 6.26 0 0 0 7 10.737Zm.256 5a1 1 0 0 0 0 2h.007a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
