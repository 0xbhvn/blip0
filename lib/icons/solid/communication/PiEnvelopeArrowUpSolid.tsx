import React from 'react';

/**
 * PiEnvelopeArrowUpSolid icon from the solid style in communication category.
 */
interface PiEnvelopeArrowUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEnvelopeArrowUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'envelope-arrow-up icon',
  ...props
}: PiEnvelopeArrowUpSolidProps): React.ReactElement {
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
      <path d="M14.044 3H9.956c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.379 2.19.47.47 0 0 0 .16.644l6.185 3.935c1.62 1.03 2.23 1.403 2.859 1.548a4 4 0 0 0 1.798 0c.63-.145 1.24-.517 2.86-1.548l6.184-3.936a.47.47 0 0 0 .16-.643 6 6 0 0 0-2.379-2.19c-.7-.356-1.463-.51-2.359-.583C16.491 3 15.407 3 14.044 3Z" fill="currentColor"/><path d="M22.948 8.905a.392.392 0 0 0-.608-.3l-5.668 3.607c-1.402.893-2.317 1.476-3.324 1.708a6 6 0 0 1-2.697 0c-1.006-.232-1.921-.815-3.323-1.708L1.66 8.605a.392.392 0 0 0-.608.3C1 9.73 1 10.702 1 11.872v.172c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 21 8.593 21 9.956 21h4.088c1.179 0 2.15 0 2.956-.046v-.573a3 3 0 0 1-1.972-4.77 16 16 0 0 1 2.703-2.805 3.6 3.6 0 0 1 4.538 0q.374.302.728.627.004-.64.003-1.387v-.174c0-1.17 0-2.143-.052-2.967Z" fill="currentColor"/><path d="M20 14.002c.358 0 .716.12 1.01.358.884.716 1.677 1.54 2.361 2.452a1 1 0 0 1-1.6 1.2 12 12 0 0 0-.771-.927v3.917a1 1 0 0 1-2 0v-3.917q-.41.443-.772.927a1 1 0 1 1-1.6-1.2 14 14 0 0 1 2.362-2.452 1.6 1.6 0 0 1 1.01-.358Z" fill="currentColor"/>
    </svg>
  );
}
