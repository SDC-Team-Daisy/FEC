import React from 'react';
import { ReviewSummary, ReviewWrapper, ReviewBody, ReviewDate, ReviewPurchaser, Response, Recommend } from '../Styled/ReviewListStyled.js';
import StarFilled from '../RatingReview/StarFilled.jsx';
import { FaCheck } from "react-icons/fa";


const ReviewListItem = ( {item} ) => {
  let date = item.date.split('T');
  date = date[0];

  let cappedSummary = item.summary.substring(0, 60);
  cappedSummary = cappedSummary.split('.');
  cappedSummary = cappedSummary[0];

  return (
    <ReviewWrapper>
      <StarFilled />
      <ReviewDate>{date}</ReviewDate>
      <ReviewPurchaser>Verified Purchaser: {item.reviewer_name}</ReviewPurchaser>
      <Recommend>
        {item.recommend ? `I recommend this product`: ''}
        {item.recommend ? <FaCheck style={{ 'color': "#00FA9A" }} /> : ''}
      </Recommend>
      <ReviewSummary>Summary: {cappedSummary}</ReviewSummary>
      <ReviewBody>{item.body}</ReviewBody>
      <Response>{item.response ? `Response from seller: ${item.response}`: ''}</Response>
    </ReviewWrapper>
  )
}

export default ReviewListItem;
