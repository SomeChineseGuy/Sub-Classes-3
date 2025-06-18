// Client facing scripts here
$(document).ready(() => {
  // Step one: Target
  // Step two: add event listener
  // Step three: Effect - CRUD on HTML or CSS
  $('.hamburger').on('click', () => {
    $('.menu-container').addClass('active')
    $('.hamburger').addClass('hide')
  })

  $('.x').on('click', () => {
    $('.menu-container').removeClass('active')
    $('.hamburger').removeClass('hide')
  })
}) 