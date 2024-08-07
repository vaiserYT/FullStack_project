import React from "react"
import Button from "./button"

class Header extends React.Component {
    render() {
          return (
            <div className="header">
              {/* <h1>{this.props.title}</h1> */}
              <h3>{this.props.title}</h3> 
              <Button text="click me"/>
            </div>
          )
      }
  }
export default Header