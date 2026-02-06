import { useParams } from 'react-router-dom'


export default function ReviewDetail() {
const { id } = useParams()
const reviews = JSON.parse(localStorage.getItem('reviews') || '[]')
const review = reviews.find(r => r.id.toString() === id)


if (!review) return <p>Review not found</p>


return (
<div className="bg-white p-4 shadow rounded">
<h2 className="text-xl font-bold">{review.name}</h2>
<p>{review.comment}</p>
</div>
)
}