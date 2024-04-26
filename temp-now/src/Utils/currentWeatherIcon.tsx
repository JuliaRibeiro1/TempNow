

import dayRainImg from "../Assets/day-rain.png"
import rainImg from "../Assets/rain.png"
import sunImg from "../Assets/sun.png"
import cloudImg from "../Assets/cloud.png"
import snowImg from "../Assets/snow.png"


function currentWeatherIcon(temperature : number, rain? : number, snow? : number) {
    
            if(snow && snow > 5) {
                return snowImg
            }
            else if(rain && rain > 5) {
                if((temperature * 9) / 5 + 32 > 76) {
                    return dayRainImg
                }
                else {
                    return rainImg
                }  
            }
            else {
            if((temperature * 9) / 5 + 32 > 76) {
                    return sunImg
                }

                else {
                    return cloudImg
                }
                    
                

            }


}

export default currentWeatherIcon