import React from 'react';

/**
 * PiCartonSolid icon from the solid style in food category.
 */
interface PiCartonSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCartonSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'carton icon',
  ...props
}: PiCartonSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M16.4 1c.264 0 .522-.001.739.017.228.018.498.063.77.2l.137.078a2 2 0 0 1 .66.66l.076.137.087.203c.072.2.1.395.114.566.018.217.017.475.017.739v1.067l1.84 2.453.438.598c.127.183.233.356.323.54l.09.202q.044.102.08.207l.087.28q.04.142.068.285l.045.306c.032.31.029.645.029 1.062v6.368c0 .689 0 1.266-.038 1.736-.035.422-.104.825-.269 1.21l-.077.164a3.5 3.5 0 0 1-1.296 1.402l-.242.136c-.434.221-.892.306-1.374.346-.47.038-1.047.038-1.736.038H7.032c-.689 0-1.266 0-1.736-.038-.422-.035-.825-.104-1.21-.269l-.164-.077A3.5 3.5 0 0 1 2.52 20.32l-.136-.242c-.221-.434-.306-.892-.346-1.374C2 18.234 2 17.657 2 16.968V10.6c0-.556-.004-.966.074-1.368l.058-.25a4 4 0 0 1 .267-.723l.147-.272c.16-.268.364-.533.614-.867L5 4.667V3.6c0-.264-.001-.522.017-.739.018-.228.063-.498.2-.77l.078-.137a2 2 0 0 1 .797-.736l.203-.087c.2-.072.395-.1.566-.114C7.078.999 7.336 1 7.6 1zM4.76 8.32a10 10 0 0 0-.494.689l-.067.12a2 2 0 0 0-.134.362l-.028.125C4.004 9.784 4 9.968 4 10.6v6.368c0 .722.001 1.204.031 1.574.03.358.082.523.135.628l.059.104c.146.239.355.432.605.56l.092.04c.107.039.267.073.536.095.37.03.852.031 1.574.031H8V9.332L6 6.666zM9.5 8H19l-1.5-2H8zM7.6 3a8 8 0 0 0-.576.01l-.012.002-.001.012A8 8 0 0 0 7 3.6V4h10v-.4c0-.297-.001-.459-.01-.576l-.003-.012-.011-.001A8 8 0 0 0 16.4 3z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
