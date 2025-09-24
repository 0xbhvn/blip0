import React from 'react';

/**
 * PiBallCricketStroke icon from the stroke style in sports category.
 */
interface PiBallCricketStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBallCricketStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ball-cricket icon',
  ...props
}: PiBallCricketStrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.368 3.162a9.15 9.15 0 0 1 6.47 11.206 9.15 9.15 0 0 1-8.178 6.76m1.708-17.966a9.15 9.15 0 1 0-4.736 17.676m4.736-17.676L9.632 20.838m0 0a9.1 9.1 0 0 0 3.028.29M16.968 5.05l-.259.966m-.776 2.898-.259.966m-.776 2.897-.26.966m-.776 2.898-.258.966m-.777 2.898-.167.625M9.62 9.292l-.26.966m1.295-4.83-.259.966m-1.812 6.761-.258.966m-.777 2.898-.259.966" fill="none"/>
    </svg>
  );
}
