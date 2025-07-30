const data = [
  {
    food: 'chicken',
    pet: 'dog'
  },
  {
    food: 'bird',
    pet: 'cat'
  },
  {
    food: 'seed',
    pet: 'bird'
  },
]

const ShowAll = () => {
  return (
    <div>
      <h1>Show All component</h1>
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <h1>The animal is {item.pet} and they like to eat {item.food}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default ShowAll;