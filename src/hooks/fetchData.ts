
import fetchWeather from '@/pages/api/getWeather'
import { useQuery } from 'react-query'

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000

export default function useWeatherQuery(location: string) {
  return useQuery(
    ['weather', location],
    () => fetchWeather(location),
    {
      keepPreviousData: true,
      retry: false,
    }
  )
}