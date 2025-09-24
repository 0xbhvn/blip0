import React from 'react';

/**
 * PiPhotoImageArrowUpSolid icon from the solid style in media category.
 */
interface PiPhotoImageArrowUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhotoImageArrowUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'photo-image-arrow-up icon',
  ...props
}: PiPhotoImageArrowUpSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M9.956 2c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C1 8.509 1 9.593 1 10.956v2.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 22 8.593 22 9.956 22h2.724a1 1 0 1 0 0-2H10c-1.106 0-1.96 0-2.654-.031A12.25 12.25 0 0 1 18.247 9.314c.625-.064 1.357-.064 2.692-.064h.054C21 9.755 21 10.331 21 11v2.355a1 1 0 0 0 .285.7A1 1 0 0 0 23 13.356v-2.4c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583C16.491 2 15.407 2 14.044 2zM7.5 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clipRule="evenodd" fill="currentColor"/><path d="M19 14.999c-.358 0-.716.12-1.01.357a14 14 0 0 0-2.361 2.452 1 1 0 1 0 1.6 1.2q.362-.483.77-.926v3.916a1 1 0 1 0 2 0v-3.916q.41.443.772.926a1 1 0 0 0 1.6-1.2 14 14 0 0 0-2.361-2.451 1.6 1.6 0 0 0-1.01-.358Z" fill="currentColor"/>
    </svg>
  );
}
