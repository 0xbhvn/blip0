import React from 'react';

/**
 * PiAudioBars02Stroke icon from the stroke style in media category.
 */
interface PiAudioBars02StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAudioBars02Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'audio-bars-02 icon',
  ...props
}: PiAudioBars02StrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3" fill="none"/>
    </svg>
  );
}
