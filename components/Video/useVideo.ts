import { getVideoList } from '../../utility/localStorage'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { YouTubeEvent, YouTubeProps } from 'react-youtube'

type SetPlayAt = React.Dispatch<React.SetStateAction<number>>

export type UseVideoOptions = {
  playAt: number
  setPlayAt: SetPlayAt
}

const PLAYER_STATES = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UN_STARTED: -1,
  VIDEO_CUED: 5,
}

export function useVideo({ playAt, setPlayAt }: UseVideoOptions) {
  const videoList = useMemo(() => getVideoList(), [])
  const [opts, setOpts] = useState<YouTubeProps['opts']>(undefined)
  const [videoId, setVideoId] = useState('')
  useEffect(() => {
    const videoPlayInfo = videoList[playAt]
    const { start, end, videoId: _videoId } = videoPlayInfo
    setOpts({
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        start: start ?? 1, // 0sだと開始しないので、最小値を1sにする
        end,
        origin: window.location.origin,
      },
    })
    setVideoId(_videoId)
  }, [playAt, videoList])

  const handleStateChange = useCallback(
    (event: YouTubeEvent<unknown>) => {
      const playingInterval = setInterval(async () => {
        const state = await event.target.getPlayerState()
        console.log(`state ${state}`)
        if (state === PLAYER_STATES.PLAYING) {
          clearInterval(playingInterval)
          return
        }
        if (state === PLAYER_STATES.ENDED) {
          setPlayAt((at) => (at + 1) % videoList.length)
          clearInterval(playingInterval)
          return
        }
      }, 300)
    },
    [setPlayAt, videoList.length],
  )

  return {
    opts,
    videoId,
    handleStateChange,
  }
}
