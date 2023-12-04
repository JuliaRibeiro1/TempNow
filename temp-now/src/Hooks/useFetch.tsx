import React from 'react'
import splitArray from '../Utils/splitArray'

interface DataInterface {
  daily: Object[],
  temperature_2m: number[],
  is_day: boolean[],
  windspeed_10m: number[],
  precipitation_probability: number[],
  temperature_2m_max: number[]
}

function useFetch(apiUrl : string) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [data, setData] = React.useState<DataInterface | null>(null)
  const [temperature, setTemperature] = React.useState<number[][]>([]);
  const [daily, setDaily] = React.useState<DataInterface | null>(null)


    React.useEffect(() => {

        const fetchData = async () => {
          try {
     
            setLoading(true);
  
            const response = await fetch(apiUrl);
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setData(data)
            setTemperature(splitArray(data.hourly.temperature_2m))
            setDaily(data.daily)
            console.log(temperature)
            console.log(data)
          } catch (error) {
   
            setError("wdw");
          } finally {
   
            setLoading(false);
          }
        };

        fetchData();
      }, [apiUrl]); 

  return (
    {
    
    data,
    temperature,
    loading,
    error,
    daily
    }
  )
}

export default useFetch