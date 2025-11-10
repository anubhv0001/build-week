import React from 'react'
import { useAuth } from '../context/AuthContext'
import AnimatedCounter from '../components/AnimatedCounter'


export default function Profile({ userProfile }) {
return (
<div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white p-4 rounded shadow">
<h3 className="font-semibold">Your Stats</h3>
<div className="mt-4">
<div>Points: <AnimatedCounter value={userProfile?.points || 0} /></div>
<div className="mt-2">Level: <strong>{userProfile?.level || 1}</strong></div>
</div>
</div>
<div className="bg-white p-4 rounded shadow">
<h3 className="font-semibold">Badges</h3>
<div className="mt-3 flex gap-2 flex-wrap">
{(userProfile?.badges || []).map(b => (
<div key={b} className="p-2 rounded bg-yellow-100">{b}</div>
))}
</div>
</div>
</div>
)
}