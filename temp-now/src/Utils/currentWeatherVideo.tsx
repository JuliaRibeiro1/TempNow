
import clouds from "../Assets/clouds.mp4"
import snowVideo from "../Assets/snowVideo.mp4"
import rainVideo from "../Assets/rainVideo.mp4"


function currentWeatherVideo(snow? : number, rain? : number) {
    if(snow && snow > 5) {
        return rainVideo
    }
    else if(rain && rain > 5) {
        return snowVideo
    }
    else {
        return clouds
    }
 
}

export default currentWeatherVideo
