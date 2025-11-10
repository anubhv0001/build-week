import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function Navbar() {
const { user, logout } = useAuth()
return (
<nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 flex items-center justify-between">
<div className="text-xl font-bold">GamifyEd</div>
<div className="flex gap-4 items-center">
<Link to="/" className="hover:underline">Home</Link>
<Link to="/challenges" className="hover:underline">Challenges</Link>
<Link to="/leaderboard" className="hover:underline">Leaderboard</Link>
{user ? (
<button onClick={logout} className="bg-white/20 px-3 py-1 rounded">Logout</button>
) : (
<Link to="/login" className="bg-white/20 px-3 py-1 rounded">Login</Link>
)}
</div>
</nav>
)
}