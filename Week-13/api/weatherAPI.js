// const fetch = require("node-fetch");
import fetch from "node-fetch";
const getCurrentWeather = async (city) => {
    const output = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=no`)
    const { current } = await output.json()
    return current
}

const getForecast = async (city, days) => {
    const output = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`)
    const { current, forecast } = await output.json()
    // return current
    return {
        current,
        forecast: forecast.forecastday.map(({ date, day }) => {
            return {
                date, day
            }
        })
    }
}

export {
    getCurrentWeather,
    getForecast
}