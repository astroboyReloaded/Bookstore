import PropTypes from 'prop-types';
import chapter from '../../style/chapter.module.css';

const Chapter = ({ current }) => (
  <section className={chapter.sectionContaier}>
    <span className={chapter.sectionTitle}>CURRENT CHAPTER</span>
    <span>{current}</span>
    <button className={chapter.updateBtn} type="button">UPDATE PROGRESS</button>
  </section>
);

export default Chapter;

Chapter.propTypes = {
  current: PropTypes.string.isRequired,
};
