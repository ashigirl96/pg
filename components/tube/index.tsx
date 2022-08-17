import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export function Tube() {
  const onPlayerReady: YouTubeProps['onReady'] = async (event) => {
    // access to player in all event handlers via event.target
    console.log('onReady')
    await event.target.playVideoAt(3)
    // await event.target.playVideo().then(() => {
    //   console.log('playVideo')
    // })
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
      end: 5,
      loop: 1,
    },
  }

  return (
    <YouTube
      videoId="2g811Eo7K8U"
      opts={opts}
      onReady={onPlayerReady}
      onEnd={() => console.log('onEnd')}
    />
  )
}
