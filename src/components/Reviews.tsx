import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import '../styles/components/_reviews.scss';

// This component handles fetching, displaying, and submitting customer reviews.
interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newName, setNewName] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(5);
  const [newComment, setNewComment] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('reviews') // Assuming a 'reviews' table in Supabase
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }
      setReviews(data || []);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching reviews:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newComment) {
      alert('Name and comment cannot be empty.');
      return;
    }

    try {
      setSubmitting(true);
      const { data, error } = await supabase
        .from('reviews')
        .insert([{ name: newName, rating: newRating, comment: newComment }]);

      if (error) {
        throw error;
      }

      // Clear form and refetch reviews
      setNewName('');
      setNewComment('');
      setNewRating(5);
      fetchReviews();
    } catch (err: any) {
      setError(err.message);
      console.error('Error submitting review:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="reviews-section container">Loading reviews...</div>;
  if (error) return <div className="reviews-section container">Error: {error}</div>;

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>

        <div className="review-form-container">
          <h3>Leave a Review</h3>
          <form onSubmit={handleSubmitReview}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
                disabled={submitting}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={newRating}
                onChange={(e) => setNewRating(parseInt(e.target.value))}
                disabled={submitting}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
                disabled={submitting}
              ></textarea>
            </div>
            <button type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>

        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to leave one!</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="review-card">
                <p className="review-name">{review.name}</p>
                <p className="review-rating">{'⭐'.repeat(review.rating)}</p>
                <p className="review-comment">{review.comment}</p>
                <p className="review-date">{new Date(review.created_at).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
