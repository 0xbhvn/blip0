import React from 'react';

/**
 * PiAutomationSolid icon from the solid style in development category.
 */
interface PiAutomationSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAutomationSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'automation icon',
  ...props
}: PiAutomationSolidProps): JSX.Element {
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
      <path d="M18 1.85A4.15 4.15 0 0 0 13.971 5H9a7 7 0 0 0-.092 14q-.407.37-.847.7a1 1 0 0 0 1.2 1.6A13.6 13.6 0 0 0 11.65 19a1.586 1.586 0 0 0 0-2 13.5 13.5 0 0 0-2.39-2.3 1 1 0 1 0-1.2 1.6q.441.33.846.7A5 5 0 0 1 9 7h4.971a4.152 4.152 0 0 0 8.179-1A4.15 4.15 0 0 0 18 1.85Z" fill="currentColor"/><path d="M17.968 14c-.439 0-.817 0-1.13.021-.33.023-.66.072-.986.207a3 3 0 0 0-1.624 1.624 3.1 3.1 0 0 0-.207.986c-.021.313-.021.691-.021 1.13v.064c0 .439 0 .817.021 1.13.023.33.072.66.207.986a3 3 0 0 0 1.624 1.624c.326.135.656.184.986.207.313.021.691.021 1.13.021h.064c.439 0 .817 0 1.13-.021.33-.023.66-.072.986-.207a3 3 0 0 0 1.624-1.624c.135-.326.184-.656.207-.985.021-.314.021-.692.021-1.13v-.065c0-.439 0-.817-.021-1.13a3.1 3.1 0 0 0-.207-.986 3 3 0 0 0-1.624-1.623 3 3 0 0 0-.986-.208c-.313-.02-.691-.02-1.13-.02z" fill="currentColor"/>
    </svg>
  );
}
