import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: Props) => {
  return <button onClick={onClick} className={`${className} ${styles.baseButton}`}>{children}</button>;
};
