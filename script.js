const container= document.querySelector('.container');
const search= document.querySelector('.search-box button');
const weatherBox= document.querySelector('.weather-box');
const weatherDetails= document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIkey = '026719662971d813479649a15542f005';
    const city = document.querySelector('.search-box input').value;

    if(city == '')
    return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=$(city)&units=metric&appid=$(APIkey)').then(response => response.json()).then(json => {

    const image = document.querySelector('.weather-box img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

//     switch (json.weather[0].main) {
//         case 'clear':
//             image.src = 'images/clear.png';
//             break;

//         case 'rain':
//             image.src = 'images/rain.png';
//             break;    

//         case 'mist':
//             image.src = 'images/mist.png';
//             break;    

//         case 'cloud':
//             image.src = 'images/cloud.png';
//             break;    

//         case 'snow':
//             image.src = 'images/snow.png';
//             break;    
    
//         default:
//             image.src = 'images/cloud.png';
//     }


//     });
    
// });

if (json.weather && json.weather.length > 0) {
    switch (json.weather[0].main) {
        case 'Clear':
            image.src = 'images/clear.png';
            break;
        case 'Rain':
            image.src = 'images/rain.png';
            break;
        // Add more cases for other weather conditions if needed
        case 'mist':
            image.src = 'images/mist.png';
            break;    

        case 'cloud':
            image.src = 'images/cloud.png';
            break;    

        case 'snow':
            image.src = 'images/snow.png';
            break;    
    
        default:
            image.src = 'images/cloud.png';
    }
} else {
    // Handle the case when 'json.weather' doesn't have the expected data
    console.error('Weather data not found or is empty.');
}
})
});