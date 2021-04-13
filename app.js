const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=&query=37.8267,-122.4233'
// const url = 'http://api.weatherstack.com/current?access_key=&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current
    console.log(data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out')
})
