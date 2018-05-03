import React, { Component } from 'react'
import './index.scss'

// 单个图片组件
class ImgFigure extends Component {
  render(){
    return (
      <figure className="img-figure" style={this.props.msg.pos}>
        <img src={this.props.data.imgSrc} alt={this.props.data.title} />
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
}

export default ImgFigure