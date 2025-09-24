import React from 'react';

/**
 * PiInvoice01Solid icon from the solid style in files-&-folders category.
 */
interface PiInvoice01SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInvoice01Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'invoice-01 icon',
  ...props
}: PiInvoice01SolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M7.51 2.671c-.272.078-.352.1-.427.115a2 2 0 0 1-1.007-.064 6 6 0 0 1-.41-.168l-.089-.038c-.312-.134-.63-.272-.923-.317a2.3 2.3 0 0 0-2.582 1.703c-.073.286-.073.633-.072.973v10.567c0 .945 0 1.714.051 2.338.053.646.165 1.224.44 1.763a4.5 4.5 0 0 0 1.966 1.967c.54.274 1.118.386 1.763.44.625.05 1.394.05 2.338.05H19a3 3 0 0 0 3-3v-6.432c0-.252 0-.498-.017-.706a2 2 0 0 0-.2-.77 2 2 0 0 0-.875-.874 2 2 0 0 0-.77-.201 9 9 0 0 0-.706-.017H18V4.875c.001-.34.002-.687-.071-.973a2.3 2.3 0 0 0-2.583-1.703c-.292.045-.61.183-.923.317l-.088.038a6 6 0 0 1-.41.168 2 2 0 0 1-1.007.064 6 6 0 0 1-.428-.115l-.964-.275c-.425-.122-.747-.214-1.081-.251a4 4 0 0 0-.89 0c-.333.037-.655.13-1.08.251zM18 12.001v7a1 1 0 1 0 2 0v-6.4c0-.298 0-.46-.01-.576l-.001-.014h-.013A8 8 0 0 0 19.4 12zM11.03 7a1 1 0 0 0-2 0c-1.61.042-2.78 1.44-2.78 3 0 1.583 1.206 3 2.852 3h1.852c.4 0 .851.374.851 1s-.452 1-.851 1h-1.91c-.342 0-.709-.26-.821-.732a1 1 0 1 0-1.946.464c.298 1.248 1.374 2.26 2.75 2.268a1 1 0 0 0 2 0c1.609-.042 2.778-1.44 2.778-3 0-1.583-1.205-3-2.851-3H9.103c-.4 0-.852-.374-.852-1s.452-1 .852-1h1.91c.341 0 .708.26.82.732a1 1 0 1 0 1.946-.464C13.482 8.02 12.406 7.008 11.03 7Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
