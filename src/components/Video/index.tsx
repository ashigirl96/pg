import React from 'react'
import YouTube from 'react-youtube'
import { useVideo, UseVideoOptions } from './useVideo'

type VideoProps = UseVideoOptions

const Video: React.FC<VideoProps> = ({ playAt, playNextVideo }) => {
  const { videoId, opts, handleStateChange } = useVideo({
    playAt,
    playNextVideo,
  })

  return (
    <div className="relative">
      <YouTube
        className="flex justify-center h-full absolute top-10 left-10 hidden"
        videoId={videoId}
        opts={opts}
        onStateChange={handleStateChange}
      />
    </div>
  )
}

export default Video
