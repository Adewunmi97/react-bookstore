import PropTypes from 'prop-types';
import progressCircle from './ShowProgress.png';
import './ShowProgress.css';

const ShowProgress = ({ progress }) => {
  const { currentChapter } = progress;

  return (
    <div className="book-progress">
      <div className="book-progress-visualisation">
        <img src={progressCircle} alt="Progress circle" className="circle" />
        <div className="percentage">
          <p className="display-per">65%</p>
          <p className="text">Completed</p>
        </div>
      </div>
      <div className="book-progress-update">
        <div className="curent-chapter-wrapper">
          <p className="text">CURRENT CHAPTER</p>
          <p className="chapter">{currentChapter}</p>
          <button type="button" className="update-button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

ShowProgress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string,
    completed: PropTypes.string,
  }),
};
ShowProgress.defaultProps = {
  progress: PropTypes.shape({
    currentChapter: '0',
    completed: 'Introduction',
  }),
};
export default ShowProgress;
