import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button = ({ children, onClick, disabled, className }: Props) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${className} ${styles.baseButton}`}>
      {children}
    </button>
  );
};
