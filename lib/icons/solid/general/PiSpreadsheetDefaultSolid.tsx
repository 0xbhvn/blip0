import React from 'react';

/**
 * PiSpreadsheetDefaultSolid icon from the solid style in general category.
 */
interface PiSpreadsheetDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpreadsheetDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'spreadsheet-default icon',
  ...props
}: PiSpreadsheetDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9.357 2h5.286c1.084 0 1.958 0 2.666.058.728.06 1.369.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.592.428 1.233.487 1.961q.03.37.042.802a.494.494 0 0 1-.496.507H2.512a.494.494 0 0 1-.496-.507q.013-.432.042-.802c.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.73 2.544c.592-.302 1.232-.428 1.961-.487C7.4 2 8.273 2 9.357 2ZM2.5 10a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5zm-.02 7a.41.41 0 0 0-.41.443c.064.673.191 1.27.475 1.827a5 5 0 0 0 2.185 2.185c.556.284 1.154.411 1.827.475q.427.04.936.054A.494.494 0 0 0 8 21.488V17.5a.5.5 0 0 0-.5-.5zM10 21.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zm6-.012c0 .279.228.504.507.496q.509-.014.936-.054c.673-.064 1.27-.192 1.827-.475a5 5 0 0 0 2.185-2.185c.283-.556.411-1.154.475-1.827a.407.407 0 0 0-.41-.443H16.5a.5.5 0 0 0-.5.5zM21.5 15a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5zm-11 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
