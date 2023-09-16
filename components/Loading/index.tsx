import styles from "./loading.module.scss";

interface IProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

const Loading = ({ isLoading, children }: IProps) => {
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
