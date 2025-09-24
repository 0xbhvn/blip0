import React from 'react';

/**
 * PiMesageHeartSolid icon from the solid style in communication category.
 */
interface PiMesageHeartSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMesageHeartSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mesage-heart icon',
  ...props
}: PiMesageHeartSolidProps): React.ReactElement {
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
      <path d="M13.386 8.438c.603.008 1.114.493 1.114 1.041 0 .75-.514 1.518-1.275 2.18a6.6 6.6 0 0 1-1.223.838h-.004a6.6 6.6 0 0 1-1.223-.838c-.76-.662-1.275-1.43-1.275-2.18 0-.56.52-1.041 1.1-1.041a.9.9 0 0 1 .36.064c.08.035.15.088.215.182a1 1 0 0 0 1.65 0 .5.5 0 0 1 .217-.187.8.8 0 0 1 .344-.06Z" fill="currentColor"/><path fillRule="evenodd" d="M16.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392l.276.154a4 4 0 0 1 1.473 1.594l.085.183c.186.432.266.89.306 1.381.045.55.044 1.228.044 2.052v4.4c0 .824.001 1.502-.044 2.052-.04.492-.12.95-.306 1.38l-.085.184a4 4 0 0 1-1.473 1.594l-.276.154c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044h-2.848l-4.727 3.781A1.001 1.001 0 0 1 7 21v-3.004c-.475-.003-.891-.01-1.252-.04-.492-.04-.95-.12-1.38-.306l-.184-.085a4 4 0 0 1-1.594-1.473l-.154-.276c-.248-.485-.346-1.002-.392-1.564C1.999 13.702 2 13.024 2 12.2V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564l.154-.276a4 4 0 0 1 1.594-1.472l.183-.086c.432-.186.89-.266 1.381-.306C6.298 1.999 6.976 2 7.8 2zm-2.786 4.438a2.77 2.77 0 0 0-1.418.351 2.84 2.84 0 0 0-1.396-.351c-1.52 0-3.1 1.22-3.1 3.041 0 1.632 1.062 2.906 1.963 3.69.47.409.951.733 1.347.959.197.113.383.207.545.276q.122.054.253.094c.062.019.213.065.392.065.178 0 .33-.046.392-.065a3 3 0 0 0 .253-.094 6 6 0 0 0 .545-.276c.396-.226.877-.55 1.347-.96.901-.783 1.963-2.057 1.963-3.689 0-1.832-1.59-3.02-3.086-3.041Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
