import http from 'http';
import fs from 'fs';
import path from 'path';
import { getCurrentWeather, getForecast } from './apiCalls/weatherAPI.js';
import dotenv from 'dotenv'
dotenv.config()

const server = http.createServer(async (req, res) => {
    // if (req.url !== '/favicon.ico')
    if (req.url.match(/\/([A-Za-z]+)\/([0-9]+)/)) {
        const city = req.url.split("/")[1];
        const days = req.url.split("/")[2];

        forecast(req, res, city, days);
    } else if (req.url.match(/\/([A-Za-z]+)/)) {
        const city = req.url.split("/")[1];

        weather(req, res, city);
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route Not Found!" }));
    }
})

const weather = async (req, res, city) => {
    try {
        const currentWeather = await getCurrentWeather(city)
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(currentWeather));
    } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: `Error: ${error.message}` }));
    }
}

const forecast = async (req, res, city, days) => {
    try {
        const forecastWeather = await getForecast(city, days)
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(forecastWeather));
    } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: `Error: ${error.message}` }));
    }
}

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));