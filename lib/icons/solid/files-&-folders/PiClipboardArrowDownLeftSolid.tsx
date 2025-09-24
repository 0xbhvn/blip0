import React from 'react';

/**
 * PiClipboardArrowDownLeftSolid icon from the solid style in files-&-folders category.
 */
interface PiClipboardArrowDownLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiClipboardArrowDownLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'clipboard-arrow-down-left icon',
  ...props
}: PiClipboardArrowDownLeftSolidProps): JSX.Element {
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
      <g fill="currentColor" clipPath="url(#a)"><path fillRule="evenodd" d="M10 1h-.093c-.369 0-.731-.001-1.054.085a2.5 2.5 0 0 0-1.768 1.768 2 2 0 0 0-.054.284 4.4 4.4 0 0 0-1.3.408A5 5 0 0 0 3.544 5.73c-.302.593-.428 1.233-.487 1.962C3 8.399 3 9.274 3 10.357v5.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C8.4 23 9.273 23 10.357 23h1.314a3.32 3.32 0 0 1 .057-4.073h0a13 13 0 0 1 2.432-2.34A3 3 0 0 1 18.773 18H20c.333 0 .654.054.954.155.046-.68.046-1.506.046-2.512v-5.286c0-1.083 0-1.958-.058-2.665-.06-.73-.185-1.37-.487-1.962a5 5 0 0 0-2.185-2.185 4.4 4.4 0 0 0-1.3-.408 2 2 0 0 0-.055-.284 2.5 2.5 0 0 0-1.768-1.768C14.824 1 14.462 1 14.093 1zm-.63 2.017c-.003.001.022-.007.129-.011C9.61 3 9.759 3 10 3h4c.242 0 .39 0 .501.006.107.004.132.012.128.011a.5.5 0 0 1 .354.354c-.001-.004.007.021.012.128C15 3.61 15 3.759 15 4v.038c0 .228 0 .367-.006.472-.005.1-.012.123-.011.12a.5.5 0 0 1-.354.353.6.6 0 0 1-.128.012C14.39 5 14.241 5 14 5h-4c-.242 0-.39 0-.501-.005-.107-.005-.132-.013-.128-.012a.5.5 0 0 1-.354-.353c.001.003-.006-.02-.011-.12A11 11 0 0 1 9 4.039V4c0-.241 0-.39.005-.501.005-.1.012-.129.012-.129a.5.5 0 0 1 .354-.353Z" clipRule="evenodd" fill="currentColor"/><path d="M16.538 19.804a1 1 0 0 0-1.19-1.608c-.77.57-1.462 1.236-2.059 1.98a1.32 1.32 0 0 0 0 1.647c.597.745 1.29 1.411 2.06 1.981a1 1 0 0 0 1.19-1.608 9 9 0 0 1-.256-.196H20a1 1 0 1 0 0-2h-3.717q.125-.1.255-.196Z" fill="currentColor"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z" fill="currentColor"/></clipPath></defs>
    </svg>
  );
}
