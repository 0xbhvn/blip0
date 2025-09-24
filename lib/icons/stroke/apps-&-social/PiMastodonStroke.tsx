import React from 'react';

/**
 * PiMastodonStroke icon from the stroke style in apps-&-social category.
 */
interface PiMastodonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMastodonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mastodon icon',
  ...props
}: PiMastodonStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11.313V8.387m0 0c0-1.258-.895-2.278-2-2.278s-2 1.02-2 2.278v4.722m4-4.722c0-1.258.895-2.278 2-2.278s2 1.02 2 2.278v4.722m2.833 2.235c.92-.894 1.39-1.96 1.39-5.081 0-3.12-.024-4.23-1.39-5.79-2.248-2.568-11.418-2.57-13.666 0-1.366 1.56-1.39 2.669-1.39 5.789l.028 1.186c.071 13.251 12.048 9.917 14.047 7.848q-5.335.367-7.752-1.077c-.724-.433-.23-1.27.609-1.194 2.856.259 6.304.086 8.124-1.68Z" fill="none"/>
    </svg>
  );
}
