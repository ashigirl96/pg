import React from 'react'
import YouTube from 'react-youtube'
import { useVideo, UseVideoOptions } from './useVideo'

type VideoProps = UseVideoOptions

export const Video: React.FC<VideoProps> = ({ playAt, setPlayAt }) => {
  const { videoId, opts, onEnd } = useVideo({ playAt, setPlayAt })

  return (
    <YouTube
      className="flex justify-center h-full"
      videoId={videoId}
      opts={opts}
      onEnd={onEnd}
    />
  )
}
