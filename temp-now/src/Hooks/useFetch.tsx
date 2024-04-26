import React from 'react'


interface DataInterface {
  current: CurrentInterface
}

interface CurrentInterface {
  temperature_2m: number;
  windspeed_10m: number;
  rain: number;
  snowfall: number;
  interval: number;
}


function useFetch() {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [dailyData, setDailyData] = React.useState<DailyInterface | null>(null)
  const [currentData, setCurrentData] = React.useState<CurrentInterface | null>(null)
  const [temperature, setTemperature] = React.useState<number>();
  const [data, setData] = React.useState<DataInterface | null>(null)


    React.useEffect(() => {

        const fetchData = async () => {
          try {
     
            setLoading(true);
  
            const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.5475&longitude=-46.6361&current=temperature_2m,rain,snowfall,wind_speed_10m&hourly=is_day&daily=temperature_2m_max,temperature_2m_min&temperature_unit=celsius&timezone=GMT&forecast_days=3&models=best_match")
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const dataResult= await response.json();
            setData(dataResult)
            setDailyData(dataResult.daily)
            setCurrentData(dataResult.current)
            setTemperature(data?.current.temperature_2m)
       
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
    dailyData,
    currentData
    }
  )
}

export default useFetch