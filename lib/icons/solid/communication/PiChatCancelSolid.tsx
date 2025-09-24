import React from 'react';

/**
 * PiChatCancelSolid icon from the solid style in communication category.
 */
interface PiChatCancelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChatCancelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chat-cancel icon',
  ...props
}: PiChatCancelSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10q-.719 0-1.412-.099h-.001l-1.744-.243-.11-.013-.033-.003-.01-.001h-.003l-.139-.012-.03-.002h-.03l-.14.002c-.118 0-.261.01-.637.037l-2.192.157c-.396.028-.754.053-1.052.05-.317-.005-.67-.043-1.016-.207a2.35 2.35 0 0 1-1.117-1.117c-.164-.347-.202-.698-.206-1.016-.005-.298.021-.656.05-1.052l.156-2.192c.027-.376.036-.519.037-.638l.002-.14v-.03l-.002-.03-.011-.138v-.004l-.001-.01-.004-.032-.013-.11-.05-.375-.193-1.37A10 10 0 0 1 2 12Zm8.207-3.207a1 1 0 0 0-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 1 0 1.414 1.414L12 13.414l1.793 1.793a1 1 0 0 0 1.414-1.414L13.414 12l1.793-1.793a1 1 0 0 0-1.414-1.414L12 10.586z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
