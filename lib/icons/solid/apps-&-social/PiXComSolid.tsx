import React from 'react';

/**
 * PiXComSolid icon from the solid style in apps-&-social category.
 */
interface PiXComSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiXComSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'x-com icon',
  ...props
}: PiXComSolidProps): JSX.Element {
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
      <path d="M8.563 3.092C8.247 2.999 7.916 3 7.586 3H5.953c-.307 0-.595 0-.829.021-.23.022-.577.074-.88.306-.369.285-.594.72-.612 1.185-.015.381.142.694.259.895.117.203.284.438.461.688L9.4 13.22l-5.501 6.287a.9.9 0 1 0 1.355 1.185l5.216-5.961 3.526 4.978.045.064c.19.268.381.54.64.743.225.178.482.311.758.392.315.093.646.092.976.092h1.634c.306 0 .595 0 .828-.021.231-.022.578-.074.88-.306.37-.285.594-.72.612-1.185.016-.381-.142-.694-.258-.895-.118-.203-.285-.438-.462-.688L14.3 10.353l5.128-5.86a.9.9 0 0 0-1.354-1.185L13.23 8.843l-3.224-4.552-.045-.063c-.19-.27-.38-.54-.639-.744a2.3 2.3 0 0 0-.758-.392Z" fill="currentColor"/>
    </svg>
  );
}
