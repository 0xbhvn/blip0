import React from 'react';

/**
 * PiArrowBigUpLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowBigUpLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigUpLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-up-left icon',
  ...props
}: PiArrowBigUpLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18.764 16.784-1.98 1.98c-.396.396-.594.594-.823.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668l-7.017-7.017A61 61 0 0 0 4.91 14.81a35.3 35.3 0 0 1-.177-9.096 1.11 1.11 0 0 1 .98-.98 35.3 35.3 0 0 1 9.097.177 61 61 0 0 0-3.062 2.594l7.017 7.017c.396.396.594.594.668.823a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822Z" fill="none"/>
    </svg>
  );
}
