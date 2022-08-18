import React, { useMemo, useState } from 'react'
import { VideoType } from '../../utility/videoType'
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube'

type StatePlayAt = ReturnType<typeof useState<number>>

type VideoProps = {
  video: VideoType
  setPlayAt: StatePlayAt[1]
}

export const Video: React.FC<VideoProps> = ({ video, setPlayAt }) => {
  const { start, end, videoId } = video
  const [readyEvent, setReadyEvent] = useState<YouTubeEvent<any>>(null!)
  const opts = useMemo<YouTubeProps['opts']>(
    () => ({
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        start,
        end,
      },
    }),
    [end, start],
  )

  return (
    <YouTube
      className="flex justify-center h-full"
      videoId={videoId}
      opts={opts}
      onReady={(e) => setReadyEvent(e)}
      onEnd={() => setPlayAt((playAt) => playAt! + 1)}
    />
  )
}
