import { VideoType } from './videoType'
import { timeToSeconds } from './time'

export function getVideoList(): VideoType[] {
  return [
    {
      start: null,
      end: timeToSeconds({ minutes: 0, seconds: 2 }),
      videoId: '4RiiI92qGWA',
    },
    {
      start: null,
      end: 3,
      videoId: 'lYJQegOFPGo',
    },
  ]
}
