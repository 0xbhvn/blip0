import React from 'react';

/**
 * PiFolderGitSolid icon from the solid style in files-&-folders category.
 */
interface PiFolderGitSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFolderGitSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'folder-git icon',
  ...props
}: PiFolderGitSolidProps): React.ReactElement {
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
      <path d="M9.924 2.108C9.564 1.998 9.184 2 8.806 2h-.449C7.273 2 6.4 2 5.691 2.058c-.728.06-1.369.185-1.961.487A5 5 0 0 0 1.545 4.73c-.302.593-.428 1.233-.487 1.962C1 7.399 1 8.274 1 9.357v5.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C6.4 22 7.273 22 8.357 22H10v-6a5 5 0 1 1 7.002-1.002A4.98 4.98 0 0 1 20 14c1.126 0 2.164.372 3 1v-2.643c0-1.083 0-1.958-.058-2.665-.06-.73-.185-1.37-.487-1.962a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.427-1.961-.487C17.6 5 16.727 5 15.643 5h-2.359c-.531 0-.589-.01-.626-.021a.5.5 0 0 1-.173-.093c-.03-.024-.07-.067-.365-.51l-.575-.862-.05-.075c-.21-.314-.42-.631-.71-.87a2.5 2.5 0 0 0-.861-.46Z" fill="currentColor"/><path d="M13 9a3 3 0 0 0-1 5.83V22a1 1 0 1 0 2 0v-3.5a5.95 5.95 0 0 0 3.151 1.442 3.001 3.001 0 1 0 .048-2.018 3.93 3.93 0 0 1-3.123-3.123A3.001 3.001 0 0 0 13 9Z" fill="currentColor"/>
    </svg>
  );
}
