import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import {randomRange} from '../../utils'
import ImgFigure from '../ImgFigure'
import imgDatas from '../../core/imgDatas'

class Stage extends Component {
  constructor(props){
    super(props)
    this.state = {
      // 位置范围
      constPos: {
        centerPos: { left: 0, top: 0 },   // 中心
        topRange: { x: [0, 0], y: [0, 0] },   // 顶部
        sideRange: { leftX: [0, 0], rightX: [0, 0], y: [0, 0] }   // 两侧
      },
      // 每个图片组件信息 ———— pos、rotate、isInverse、isCenter
      imgsMsg: imgDatas.map(() => {
        return {
          pos: {left: 0, top: 0},
        }
      })
    }
  }

  // 初始化constPos，计算img组件位置范围
  componentDidMount(){
    // 舞台大小
    const stageDOM = ReactDOM.findDOMNode(this.refs.stage)
    const [stageW, stageH] = [stageDOM.scrollWidth, stageDOM.scrollHeight]
    const [halfStageW, halfStageH] = [Math.ceil(stageW / 2), Math.ceil(stageH / 2)]
    // 图片组件大小
    const imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure_0)
    const [imgW, imgH] = [imgFigureDOM.scrollWidth, imgFigureDOM.scrollHeight]
    const [halfImgW, halfImgH] = [Math.ceil(imgW / 2), Math.ceil(imgH / 2)]
    // 定义位置范围
    const constPos = {
      centerPos: {    // 中心位置
        left: halfStageW - halfImgW,
        top: halfStageH - halfImgH
      },
      topRange: {     // 顶部取值范围
        x: [halfStageW - imgW, halfStageW],
        y: [-halfImgH, halfStageH - halfImgH * 3]
      },
      sideRange: {    // 两侧取值范围
        leftX: [-halfImgW, halfStageW - halfImgW * 3],
        rightX: [halfStageW + halfImgW, stageW - halfImgW],
        y: [-halfImgH, stageH - halfImgH]
      }
    }
    this.setState({constPos}, ()=>{ this.rearrange(0) })
  }

  // 位置重排
  rearrange(cIndex){
    const {constPos, imgsMsg} = this.state
    const {centerPos, topRange, sideRange} = constPos

    // 中心
    const centerImg = imgsMsg.splice(cIndex, 1)[0]
    centerImg.pos = centerPos
    // 顶部区域
    const topImgIndex = Math.ceil(Math.random() * (imgsMsg.length - 1))
    const topImg = imgsMsg.splice(topImgIndex, 1)[0]
    topImg.pos = {
      left: randomRange(topRange.x[0], topRange.x[1]),
      top: randomRange(topRange.y[0], topRange.y[1])
    }
    // 侧边区域
    for(let i = 0, len = imgsMsg.length; i < len; i++){
      let range = (i < len / 2) ? sideRange.leftX : sideRange.rightX
      imgsMsg[i] = {
        pos: {
          left: randomRange(range[0], range[1]),
          top: randomRange(sideRange.y[0], sideRange.y[1])
        },
      }
    }

    // 重新塞回数组
    imgsMsg.splice(topImgIndex, 0, topImg)
    imgsMsg.splice(cIndex, 0, centerImg)
    this.setState({imgsMsg})
  }

  render(){
    const [controllerUnits, imgFigures] = [[], []]
    imgDatas.forEach((el, i) => {
      imgFigures.push(<ImgFigure key={i} ref={`imgFigure_${i}`} data={el} msg={this.state.imgsMsg[i]} />)
    })
    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    )
  }
}

export default Stage