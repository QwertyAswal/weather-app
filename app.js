const request = require('request')


// Weather Stack
const url = 'http://api.weatherstack.com/current?access_key=&query=37.8267,-122.4233'
// const url = 'http://api.weatherstack.com/current?access_key=&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current
    console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out')
})

// Geocoding

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const data = response.body.features[0]
    console.log('Latitude:- ' + data.center[1] + ' ,Longitude:- ' + data.center[0])
})