console.log('Client Side JS loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const error_p = document.querySelector('#error-message')
const weather_p = document.querySelector('#weather-message')
const location_p = document.querySelector('#location-message')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    error_p.textContent = ''
    location_p.textContent = ''
    weather_p.textContent = 'Loading Data ......'

    const location = search.value
    url = '/weather?address=' + location
    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                error_p.textContent = 'Error :- ' + data.error
                weather_p.textContent = ''
                location_p.textContent = ''
            }
            else {
                location_p.textContent = 'Location :- ' + data.location
                weather_p.textContent = 'Forecast :- ' + data.forecast
                error_p.innerHTML = ''
            }
        })
    })
})