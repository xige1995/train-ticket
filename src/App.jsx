import React from 'react'
import './App.css';
import MyRouter from './components/MyRouter'
import Header from './components/Header'

function App(props) {
    console.log('App props', props)
    return (
        <div>
            <Header/>
            <MyRouter/>
        </div>
    )
}

export default App;
