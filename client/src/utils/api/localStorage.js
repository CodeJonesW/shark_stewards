import moment from "moment"
import API from "./api"

const LS = {
    saveSightingData: (data) => {
        localStorage.setItem('sightings', JSON.stringify(data))
        localStorage.setItem('timeOfLastSightingsLoad', moment().format('MMMM Do YYYY'))
    },

    checkSightingData: async (data) => {
        // if the sightings exist in local storage
        if(localStorage.getItem('sightings')){
            // grab the time the were last stored
            const previousTime = localStorage.getItem('timeOfLastSightingsLoad')
            // if previous and current time are the same then return parsed sightings
            // this could be upgraded to check if its been 30 min instead of day
            if( previousTime === moment().format('MMMM Do YYYY') ){
                return JSON.parse(localStorage.getItem('sightings'))
            } else {
                // otherwise get the sightings from the server/DB
                const newSightings = await API.getSightingData()
                LS.saveSightingData(newSightings)
                return newSightings
            }
        }
        

    }
}


export default LS;

