import React from 'react';

/**
 * PiServerReloadSolid icon from the solid style in development category.
 */
interface PiServerReloadSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiServerReloadSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'server-reload icon',
  ...props
}: PiServerReloadSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M2 6.4A3.4 3.4 0 0 1 5.4 3h13.2A3.4 3.4 0 0 1 22 6.4v1.2a3.4 3.4 0 0 1-2.67 3.321 7 7 0 0 0-2.12-.326c-.826 0-1.618.143-2.353.405H5.4A3.4 3.4 0 0 1 2 7.6zM14 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" fill="currentColor"/><path d="M10.209 17.596c0-1.759.649-3.366 1.72-4.596H5.4A3.4 3.4 0 0 0 2 16.4v1.2A3.4 3.4 0 0 0 5.4 21h5.69a7 7 0 0 1-.881-3.404Z" fill="currentColor"/><path d="M14.209 17.596a3.001 3.001 0 0 1 5.327-1.897 9 9 0 0 1-.347-.154 1 1 0 1 0-.847 1.812c.82.383 1.682.664 2.57.836q.142.027.286.027a1.47 1.47 0 0 0 1.347-.898c.352-.832.6-1.705.739-2.599a1 1 0 0 0-1.977-.307l-.042.252a5.001 5.001 0 1 0-1.816 7.401 1 1 0 0 0-.897-1.788 3 3 0 0 1-4.343-2.685Z" fill="currentColor"/>
    </svg>
  );
}
