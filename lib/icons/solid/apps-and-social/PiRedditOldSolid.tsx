import React from 'react';

/**
 * PiRedditOldSolid icon from the solid style in apps-&-social category.
 */
interface PiRedditOldSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRedditOldSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'reddit-old icon',
  ...props
}: PiRedditOldSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M18.08 2.37a2.399 2.399 0 1 1-.366 1.966l-2.718-.493a.5.5 0 0 0-.544.284l-1.019 2.6c1.765.201 3.393.771 4.747 1.622a3.166 3.166 0 1 1 3.668 4.9q.15.68.15 1.396c0 4.638-4.725 8-10 8-5.273 0-9.999-3.362-9.999-8q.001-.716.151-1.397a3.167 3.167 0 1 1 3.669-4.9c1.543-.969 3.44-1.573 5.49-1.684l1.288-3.285.012-.03a2.5 2.5 0 0 1 2.745-1.474zm-9.581 9.275a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm-6.406 4.673a1 1 0 1 0-1.378 1.449c.966.92 2.593 1.417 4.281 1.417 1.689 0 3.316-.498 4.282-1.417a1 1 0 0 0-1.378-1.449c-.468.445-1.522.866-2.904.866s-2.435-.421-2.903-.866Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
