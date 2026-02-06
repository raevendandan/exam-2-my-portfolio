import { Link } from 'react-router-dom'


export default function ReviewList() {
const reviews = JSON.parse(localStorage.getItem('reviews') || '[]')


return (
<ul className="space-y-2">
{reviews.map(r => (
<li key={r.id} className="bg-white p-4 shadow">
<Link to={`/reviews/${r.id}`} className="text-blue-600 font-semibold">{r.name}</Link>
</li>
))}
</ul>
)
}