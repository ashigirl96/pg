import React, { useState } from 'react'
import { Video } from '../Video'

export function PlayList() {
  const [playAt, setPlayAt] = useState(0)
  return (
    <div className="w-[100vw] h-[100vh]">
      <Video playAt={playAt} setPlayAt={setPlayAt} />
    </div>
  )
}
