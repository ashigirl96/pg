import React from 'react'
import YouTube from 'react-youtube'
import { useYoutubePlayer } from './useYoutubePlayer'

function YoutubePlayer() {
  const { videoId, opts, handleStateChange, handleReady } = useYoutubePlayer()

  return (
    <YouTube
      className="hidden"
      videoId={videoId}
      opts={opts}
      onStateChange={handleStateChange}
      onReady={handleReady}
    />
  )
}

export default YoutubePlayer
