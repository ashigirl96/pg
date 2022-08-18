import React from 'react'
import YouTube from 'react-youtube'
import { useVideo, UseVideoOptions } from './useVideo'

type VideoProps = UseVideoOptions

const Video: React.FC<VideoProps> = ({ playAt, setPlayAt }) => {
  const { videoId, opts, handleStateChange } = useVideo({ playAt, setPlayAt })

  return (
    <YouTube
      className="flex justify-center h-full"
      videoId={videoId}
      opts={opts}
      onStateChange={handleStateChange}
    />
  )
}

export default Video
