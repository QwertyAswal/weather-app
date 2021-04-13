const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXN3YWxzODk5MSIsImEiOiJja25mbnlpNGIxdTVwMnBrOHpsYWhvZzY1In0.3QzKSgXiLSDfZ4DNy6ZOhw&limit=1'
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
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            })
        }
    })
}

module.exports = geocode