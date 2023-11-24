import React from 'react'

interface DataInterface {
  temperature_2m: number[],
  is_day: boolean[],
  windspeed_10m: number[],
  precipitation_probability: number[]
}

function useFetch(apiUrl : string) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [data, setData] = React.useState<DataInterface | null>(null)

    React.useEffect(() => {
        // Function to make the fetch request
        const fetchData = async () => {
          try {
            // Set loading to true while fetching data
            setLoading(true);
    
            // Make the fetch request
            const response = await fetch(apiUrl);
    
            // Check if the request was successful
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            // Parse the response as JSON and update the state
            const data = await response.json();
            setData(data);
          } catch (error) {
            // Update the error state if an error occurs
            setError("wdw");
          } finally {
            // Set loading to false when the request is complete
            setLoading(false);
          }
        };
    
        // Call the fetchData function
        fetchData();
      }, []); 

  return (
    {
    data,
    loading,
    error
    }
  )
}

export default useFetch