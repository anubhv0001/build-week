import React, { useEffect, useState } from 'react'


export default function AnimatedCounter({ value }) {
const [display, setDisplay] = useState(0)
useEffect(() => {
let raf
const start = performance.now()
const duration = 800
const from = display
const to = value
const step = (t) => {
const p = Math.min((t - start) / duration, 1)
setDisplay(Math.round(from + (to - from) * p))
if (p < 1) raf = requestAnimationFrame(step)
}
raf = requestAnimationFrame(step)
return () => cancelAnimationFrame(raf)
}, [value])


return <span className="font-bold text-xl">{display}</span>
}