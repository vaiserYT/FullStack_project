import React from "react"
import Header from "./components/header"
import logo from "./img/react.svg"
import Test from './components/test'


  
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        help: 'help', 
        place_text: 'write here',
        user_input: '',
      }

      this.Click = this.Click.bind(this)
      this.Mouse_enter = this.Mouse_enter.bind(this)
      this.Mouse_leave = this.Mouse_leave.bind(this)
    }

      render() {
        return (
          <div>
            <Header title="hello" />
            {/* <img src={logo} className="image" /> */}
            <h1>{this.state.user_input === '' ? 'this is void': this.state.user_input}</h1>
            {/* <button onClick={this.Click}>click</button> */}
            <input type="text" 
            onMouseEnter={this.Mouse_enter} 
            onMouseLeave={this.Mouse_leave} 
            placeholder={this.state.place_text}
            onChange={event => this.setState({user_input: event.target.value})}/>
            <Test/>
          </div>
      )
    }
  
    Click() {
      this.setState({help: 'hello'})
      // console.log('click')
    }
    Mouse_enter() {
      this.setState({place_text: 'yes here!'})
    }

    Mouse_leave() {
      this.setState({place_text: 'write here'})
    }
  }
  

export default App