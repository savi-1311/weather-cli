#!/usr/bin/env node
"use strict";
import fetch from "node-fetch";
import chalk from "chalk";

const location = process.argv.slice(2);
const apiKey = "c8172414995f2d78fdc55713b1f068f6";

if(location[0])
{
  console.log(location[0]);
  var url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
  var url2 = "&appid=";
  var url3 = "&units=metric";
  var url = url1.concat(location[0],url2,apiKey,url3);
  fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(chalk.bold("Name: "+ (data.name)));
        console.log(chalk.bold("Weather: ")+ data.weather[0].main + " -> " + data.weather[0].description);
        console.log(chalk.bold("Temperature: ") + data.main.temp + " Degree Celsius");
        console.log(chalk.bold("Min Temperature: ") + data.main.temp_min + " Degree Celsius");
        console.log(chalk.bold("Max Temperature: ")+ data.main.temp_max + " Degree Celsius");
        console.log(chalk.bold("Wind Speed: ")+ data.wind.speed + " m/s");
      })
      .catch(() => {
        console.log("Please search for a valid city :(")
      });
}
else
{
  console.log("Please enter the City Name ");
}