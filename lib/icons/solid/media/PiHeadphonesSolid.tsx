import React from 'react';

/**
 * PiHeadphonesSolid icon from the solid style in media category.
 */
interface PiHeadphonesSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadphonesSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'headphones icon',
  ...props
}: PiHeadphonesSolidProps): React.ReactElement {
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
      <path d="M4.362 11.717a3.4 3.4 0 0 0-.864.384 8.512 8.512 0 0 1 17.004 0 3.38 3.38 0 0 0-5.042 1.932l-1.05 3.657a3.378 3.378 0 1 0 6.495 1.862l1.042-3.633a10.5 10.5 0 0 0 .564-3.407C22.512 6.706 17.806 2 12 2S1.488 6.706 1.488 12.512c0 1.19.198 2.337.564 3.406l1.042 3.634A3.378 3.378 0 1 0 9.59 17.69l-1.05-3.657a3.38 3.38 0 0 0-4.177-2.316Z" fill="currentColor"/>
    </svg>
  );
}
