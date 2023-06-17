import PropTypes from 'prop-types';
import loading from '../style/loading.module.css';

const Loading = ({ unmount }) => (
  <div className={loading.spinnerContainer}>
    <div className={`${loading.spinner} ${unmount ? loading.unmount : loading.mount}`} />
  </div>
);

export default Loading;

Loading.propTypes = {
  unmount: PropTypes.bool.isRequired,
};
