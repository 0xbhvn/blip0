import React from 'react';

/**
 * PiPlaylistUserStroke icon from the stroke style in media category.
 */
interface PiPlaylistUserStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaylistUserStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'playlist-user icon',
  ...props
}: PiPlaylistUserStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 6h14M7 2.001 17 2M7 22h10c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C21 20.1 21 19.4 21 18v-4c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C19.1 10 18.4 10 17 10H7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C3 11.9 3 12.6 3 14v4c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.9 22 5.6 22 7 22Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.25 17.118h-2.5c-.69 0-1.25.56-1.25 1.25 0 .345.28.625.625.625h3.75c.345 0 .625-.28.625-.625 0-.69-.56-1.25-1.25-1.25Z" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13.69a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="none"/>
    </svg>
  );
}
