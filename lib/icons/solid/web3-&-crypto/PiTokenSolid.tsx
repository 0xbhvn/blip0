import React from 'react';

/**
 * PiTokenSolid icon from the solid style in web3-&-crypto category.
 */
interface PiTokenSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTokenSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'token icon',
  ...props
}: PiTokenSolidProps): React.ReactElement {
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
      <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.305-4.019c-.303.099-.55.27-.777.462a14 14 0 0 0-.735.703l-.647.647c-.28.28-.52.52-.703.736a2.3 2.3 0 0 0-.462.776 2.25 2.25 0 0 0 0 1.39c.099.303.27.55.462.776.182.215.424.456.703.736l.647.647c.28.28.52.52.735.703.227.192.474.363.777.462a2.25 2.25 0 0 0 1.39 0 2.3 2.3 0 0 0 .776-.462c.215-.183.456-.424.736-.703l.646-.647c.28-.28.521-.52.704-.736.192-.226.363-.473.461-.776a2.25 2.25 0 0 0 0-1.39c-.098-.303-.269-.55-.461-.776a13 13 0 0 0-.703-.736l-.647-.647a13 13 0 0 0-.736-.703c-.227-.192-.473-.363-.776-.462a2.25 2.25 0 0 0-1.39 0Z" fill="currentColor"/>
    </svg>
  );
}
