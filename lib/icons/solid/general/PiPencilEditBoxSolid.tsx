import React from 'react';

/**
 * PiPencilEditBoxSolid icon from the solid style in general category.
 */
interface PiPencilEditBoxSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPencilEditBoxSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pencil-edit-box icon',
  ...props
}: PiPencilEditBoxSolidProps): React.ReactElement {
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
      <path d="M22.537 3.398a6.9 6.9 0 0 0-2.017-2.004 2.46 2.46 0 0 0-3.079.331l-9.396 9.45-.047.047c-.2.2-.402.403-.554.648a2.5 2.5 0 0 0-.295.691c-.072.28-.079.566-.086.85L7 15.97a1 1 0 0 0 .998 1.025l2.538.004h.068c.293.001.59.002.88-.068.254-.06.497-.161.72-.298.253-.156.462-.367.668-.574h.001l.05-.05 9.322-9.376c.791-.795 1.021-2.067.381-3.098l-.073-.113-.005-.008z" fill="currentColor"/><path d="M5.184 5.436c.37-.189.842-.308 1.613-.371L10 5a1 1 0 1 0 0-2h-.044c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359C1 9.509 1 10.593 1 11.956v2.088c0 1.363 0 2.447.071 3.322.074.895.227 1.659.583 2.358a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 23 8.593 23 9.956 23h2.088c1.363 0 2.447 0 3.321-.071.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.358.071-.875.071-1.96.071-3.322V14a1 1 0 1 0-2 0c0 1.417 0 2.419-.065 3.203-.063.771-.182 1.243-.371 1.613a4 4 0 0 1-1.748 1.748c-.37.189-.841.308-1.613.371C14.419 21 13.417 21 12 21h-2c-1.417 0-2.419 0-3.203-.065-.771-.063-1.243-.182-1.613-.371a4 4 0 0 1-1.748-1.748c-.189-.37-.308-.841-.371-1.613C3 16.419 3 15.417 3 14v-2c0-1.417 0-2.419.065-3.203.063-.771.182-1.243.371-1.613a4 4 0 0 1 1.748-1.748Z" fill="currentColor"/>
    </svg>
  );
}
