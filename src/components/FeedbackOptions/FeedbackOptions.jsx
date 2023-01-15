import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={onLeaveFeedback}>Good</button>
      <button onClick={onLeaveFeedback}>Neutral</button>
      <button onClick={onLeaveFeedback}>Bad</button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
