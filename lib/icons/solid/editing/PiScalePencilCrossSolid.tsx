import React from 'react';

/**
 * PiScalePencilCrossSolid icon from the solid style in editing category.
 */
interface PiScalePencilCrossSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScalePencilCrossSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'scale-pencil-cross icon',
  ...props
}: PiScalePencilCrossSolidProps): JSX.Element {
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
      <path d="M10.937 5.234a1.016 1.016 0 0 1 1.436 0L14.5 7.361a1 1 0 1 0 1.414-1.414l-1.987-1.988c-.474-.473-.49-1.26.02-1.692.305-.259.636-.488 1.041-.62a3 3 0 0 1 1.864 0c.406.132.736.361 1.04.62.289.245.613.568.989.944l1.908 1.908c.375.376.7.7.944.988.259.305.488.635.62 1.04a3 3 0 0 1 0 1.865c-.132.406-.361.736-.62 1.04-.245.289-.569.613-.944.989l-9.749 9.748c-.375.375-.7.7-.988.944-.304.259-.634.488-1.04.62a3 3 0 0 1-1.864 0c-.406-.132-.736-.361-1.04-.62a18 18 0 0 1-.989-.944L3.211 18.88c-.376-.376-.7-.7-.944-.989-.259-.304-.488-.634-.62-1.04a3 3 0 0 1 0-1.864c.132-.405.361-.736.62-1.04.433-.51 1.219-.495 1.692-.021l2.7 2.7a1 1 0 0 0 1.415-1.414l-2.84-2.84a1.016 1.016 0 1 1 1.437-1.436l2.127 2.126a1 1 0 0 0 1.414-1.414L8.086 9.522a1.016 1.016 0 0 1 1.436-1.437l2.84 2.84a1 1 0 0 0 1.414-1.414l-2.84-2.84a1.016 1.016 0 0 1 0-1.437Z" fill="currentColor"/><path d="m3.1 8.131-.048-.048c-.217-.217-.428-.428-.587-.684a2.6 2.6 0 0 1-.308-.722c-.075-.291-.082-.59-.09-.897L2 3.03a1 1 0 0 1 .998-1.025L5.798 2c.316-.001.626-.002.93.07.264.064.518.17.75.312.265.163.484.384.707.609l.052.051.003.004.332.336a1 1 0 0 1-.005 1.41L4.868 8.49a1 1 0 0 1-1.418-.004z" fill="currentColor"/><path d="M19.907 15.176a1 1 0 0 1 .708.296l.595.6.002.003.003.003.073.074c.812.858.943 2.156.32 3.16q-.023.038-.047.073l-.046.072a7.3 7.3 0 0 1-2.146 2.132 2.57 2.57 0 0 1-3.215-.346l-.002-.002-.657-.663a1 1 0 0 1 .004-1.41l3.698-3.7a1 1 0 0 1 .71-.292Z" fill="currentColor"/>
    </svg>
  );
}
