const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()
const port = process.env.PORT || 3000


// Path for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory
app.use(express.static(publicPath))



app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Shubham Aswal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Developer',
        name: 'Shubham Aswal'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Some informative help text!!',
        title: 'Help',
        name: 'Shubham Aswal'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            error: 'address feild must be provided'
        })
    }
    else {
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                res.send({
                    error: error
                })
            }
            else {
                forecast(latitude, longitude, (error, forecastData) => {
                    if (error) {
                        res.send({
                            error: error
                        })
                    }
                    else {
                        res.send({
                            location: location,
                            forecast: forecastData,
                            address: req.query.address
                        })
                    }
                })
            }
        })
    }

})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMsg: 'Help article not found!!',
        title: '404',
        name: 'Shubham Aswal'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMsg: 'Page not found!!',
        title: '404',
        name: 'Shubham Aswal'
    })
})

app.listen(port, () => {
    console.log('Listening at port ' + port)
})