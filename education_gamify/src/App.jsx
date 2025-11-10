import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Challenges from './pages/Challenges'
import Profile from './pages/Profile'
import QuizPlay from './components/QuizPlay'
import BadgeModal from './components/BadgeModal'



export default function App() {
const [activeQuiz, setActiveQuiz] = useState(null)
const [showBadges, setShowBadges] = useState(false)
const [earnedBadges, setEarnedBadges] = useState([])


const handleStart = (quiz) => setActiveQuiz(quiz)
const handleFinish = ({ score, total, pct, earned }) => {
if (earned && earned.length) {
setEarnedBadges(earned)
setShowBadges(true)
}
setActiveQuiz(null)
alert(`Score: ${score}/${total} (${pct}%)`)
}


return (
<div className="min-h-screen bg-gray-100">
<Navbar />
<main className="max-w-6xl mx-auto py-6">
{!activeQuiz ? (
<Routes>
<Route path="/" element={<Home onStart={handleStart} />} />
<Route path="/challenges" element={<Challenges />} />
<Route path="/profile" element={<Profile userProfile={{ points: 120, level: 3, badges: ['quickStarter'] }} />} />
</Routes>
) : (
<div className="p-4">
<QuizPlay quiz={activeQuiz} onFinish={handleFinish} />
</div>
)}
</main>


<BadgeModal open={showBadges} badges={earnedBadges} onClose={() => setShowBadges(false)} />
</div>
)
}