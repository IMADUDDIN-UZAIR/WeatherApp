import React, { useState } from 'react'
import axios from 'axios'

import WeatherCard from './WeatherCard'


const Home = () => {

  
  let [cityName,setCityName] = useState("")
  let [data,setData] = useState([])
  let SubmitHandler =async (e) =>{
    e.preventDefault()
    console.log('I am a function')

    try{
  let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=15ad795a4a5de658bacd9b6460a8806a&units=metric`)
  // console.log("response",response) //user ko agar hamay koi cheez nh dekhani ho aur 
 setData(response.data.list)
  //us cheez ko test krna ho 
    } catch(error){
console.log("error",error)
    }   
  }
  return (
    <div className="center bg-black text-white min-h-screen py-20 flex justify-center items-center">
 <div className='w-1/2 bg-white border-8 border-blue-500 rounded-10xl h-auto justify-center items-center' >
 <h1 className='text-center text-blue-500  py-32 font-bold text-4xl'>Welcome to My Weather_App</h1>
 <form className='py-20  flex justify-center items-center space-x-3' onSubmit={SubmitHandler}>
 <span  className='text-blue-500 text-2xl '>CityName:  </span> <input className='bg-blue-400 p-4 rounded-xl' type='text' onChange={(e) => setCityName(e.target.value)
 }  />
<button type='submit' className='bg-white text-black p-4 border-2  border-blue-500 rounded-xl'>Get Weather</button>
 </form>
 {
      data.map((eachForcast, index) => (

<WeatherCard
    key={index}
    date={eachForcast.dt_txt}
    temp={eachForcast.main.temp}
    min={eachForcast.main.temp_min}
    max={eachForcast.main.temp_max}
/>
))
}
 </div>
 </div>
  )
}

export default Home