import React from 'react'
import splitArray from '../Utils/splitArray'



interface DataInterface {
  daily: DailyData;
  temperature_2m: number[];
  is_day: boolean[];
  windspeed_10m: number[];
  precipitation_probability: number[];
}

function useFetch() {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [data, setData] = React.useState<DataInterface | null>(null)
  const [temperature, setTemperature] = React.useState<number[][]>([]);
  const [daily, setDaily] = React.useState<DailyData | null>(null)


    React.useEffect(() => {

        const fetchData = async () => {
          try {
     
            setLoading(true);
  
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,snowfall,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,windspeed_10m_max&timezone=GMT&forecast_days=3&models=best_match");
    
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
      }, []); 

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