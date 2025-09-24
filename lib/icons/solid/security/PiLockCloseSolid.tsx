import React from 'react';

/**
 * PiLockCloseSolid icon from the solid style in security category.
 */
interface PiLockCloseSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLockCloseSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'lock-close icon',
  ...props
}: PiLockCloseSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M5.438 8.6C5.63 4.982 8.432 2 12 2s6.369 2.982 6.562 6.6c1.057.605 1.848 1.61 2.227 2.799.173.543.218 1.114.21 1.76-.007.633-.067 1.41-.143 2.382l-.018.241c-.117 1.522-.197 2.55-.578 3.39-.508 1.117-1.397 2.01-2.51 2.476-.467.197-.952.277-1.489.315-.518.037-1.15.037-1.922.037H9.66c-.772 0-1.404 0-1.922-.037-.537-.038-1.022-.119-1.488-.315-1.114-.467-2.003-1.359-2.51-2.476-.382-.84-.461-1.868-.579-3.39l-.018-.241c-.075-.972-.136-1.75-.143-2.382-.008-.647.037-1.217.21-1.76.379-1.189 1.17-2.194 2.227-2.799Zm2.072-.56.129-.009C8.192 8 8.861 8 9.669 8h4.662c.808 0 1.478 0 2.03.031l.129.008C16.075 5.692 14.17 4 12 4S7.925 5.692 7.51 8.04ZM12 12c-1.133 0-1.929.966-1.929 2 0 .69.355 1.351.93 1.714V17a1 1 0 1 0 2 0v-1.286A2.04 2.04 0 0 0 13.928 14c0-1.034-.795-2-1.929-2Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
