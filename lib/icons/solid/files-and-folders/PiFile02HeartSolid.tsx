import React from 'react';

/**
 * PiFile02HeartSolid icon from the solid style in files-&-folders category.
 */
interface PiFile02HeartSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02HeartSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-heart icon',
  ...props
}: PiFile02HeartSolidProps): React.ReactElement {
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
      <path d="M12.825 12.746a.5.5 0 0 1 .216-.186.8.8 0 0 1 .345-.06c.604.009 1.114.493 1.114 1.042 0 .75-.514 1.518-1.275 2.18a6.6 6.6 0 0 1-1.225.839 6.6 6.6 0 0 1-1.225-.839c-.761-.662-1.275-1.43-1.275-2.18 0-.56.52-1.042 1.1-1.042.152 0 .271.026.36.065a.5.5 0 0 1 .215.181 1 1 0 0 0 1.65 0Z" fill="currentColor"/><path fillRule="evenodd" d="M8 1h1.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C13 3.361 13 3.943 13 4.8v.039c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.039c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819.037.45.038 1.032.038 1.889V18a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5Zm5.414 9.5a2.77 2.77 0 0 0-1.417.35 2.84 2.84 0 0 0-1.397-.35c-1.52 0-3.1 1.22-3.1 3.042 0 1.631 1.061 2.905 1.962 3.69.47.408.952.733 1.348.958.197.113.383.207.546.277a3 3 0 0 0 .252.094c.062.019.213.064.392.064.178 0 .33-.045.392-.064a3 3 0 0 0 .252-.094c.163-.07.35-.164.546-.277a8.5 8.5 0 0 0 1.348-.959c.9-.784 1.962-2.058 1.962-3.69 0-1.832-1.59-3.02-3.086-3.04Z" clipRule="evenodd" fill="currentColor"/><path d="M14.956 2.748c-.04-.48-.117-.925-.292-1.347a9.02 9.02 0 0 1 5.935 5.935c-.422-.175-.868-.253-1.347-.292C18.71 7 18.046 7 17.242 7H17.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C15 5.75 15 5.377 15 4.8v-.041c0-.805 0-1.47-.044-2.01Z" fill="currentColor"/>
    </svg>
  );
}
