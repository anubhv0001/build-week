import React from 'react'


export default function QuizCard({ quiz, onStart }) {
return (
<div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition relative overflow-hidden">
<h3 className="text-lg font-semibold">{quiz.title}</h3>
<p className="text-sm text-gray-600 mt-1">{quiz.description}</p>
<div className="flex justify-between items-center mt-4">
<div className="text-sm">Questions: {quiz.questions.length}</div>
<button onClick={() => onStart(quiz)} className="bg-indigo-600 text-white px-3 py-1 rounded">Start</button>
</div>
</div>
)
}