import React from 'react';

/**
 * PiShare02Solid icon from the solid style in general category.
 */
interface PiShare02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShare02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'share-02 icon',
  ...props
}: PiShare02SolidProps): JSX.Element {
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
      <path d="M12.002 2h-.004c-.45 0-.885.16-1.23.448a21.3 21.3 0 0 0-3.576 3.82 1 1 0 0 0 .907 1.583q.57-.059 1.11-.12h.001A38 38 0 0 1 11 7.555V16a1 1 0 1 0 2 0V7.555c.586.039 1.176.106 1.79.175q.54.063 1.112.121a1 1 0 0 0 .906-1.584 21.3 21.3 0 0 0-3.575-3.818A1.92 1.92 0 0 0 12.002 2Z" fill="currentColor"/><path d="M4 13a1 1 0 1 0-2 0v1.643c0 1.083 0 1.958.058 2.665.06.73.185 1.37.487 1.962a5 5 0 0 0 2.185 2.185c.593.302 1.233.428 1.962.487C7.399 22 8.274 22 9.357 22h5.286c1.084 0 1.958 0 2.665-.058.73-.06 1.37-.185 1.962-.487a5 5 0 0 0 2.185-2.185c.302-.593.428-1.233.487-1.962.058-.707.058-1.582.058-2.665V13a1 1 0 1 0-2 0v1.6c0 1.136 0 1.929-.051 2.546-.05.605-.142.953-.276 1.216a3 3 0 0 1-1.31 1.31c-.264.135-.612.227-1.217.277-.617.05-1.41.051-2.546.051H9.4c-1.136 0-1.929 0-2.546-.051-.605-.05-.953-.142-1.216-.276a3 3 0 0 1-1.311-1.311c-.134-.264-.226-.611-.276-1.216C4.001 16.529 4 15.736 4 14.6z" fill="currentColor"/>
    </svg>
  );
}
