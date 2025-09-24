import React from 'react';

/**
 * PiMedicalCrossSolid icon from the solid style in medical category.
 */
interface PiMedicalCrossSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicalCrossSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'medical-cross icon',
  ...props
}: PiMedicalCrossSolidProps): React.ReactElement {
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
      <path d="M2.228 9.852a3 3 0 0 0-.207.986C2 11.15 2 11.529 2 11.968v.064c0 .439 0 .817.021 1.13.023.33.072.66.207.986a3 3 0 0 0 1.624 1.624c.326.135.656.184.986.207.313.021.691.021 1.13.021H8v2.032c0 .439 0 .817.021 1.13.023.33.072.66.207.986a3 3 0 0 0 1.624 1.624c.326.135.656.184.986.207.313.021.691.021 1.13.021h.064c.439 0 .817 0 1.13-.021.33-.023.66-.072.986-.207a3 3 0 0 0 1.624-1.624c.135-.326.184-.656.207-.986.021-.313.021-.691.021-1.13V16h2.032c.439 0 .817 0 1.13-.021.33-.023.66-.072.986-.207a3 3 0 0 0 1.624-1.624c.135-.326.184-.656.207-.986.021-.313.021-.691.021-1.13v-.064c0-.439 0-.817-.021-1.13a3.1 3.1 0 0 0-.207-.986 3 3 0 0 0-1.624-1.624 3 3 0 0 0-.986-.207C18.85 8 18.471 8 18.032 8H16V5.968c0-.439 0-.817-.021-1.13a3.1 3.1 0 0 0-.207-.986 3 3 0 0 0-1.624-1.624 3 3 0 0 0-.986-.207C12.85 2 12.471 2 12.032 2h-.064c-.439 0-.817 0-1.13.021a3 3 0 0 0-.986.207 3 3 0 0 0-1.624 1.624 3 3 0 0 0-.207.986C8 5.15 8 5.529 8 5.968V8H5.968c-.439 0-.817 0-1.13.021a3 3 0 0 0-.986.207 3 3 0 0 0-1.624 1.624Z" fill="currentColor"/>
    </svg>
  );
}
