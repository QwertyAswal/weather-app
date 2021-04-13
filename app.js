const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length !== 3) {
    console.log('Usage:-  node app.js \'location_name\'')
    return
}

const location_query = process.argv[2]
geocode(location_query, (error, geoData) => {
    if (error) {
        console.log(error)
    }
    else {
        forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {
            console.log(geoData)
            if (error) {
                console.log(error)
            }
            else {
                console.log(geoData.location)
                console.log(forecastData)
            }
        })
    }
})