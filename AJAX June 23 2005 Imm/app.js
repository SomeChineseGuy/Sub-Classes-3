// Wait for the page to load, then fire my jQuery Event


$(() => {
  // Target Element
  // Add Event Listener
  // Effect - CRUD HTML or CSS

  // When targetting an element with jQuery - We do it the same way as CSS
  // Event listener is listening for whatever the user can do
  // $('.box-one').on('click', () => {
  //   // My effect is updating a css color of another box
  //   $('.box-two').css('background-color', 'pink')
  // })

  // // $('.box-two').on('click', () => {
  // //   $('.box-one').css('background-color', 'teal')
  // // })

  // $('.box-three, .box-two').on('click', () => {
  //   $('.box-one, .box-two').css('background-color', 'white')
  //   // $('.box-two').css('background-color', 'white')
  // })

  // $('.box-one').on('click', () => {
  //   $('.results').append('<h1>This is new content </h1>')
  // })

  // $('.box-two').on('click', () => {
  //   $('.results').prepend('<h1>Top content</h1>')
  // })

  $('.box-one').on('click', () => {
    $.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log(res.message);
      $('.results').append(`<img class="dog-image" src="${res.message}" />`)
    })
  })

  // Ajax request can be both post and get
})