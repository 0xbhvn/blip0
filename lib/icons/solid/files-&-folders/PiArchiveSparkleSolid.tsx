import React from 'react';

/**
 * PiArchiveSparkleSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveSparkleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveSparkleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-sparkle icon',
  ...props
}: PiArchiveSparkleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm10 2.546a1 1 0 0 0-2 0l-.006.165a2 2 0 0 1-1.865 1.865l-.166.007a1 1 0 0 0 0 1.998l.166.007a2 2 0 0 1 1.865 1.865l.007.166a1 1 0 0 0 1.998 0l.007-.166a2 2 0 0 1 1.865-1.865l.166-.007a1 1 0 0 0 0-1.998l-.166-.007a2 2 0 0 1-1.865-1.865zm-1.358 3.036q.19-.168.358-.358.168.19.358.358a4 4 0 0 0-.358.358 4 4 0 0 0-.358-.358Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
