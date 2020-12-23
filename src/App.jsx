import React, {Component, createContext} from 'react'
import './App.css';
const BatteryContext = createContext(90) // Consumer找不到Provider时取默认值
const OnlineContext = createContext()

class Leaf extends Component{
    static contextType = BatteryContext // 代替Consumer
    render (){
        const battery = this.context
        return (
            <div>
                {/*<BatteryContext.Consumer>
                    {battery =>
                        <OnlineContext.Consumer>
                            {online => <h1>Battery: {battery},Online: {String(online)}</h1>}
                        </OnlineContext.Consumer>
                   }
                </BatteryContext.Consumer>*/}

                <h1>Battery: {battery}</h1>

                <OnlineContext.Consumer>
                    {online => <h1>Online: {String(online)}</h1>}
                </OnlineContext.Consumer>
            </div>
        );
    }

}


class Middle extends Component{
    render (){
        return (
            <Leaf></Leaf>
        );
    }

}

class App extends Component{
  render (){
      return (
          <BatteryContext.Provider value={60}>
              <OnlineContext.Provider value={true}>
                  <Middle/>
              </OnlineContext.Provider>
          </BatteryContext.Provider>

      );
  }

}

export default App;
