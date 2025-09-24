import React from 'react';

/**
 * PiUserEditStroke icon from the stroke style in users category.
 */
interface PiUserEditStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserEditStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'user-edit icon',
  ...props
}: PiUserEditStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.247 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h3m7-14a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-3.078 14 1.206-.008c.364-.002.546-.003.717-.045q.228-.056.43-.18c.15-.092.278-.22.535-.478l5.918-5.917a.94.94 0 0 0 .122-1.18l-.02-.03a3.6 3.6 0 0 0-1.074-1.063.9.9 0 0 0-1.12.122l-5.973 5.973c-.248.248-.372.372-.462.516q-.12.193-.18.412c-.043.165-.049.34-.06.69z" fill="none"/>
    </svg>
  );
}
