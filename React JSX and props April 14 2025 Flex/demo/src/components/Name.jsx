import Heading from "./Heading";

const Name = (props) => {
  // WE can still use Js logic
  console.log(props);
  
  return (
    <div>
      <h1>My name is {props.username}</h1>
      <h2>My number is {props.num}</h2>

    </div>
  )
}

export default Name;