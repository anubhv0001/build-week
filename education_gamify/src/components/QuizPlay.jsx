import React, { useEffect, useMemo, useState } from 'react'
import useTimer from '../hooks/useTimer'
import { evaluateBadges } from '../utils/achievements'


export default function QuizPlay({ quiz, onFinish }) {
const total = quiz.questions.length
const [index, setIndex] = useState(0)
const [selected, setSelected] = useState(null)
const [score, setScore] = useState(0)
const [feedback, setFeedback] = useState(null)
const { seconds, start, stop } = useTimer(quiz.timeLimit || 60)


useEffect(() => { start(); return stop }, [])


const q = quiz.questions[index]


const choose = (i) => {
setSelected(i)
const correct = i === q.answerIndex
if (correct) setScore(s => s + 1)
setFeedback(correct)
setTimeout(() => {
setFeedback(null)
setSelected(null)
if (index + 1 < total) setIndex(index + 1)
else {
stop()
const pct = Math.round((score + (correct ? 1 : 0)) / total * 100)
const earned = evaluateBadges(pct, seconds)
onFinish({ score: score + (correct ? 1 : 0), total, pct, earned, timeLeft: seconds })
}
}, 700)
}


return (
<div className="p-4 bg-white rounded shadow">
<div className="flex justify-between items-center">
<div>Q {index + 1}/{total}</div>
<div>Time: <strong>{seconds}s</strong></div>
</div>


<div className="mt-4">
<div className="font-semibold text-lg">{q.text}</div>
<div className="grid grid-cols-1 gap-2 mt-3">
{q.options.map((opt, i) => (
<button key={i} onClick={() => choose(i)} className={`p-3 text-left rounded border ${selected===i ? (feedback ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400') : 'bg-gray-50'}`}>
{opt}
</button>
))}
</div>
</div>
</div>
)
}