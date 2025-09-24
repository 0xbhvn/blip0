import React from 'react';

/**
 * PiIdCardSolid icon from the solid style in users category.
 */
interface PiIdCardSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiIdCardSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'id-card icon',
  ...props
}: PiIdCardSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M22 8.759v6.481c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 16.71 2 16.046 2 15.242V8.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 3 6.954 3 7.758 3h8.483c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564C22 7.29 22 7.955 22 8.759ZM9.432 16H7.568c-.252 0-.498 0-.706-.017a2 2 0 0 1-.77-.201 2 2 0 0 1-.874-.874 2 2 0 0 1-.201-.77C5 13.93 5 13.684 5 13.432v-2.864c0-.252 0-.498.017-.706a2 2 0 0 1 .201-.77 2 2 0 0 1 .874-.874 2 2 0 0 1 .77-.201C7.07 8 7.316 8 7.568 8h1.864c.252 0 .498 0 .706.017.229.019.499.063.77.201a2 2 0 0 1 .874.874c.138.271.182.541.201.77.017.208.017.454.017.706v2.864c0 .252 0 .498-.017.706a2 2 0 0 1-.201.77 2 2 0 0 1-.874.874 2 2 0 0 1-.77.201C9.93 16 9.684 16 9.432 16ZM13 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm2 3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
