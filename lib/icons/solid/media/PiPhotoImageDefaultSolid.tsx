import React from 'react';

/**
 * PiPhotoImageDefaultSolid icon from the solid style in media category.
 */
interface PiPhotoImageDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhotoImageDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'photo-image-default icon',
  ...props
}: PiPhotoImageDefaultSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M9.956 2c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C1 8.509 1 9.593 1 10.956v2.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 22 8.593 22 9.956 22h4.088c1.363 0 2.447 0 3.321-.071.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321v-2.088c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583C16.491 2 15.407 2 14.044 2zm11.037 7.25h-.054c-1.335 0-2.067 0-2.692.064A12.25 12.25 0 0 0 7.346 19.97c.694.029 1.548.03 2.654.03h4c1.417 0 2.419 0 3.203-.065.771-.063 1.243-.182 1.613-.371a4 4 0 0 0 1.748-1.748c.189-.37.308-.841.371-1.613C21 15.419 21 14.417 21 13v-2c0-.669 0-1.245-.007-1.75ZM7.5 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
