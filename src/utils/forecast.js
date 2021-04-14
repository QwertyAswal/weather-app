const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=085292ef03158c399c6a815595579d22&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (!body.current) {
            callback('Unable to find location!', undefined)
        }
        else {
            const data = body.current
            callback(undefined, data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out')
        }
    })
}

module.exports = forecast