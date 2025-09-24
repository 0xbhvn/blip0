import React from 'react';

/**
 * PiFolderQuestionMarkSolid icon from the solid style in files-&-folders category.
 */
interface PiFolderQuestionMarkSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderQuestionMarkSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-question-mark icon',
  ...props
}: PiFolderQuestionMarkSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8.806 2c.377 0 .758-.001 1.118.108a2.5 2.5 0 0 1 .86.46c.291.24.502.557.71.871l.05.075.576.863c.295.442.335.485.365.51a.5.5 0 0 0 .173.092c.037.011.095.021.626.021h2.359c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.962.058.707.058 1.582.058 2.665v2.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.6 22 16.727 22 15.643 22H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 16.6 1 15.727 1 14.643V9.357c0-1.083 0-1.958.058-2.665.06-.73.185-1.37.487-1.962A5 5 0 0 1 3.73 2.545c.592-.302 1.233-.427 1.961-.487C6.4 2 7.273 2 8.357 2zm2.533 9.172a1.248 1.248 0 0 1 1.88 1.078v.002c0 .218-.177.52-.678.854a4.3 4.3 0 0 1-.88.443l-.008.003a1 1 0 0 0 .634 1.897l-.316-.949.316.949h.002v-.001l.004-.001.01-.004.028-.01a5 5 0 0 0 .398-.16c.245-.109.58-.275.92-.503.623-.415 1.57-1.238 1.57-2.517a3.248 3.248 0 0 0-6.312-1.083 1 1 0 0 0 1.886.664 1.25 1.25 0 0 1 .546-.662ZM12 16.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
