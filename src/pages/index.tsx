import type { NextPage } from 'next'
import { useEffect } from 'react'
import { getVideoList } from '@/utility/localStorage'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { videoTermState, videoReadyEventState } from '@/atoms/player'

const Index: NextPage = () => {
  const setVideoTerm = useSetRecoilState(videoTermState)
  const videoEvent = useRecoilValue(videoReadyEventState)

  useEffect(() => {
    const { videoId, start, end } = getVideoList()[0]
    setVideoTerm({ videoId, start, end })
  }, [setVideoTerm])

  return (
    <div className="w-screen h-screen bg-peanuts1">
      <h1>Youtube</h1>
      <button onClick={() => videoEvent.playVideo()}>play</button>
      <button onClick={() => videoEvent.pauseVideo()}>stop</button>
    </div>
  )
}

export default Index
