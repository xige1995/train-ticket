import React, {Component, useState, useEffect} from 'react'
import './App.css';

/*class App extends Component{
  render (){
      return (
          null
      );
  }

}*/
/*
function App(props) {
    // const [count, setCount] = useState(0)
    const [count, setCount] = useState( () => {
        return props.defaultCount || 0
    })
    return(
        <button onClick={() => setCount(count + 1)}>count({count})</button>
    )
}*/

function App(props) {
    const [count, setCount] = useState(0)
    const [size, setSize]  = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    // 通过控制第二个参数，代替componentMount componentDidUpdate componentWillUnMount

    // 代替代替componentMount componentDidUpdate
    useEffect(() => {
        document.title = count
    })
    const onResize = () => {
        setSize(
            {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        )

    }
    // 代替代替componentMount componentWillUnMount
    useEffect(() => {
        console.log('addEventListener onResize')
        // removeEventListener 时要传和 addEventListener一样的函数名 句柄
        window.addEventListener('resize', onResize, false)
        return () => {
            window.removeEventListener('resize', onResize, false)
        }
    },[count])
    const onClick = () => {
        console.log('click')
    }
    useEffect(() => {
        document.querySelector('#size').addEventListener('click', onClick, false)
        return () => {
            document.querySelector('#size').removeEventListener('click', onClick, false)
        }
    })

    return(
        <div>
            <button onClick={() => setCount(count + 1)}>count({count})</button>
            <p>width: {size.width}  height: {size.height}</p>
           <div>
               {count % 2 ?
                   <p id='size'>width: {size.width}  height: {size.height}</p>
                   : <h1 id='size'>width: {size.width}  height: {size.height}</h1>
               }
           </div>
        </div>

    )
}

export default App;
