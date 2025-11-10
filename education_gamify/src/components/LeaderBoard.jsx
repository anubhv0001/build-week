import React from 'react'


export default function Leaderboard({ items }) {
return (
<div className="bg-white p-4 rounded shadow">
<h3 className="font-semibold">Leaderboard</h3>
<div className="mt-3">
{items.map((u, i) => (
<div key={u.id} className="flex items-center justify-between py-2 border-b">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">{i+1}</div>
<div>
<div className="font-semibold">{u.displayName}</div>
<div className="text-sm text-gray-500">{u.points} pts</div>
</div>
</div>
<div className="text-sm">{u.rankChange ? <span className="text-green-600">▲{u.rankChange}</span> : '-'}</div>
</div>
))}
</div>
</div>
)
}