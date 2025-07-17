const showDogData = (dogsArr) => {
  for(let dog of dogsArr) {
     $('.results')
      // .append('<h1>Name: ' + dog.name + '</h1>')
      // .append('<p>Breed - ' + dog.breed + '</p>');
      .append(`
        <div>
          <h1>Name: ${dog.name} </h1>
          <p>Breed - ${dog.breed} </p>
        </div>  
      `)
  }
}

$(() => {
  $('.box-two').on('click', () => {
    $.get('http://localhost:8001/dogs').then((res) => {
      console.log(res);
      showDogData(res)
    });
  });


  // Step one: Target
  // Step two: Add event listener
  // Step three: Effect CRUD

  $('.add-dog-form').submit((event) => {
    event.preventDefault();
    // Read what the user input value is
    const dogName = $('.dog-name').val();
    const dogBreed = $('.dog-breed').val();
    const dogWeight = $('.dog-weight').val();
    console.log(dogName, dogBreed, dogWeight);
    // Whenever we send data from front to back, it's ALWAYS an object
    const data = {
      dogName,
      dogBreed,
      dogWeight
    }

    $.ajax({
      type: "POST",
      url: "http://localhost:8001/dogs",
      data,
    }).then(res => {
      console.log(res);
    })
  })
});
