// When we make a new component (a function that returns HTML (JSX)) The function needs to have a captial letter infront
import Footer from './Footer';
const Heading = () => {
  return (
    <div>
      <h1>Hello world {2 + 2}</h1>
      <Footer />
    </div>
  )
} 

export default Heading;