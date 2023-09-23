import { api } from '.'

// export interface CharactersQuery {
//   info: Info
//   results: Character[]
// }

export default async function fetchWeather(location: string) {
  const { data } = await api.get(
    `/weather?q=${location}&units=metric&APPID=${process.env.NEXT_PUBLIC_API_KEY}&wind.speed=imperial`
  )

  return data
}
