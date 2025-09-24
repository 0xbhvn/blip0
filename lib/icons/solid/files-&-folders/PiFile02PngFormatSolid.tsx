import React from 'react';

/**
 * PiFile02PngFormatSolid icon from the solid style in files-&-folders category.
 */
interface PiFile02PngFormatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02PngFormatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-png-format icon',
  ...props
}: PiFile02PngFormatSolidProps): JSX.Element {
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
      <path d="M3 6a5 5 0 0 1 5-5h1.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C13 3.361 13 3.943 13 4.8v.039c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.039c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819l.007.089H3z" fill="currentColor"/><path d="M14.664 1.4c.175.422.253.869.292 1.348.044.54.044 1.205.044 2.01V4.8c0 .576 0 .948.024 1.232.022.271.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.062.422.085.283.023.656.024 1.232.024h.041c.805 0 1.47 0 2.01.044.48.039.926.116 1.348.292A9.02 9.02 0 0 0 14.664 1.4Z" fill="currentColor"/><path d="M10.868 13.504A1 1 0 0 0 9 14v7a1 1 0 1 0 2 0v-3.234l2.132 3.73A1 1 0 0 0 15 21v-7a1 1 0 1 0-2 0v3.234z" fill="currentColor"/><path fillRule="evenodd" d="M3 13a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h.5a3.5 3.5 0 1 0 0-7zm1.5 5H4v-3h.5a1.5 1.5 0 0 1 0 3Z" clipRule="evenodd" fill="currentColor"/><path d="M18 17.5c0-.782.228-1.448.546-1.894.32-.447.67-.606.954-.606.28 0 .625.155.942.589a1 1 0 0 0 1.616-1.178C21.472 13.608 20.582 13 19.5 13c-1.097 0-1.996.624-2.581 1.444-.587.821-.919 1.905-.919 3.056 0 1.15.332 2.235.919 3.056.585.82 1.484 1.444 2.581 1.444 1.082 0 1.972-.608 2.558-1.411A1 1 0 0 0 22.25 20v-2a1 1 0 0 0-1-1h-.75a1 1 0 0 0-.25 1.968v.67c-.26.263-.526.362-.75.362-.284 0-.635-.16-.954-.606S18 18.282 18 17.5Z" fill="currentColor"/>
    </svg>
  );
}
