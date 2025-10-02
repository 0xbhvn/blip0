import React from 'react';

/**
 * PiSupabaseStroke icon from the stroke style in apps-&-social category.
 */
interface PiSupabaseStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSupabaseStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'supabase icon',
  ...props
}: PiSupabaseStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeWidth="2" d="M12 3.2V15H7.127c-2.186 0-3.279 0-3.829-.445a2 2 0 0 1-.741-1.589c.012-.708.713-1.545 2.117-3.22l5.913-7.059c.435-.52.653-.78.843-.807a.5.5 0 0 1 .441.16C12 2.184 12 2.524 12 3.2Z" fill="none"/><path stroke="currentColor" strokeWidth="2" d="M12.003 20.8V9h4.872c2.186 0 3.28 0 3.83.445a2 2 0 0 1 .74 1.589c-.011.708-.713 1.545-2.117 3.221l-5.912 7.058c-.436.52-.654.78-.844.807a.5.5 0 0 1-.441-.16c-.129-.143-.129-.483-.129-1.16Z" fill="none"/>
    </svg>
  );
}
