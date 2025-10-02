import React from 'react';

/**
 * PiFile02PdfFormatSolid icon from the solid style in files-&-folders category.
 */
interface PiFile02PdfFormatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02PdfFormatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-pdf-format icon',
  ...props
}: PiFile02PdfFormatSolidProps): React.ReactElement {
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
      <path d="M3 6a5 5 0 0 1 5-5h1.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C13 3.361 13 3.943 13 4.8v.039c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.039c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819l.007.089H3z" fill="currentColor"/><path d="M14.664 1.4c.175.422.253.869.292 1.348.044.54.044 1.205.044 2.01V4.8c0 .576 0 .948.024 1.232.022.271.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.062.422.085.283.023.656.024 1.232.024h.041c.805 0 1.47 0 2.01.044.48.039.926.116 1.348.292A9.02 9.02 0 0 0 14.664 1.4Z" fill="currentColor"/><path fillRule="evenodd" d="M3 13a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h.5a3.5 3.5 0 1 0 0-7zm1.5 5H4v-3h.5a1.5 1.5 0 0 1 0 3Z" clipRule="evenodd" fill="currentColor"/><path fillRule="evenodd" d="M10 13a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h.5a4.5 4.5 0 1 0 0-9zm3 4.5a2.5 2.5 0 0 1-2 2.45v-4.9a2.5 2.5 0 0 1 2 2.45Z" clipRule="evenodd" fill="currentColor"/><path d="M17 13a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-2h3a1 1 0 1 0 0-2h-3v-2h3a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
