import styles from "./index.module.css";

export interface BasicModalProps {
  isOpen: boolean;
  close: () => void;
}
interface ModalProps extends BasicModalProps {
  children: JSX.Element;
}
export default function Modal(props: ModalProps) {
  if (!props.isOpen) {
    return <></>;
  }

  return (
    <div className={`${styles.container} ${props.isOpen}`}>
      <div className={styles.backdrop} onClick={() => props.close()}></div>
      <div className={styles.modalContainer}>{props.children}</div>
    </div>
  );
}
