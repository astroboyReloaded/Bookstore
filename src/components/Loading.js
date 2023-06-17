import loading from '../style/loading.module.css';

const Loading = () => (
  <div className={loading.spinnerContainer}>
    <div className={loading.spinner} />
  </div>
);

export default Loading;
