const DisplayUser = (props) => {
  return (
    <div>
      <h1>Username - {props.username}</h1>
      <h2>Number: {props.num}</h2>
    </div>
  )
};

export default DisplayUser;
