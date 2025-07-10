const APIKey = '3b5c51a03cca3b792e0b9c218f807acd';


const showWeatherData = (weatherData) => {
  const weatherInfo = `
    <div class="weather-info"> 
      <h1> The city is: ${weatherData.name}</h1>
      <h2> The weather is ${weatherData.weather[0].main} - ${weatherData.weather[0].description} </h2>
      <h2> Temp: ${weatherData.main.temp}. High ${weatherData.main.temp_max} - Low ${weatherData.main.temp_min}</h2>
    </div>
  `
   $('.results').html(weatherInfo)
}

const showAllDogs = (arr) => {

  for(let dog of arr) {
    $('.results').append(`<h1> ${dog.name} is a ${dog.breed} </h1>`)
  }
}

$(() => {
  // Javascript is here to CRUD HTML or CSS
  // Three Step
  // Step 1: Target an element
  // Step 2: Add Event Listener
  // Step 3: Add effects (CRUD HTML or CSS)

  // $('.box-one').on('click', ()=> {
  //   $('.box-two').css('background-color', 'green')
  // })

  // $('.box-two').on('click', ()=> {
  //   // $('.box-one').css('background-color', 'white')
  //   // $('.box-three').css('background-color', 'white')
  //   $('.box-three, .box-one').css('background-color', 'white')
  // })

  // $('.box-three').on('click', () => {
  //   $.get('https://dog.ceo/api/breeds/image/random').then((data) => {
  //     console.log(data);
  //     $('.results').append(`<img class="dog-image" src="${data.message}" />`)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // })

  // $('.weather-form').on('submit', (event) => {
  //   event.preventDefault();
  //   const userInputCity = $('.weather-input').val();
  //   console.log(userInputCity);

  //   $.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInputCity}&appid=${APIKey}&units=metric`).then(res => {
  //     console.log(res);
  //     showWeatherData(res)
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // })

  $('.box-one').on('click', () => {
    $.get('http://localhost:8001/dogs').then(res => {
      console.log(res);
      // Array of dogs - I want to show each dog and their name
      showAllDogs(res)
    }).catch(err => {
      console.log(err);
    })
  })
})