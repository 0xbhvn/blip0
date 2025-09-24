import React from 'react';

/**
 * PiVoiceRecordingStroke icon from the stroke style in media category.
 */
interface PiVoiceRecordingStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVoiceRecordingStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'voice-recording icon',
  ...props
}: PiVoiceRecordingStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 16a4.15 4.15 0 1 0 0-8.3A4.15 4.15 0 0 0 6 16Zm0 0h12m0 0a4.15 4.15 0 1 0 0-8.3 4.15 4.15 0 0 0 0 8.3Z" fill="none"/>
    </svg>
  );
}
