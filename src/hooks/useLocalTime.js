import { useEffect, useState } from 'react'

function formatTime(timeZone) {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone,
      timeZoneName: 'short',
    }).format(new Date())
  } catch {
    return timeZone
  }
}

/** Current time in `timeZone`, refreshed every 30 seconds. */
export function useLocalTime(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timeZone)), 30_000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}
