import { getVideoList } from '../../utility/localStorage'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { YouTubeEvent, YouTubeProps } from 'react-youtube'
import { getPlayerStateName, PLAYER_STATES } from '../../utility/player_states'

export type UseVideoOptions = {
  playAt: number
  playNextVideo: () => void
}

export function useVideo({ playAt, playNextVideo }: UseVideoOptions) {
  const videoList = useMemo(() => getVideoList(), [])
  const [opts, setOpts] = useState<YouTubeProps['opts']>(undefined)
  const [videoId, setVideoId] = useState('')
  useEffect(() => {
    const videoPlayInfo = videoList[playAt]
    const { start, end, videoId: _videoId } = videoPlayInfo
    setOpts({
      height: '480',
      width: '720',
      playerVars: {
        fs: 0,
        disablekb: 1,
        controls: 0,
        autoplay: 1,
        start: start ?? 1, // 0sだと開始しないので、最小値を1sにする
        end,
        origin: window.location.origin,
      },
    })
    setVideoId(_videoId)
  }, [playAt, videoList])

  const handleStateChange = useCallback(
    async (event: YouTubeEvent<unknown>) => {
      const state = await event.target.getPlayerState()
      console.log(`state ${getPlayerStateName(state)}`)
      if (state === PLAYER_STATES.ENDED) {
        playNextVideo()
      }
    },
    [playNextVideo, videoList.length],
  )

  return {
    opts,
    videoId,
    handleStateChange,
  }
}
