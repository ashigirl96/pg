import { useCallback, useMemo, useState } from 'react'
import { getVideoList } from '../../utility/localStorage'

export function useNextVideo() {
  const videoList = useMemo(() => getVideoList(), [])
  const [playAt, setPlayAt] = useState(0)
  const playPreviousVideo = useCallback(
    () => setPlayAt((at) => (at <= 0 ? videoList.length - 1 : at - 1)),
    [videoList.length],
  )
  const playNextVideo = useCallback(
    () => setPlayAt((at) => (at + 1) % videoList.length),
    [videoList.length],
  )
  return {
    playPreviousVideo,
    playNextVideo,
    playAt,
  }
}
