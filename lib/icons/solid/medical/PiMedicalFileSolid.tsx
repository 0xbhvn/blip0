import React from 'react';

/**
 * PiMedicalFileSolid icon from the solid style in medical category.
 */
interface PiMedicalFileSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicalFileSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'medical-file icon',
  ...props
}: PiMedicalFileSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M10.956 1h2.088c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 7.509 22 8.593 22 9.956v4.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071h-2.088c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359q-.015-.176-.025-.365H2a1 1 0 1 1 0-2h.001L2 14.044V9.956L2.001 9H2a1 1 0 1 1 0-2h.046q.011-.188.025-.365c.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.509 1 9.593 1 10.956 1ZM13 6.332a1 1 0 1 0-2 0V7.6l-1.098-.634a1 1 0 1 0-1 1.732L10 9.332l-1.098.634a1 1 0 0 0 1 1.732L11 11.064v1.268a1 1 0 1 0 2 0v-1.268l1.098.634a1 1 0 1 0 1-1.732L14 9.332l1.098-.634a1 1 0 1 0-1-1.732L13 7.6zM9 16a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
