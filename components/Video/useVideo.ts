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
    // async (_event: YouTubeEvent<unknown>) => {
    async () => {
      const isLastVideo = playAt === videoList.length - 1
      if (isLastVideo) {
        // await event.target.pauseVideo()
        setPlayAt(0)
        return
      }
      setPlayAt((at) => at + 1)
    },
    [playAt, setPlayAt, videoList],
  )
  const videoPlayInfo = useMemo(() => videoList[playAt], [playAt, videoList])
  const opts = useMemo<YouTubeProps['opts']>(
    () => ({
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start: videoPlayInfo.start,
        end: videoPlayInfo.end,
      },
    }),
    [videoPlayInfo],
  )
  const videoId = videoPlayInfo.videoId

  return {
    videoId,
    onEnd,
    opts,
  }
}
