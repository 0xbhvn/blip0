import React from 'react';

/**
 * PiEnvelopeArrowRightSolid icon from the solid style in communication category.
 */
interface PiEnvelopeArrowRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEnvelopeArrowRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'envelope-arrow-right icon',
  ...props
}: PiEnvelopeArrowRightSolidProps): React.ReactElement {
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
      <path d="M14.044 3H9.956c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.379 2.19.47.47 0 0 0 .16.644l6.185 3.935c1.62 1.03 2.23 1.403 2.859 1.548a4 4 0 0 0 1.798 0c.63-.145 1.24-.517 2.86-1.548l6.184-3.936a.47.47 0 0 0 .16-.643 6 6 0 0 0-2.379-2.19c-.7-.356-1.463-.51-2.359-.583C16.491 3 15.407 3 14.044 3Z" fill="currentColor"/><path d="M22.948 8.905a.392.392 0 0 0-.608-.3l-5.668 3.607c-1.402.893-2.317 1.476-3.324 1.708a6 6 0 0 1-2.697 0c-1.006-.232-1.921-.815-3.323-1.708L1.66 8.605a.392.392 0 0 0-.608.3C1 9.73 1 10.702 1 11.872v.172c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 21 8.593 21 9.956 21h3.214A3 3 0 0 1 16 17.001h.62a3 3 0 0 1 4.77-1.972q.753.566 1.43 1.212.073-.417.109-.876c.071-.874.071-1.958.071-3.321v-.172c0-1.17 0-2.143-.052-2.967Z" fill="currentColor"/><path d="M23 20.001c0-.357-.12-.716-.358-1.01a14 14 0 0 0-2.452-2.361 1 1 0 0 0-1.2 1.6q.483.362.927.771H16a1 1 0 1 0 0 2h3.916q-.443.41-.926.772a1 1 0 0 0 1.2 1.6 14 14 0 0 0 2.452-2.362c.238-.294.358-.652.358-1.01Z" fill="currentColor"/>
    </svg>
  );
}
