'use client'

import useWeather from "@/hooks/index.hooks";


export default function Home() {
  const {
    data,
    isLoading,
    handleSubmit,
    isError,
    inputRef
  } = useWeather();

  const weather = () => {
    if (data?.weather[0].main === 'Clouds' || data?.weather[0].main === 'Haze') {
      return 'weather-clouds'
    }

    if (data?.weather[0].main === 'Clear' || data?.weather[0].main === 'Mist') {
      return 'weather-clear'
    }

    if (data?.weather[0].main === 'Snow') {
      return 'weather-snow'
    }

    if (data?.weather[0].main === 'Rain' || data?.weather[0].main === 'Thunderstorm') {
      return 'weather-rain'
    }

    return 'error'
  }

  if (isLoading) {
    return ('loading')
  }

  const icon = () => {
    if (!isLoading) {
      return data?.weather[0].icon
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-white w-80 text-black p-5 flex flex-col justify-center rounded-xl z-50'>
        <form onSubmit={handleSubmit} className="flex justify-center flex-col">
          <input type="text" className='border border-slate-300 rounded-3xl h-12 p-5 mb-5 focus:outline-none focus:shadow-3xl
            focus:border-none duration-200' 
          placeholder='Search City' name="location" ref={inputRef} />
        </form>
        {isError && <span className="text-red-600 text-center mb-5" >No results found! fix it try again.</span>}
        
        <div className='flex justify-center'>
          <span>Feels like <span className='font-bold'>{ Math.ceil( data?.main.feels_like ?? 0 )}&deg;</span></span>
        </div>
        <div className='flex justify-center my-8'>
          <div className='relative w-36 h-36 shadow-3xl rounded-full flex items-center justify-center'>
          <div className={`absolute -left-[1.7rem] -top-[2rem] w-28 h-28 drop-shadow-3xl`} style={{backgroundImage: `url(http://openweathermap.org/img/wn/${icon()}@2x.png)`}}></div>
            <span className='text-6xl font-extrabold'>{ Math.ceil( data?.main.temp ?? 0 )}<sup>&deg;</sup></span>
          </div>
        </div>
        <div className='flex justify-center mb-8'>{data?.weather[0].description ?? ''}</div>
        <div className='info flex justify-between border-t-2 border-slate-300 p-3'>
          <div className='wind flex flex-col'>
            <span>Wind</span>
            <span>{data?.wind.speed ?? ''}</span>
          </div>
          <div className='Humidity flex flex-col'>
              <span>Humidity</span>
              <span>{data?.main.humidity ?? ''}%</span>
            </div>
          <div className='Cloud flex flex-col'>
            <span>Cloud</span>
            <span>{data?.clouds.all ?? ''}%</span>
          </div>
        </div>
      </div>
      <div className={`weather-animate ${weather()}`}></div>
    </main>
  )
}
