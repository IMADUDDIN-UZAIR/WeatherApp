import React from 'react'
import moment from "moment";

const WeatherCard = ({date,temp,min,max}) => {

  return (
      <div className="card text-blue-500 flex justify-center items-center h-auto pb-10">

            <div> {moment(date).format("dddd ha")} </div>
            <h1> {temp}°C </h1>
            <div> {min}°C - {max}°C </div>
        </div>
  )
}

export default WeatherCard