import React from 'react';

/**
 * PiAnnotationStarSolid icon from the solid style in communication category.
 */
interface PiAnnotationStarSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnnotationStarSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'annotation-star icon',
  ...props
}: PiAnnotationStarSolidProps): JSX.Element {
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
      <path d="M11.633 11q.19-.168.359-.358.167.19.358.358a4 4 0 0 0-.358.358 4 4 0 0 0-.359-.358Z" fill="currentColor"/><path fillRule="evenodd" d="M8.537 2h6.925c1.027 0 1.86 0 2.534.055.696.057 1.311.177 1.882.468a4.8 4.8 0 0 1 2.097 2.098c.291.57.412 1.186.468 1.881.056.675.056 1.507.055 2.535v4.693c0 .618 0 1.045-.059 1.42a4.8 4.8 0 0 1-3.99 3.99 6 6 0 0 1-1.03.053l-.1-.001a6 6 0 0 0-.653.01.9.9 0 0 0-.584.293 7 7 0 0 0-.522.675c-.096.136-.202.285-.328.453l-.027.035c-.39.52-.722.963-1.021 1.296-.31.346-.666.667-1.133.849a2.9 2.9 0 0 1-2.103 0c-.467-.182-.823-.503-1.133-.849-.3-.333-.632-.776-1.022-1.296l-.026-.035c-.126-.168-.232-.317-.329-.453a7 7 0 0 0-.522-.675.9.9 0 0 0-.583-.292 6 6 0 0 0-.654-.011l-.1.001a6 6 0 0 1-1.03-.053 4.8 4.8 0 0 1-3.99-3.99c-.06-.375-.06-.802-.059-1.42V9.037c0-1.028 0-1.86.055-2.535.057-.695.177-1.31.468-1.881a4.8 4.8 0 0 1 2.098-2.098c.57-.29 1.186-.411 1.881-.468C6.677 2 7.51 2 8.537 2Zm4.454 5.963a1 1 0 0 0-1.999 0l-.007.166a2 2 0 0 1-1.864 1.865L8.955 10a1 1 0 0 0 0 1.998l.166.007a2 2 0 0 1 1.864 1.865c.002.025.004.058.007.166a1 1 0 0 0 2 0 2 2 0 0 1 1.871-2.03c.025-.002.058-.004.165-.008a1 1 0 0 0 0-1.998l-.165-.007a2 2 0 0 1-1.865-1.865z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
