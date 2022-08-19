import fetch from 'unfetch'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useFetchThumbnail(videoId: string) {
  const fileName = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const { data, error } = useSWR(fileName, fetcher)
  return { thumbnail: data, isLoading: !error && !data, isError: error }
}
