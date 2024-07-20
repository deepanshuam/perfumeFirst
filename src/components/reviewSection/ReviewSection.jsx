// src/components/ReviewsSection.js
import React, { useState, useEffect } from 'react';
import './ReviewsSection.css'; // Assuming you have a CSS file for styling

const ReviewsSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    // Fetch reviews from your API
    fetch(`/api/products/${productId}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data));
  }, [productId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Submit the new review to your API
    fetch(`/api/products/${productId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newReview }),
    })
      .then(response => response.json())
      .then(data => setReviews([...reviews, data]))
      .then(() => setNewReview(''));
  };

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
      <form onSubmit={handleReviewSubmit}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write a review..."
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewsSection;
