import PropTypes from 'prop-types';
import progress from '../../style/progress.module.css';

const Progress = ({ percent }) => (
  <section className={progress.sectionContainer}>
    <div
      className={progress.chartContainer}
      style={{ backgroundImage: `conic-gradient(#307bbe 0%, #379cf6 ${percent}%, #e8e8e8 ${percent + 1}%)` }}
    >
      <div className={progress.innecCir} />
    </div>
    <div className={progress.percentContainer}>
      <span className={progress.percent}>
        {percent}
        %
      </span>
      <span>Completed</span>
    </div>
  </section>
);

export default Progress;

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};
