import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Reviews from './pages/Reviews'
import ReviewList from './pages/ReviewList'
import ReviewDetail from './pages/ReviewDetail'
import Contact from './pages/Contact'


export default function App() {
return (
<Layout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />
<Route path="/reviews" element={<Reviews />} />
<Route path="/reviews/list" element={<ReviewList />} />
<Route path="/reviews/:id" element={<ReviewDetail />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Layout>
)
}