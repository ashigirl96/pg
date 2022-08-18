import { VideoType } from './videoType'
import { timeToSeconds } from './time'

export function getVideoList(): VideoType[] {
  return [
    {
      videoId: '4RiiI92qGWA',
    },
    {
      start: timeToSeconds({ minutes: 0, seconds: 10 }),
      end: timeToSeconds({ minutes: 0, seconds: 13 }),
      videoId: '4RiiI92qGWA',
    },
    {
      start: timeToSeconds({ minutes: 14, seconds: 10 }),
      end: timeToSeconds({ minutes: 16, seconds: 55 }),
      videoId: 'N84DT6HFYAg',
    },
  ]
}
