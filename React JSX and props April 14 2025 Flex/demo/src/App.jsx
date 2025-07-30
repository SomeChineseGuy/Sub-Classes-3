import './App.css'
import Heading from './components/Heading';
import Footer from './components/Footer';
import { Body, LowerBody } from './components/Body'
import Name from './components/Name'
import DisplayUser from './components/DisplayUser';
import ShowAll from './components/ShowAll';

const allUsers = [
  {
    username: 'Alvin',
    id: 10,
    num: 100
  }, 
  {
    username: 'Chisu',
    id: 20,
    num: 50
  },
  {
    username: 'Jason',
    id: 16,
    num: 10
  },
  {
    username: 'Simar',
    id: 1,
    num: 1
  },
]

const showAllUsers = (arr) => {
  const newArr = arr.map((item, idx) => {
    console.log(item);
    return (
      <DisplayUser
        username={item.username}
        num={item.num}
        key={idx}
      />
      // <div key={idx}>
      //   <h1>Username - {item.username}</h1>
      //   <h2>Number: {item.num}</h2>
      // </div>
    )
  })
  return newArr;
}



const cohort = ["Jason", "Chisu", "Simar"];
function App() {
  return (
    <section>
      {/* <Heading />
      <Body />
      <LowerBody />
      <Footer /> */}
      {/* <Name /> */}
      {/* React Let you put arrays INSIDE OF HERE! */}
      
      {/* {[<p>Jason</p>, <p>Chisu</p>, <p>Simar</p>]} */}


      {/* {showAllUsers(allUsers)} */}

      {/* {allUsers.map((item, idx) => {
        return(
          <DisplayUser
            username={item.username}
            num={item.num}
            key={idx}
          />
        )
      })} */}

      {/* {allUsers.map((item, idx) => (
          <DisplayUser
            username={item.username}
            num={item.num}
            key={idx}
          />
        )
      )}       */}

      <ShowAll />
      
    

    </section>
  )
}

export default App
