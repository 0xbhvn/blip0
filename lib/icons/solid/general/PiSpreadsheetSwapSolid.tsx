import React from 'react';

/**
 * PiSpreadsheetSwapSolid icon from the solid style in general category.
 */
interface PiSpreadsheetSwapSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpreadsheetSwapSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'spreadsheet-swap icon',
  ...props
}: PiSpreadsheetSwapSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M6.691 2.058C7.4 2 8.273 2 9.357 2h5.286c1.084 0 1.958 0 2.666.058.728.06 1.369.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.592.428 1.233.487 1.961q.02.237.03.498v.002c.013.273.02.41-.034.522a.5.5 0 0 1-.219.23C21.61 8 21.468 8 21.184 8H2.816c-.284 0-.426 0-.535-.058a.5.5 0 0 1-.22-.229c-.052-.112-.046-.249-.034-.523q.012-.262.03-.499c.06-.728.186-1.369.488-1.96A5 5 0 0 1 4.73 2.544c.592-.302 1.232-.428 1.961-.487zM2 10.8v3.4c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218c.107.055.247.055.526.055H8.2c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218C9 14.62 9 14.48 9 14.2v-3.4c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218C8.62 10 8.48 10 8.2 10H2.8c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218C2 10.38 2 10.52 2 10.8Zm7 7v3.4c0 .28 0 .42-.056.528a.5.5 0 0 1-.22.218c-.108.054-.247.053-.525.05q-.823 0-1.642-.066c-.673-.064-1.27-.192-1.827-.475a5 5 0 0 1-2.185-2.185c-.284-.556-.411-1.154-.475-1.827A.41.41 0 0 1 2.48 17H8.2c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218C9 17.38 9 17.52 9 17.8Zm10.224-5.526c.226-.182.5-.273.773-.274h.006c.274 0 .547.092.773.274.767.617 1.45 1.336 2.033 2.138A1 1 0 0 1 22 16h-1v2a3 3 0 0 1-3 3h-1.6v1a1.001 1.001 0 0 1-1.518.855 12.6 12.6 0 0 1-2.538-2.011 1.206 1.206 0 0 1 0-1.688 12.6 12.6 0 0 1 2.538-2.011A1 1 0 0 1 16.4 18v1H18a1 1 0 0 0 1-1v-2h-1a1 1 0 0 1-.809-1.588c.58-.8 1.264-1.518 2.033-2.138Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
