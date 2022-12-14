import React from 'react'
import dynamic from 'next/dynamic'
import { useNextVideo } from './useNextVideo'

const Video = dynamic(() => import('../Video'), { ssr: false })

export function PlayList() {
  const { playAt, playPreviousVideo, playNextVideo } = useNextVideo()

  return (
    <div>
      <button onClick={() => playPreviousVideo()}>previous</button>
      <button onClick={() => playNextVideo()}>next</button>
      <Video playAt={playAt} playNextVideo={playNextVideo} />
    </div>
  )
}
