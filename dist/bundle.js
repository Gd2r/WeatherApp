/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("const img = document.querySelector(\"img\");\n\nasync function GetTrump() {\n  try {\n    const response = await fetch(\n      \"https://api.giphy.com/v1/gifs/translate?api_key=lvuDw5yyaTK9In3aOjZ0S1LJ4lWeQ4s3&s=donaldtrump\",\n      { mode: \"cors\" }\n    );\n    const Gifdata = await response.json();\n    img.src = Gifdata.data.images.original.url;\n  } catch {\n    console.error(error);\n  }\n}\n\nGetTrump();\n// public api key you dumpass\nconst API_KEY = `GTUTXU29WX3WN45YPMAFDQLUF`;\n\nasync function getWeather(city) {\n  try {\n    const weather = await fetch(\n      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_KEY}`,\n      { mode: \"cors\" }\n    );\n\n    if (!weather.ok) {\n      throw new Error(\"type a city idiot\");\n    }\n\n    const weatherData = await weather.json();\n    displayWeather(weatherData);\n  } catch {\n    console.error(error.message);\n  }\n}\n\nfunction displayWeather(data) {\n  const weatherInfo = document.getElementById(\"WeatherResult\");\n\n  if (!weatherInfo) {\n    console.error('Element with ID \"WeatherResult\" not found');\n    return;\n  }\n\n  const cityName = data.address;\n  const temperature = data.currentConditions.temp;\n  const condition = data.currentConditions.conditions;\n  const CelsiusTemp = ((temperature - 32) * 5) / 9;\n\n  weatherInfo.innerHTML = `\n        <h2>Weather in ${cityName}</h2>\n        <p>Temperature: ${CelsiusTemp.toFixed(1)}°C</p>\n        <p>Condition: ${condition}</p>\n    `;\n}\n\ndocument\n  .querySelector(\".WeatherForm\")\n  .addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n\n    const city = document.getElementById(\"cityinput\").value;\n\n    if (city) {\n      getWeather(city);\n    } else {\n      alert(\"Please enter a city name\");\n    }\n  });\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;