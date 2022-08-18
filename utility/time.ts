type TimeOptions = {
  hours?: number
  minutes?: number
  seconds?: number
}
export function timeToSeconds({
  hours = 0,
  minutes = 0,
  seconds = 0,
}: TimeOptions) {
  return hours * 3600 + minutes * 60 + seconds
}
