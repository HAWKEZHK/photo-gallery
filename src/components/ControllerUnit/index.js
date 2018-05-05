import React, { Component } from 'react'
import './index.scss'

// 单个控制组件
class ControllerUnit extends Component {
  render(){
    const {msg, handleClick} = this.props
    let ControllerUnitClass = "controller-unit"
    if(msg.isCenter){
      ControllerUnitClass += " is-center"
      if(msg.isInverse){ ControllerUnitClass += " is-inverse" }
    }
    return (<span className={ControllerUnitClass} onClick={handleClick}></span>)
  }
}

export default ControllerUnit