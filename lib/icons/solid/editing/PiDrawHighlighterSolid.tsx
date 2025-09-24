import React from 'react';

/**
 * PiDrawHighlighterSolid icon from the solid style in editing category.
 */
interface PiDrawHighlighterSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDrawHighlighterSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'draw-highlighter icon',
  ...props
}: PiDrawHighlighterSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.605 1.85 12Zm10.595-4.832a1 1 0 0 1 1.262.125l1 1A1 1 0 0 1 15 9v3.17c1.165.413 2 1.524 2 2.83v2.935a1 1 0 0 1-2 0V15a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2.935a1 1 0 1 1-2 0V15c0-1.306.835-2.417 2-2.83V10a1 1 0 0 1 .445-.832z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
