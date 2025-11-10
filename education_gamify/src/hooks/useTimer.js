import { useEffect, useRef, useState } from 'react'


export default function useTimer(initialSeconds) {
const [seconds, setSeconds] = useState(initialSeconds)
const intervalRef = useRef(null)


useEffect(() => {
return () => clearInterval(intervalRef.current)
}, [])


const start = () => {
clearInterval(intervalRef.current)
intervalRef.current = setInterval(() => {
setSeconds(s => {
if (s <= 0) {
clearInterval(intervalRef.current)
return 0
}
return s - 1
})
}, 1000)
}
const stop = () => clearInterval(intervalRef.current)
const reset = (val) => setSeconds(val)


return { seconds, start, stop, reset }
}