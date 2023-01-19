import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed();
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const inceremntStats = event => {
    const nameStat = event.target.textContent.toLowerCase();
    if (nameStat === 'good') {
      setGood(good + 1);
    } else if (nameStat === 'neutral') {
      setNeutral(neutral + 1);
    } else if (nameStat === 'bad') {
      setBad(bad + 1);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={inceremntStats}></FeedbackOptions>
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </>
  );
};
