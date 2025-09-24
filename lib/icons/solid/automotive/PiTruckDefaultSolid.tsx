import React from 'react';

/**
 * PiTruckDefaultSolid icon from the solid style in automotive category.
 */
interface PiTruckDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTruckDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'truck-default icon',
  ...props
}: PiTruckDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M5.161 4.5c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C1 7.68 1 8.135 1 8.661v6.678c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.462.235.946.302 1.335.324q.097.005.2.007a3.001 3.001 0 0 0 5.656-.004h4.342a3.001 3.001 0 0 0 5.657.004q.102-.002.199-.007c.39-.022.874-.089 1.335-.324a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V13.5q0-.192-.072-.371l-1.245-3.115c-.24-.6-.45-1.127-.817-1.532a3 3 0 0 0-1.171-.793c-.513-.19-1.08-.19-1.725-.19l-1.988.001a7 7 0 0 0-.02-.269c-.034-.37-.108-.737-.289-1.093a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296a18 18 0 0 0-1.356-.031zM16 9.5v6.17a3 3 0 0 1 3.83 1.833q.043 0 .086-.003c.271-.015.435-.057.538-.109a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C21 16.25 21 15.877 21 15.3v-1.607l-1.124-2.81c-.32-.8-.398-.954-.49-1.056a1 1 0 0 0-.39-.264c-.129-.048-.3-.063-1.162-.063zm-10 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm10 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
