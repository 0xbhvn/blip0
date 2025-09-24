import React from 'react';

/**
 * PiUserQuestionMarkStroke icon from the stroke style in users category.
 */
interface PiUserQuestionMarkStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserQuestionMarkStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-question-mark icon',
  ...props
}: PiUserQuestionMarkStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.54 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.379m3.971.502a2.249 2.249 0 0 1 4.37.75c0 1.499-2.249 2.248-2.249 2.248m.03 3h.01M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="none"/>
    </svg>
  );
}
