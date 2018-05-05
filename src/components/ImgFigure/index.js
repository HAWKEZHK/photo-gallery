import React, { Component } from 'react'
import './index.scss'

// 单个图片组件
class ImgFigure extends Component {
  render(){
    const {data, msg ,handleClick} = this.props,
          {imgSrc, title, desc} = data,
          {pos, rotate, isCenter, isInverse} = msg,
          imgFigureClass = (isInverse && isCenter) ? "img-figure is-center-inverse" : "img-figure",
          styleObj = isCenter ? {...pos, zIndex: 11} : {...pos, transform: `rotate(${rotate}deg)`}

    return (
      <figure className={imgFigureClass} style={styleObj} onClick={handleClick}>
        <img src={imgSrc} alt={title} />
        <figcaption><h2 className="img-title">{title}</h2></figcaption>
        <div className="img-back" onClick={handleClick}>
          <p>{desc}</p>
        </div>
      </figure>
    )
  }
}

export default ImgFigure