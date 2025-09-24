import React from 'react';

/**
 * PiVoiceRecordingSolid icon from the solid style in media category.
 */
interface PiVoiceRecordingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVoiceRecordingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'voice-recording icon',
  ...props
}: PiVoiceRecordingSolidProps): React.ReactElement {
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
      <path d="M11.15 11.85c0 1.187-.401 2.28-1.075 3.15h3.85A5.15 5.15 0 1 1 18 17H6a5.15 5.15 0 1 1 5.15-5.15Z" fill="currentColor"/>
    </svg>
  );
}
