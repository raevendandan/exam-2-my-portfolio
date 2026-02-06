import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Reviews() {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [reviews, setReviews] = useState([])

  
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reviews') || '[]')
    setReviews(stored)
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !comment) return

    const newReview = {
      id: Date.now(),
      name,
      comment,
    }

    const updatedReviews = [...reviews, newReview]
    localStorage.setItem('reviews', JSON.stringify(updatedReviews))
    setReviews(updatedReviews)

    setName('')
    setComment('')
  }

  return (
    <section className="max-w-4xl mx-auto space-y-10">
      
     
      <h2 className="text-3xl font-bold text-teal-400">
        Reviews
      </h2>

     
      <form
        onSubmit={handleSubmit}
        className="bg-black/50 border border-white/10 rounded-xl p-6 space-y-4"
      >
        <h3 className="text-xl font-semibold text-white">
          Make a Review
        </h3>

        <input
          className="
            w-full px-4 py-2 rounded-lg
            bg-black border border-white/20
            text-white placeholder-gray-400
            focus:outline-none focus:border-teal-400
          "
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <textarea
          rows="4"
          className="
            w-full px-4 py-2 rounded-lg
            bg-black border border-white/20
            text-white placeholder-gray-400
            focus:outline-none focus:border-teal-400
          "
          placeholder="Your Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />

        <button
          type="submit"
          className="
            px-6 py-2 rounded-lg
            bg-teal-500 text-black font-medium
            hover:bg-teal-400 transition
          "
        >
          Submit Review
        </button>
      </form>

     
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white">
          Submitted Reviews
        </h3>

        {reviews.length === 0 && (
          <p className="text-gray-400">
            No reviews yet.
          </p>
        )}

        {reviews.map(review => (
          <div
            key={review.id}
            className="
              bg-black/40 border border-white/10
              rounded-xl p-5
              hover:border-teal-400/40 transition
            "
          >
            <h4 className="text-white font-semibold">
              {review.name}
            </h4>

            <p className="text-gray-400 mt-2">
              {review.comment}
            </p>

           
            <Link
              to={`/reviews/${review.id}`}
              className="inline-block mt-3 text-sm text-teal-400 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
