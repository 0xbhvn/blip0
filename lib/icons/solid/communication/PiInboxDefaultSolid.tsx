import React from 'react';

/**
 * PiInboxDefaultSolid icon from the solid style in communication category.
 */
interface PiInboxDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInboxDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'inbox-default icon',
  ...props
}: PiInboxDefaultSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M17.23 3.247C16.472 2.999 15.644 3 14.446 3H9.554c-1.198 0-2.025 0-2.784.247a5 5 0 0 0-1.806 1.048C4.373 4.83 3.962 5.549 3.37 6.59l-.08.139-.581 1.017-1.181 2.066c-.131.23-.247.432-.331.653a3 3 0 0 0-.16.6C1 11.3 1 11.533 1 11.798v.247c0 1.363 0 2.447.071 3.322.074.895.227 1.659.583 2.358a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583.874.07 1.958.07 3.321.07h4.088c1.363 0 2.447 0 3.322-.071.895-.073 1.659-.227 2.358-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.358.071-.875.071-1.96.071-3.322v-.248c0-.264 0-.497-.036-.73a3 3 0 0 0-.16-.601c-.084-.22-.2-.423-.33-.653L21.29 7.744l-.58-1.015-.08-.14c-.593-1.04-1.004-1.758-1.595-2.294a5 5 0 0 0-1.806-1.048ZM7.39 5.148C7.808 5.012 8.294 5 9.714 5h4.572c1.42 0 1.906.012 2.324.148a3 3 0 0 1 1.083.629c.326.295.577.71 1.281 1.944L20.278 10h-3.354A1.923 1.923 0 0 0 15 11.923C15 13.07 14.07 14 12.923 14h-1.846A2.077 2.077 0 0 1 9 11.923 1.923 1.923 0 0 0 7.077 10H3.723l1.303-2.28c.704-1.233.955-1.648 1.281-1.943a3 3 0 0 1 1.083-.629Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
