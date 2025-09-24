import React from 'react';

/**
 * PiWhatsappSolid icon from the solid style in apps-&-social category.
 */
interface PiWhatsappSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWhatsappSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'whatsapp icon',
  ...props
}: PiWhatsappSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a10 10 0 0 1-3.5-.63l-.349-.128-.082-.026a.3.3 0 0 0-.137.006 10 10 0 0 0-.281.064l-1.531.357c-.524.123-.983.23-1.358.282-.385.053-.833.075-1.274-.1a2.35 2.35 0 0 1-1.312-1.313c-.176-.44-.154-.89-.1-1.274.051-.375.158-.834.28-1.357l.358-1.532a10 10 0 0 0 .075-.343.3.3 0 0 0-.005-.074l-.026-.083c-.028-.08-.067-.185-.128-.35A10 10 0 0 1 2 12Zm6.336-5.167c.281-.046.593-.036.82-.016a2.06 2.06 0 0 1 1.683 1.186c.04.085.072.177.11.281l.02.055c.081.23.138.388.177.541a3.42 3.42 0 0 1-.987 3.353c-.116.108-.25.21-.443.36l-.074.056a7.2 7.2 0 0 0 1.594 1.626l.13-.151c.203-.233.343-.394.492-.53a3.41 3.41 0 0 1 3.06-.802c.197.045.4.117.691.221l.07.025c.137.05.258.092.368.147a2.06 2.06 0 0 1 1.128 1.6c.03.262.04.58-.01.879-.07.432-.312.8-.603 1.06a1.84 1.84 0 0 1-1.122.474c-.15.007-.256-.006-.365-.019l-.013-.001c-1.523-.18-2.897-.65-4.074-1.38a8.6 8.6 0 0 1-2.887-2.955c-.672-1.14-1.108-2.456-1.279-3.906l-.001-.014c-.013-.108-.026-.215-.02-.364.02-.437.217-.832.476-1.123a1.84 1.84 0 0 1 1.059-.603Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
