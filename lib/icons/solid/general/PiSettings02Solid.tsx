import React from 'react';

/**
 * PiSettings02Solid icon from the solid style in general category.
 */
interface PiSettings02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSettings02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'settings-02 icon',
  ...props
}: PiSettings02SolidProps): React.ReactElement {
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
      <path d="M9.423 4.058c.622-2.744 4.532-2.744 5.154 0l.051.226a.643.643 0 0 0 .97.402l.196-.124c2.38-1.5 5.144 1.264 3.644 3.644l-.123.197a.642.642 0 0 0 .4.969l.227.051c2.744.622 2.744 4.532 0 5.154l-.226.051a.643.643 0 0 0-.402.97l.124.196c1.5 2.38-1.264 5.144-3.644 3.644l-.197-.123a.643.643 0 0 0-.969.4l-.051.227c-.622 2.744-4.532 2.744-5.154 0l-.051-.226a.642.642 0 0 0-.97-.402l-.196.124c-2.38 1.5-5.144-1.264-3.644-3.644l.123-.197a.643.643 0 0 0-.4-.969l-.227-.051c-2.744-.622-2.744-4.532 0-5.154l.226-.051a.643.643 0 0 0 .402-.97l-.124-.196c-1.5-2.38 1.264-5.144 3.644-3.644l.197.123c.375.237.87.031.969-.4zM12 9.9c-1.146 0-2.109.927-2.109 2.1s.963 2.1 2.11 2.1 2.108-.927 2.108-2.1S13.147 9.9 12 9.9Z" fill="currentColor"/>
    </svg>
  );
}
