type ArrowIconProps = {
  direction?: 'left' | 'right';
  color?: string;
  width?: number;
  height?: number;
};

export const ArrowIcon = ({
  direction = 'right',
  color = '#3877EE',
  width = 5,
  height = 10,
}: ArrowIconProps) => {
  const style = direction === 'left' ? { transform: 'rotate(180deg)' } : undefined;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M0.7 0.7L5.7 5.7L0.7 10.7" stroke={color} />
    </svg>
  );
};
