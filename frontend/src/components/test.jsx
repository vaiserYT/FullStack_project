import React from "react";

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            help: 'help_state'
        }
        this.Mouse_enter = this.Mouse_enter.bind(this)
        this.Mouse_leave = this.Mouse_leave.bind(this)
    }
    render() {
        return (
            <h3 onMouseEnter={this.Mouse_enter} onMouseLeave={this.Mouse_leave}>
                {this.state.help}
            </h3>
        )
    }

    Mouse_enter() {
        this.setState({help: 'This is help'})
      }
  
      Mouse_leave() {
        this.setState({help: 'you leave from help'})
      }
}
export default Test