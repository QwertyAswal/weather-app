const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        }
        else if (response.body.features.length == 0) {
            callback('Unable to find location!', undefined)
        }
        else {
            const data = response.body.features[0]
            callback(undefined, {
                latitute: data.center[1],
                longitude: data.center[0],
                place_name: data.place_name
            })
        }
    })
}

module.exports = geocode