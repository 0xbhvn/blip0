import React from 'react';

/**
 * PiPatreonOldLogoSolid icon from the solid style in apps-&-social category.
 */
interface PiPatreonOldLogoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPatreonOldLogoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'patreon-old-logo icon',
  ...props
}: PiPatreonOldLogoSolidProps): React.ReactElement {
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
      <path d="M6.474 2c-.21 0-.415 0-.59.012-.19.013-.415.043-.65.14a2 2 0 0 0-1.082 1.083c-.097.234-.127.46-.14.65C4 4.059 4 4.263 4 4.473v15.054c0 .21 0 .414.012.588.013.19.043.416.14.65a2 2 0 0 0 1.083 1.083c.234.097.46.127.65.14.174.012.378.012.588.012h.053c.21 0 .415 0 .59-.012a2 2 0 0 0 .65-.14 2 2 0 0 0 1.082-1.083 2 2 0 0 0 .14-.65C9 19.941 9 19.737 9 19.527V4.473c0-.21 0-.415-.012-.59a2 2 0 0 0-.14-.65 2 2 0 0 0-1.083-1.082 2 2 0 0 0-.65-.14C6.941 2 6.737 2 6.527 2z" fill="currentColor"/><path d="M16.15 2a6.15 6.15 0 1 0 0 12.3 6.15 6.15 0 0 0 0-12.3Z" fill="currentColor"/>
    </svg>
  );
}
