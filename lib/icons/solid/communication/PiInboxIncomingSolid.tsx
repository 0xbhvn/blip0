import React from 'react';

/**
 * PiInboxIncomingSolid icon from the solid style in communication category.
 */
interface PiInboxIncomingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInboxIncomingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'inbox-incoming icon',
  ...props
}: PiInboxIncomingSolidProps): JSX.Element {
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
      <path d="M12 10c-.328 0-.656-.11-.925-.328A11 11 0 0 1 9.2 7.726a1 1 0 0 1 1.6-1.2q.098.13.2.256V4a1 1 0 1 1 2 0v2.782q.102-.126.2-.256a1 1 0 0 1 1.6 1.2 11 11 0 0 1-1.875 1.946A1.47 1.47 0 0 1 12 10Z" fill="currentColor"/><path d="M17.23 3.247a1 1 0 1 0-.62 1.901 3 3 0 0 1 1.083.629c.326.295.577.71 1.281 1.944l1.303 2.28h-3.354A1.923 1.923 0 0 0 15 11.922C15 13.07 14.07 14 12.923 14h-1.846A2.077 2.077 0 0 1 9 11.923 1.923 1.923 0 0 0 7.077 10H3.723l1.303-2.279c.704-1.233.955-1.649 1.281-1.944a3 3 0 0 1 1.083-.629 1 1 0 0 0-.62-1.901 5 5 0 0 0-1.806 1.048C4.373 4.83 3.962 5.55 3.37 6.59l-.08.139-.581 1.017-1.181 2.066c-.131.23-.247.432-.331.653a3 3 0 0 0-.16.6C1 11.3 1 11.533 1 11.798v.247c0 1.363 0 2.447.071 3.322.074.895.227 1.659.583 2.358a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583.874.07 1.958.07 3.321.07h4.088c1.363 0 2.447 0 3.322-.071.895-.073 1.659-.227 2.358-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.358.071-.875.071-1.959.071-3.322v-.248c0-.264 0-.497-.036-.73a3 3 0 0 0-.16-.601c-.084-.22-.2-.423-.33-.653Q21.88 8.78 21.29 7.744l-.58-1.015-.08-.14c-.593-1.04-1.004-1.758-1.595-2.294a5 5 0 0 0-1.806-1.048Z" fill="currentColor"/>
    </svg>
  );
}
