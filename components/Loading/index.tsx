import stylesLoading from "./Loading.module.scss";

interface IProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

const Loading = ({ isLoading, children }: IProps) => {
  if (isLoading) {
    return (
      <div className={stylesLoading.container}>
        <div className={stylesLoading.spinner}></div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
