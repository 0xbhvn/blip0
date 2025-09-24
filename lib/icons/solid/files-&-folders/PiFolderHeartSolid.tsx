import React from 'react';

/**
 * PiFolderHeartSolid icon from the solid style in files-&-folders category.
 */
interface PiFolderHeartSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderHeartSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-heart icon',
  ...props
}: PiFolderHeartSolidProps): JSX.Element {
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
      <path d="M12.825 11.746a.5.5 0 0 1 .216-.186.8.8 0 0 1 .345-.06c.604.009 1.114.493 1.114 1.042 0 .75-.514 1.518-1.275 2.18a6.6 6.6 0 0 1-1.225.839 6.6 6.6 0 0 1-1.225-.839c-.761-.662-1.275-1.43-1.275-2.18 0-.56.52-1.042 1.1-1.042.152 0 .271.026.36.065a.5.5 0 0 1 .215.181 1 1 0 0 0 1.65 0Z" fill="currentColor"/><path fillRule="evenodd" d="M8.806 2c.377 0 .758-.001 1.118.108a2.5 2.5 0 0 1 .86.46c.291.24.502.557.71.871l.05.075.576.863c.295.442.335.485.365.51a.5.5 0 0 0 .173.092c.037.011.095.021.626.021h2.359c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.593.428 1.233.487 1.962.058.707.058 1.582.058 2.665v2.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.6 22 16.727 22 15.643 22H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 16.6 1 15.727 1 14.643V9.357c0-1.083 0-1.958.058-2.665.06-.73.185-1.37.487-1.962A5 5 0 0 1 3.73 2.545c.592-.302 1.233-.427 1.961-.487C6.4 2 7.273 2 8.357 2zm4.608 7.5a2.77 2.77 0 0 0-1.417.35A2.84 2.84 0 0 0 10.6 9.5c-1.52 0-3.1 1.22-3.1 3.042 0 1.631 1.061 2.905 1.962 3.69.47.408.952.733 1.348.958.197.113.383.207.546.277a3 3 0 0 0 .252.094c.062.019.213.064.392.064.178 0 .33-.045.392-.064a3 3 0 0 0 .252-.094c.163-.07.35-.164.546-.277a8.5 8.5 0 0 0 1.348-.959c.9-.784 1.962-2.058 1.962-3.69 0-1.832-1.59-3.02-3.086-3.04Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
