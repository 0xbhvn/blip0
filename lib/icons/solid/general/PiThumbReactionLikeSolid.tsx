import React from 'react';

/**
 * PiThumbReactionLikeSolid icon from the solid style in general category.
 */
interface PiThumbReactionLikeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThumbReactionLikeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'thumb-reaction-like icon',
  ...props
}: PiThumbReactionLikeSolidProps): JSX.Element {
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
      <path d="M14.892 2.493a2 2 0 0 0-2.763.245c-.073.084-.142.184-.2.266l-3.084 4.43c-.427.614-.739 1.062-.98 1.485A3.5 3.5 0 0 0 2 11.5v6a3.5 3.5 0 0 0 6.142 2.297c.302.309.654.568 1.043.767.485.247 1.002.346 1.564.392.541.044 1.206.044 2.01.044h3.589c.701 0 1.284 0 1.763-.037.5-.038.96-.12 1.405-.322a4 4 0 0 0 1.701-1.465c.266-.41.415-.854.527-1.343.107-.468.193-1.044.297-1.738l.543-3.631c.066-.442.125-.834.145-1.161.022-.346.01-.723-.136-1.101a2.5 2.5 0 0 0-1.1-1.277c-.352-.2-.723-.267-1.069-.297-.326-.028-.723-.028-1.17-.028h-2.425c-.192 0-.314 0-.406-.003a1 1 0 0 1-.105-.006.5.5 0 0 1-.399-.581c.001-.003.008-.03.033-.1.03-.087.074-.201.143-.38l.06-.154a7 7 0 0 0 .168-.462 4 4 0 0 0-.802-3.795c-.094-.107-.2-.213-.34-.354-.094-.093-.185-.188-.288-.271ZM7 11.499v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 3 0Z" fill="currentColor"/>
    </svg>
  );
}
