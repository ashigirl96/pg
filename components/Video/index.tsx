import React from 'react'
import YouTube from 'react-youtube'
import { useVideo, UseVideoOptions } from './useVideo'
import { useFetchThumbnail } from '../../utility/fetchThumbnail'

type VideoProps = UseVideoOptions

const Video: React.FC<VideoProps> = ({ playAt, playNextVideo }) => {
  const { videoId, opts, handleStateChange } = useVideo({
    playAt,
    playNextVideo,
  })
  const { thumbnail } = useFetchThumbnail(videoId)
  console.log(thumbnail)

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
