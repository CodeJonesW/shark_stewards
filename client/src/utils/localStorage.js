import moment from "moment"
import API from "./api"

const LS = {
    saveSightingData: (data) => {
        localStorage.setItem('sightings', JSON.stringify(data))
        localStorage.setItem('DayOfLastSightingsLoad', moment().format('MMMM Do YYYY'))
        localStorage.setItem('timeOfLastSightingsLoad', moment().format('hh'))
    },

    checkSightingData: async (data) => {
        // console.log(moment().format('hh:mm:ss a'))
        // // if the sightings exist in local storage
        // if(localStorage.getItem('sightings')){
        //     // grab the time the data was last stored
        //     const previousTime = localStorage.getItem('timeOfLastSightingsLoad')
        //     // if previous and current day are the same and if the current hour 
        //     // is still the same... grab stored sightings
        //     if(parseInt(previousTime) === parseInt(moment().format('hh')) ){ 
        //         console.log("GRABBED FROM LS")         
        //         return JSON.parse(localStorage.getItem('sightings')) 
        //     } else {
        //         console.log("GRABBED FROM DB") 
        //         // otherwise get the sightings from the server/DB
        //         const newSightings = await API.getSightingData()
        //         LS.saveSightingData(newSightings)
        //         return newSightings
        //     }
        // } else {
        //     // otherwise get the sightings from the server/DB
        //     console.log("GRABBED FROM DB") 
        //     const newSightings = await API.getSightingData()
        //     LS.saveSightingData(newSightings)
        //     return newSightings
        // }
        
        const newSightings = await API.getSightingData()
        LS.saveSightingData(newSightings)
        return newSightings
    }
}


export default LS;

