import React from 'react';

/**
 * PiArchiveHeartSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveHeartSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveHeartSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-heart icon',
  ...props
}: PiArchiveHeartSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm9.825 3.684a.5.5 0 0 1 .216-.187.8.8 0 0 1 .345-.06c.604.01 1.114.493 1.114 1.042 0 .75-.514 1.518-1.275 2.18A6.6 6.6 0 0 1 12 17.5a6.6 6.6 0 0 1-1.225-.839c-.761-.663-1.275-1.43-1.275-2.18 0-.56.52-1.042 1.1-1.042a.9.9 0 0 1 .36.064c.08.035.151.088.215.182a1 1 0 0 0 1.65 0zm.59-2.246a2.77 2.77 0 0 0-1.418.35 2.84 2.84 0 0 0-1.397-.35c-1.52 0-3.1 1.22-3.1 3.041 0 1.632 1.061 2.906 1.962 3.69.47.409.952.733 1.348.959.197.113.383.207.546.276q.123.054.252.094c.062.02.213.064.392.064.178 0 .33-.045.392-.064q.129-.04.252-.094c.163-.07.35-.163.546-.276.396-.226.877-.55 1.348-.96.9-.783 1.962-2.057 1.962-3.689 0-1.832-1.59-3.02-3.086-3.041z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
