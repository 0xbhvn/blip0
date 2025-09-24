import React from 'react';

/**
 * PiInboxFilledSolid icon from the solid style in communication category.
 */
interface PiInboxFilledSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInboxFilledSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'inbox-filled icon',
  ...props
}: PiInboxFilledSolidProps): JSX.Element {
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
      <path d="M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M11 9a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" fill="currentColor"/><path fillRule="evenodd" d="M14.446 3c1.198 0 2.026 0 2.784.247a5 5 0 0 1 1.806 1.048c.591.536 1.002 1.254 1.595 2.295l.66 1.154 1.182 2.068c.131.23.247.432.331.653a3 3 0 0 1 .16.6c.036.234.036.467.036.732v.247c0 1.363 0 2.447-.071 3.322-.074.895-.227 1.659-.583 2.358a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.358.583-.875.071-1.96.071-3.322.071H9.956c-1.363 0-2.447 0-3.321-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.358C1 14.49 1 13.406 1 12.044v-.248c0-.264 0-.497.036-.73a3 3 0 0 1 .16-.601c.084-.22.2-.423.33-.653l1.182-2.065.66-1.157c.594-1.04 1.005-1.76 1.596-2.295A5 5 0 0 1 6.77 3.247C7.529 2.999 8.356 3 9.554 3zM9.714 5c-1.42 0-1.906.012-2.324.148a3 3 0 0 0-1.083.629c-.326.295-.577.71-1.281 1.944L3.723 10h3.354C8.139 10 9 10.861 9 11.923 9 13.07 9.93 14 11.077 14h1.846C14.07 14 15 13.07 15 11.923c0-1.062.861-1.923 1.923-1.923h3.354l-1.303-2.28c-.704-1.233-.955-1.648-1.28-1.943a3 3 0 0 0-1.084-.629C16.192 5.012 15.707 5 14.286 5z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
