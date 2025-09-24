import React from 'react';

/**
 * PiGraphChartRadarSolid icon from the solid style in chart-&-graph category.
 */
interface PiGraphChartRadarSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphChartRadarSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-chart-radar icon',
  ...props
}: PiGraphChartRadarSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12 2.001q.128 0 .248.03a4.1 4.1 0 0 1 2.162.776l6.19 4.498a4.1 4.1 0 0 1 1.377 1.745 1 1 0 0 1 .162.47 4.1 4.1 0 0 1-.05 2.37l-2.364 7.277a4.1 4.1 0 0 1-1.279 1.886 1 1 0 0 1-.402.295 4.1 4.1 0 0 1-2.218.652H8.174a4.1 4.1 0 0 1-2.218-.652 1 1 0 0 1-.402-.294 4.1 4.1 0 0 1-1.28-1.887L1.91 11.889a4.1 4.1 0 0 1-.05-2.37 1 1 0 0 1 .163-.469 4.1 4.1 0 0 1 1.376-1.745l6.19-4.498a4.1 4.1 0 0 1 2.163-.775q.12-.03.248-.031Zm-1.235 2.424q.114-.082.235-.147v4.14l-2.892 1.776-3.684-1.15q.073-.064.15-.12zm-6.953 6.846a2 2 0 0 1-.081-.349l3.819 1.193 1.468 2.805-2.75 3.86a2 2 0 0 1-.091-.231zM8.174 20q-.154 0-.304-.022l2.679-3.76 4.044 1.603 1.537 2.157q-.15.021-.304.022zm9.65-1.451q-.04.12-.092.231l-1.466-2.058.426-4.682 3.577-1.118a2 2 0 0 1-.081.35zm-1.932-8.355 3.683-1.15a2 2 0 0 0-.15-.12l-6.19-4.499A2 2 0 0 0 13 4.278v4.14z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
