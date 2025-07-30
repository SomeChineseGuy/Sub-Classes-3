$(() => {
  // Step 1: Target 
  // Step 2: Event Listener
  // Step 3: Effect (CRUD HTML and/or CSS)
  const htmlName = `<h1>My Name is Jason </h1>`

  const newHtml = (myName) => {
    return `<h1> My name is ${myName} </h1>`
  }

  $('.btn').on('click', () => {
    $('.results').append(newHtml('Vivian'))
  })
})