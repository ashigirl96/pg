export const PLAYER_STATES = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UN_STARTED: -1,
  VIDEO_CUED: 5,
} as const

type valueof<T> = T[keyof T]

type PlayerStateKey = keyof typeof PLAYER_STATES
type PlayerStateValue = valueof<typeof PLAYER_STATES>

export function getPlayerStateKey(state: PlayerStateValue): PlayerStateKey {
  const index = Object.values(PLAYER_STATES).indexOf(state)
  return <PlayerStateKey>Object.keys(PLAYER_STATES)[index]
}
