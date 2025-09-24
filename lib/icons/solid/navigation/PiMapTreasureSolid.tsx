import React from 'react';

/**
 * PiMapTreasureSolid icon from the solid style in navigation category.
 */
interface PiMapTreasureSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapTreasureSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'map-treasure icon',
  ...props
}: PiMapTreasureSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8.447 3.288a3 3 0 0 1 1.106 0c.417.078.8.27 1.236.488l3.242 1.621c.56.28.675.328.777.348a1 1 0 0 0 .384 0c.102-.02.217-.067.777-.348l.042-.02c.71-.355 1.302-.652 1.793-.844.498-.196 1.028-.344 1.585-.272a3 3 0 0 1 2.098 1.297c.314.466.419 1.006.466 1.54.047.524.047 1.186.047 1.98v6.069c.001.593.002 1.115-.164 1.595-.145.42-.381.803-.692 1.121-.356.363-.823.596-1.354.86l-3.001 1.5c-.436.22-.819.411-1.236.49a3 3 0 0 1-1.106 0c-.417-.079-.8-.27-1.235-.489l-3.243-1.621c-.56-.28-.675-.328-.777-.348a1 1 0 0 0-.384 0c-.102.02-.216.067-.777.348l-.042.02c-.71.355-1.302.652-1.792.845-.498.195-1.029.343-1.586.27a3 3 0 0 1-2.098-1.296c-.314-.466-.419-1.006-.466-1.54C2 16.379 2 15.717 2 14.923v-6.07c0-.593 0-1.115.164-1.595a3 3 0 0 1 .693-1.121c.355-.363.822-.596 1.354-.86l3-1.5c.436-.22.82-.411 1.236-.49Zm6.76 6.505a1 1 0 1 0-1.414 1.414l.793.793-.793.793a1 1 0 1 0 1.414 1.414l.793-.793.793.793a1 1 0 0 0 1.414-1.414L17.414 12l.793-.793a1 1 0 0 0-1.414-1.414l-.793.793zM7 11a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm4.01 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
