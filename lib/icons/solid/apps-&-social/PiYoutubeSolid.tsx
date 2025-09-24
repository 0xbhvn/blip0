import React from 'react';

/**
 * PiYoutubeSolid icon from the solid style in apps-&-social category.
 */
interface PiYoutubeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiYoutubeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'youtube icon',
  ...props
}: PiYoutubeSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9.956 3h4.088c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359.071.874.071 1.958.071 3.321v.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071H9.956c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 14.491 1 13.407 1 12.044v-.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.509 3 8.593 3 9.956 3ZM9 9.723a1.5 1.5 0 0 1 2.244-1.302l3.985 2.277a1.5 1.5 0 0 1 0 2.604l-3.985 2.277A1.5 1.5 0 0 1 9 14.277z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
