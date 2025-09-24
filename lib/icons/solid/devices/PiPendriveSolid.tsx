import React from 'react';

/**
 * PiPendriveSolid icon from the solid style in devices category.
 */
interface PiPendriveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPendriveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pendrive icon',
  ...props
}: PiPendriveSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.364 1c-.39 0-.74 0-1.03.024a2.5 2.5 0 0 0-.969.248 2.5 2.5 0 0 0-1.093 1.093 2.5 2.5 0 0 0-.248.968A14 14 0 0 0 7 4.363v2.815q-.183.059-.362.149a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C5 10.18 5 10.635 5 11.161V16.1c0 .833 0 1.371.074 1.839a6 6 0 0 0 4.987 4.987c.468.074 1.006.074 1.84.074h.199c.833 0 1.371 0 1.839-.074a6 6 0 0 0 4.987-4.987c.074-.468.074-1.006.074-1.84v-4.937c0-.528 0-.982-.03-1.357-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311q-.18-.09-.362-.149V4.364c0-.39 0-.74-.024-1.03a2.5 2.5 0 0 0-.248-.969 2.5 2.5 0 0 0-1.093-1.093 2.5 2.5 0 0 0-.968-.248C14.375 1 14.025 1 13.637 1zM15 7V4.4c0-.437 0-.704-.017-.904a1.3 1.3 0 0 0-.034-.215l-.004-.008a.5.5 0 0 0-.218-.219l-.008-.003-.031-.009a1 1 0 0 0-.184-.025c-.2-.016-.467-.017-.904-.017h-3.2c-.437 0-.704 0-.904.017a1.3 1.3 0 0 0-.215.034l-.008.003a.5.5 0 0 0-.218.219l-.004.008-.009.031a1.4 1.4 0 0 0-.025.184c-.016.2-.017.467-.017.904V7z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
