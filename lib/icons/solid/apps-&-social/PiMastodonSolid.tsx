import React from 'react';

/**
 * PiMastodonSolid icon from the solid style in apps-&-social category.
 */
interface PiMastodonSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMastodonSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mastodon icon',
  ...props
}: PiMastodonSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M19.585 3.815c-.758-.867-1.986-1.414-3.263-1.753-1.311-.348-2.827-.515-4.322-.516-1.495 0-3.01.168-4.322.515-1.277.339-2.505.886-3.263 1.753-.778.888-1.217 1.709-1.434 2.768-.202.983-.203 2.156-.203 3.68v.022l.027 1.178c.02 3.453.816 5.961 2.15 7.702 1.345 1.754 3.154 2.622 4.98 2.938 1.808.314 3.65.093 5.16-.334 1.472-.415 2.796-1.073 3.476-1.777a1 1 0 0 0-.788-1.693c-2.064.143-3.718.07-5.002-.177a16.4 16.4 0 0 0 2.536-.19c1.544-.247 3.093-.783 4.212-1.87a4.7 4.7 0 0 0 1.3-2.133c.276-.909.393-2.07.393-3.665 0-1.524-.001-2.697-.203-3.68-.217-1.06-.656-1.88-1.434-2.768ZM10 5.108c-1.776 0-3 1.595-3 3.278v4.722a1 1 0 1 0 2 0V8.386c0-.832.566-1.278 1-1.278s1 .446 1 1.278v2.926a1 1 0 1 0 2 0V8.386c0-.832.566-1.278 1-1.278s1 .446 1 1.278v4.722a1 1 0 1 0 2 0V8.386c0-1.683-1.224-3.278-3-3.278a2.8 2.8 0 0 0-2 .83 2.8 2.8 0 0 0-2-.83Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
