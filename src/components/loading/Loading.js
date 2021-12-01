import LoadingStyles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={LoadingStyles.loaderParent}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
