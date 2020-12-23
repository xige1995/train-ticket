import React, {Component, useState} from 'react'
import './App.css';

/*class App extends Component{
  render (){
      return (
          null
      );
  }

}*/

function App(props) {
    // const [count, setCount] = useState(0)
    const [count, setCount] = useState( () => {
        return props.defaultCount || 0
    })
    return(
        <button onClick={() => setCount(count + 1)}>count({count})</button>
    )
}
export default App;
