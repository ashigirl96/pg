import { atom } from 'recoil'
import { YouTubePlayer } from 'youtube-player/dist/types'

type VideoTerm = {
  videoId: string
  start?: number
  end?: number
}
export const videoTermState = atom<VideoTerm>({
  key: 'videoTermState',
  default: {
    videoId: '',
    start: 1,
    end: undefined,
  },
})

export const videoReadyEventState = atom<YouTubePlayer>({
  key: 'videoReadyEventState',
  default: undefined,
})
