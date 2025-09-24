import React from 'react';

/**
 * PiMacFinderSolid icon from the solid style in devices category.
 */
interface PiMacFinderSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMacFinderSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mac-finder icon',
  ...props
}: PiMacFinderSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M14.796 2a22.9 22.9 0 0 0-2.775 10H15a1 1 0 0 1 1 1q0 1.211.055 2.392.213-.116.422-.244a1 1 0 1 1 1.046 1.704q-.636.391-1.319.692c.143 1.53.364 3.007.668 4.417q.257-.014.493-.032c.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321v-2.088c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583-.707-.057-1.551-.068-2.57-.07ZM18 8a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z" clipRule="evenodd" fill="currentColor"/><path fillRule="evenodd" d="M12.544 2A24.9 24.9 0 0 0 10 13a1 1 0 0 0 1 1h3.009q.019 1.092.084 2.165a8.4 8.4 0 0 1-2.093.264 8.5 8.5 0 0 1-4.477-1.281 1 1 0 0 0-1.046 1.704A10.5 10.5 0 0 0 12 18.43c.773 0 1.528-.085 2.257-.247.136 1.306.328 2.582.58 3.817l-.793.001H9.956c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 15.491 1 14.407 1 13.044v-2.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.509 2 8.593 2 9.956 2zM7 7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
