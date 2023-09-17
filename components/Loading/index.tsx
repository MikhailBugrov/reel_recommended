import loading from "./loading.module.scss";

interface IProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

const Loading = ({ isLoading, children }: IProps) => {
  if (isLoading) {
    return (
      <div className={loading.loadingContainer}>
        <div className={loading.loadingSpinner}></div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
