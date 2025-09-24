import React from 'react';

/**
 * PiPlaystationSolid icon from the solid style in apps-&-social category.
 */
interface PiPlaystationSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaystationSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'playstation icon',
  ...props
}: PiPlaystationSolidProps): React.ReactElement {
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
      <path d="M10.41 1.192a1 1 0 0 1 .895-.144l5.568 1.78c2.84.857 4.183 3.52 4.165 5.744-.009 1.12-.362 2.272-1.199 3.056-.88.824-2.121 1.08-3.526.695l-.048-.014-1.576-.517a1 1 0 0 1-.689-.973V5a1 1 0 1 0-2 0v17a1 1 0 1 1-2 0V2a1 1 0 0 1 .41-.808Zm-1.957 13.59a1 1 0 1 0-.825-1.82l-4.174 1.89c-1.143.444-1.987 1.128-2.314 2.057-.342.967-.023 1.907.547 2.592 1.109 1.335 3.358 2.034 5.626 1.3l.069-.024 1.035-.422a1 1 0 1 0-.754-1.852l-1 .407c-1.577.496-2.921-.064-3.438-.687-.246-.295-.248-.512-.2-.649.06-.167.305-.533 1.173-.865l.055-.023zm12.05 5.32c1.183-.419 2.064-1.103 2.38-2.072.321-.987-.052-1.929-.631-2.6-1.138-1.318-3.415-2.074-5.636-1.288l-2.961 1.082a1 1 0 1 0 .687 1.879l2.945-1.078c1.463-.514 2.865.034 3.45.712.283.326.282.555.244.673-.045.137-.256.489-1.131.802l-6.155 1.962a1 1 0 0 0 .607 1.905l6.17-1.967z" fill="currentColor"/>
    </svg>
  );
}
