import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { useVideo, UseVideoOptions } from './useVideo'
import { fetchThumbnailUrl } from '../../utility/fetchThumbnail'

type VideoProps = UseVideoOptions

const Video: React.FC<VideoProps> = ({ playAt, playNextVideo }) => {
  const { videoId, opts, handleStateChange } = useVideo({
    playAt,
    playNextVideo,
  })
  const [img, setImg] = useState('')
  useEffect(() => {
    fetchThumbnailUrl(videoId).then((x) => setImg(x || ''))
  }, [videoId])
  console.log(img)

  return (
    <div className="relative">
      <img
        className="blur-lg object-cover static"
        src={img}
        alt={'thumbnail'}
        width={1080}
        height={720}
      />
      <YouTube
        className="flex justify-center h-full absolute top-10 left-10"
        videoId={videoId}
        opts={opts}
        onStateChange={handleStateChange}
      />
    </div>
  )
}

export default Video
