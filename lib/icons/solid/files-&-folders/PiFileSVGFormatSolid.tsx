import React from 'react';

/**
 * PiFileSVGFormatSolid icon from the solid style in files-&-folders category.
 */
interface PiFileSVGFormatSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFileSVGFormatSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-svg-format icon',
  ...props
}: PiFileSVGFormatSolidProps): React.ReactElement {
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
      <path d="M13 1.001v2.24c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C17.29 9 17.954 9 18.758 9h2.24q.003.251.002.537V11H3V8.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 5.73 1.544c.592-.302 1.233-.428 1.961-.487C8.4 1 9.273 1 10.357 1h2.106z" fill="currentColor"/><path d="M15 1.283V3.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C17.361 7 17.943 7 18.8 7h1.918a5 5 0 0 0-.455-.956c-.31-.506-.735-.93-1.35-1.545L17.5 3.085c-.614-.613-1.038-1.038-1.544-1.348A5 5 0 0 0 15 1.283Z" fill="currentColor"/><path d="M10.976 13.784a1 1 0 1 0-1.952.432l1.55 7a1 1 0 0 0 .977.784h1.55a1 1 0 0 0 .977-.784l1.55-7a1 1 0 0 0-1.952-.432l-1.35 6.093z" fill="currentColor"/><path d="M4.75 13a2.75 2.75 0 1 0 0 5.5h1.5a.75.75 0 0 1 0 1.5H3a1 1 0 1 0 0 2h3.25a2.75 2.75 0 1 0 0-5.5h-1.5a.75.75 0 0 1 0-1.5H7a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M18 17.5c0-.782.228-1.448.546-1.894.32-.447.67-.606.954-.606.28 0 .625.155.942.589a1 1 0 0 0 1.616-1.178C21.472 13.608 20.582 13 19.5 13c-1.097 0-1.996.624-2.581 1.444-.587.821-.919 1.905-.919 3.056 0 1.15.332 2.235.919 3.056.585.82 1.484 1.444 2.581 1.444 1.082 0 1.972-.608 2.558-1.411A1 1 0 0 0 22.25 20v-2a1 1 0 0 0-1-1h-.75a1 1 0 0 0-.25 1.968v.67c-.26.263-.526.362-.75.362-.284 0-.635-.16-.954-.606S18 18.282 18 17.5Z" fill="currentColor"/>
    </svg>
  );
}
