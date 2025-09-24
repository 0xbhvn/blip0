import React from 'react';

/**
 * PiArrowBigDownLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowBigDownLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigDownLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-down-left icon',
  ...props
}: PiArrowBigDownLeftStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m18.764 7.217-1.98-1.98c-.396-.396-.594-.594-.823-.669a1 1 0 0 0-.618 0c-.228.075-.426.273-.822.669l-7.017 7.017A61 61 0 0 1 4.91 9.19a35.3 35.3 0 0 0-.177 9.097 1.11 1.11 0 0 0 .98.98 35.3 35.3 0 0 0 9.097-.177 61 61 0 0 1-3.062-2.595l7.017-7.017c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822Z" fill="none"/>
    </svg>
  );
}
