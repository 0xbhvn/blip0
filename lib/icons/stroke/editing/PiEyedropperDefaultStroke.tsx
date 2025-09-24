import React from 'react';

/**
 * PiEyedropperDefaultStroke icon from the stroke style in editing category.
 */
interface PiEyedropperDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEyedropperDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'eyedropper-default icon',
  ...props
}: PiEyedropperDefaultStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.26 12.045a34 34 0 0 1 1.663 2.144c.11.155.334.173.468.039l1.275-1.274a1.834 1.834 0 0 0 0-2.595l-.825-.824 1.415-1.414a3 3 0 1 0-4.243-4.243l-1.414 1.414-.825-.824a1.834 1.834 0 0 0-2.594 0L8.906 5.743a.308.308 0 0 0 .039.468 34 34 0 0 1 2.066 1.598m4.249 4.236-6.477 6.477c-.368.368-.551.552-.762.678a2 2 0 0 1-.935.283c-.245.012-.5-.04-1.01-.141a.7.7 0 0 0-.384.024l-1.475.492c-.489.162-.733.244-.895.186a.5.5 0 0 1-.303-.303c-.058-.163.023-.407.186-.895l.492-1.476a.7.7 0 0 0 .024-.384c-.102-.51-.153-.764-.142-1.01a2 2 0 0 1 .283-.934c.127-.211.31-.395.678-.762l6.471-6.471m4.249 4.236a34.3 34.3 0 0 0-4.25-4.235" fill="none"/>
    </svg>
  );
}
