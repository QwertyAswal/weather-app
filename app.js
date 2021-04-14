const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length !== 3) {
    console.log('Usage:-  node app.js \'location_name\'')
    return
}

const location_query = process.argv[2]
geocode(location_query, (error, { latitude, longitude, location } = {}) => {
    if (error) {
        console.log(error)
    }
    else {
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log(location)
                console.log(forecastData)
            }
        })
    }
})