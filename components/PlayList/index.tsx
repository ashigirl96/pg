import React, { useState } from 'react'
import dynamic from 'next/dynamic'

const Video = dynamic(() => import('../Video'), { ssr: false })

export function PlayList() {
  const [playAt, setPlayAt] = useState(0)
  return (
    <div className="w-[100vw] h-[100vh]">
      <button>previous</button>
      <button onClick={() => setPlayAt((at) => at + 1)}>next</button>
      <Video playAt={playAt} setPlayAt={setPlayAt} />
    </div>
  )
}
