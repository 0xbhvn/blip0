import React from 'react';

/**
 * PiPartyPopperSolid icon from the solid style in general category.
 */
interface PiPartyPopperSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPartyPopperSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'party-popper icon',
  ...props
}: PiPartyPopperSolidProps): JSX.Element {
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
      <path d="M10.243 1.37a1 1 0 1 0-1.552 1.26c1.04 1.28 1.377 3.004.86 4.554a1 1 0 0 0 1.898.632c.74-2.221.25-4.656-1.206-6.447Z" fill="currentColor"/><path d="M14 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M22.288 5.307a1 1 0 0 0-.575-1.916C18.18 4.452 15.003 6.331 12.7 9.4a1 1 0 0 0 1.6 1.2c1.99-2.653 4.764-4.325 7.988-5.293Z" fill="currentColor"/><path d="M6 4a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M12.628 11.372c-1.226-1.227-2.53-2.202-3.674-2.774-.566-.283-1.146-.494-1.688-.558-.528-.062-1.204-.002-1.709.503-.277.277-.42.61-.483.936-.139.194-.275.42-.404.65-.21.373-.44.83-.675 1.34a37 37 0 0 0-1.415 3.546c-.429 1.263-.793 2.578-.952 3.7-.08.559-.114 1.11-.064 1.604.048.47.188 1.035.595 1.46.416.434.987.587 1.458.642.493.058 1.047.027 1.607-.05 1.123-.153 2.446-.515 3.717-.944a37 37 0 0 0 3.574-1.417 20 20 0 0 0 1.35-.678c.232-.13.46-.267.656-.406a1.77 1.77 0 0 0 .936-.483c.505-.505.565-1.181.503-1.709-.064-.542-.275-1.122-.559-1.688-.571-1.144-1.546-2.448-2.773-3.674Zm-4.568-.985c.904.452 2.037 1.282 3.154 2.399s1.947 2.25 2.399 3.154c.225.45.33.793.36 1.019-.3-.038-.828-.22-1.555-.657C11.616 15.819 10.7 15.1 9.8 14.2s-1.619-1.816-2.102-2.618c-.438-.727-.619-1.255-.657-1.554.226.028.57.134 1.019.36Z" fill="currentColor"/><path d="M21 9a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M16 11a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M22.857 16.486c-1.382-2.304-3.812-2.788-5.998-2.476a1 1 0 0 0 .282 1.98c1.746-.25 3.191.174 4.001 1.525a1 1 0 1 0 1.715-1.03Z" fill="currentColor"/><path d="M18 18a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
