import { getVideoList } from '../../utility/localStorage'
import React, { useCallback, useMemo } from 'react'
import { YouTubeProps } from 'react-youtube'

type SetPlayAt = React.Dispatch<React.SetStateAction<number>>

export type UseVideoOptions = {
  playAt: number
  setPlayAt: SetPlayAt
}
export function useVideo({ playAt, setPlayAt }: UseVideoOptions) {
  const videoList = useMemo(() => getVideoList(), [])
  const onEnd = useCallback(
    // async (event: YouTubeEvent<unknown>) => {
    async () => {
      const isLastVideo = playAt === videoList.length - 1
      if (isLastVideo) {
        setPlayAt(0)
        return
      }
      setPlayAt((at) => at + 1)
    },
    [playAt, setPlayAt, videoList],
  )
  const videoPlayInfo = useMemo(() => videoList[playAt], [playAt, videoList])
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  }
  const { start, end } = videoPlayInfo
  // FIXME: start = 0にすると長時間動画の場合、途中で再生されてしまう
  start ? (opts.playerVars!.start = start) : (opts.playerVars!.start = 1)
  end ? (opts.playerVars!.end = end) : (opts.playerVars!.end = undefined)
  const videoId = videoPlayInfo.videoId

  return {
    videoId,
    onEnd,
    opts,
  }
}
