import React from 'react';

/**
 * PiPhotoImageArrowLeftSolid icon from the solid style in media category.
 */
interface PiPhotoImageArrowLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhotoImageArrowLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'photo-image-arrow-left icon',
  ...props
}: PiPhotoImageArrowLeftSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M9.956 2c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C1 8.509 1 9.593 1 10.956v2.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 22 8.593 22 9.956 22h2.497a1 1 0 1 0 0-2H10c-1.106 0-1.96 0-2.654-.031A12.25 12.25 0 0 1 18.247 9.314c.625-.064 1.357-.064 2.692-.064h.054C21 9.755 21 10.331 21 11v2c0 .623 0 1.168-.006 1.656a1 1 0 0 0 .06.352q.052.097.096.197a1 1 0 0 0 1.844-.525q.008-.75.006-1.675v-2.049c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583C16.491 2 15.407 2 14.044 2zM7.5 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clipRule="evenodd" fill="currentColor"/><path d="M15 18.999c0 .357.12.716.358 1.01a14 14 0 0 0 2.452 2.361 1 1 0 0 0 1.2-1.6 12 12 0 0 1-.927-.771H22a1 1 0 1 0 0-2h-3.916q.443-.41.926-.772a1 1 0 0 0-1.2-1.6 14 14 0 0 0-2.452 2.362 1.6 1.6 0 0 0-.358 1.01Z" fill="currentColor"/>
    </svg>
  );
}
