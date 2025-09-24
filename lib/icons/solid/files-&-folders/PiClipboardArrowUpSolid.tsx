import React from 'react';

/**
 * PiClipboardArrowUpSolid icon from the solid style in files-&-folders category.
 */
interface PiClipboardArrowUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiClipboardArrowUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'clipboard-arrow-up icon',
  ...props
}: PiClipboardArrowUpSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M9.907 1h4.186c.369 0 .731-.001 1.054.085a2.5 2.5 0 0 1 1.768 1.768q.036.138.054.284a4.4 4.4 0 0 1 1.301.408 5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.962.058.707.058 1.582.058 2.665v5.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 23 14.727 23 13.643 23h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 17.6 3 16.727 3 15.643v-5.286c0-1.083 0-1.958.058-2.665.06-.73.185-1.37.487-1.962A5 5 0 0 1 5.73 3.545a4.4 4.4 0 0 1 1.3-.408q.018-.146.055-.284a2.5 2.5 0 0 1 1.768-1.768C9.176 1 9.538 1 9.907 1Zm-.408 2.006c-.107.004-.132.012-.128.011a.5.5 0 0 0-.354.354s-.007.028-.012.128C9 3.61 9 3.759 9 4v.038c0 .228 0 .367.006.472.005.1.012.123.011.12a.5.5 0 0 0 .354.353.6.6 0 0 0 .128.012C9.61 5 9.759 5 10 5h4c.242 0 .39 0 .501-.005.107-.005.132-.013.128-.012a.5.5 0 0 0 .354-.353c-.001.003.006-.02.011-.12.005-.105.006-.244.006-.472V4c0-.241 0-.39-.005-.501-.005-.107-.013-.132-.012-.128a.5.5 0 0 0-.354-.354c.004.001-.021-.007-.128-.011C14.39 3 14.241 3 14 3h-4c-.242 0-.39 0-.501.006Zm3.697 10.532a9 9 0 0 0-.196-.255V17a1 1 0 1 1-2 0v-3.717q-.1.126-.196.255a1 1 0 0 1-1.608-1.19 11 11 0 0 1 1.98-2.059 1.32 1.32 0 0 1 1.647 0c.745.597 1.411 1.29 1.981 2.06a1 1 0 0 1-1.608 1.19Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
