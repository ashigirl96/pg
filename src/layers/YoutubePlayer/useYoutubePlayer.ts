import { useRecoilValue, useSetRecoilState } from 'recoil'
import { videoReadyEventState, videoTermState } from '@/atoms/player'
import { YouTubeEvent, YouTubeProps } from 'react-youtube'
import { useCallback } from 'react'
import { getPlayerStateKey } from '@/utility/player_states'

export function useYoutubePlayer() {
  const { videoId, start, end } = useRecoilValue(videoTermState)
  const setReadyEvent = useSetRecoilState(videoReadyEventState)

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      fs: 0,
      disablekb: 1,
      controls: 0,
      autoplay: 1,
      start: start ?? 1, // 0sだと開始しないので、最小値を1sにする
      end,
      origin: window.location.origin,
    },
  }

  const handleStateChange = useCallback(
    async (event: YouTubeEvent<unknown>) => {
      const state = await event.target.getPlayerState()
      switch (getPlayerStateKey(state)) {
        case 'BUFFERING':
          break
        case 'PAUSED':
          break
        case 'VIDEO_CUED':
          break
        case 'UN_STARTED':
          break
        case 'ENDED':
          break
        case 'PLAYING':
          break
      }
    },
    [],
  )

  const handleReady = useCallback(
    (event: YouTubeEvent<unknown>) => {
      console.log(`onReady ${event.target}`)
      setReadyEvent(event.target)
    },
    [setReadyEvent],
  )

  return {
    videoId,
    opts,
    handleStateChange,
    handleReady,
  }
}
