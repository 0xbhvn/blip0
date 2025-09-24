import React from 'react';

/**
 * PiAwardMedalSolid icon from the solid style in general category.
 */
interface PiAwardMedalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAwardMedalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'award-medal icon',
  ...props
}: PiAwardMedalSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12 1a8 8 0 0 0-5.468 13.84l-1.51 6.948a1 1 0 0 0 1.506 1.061c2.043-1.27 3.789-1.847 5.472-1.847s3.429.577 5.472 1.847a1 1 0 0 0 1.505-1.061l-1.509-6.949A8 8 0 0 0 12 1ZM7.44 20.081l.865-3.984A8 8 0 0 0 12 17c1.332 0 2.59-.326 3.695-.903l.865 3.984c-1.534-.706-3.032-1.08-4.56-1.08s-3.026.374-4.56 1.08Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
