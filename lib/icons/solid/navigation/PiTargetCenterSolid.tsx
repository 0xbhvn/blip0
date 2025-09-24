import React from 'react';

/**
 * PiTargetCenterSolid icon from the solid style in navigation category.
 */
interface PiTargetCenterSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTargetCenterSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'target-center icon',
  ...props
}: PiTargetCenterSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.418 1.972q.127-.02.253-.036A.293.293 0 0 1 11 2.23v2.75a.11.11 0 0 1-.09.105 7.01 7.01 0 0 0-5.798 5.66.31.31 0 0 1-.301.256H2.229a.294.294 0 0 1-.293-.329 10.16 10.16 0 0 1 8.482-8.699ZM5.113 13.257A.31.31 0 0 0 4.81 13H2.229a.29.29 0 0 0-.282.206.3.3 0 0 0-.011.123 10.156 10.156 0 0 0 8.735 8.734.294.294 0 0 0 .329-.293v-2.75a.11.11 0 0 0-.09-.105 7.01 7.01 0 0 1-5.797-5.658ZM11 16.533c0 .19-.174.332-.357.28a5.01 5.01 0 0 1-3.457-3.456.284.284 0 0 1 .28-.357H10.7a.3.3 0 0 1 .3.3zm2.257 2.354a.31.31 0 0 0-.257.302v2.581c0 .177.153.316.329.293a10.156 10.156 0 0 0 8.735-8.734.292.292 0 0 0-.294-.329h-2.58a.31.31 0 0 0-.303.257 7.01 7.01 0 0 1-5.63 5.63ZM16.533 13c.19 0 .332.174.28.357a5.01 5.01 0 0 1-3.456 3.457.284.284 0 0 1-.357-.28V13.3a.3.3 0 0 1 .3-.3zm2.354-2.257a.31.31 0 0 0 .302.257h2.582a.294.294 0 0 0 .293-.329 10.156 10.156 0 0 0-8.735-8.735.293.293 0 0 0-.33.293v2.582c0 .15.11.275.258.301a7.01 7.01 0 0 1 5.63 5.631ZM13 7.467c0-.19.174-.332.357-.28a5.01 5.01 0 0 1 3.457 3.456.283.283 0 0 1-.281.357H13.3a.3.3 0 0 1-.3-.3zm-2.357-.28a.284.284 0 0 1 .357.28V10.7a.3.3 0 0 1-.3.3H7.467a.284.284 0 0 1-.28-.357 5.01 5.01 0 0 1 3.456-3.457Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
