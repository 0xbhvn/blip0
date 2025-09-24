import React from 'react';

/**
 * PiPhotoImagePortraitSolid icon from the solid style in media category.
 */
interface PiPhotoImagePortraitSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhotoImagePortraitSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'photo-image-portrait icon',
  ...props
}: PiPhotoImagePortraitSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M11.956 1c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C3 7.509 3 8.593 3 9.956v4.088c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583.874.071 1.958.071 3.321.071h.088c1.363 0 2.447 0 3.321-.071.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359.071-.874.071-1.958.071-3.321V9.956c0-1.363 0-2.447-.071-3.321-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583C14.491 1 13.407 1 12.044 1zM8.293 20.88q.229.033.504.055C9.581 21 10.583 21 12 21s2.419 0 3.203-.065c.772-.063 1.243-.182 1.613-.371a4 4 0 0 0 1.748-1.748c.189-.37.308-.841.371-1.613C19 16.419 19 15.417 19 14V9.343c-.892.067-1.63.183-2.31.383a11.75 11.75 0 0 0-7.964 7.964c-.262.891-.38 1.885-.433 3.19ZM9.5 5.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
