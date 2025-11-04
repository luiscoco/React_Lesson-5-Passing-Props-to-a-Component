import { useEffect, useState } from 'react'

export default function Clock({ color }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    return () => clearInterval(id)
  }, [])

  return <div className="clock" style={{ color }}>{time}</div>
}
