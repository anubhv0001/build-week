import React from 'react'


export default function BadgeModal({ open, badges, onClose }) {
if (!open) return null
return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center">
<div className="bg-white p-6 rounded-lg w-96">
<h3 className="text-xl font-bold">Achievements Unlocked!</h3>
<div className="mt-4 grid grid-cols-1 gap-3">
{badges.map(b => (
<div key={b.id} className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">🏆</div>
<div>
<div className="font-semibold">{b.title}</div>
<div className="text-sm text-gray-600">{b.desc}</div>
</div>
</div>
))}
</div>
<div className="mt-4 text-right">
<button onClick={onClose} className="px-4 py-2 bg-indigo-600 text-white rounded">Close</button>
</div>
</div>
</div>
)
}