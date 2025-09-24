import React from 'react';

/**
 * PiClipboardPrescriptionSolid icon from the solid style in medical category.
 */
interface PiClipboardPrescriptionSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiClipboardPrescriptionSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'clipboard-prescription icon',
  ...props
}: PiClipboardPrescriptionSolidProps): React.ReactElement {
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
      <path d="M9 12v-1h2a.5.5 0 0 1 0 1z" fill="currentColor"/><path fillRule="evenodd" d="M9.907 1h4.186c.369 0 .731-.001 1.054.085a2.5 2.5 0 0 1 1.768 1.768q.036.138.054.284a4.4 4.4 0 0 1 1.301.408 5 5 0 0 1 2.185 2.185c.302.592.428 1.232.487 1.961C21 8.4 21 9.273 21 10.357v5.286c0 1.084 0 1.958-.058 2.666-.06.728-.185 1.369-.487 1.96a5 5 0 0 1-2.185 2.186c-.592.302-1.232.428-1.961.487C15.6 23 14.727 23 13.643 23h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 17.6 3 16.727 3 15.643v-5.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545a4.4 4.4 0 0 1 1.3-.408q.018-.147.055-.284a2.5 2.5 0 0 1 1.768-1.768C9.176 1 9.538 1 9.907 1Zm-.408 2.005c-.107.005-.132.013-.128.012a.5.5 0 0 0-.354.353s-.007.028-.012.129C9 3.61 9 3.759 9 4v.038c0 .227 0 .367.006.472.005.1.012.123.011.12a.5.5 0 0 0 .354.353c-.004-.001.02.007.128.012C9.61 5 9.759 5 10 5h4c.242 0 .39 0 .501-.005.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.354c-.001.004.006-.02.011-.12.005-.104.006-.244.006-.47V4c0-.242 0-.39-.005-.501-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.007-.128-.012C14.39 3 14.241 3 14 3h-4c-.242 0-.39 0-.501.005ZM8 9a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-2h.586l3 3-1.293 1.293a1 1 0 0 0 1.414 1.414L14 18.414l1.293 1.293a1 1 0 0 0 1.414-1.414L15.414 17l1.293-1.293a1 1 0 0 0-1.414-1.414L14 15.586l-1.86-1.86A2.5 2.5 0 0 0 11 9z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
