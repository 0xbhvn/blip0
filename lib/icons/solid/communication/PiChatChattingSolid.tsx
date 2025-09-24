import React from 'react';

/**
 * PiChatChattingSolid icon from the solid style in communication category.
 */
interface PiChatChattingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChatChattingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chat-chatting icon',
  ...props
}: PiChatChattingSolidProps): JSX.Element {
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
      <path d="M22 11A9 9 0 0 0 4.448 8.187a8.4 8.4 0 0 1 11.26 11.556l.418-.046.034-.003.01-.001.129-.008.01-.001.013-.001h.023l.129.003c.108.001.215.009.505.03l1.777.126c.35.025.672.048.942.044a2.2 2.2 0 0 0 .949-.194 2.2 2.2 0 0 0 1.045-1.045c.156-.33.19-.66.194-.95a12 12 0 0 0-.044-.941l-.127-1.777a9 9 0 0 1-.03-.505l-.002-.128h0v-.038l.002-.01.008-.128v-.01l.004-.034.012-.118q.015-.149.047-.41c.04-.35.1-.847.18-1.512v-.01A9 9 0 0 0 22 11Z" fill="currentColor"/><path d="M8.4 9.2a6.38 6.38 0 0 0-4.252 1.616 6.39 6.39 0 0 0-2.069 5.797c.048.301.084.523.108.682l.035.241.004.043.003.032v.082c0 .05-.004.118-.021.358l-.102 1.419c-.016.229-.033.46-.03.656.003.215.029.492.163.775.178.377.482.681.86.86.282.134.56.16.775.163a8 8 0 0 0 .656-.03l1.418-.102c.24-.017.31-.021.36-.022h.081l.074.007h0l.059.008.183.028.681.107Q7.883 22 8.4 22a6.4 6.4 0 0 0 4.784-2.148A6.4 6.4 0 0 0 8.4 9.2Z" fill="currentColor"/>
    </svg>
  );
}
