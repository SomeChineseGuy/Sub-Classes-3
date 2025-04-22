$(document).ready(() => {
  // Step 1 targetting an element
  // Step 2 adding event listener, an event is ANYTHER the user can do
  // Step 3 is effect
  $('.box-one').on('click', () => {
    $('.box-two').css('background-color', 'black')
  })

  // When I click box-two I want to change both box-one and box-three bg to purple
  $('.box-two').on('click', () => {
    $('.box-one, .box-three').css('background-color', 'purple')
  })

  // Target the content element
  // Waits for the user to hit the bottom of the screen
  // Then it request information from data base
  // Adds more Youtube content

  $('.box-three').on('click', () => {
    $('.results').append('<p>Hello </p>')
  })
})