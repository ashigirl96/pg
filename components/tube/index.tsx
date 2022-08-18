import React, { useState } from 'react'
import { Video } from '../Video'
import { demoVideoList } from '../../utility/videoType'

export function Tube() {
  const [playAt, setPlayAt] = useState<number | undefined>(0)
  return (
    <div className="w-[100vw] h-[100vh]">
      <Video video={demoVideoList[playAt || 0]} setPlayAt={setPlayAt} />
    </div>
  )
}
