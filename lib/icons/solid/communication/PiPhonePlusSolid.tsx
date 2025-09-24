import React from 'react';

/**
 * PiPhonePlusSolid icon from the solid style in communication category.
 */
interface PiPhonePlusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhonePlusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'phone-plus icon',
  ...props
}: PiPhonePlusSolidProps): JSX.Element {
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
      <path d="M6.746 13.223c.432-.321.895-.674 1.3-1.05A6.43 6.43 0 0 0 9.905 5.86c-.197-.77-.505-1.65-1.052-2.378-.574-.76-1.411-1.344-2.576-1.45-.44-.039-1.025-.056-1.541.028-1.895.31-2.885 2.151-2.694 3.766.336 2.85 1.19 5.43 2.504 7.656a16.8 16.8 0 0 0 5.641 5.772c2.299 1.427 4.992 2.351 7.983 2.704 1.616.19 3.456-.8 3.765-2.694a6 6 0 0 0 .018-1.645c-.147-1.235-.832-2.082-1.661-2.64-.797-.535-1.747-.823-2.544-1.006a6.43 6.43 0 0 0-5.763 1.511c-.53.483-1.024 1.067-1.463 1.595a14.7 14.7 0 0 1-3.776-3.856Z" fill="currentColor"/><path d="M18 4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2h-2z" fill="currentColor"/>
    </svg>
  );
}
