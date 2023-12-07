import './App.css';

const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h1>Last Name: {props.lastName}</h1>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name ={'Rakesh'} lastName={'M'} age={23}/>
      <Person name ={'Swarna'} lastName={'A'} age={23}/>
      <Person name ={'Sunitha'} lastName={'M'} age={50}/>
      <Person name ={'Dhanvanth'} lastName={'S'} age={12}/>
      <Person name ={'Dharshini'} lastName={'S'} age={11}/>
      
      
    </div>
  );
}

export default App;
