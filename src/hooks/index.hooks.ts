'use client'
import useWeatherQuery from "@/hooks/fetchData";
import React from "react";
import {useState, useEffect, FormEvent, useRef} from 'react'


interface location {
  latitude?: number,
  longitude?: number
}

const useWeather = () => {

  const [location, setLocation] = useState('bandung');
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, isFetching, isError } = useWeatherQuery(
    location
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocation(inputRef.current?.value as string)
  };

  return {
    data,
    isLoading,
    handleSubmit,
    inputRef,
    location,
    setLocation,
    isError
  };
}

export default useWeather