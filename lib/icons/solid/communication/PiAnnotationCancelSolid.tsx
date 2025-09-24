import React from 'react';

/**
 * PiAnnotationCancelSolid icon from the solid style in communication category.
 */
interface PiAnnotationCancelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnnotationCancelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'annotation-cancel icon',
  ...props
}: PiAnnotationCancelSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8.545 2h6.925c1.028 0 1.86 0 2.534.055.696.057 1.311.177 1.882.468a4.8 4.8 0 0 1 2.098 2.098c.29.57.41 1.186.468 1.881.055.675.055 1.507.055 2.535v4.693c0 .618 0 1.045-.06 1.42a4.8 4.8 0 0 1-3.99 3.99 6 6 0 0 1-1.03.053l-.1-.001c-.262-.004-.458-.007-.653.01a.9.9 0 0 0-.584.293 7 7 0 0 0-.521.675c-.097.136-.203.285-.329.453l-.027.035c-.39.52-.721.963-1.021 1.296-.31.346-.666.667-1.133.849a2.9 2.9 0 0 1-2.103 0c-.467-.182-.822-.503-1.133-.849-.3-.333-.631-.776-1.021-1.296l-.027-.035a19 19 0 0 1-.328-.453 7 7 0 0 0-.522-.675.9.9 0 0 0-.584-.292c-.195-.018-.391-.015-.653-.011l-.1.001a6 6 0 0 1-1.03-.053 4.8 4.8 0 0 1-3.99-3.99c-.06-.375-.06-.802-.06-1.42V9.037c0-1.028 0-1.86.055-2.535.057-.695.178-1.31.468-1.881A4.8 4.8 0 0 1 4.13 2.523c.57-.29 1.186-.411 1.882-.468C6.685 2 7.517 2 8.545 2Zm1.662 5.793a1 1 0 1 0-1.414 1.414L10.586 11l-1.793 1.793a1 1 0 0 0 1.414 1.414L12 12.414l1.793 1.793a1 1 0 0 0 1.414-1.414L13.414 11l1.793-1.793a1 1 0 1 0-1.414-1.414L12 9.586z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
