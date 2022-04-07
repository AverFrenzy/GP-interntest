import { FeedbackTitle, FeedbackSubTitle, FeedbackBox } from './Feedback.styles';

export const Feedback = ({ comment, phoneNumb }) => {
  return (
    <FeedbackBox>
      <FeedbackTitle>Phone</FeedbackTitle>
      <FeedbackSubTitle>{phoneNumb}</FeedbackSubTitle>
      <FeedbackTitle>Comment</FeedbackTitle>
      <FeedbackSubTitle>{comment}</FeedbackSubTitle>
    </FeedbackBox>
  );
};
