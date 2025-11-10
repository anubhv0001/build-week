import React, { useEffect, useState } from 'react'
import QuizCard from '../components/QuizCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'


export default function Home({ onStart }) {
const [quizzes, setQuizzes] = useState([])


useEffect(() => {
async function load() {
try {
const snap = await getDocs(collection(db, 'quizzes'))
const arr = snap.docs.map(d => ({ id: d.id, ...d.data() }))
setQuizzes(arr)
} catch (err) {
console.error(err)
setQuizzes([{ id: 'demo', title: 'Demo Quiz', description: 'Try a quick quiz', questions: [
{ text: '2+2?', options: ['3','4','5','6'], answerIndex:1 },
], timeLimit:30 }])
}
}
load()
}, [])


return (
<div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
{quizzes.map(q => <QuizCard key={q.id} quiz={q} onStart={onStart} />)}
</div>
)
}