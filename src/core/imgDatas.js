import imgCfg from '../dataSource/img-config.json'

// 获取图片信息
const imgDatas = imgCfg.map(el => {
  const _el = el
  _el.imgSrc = require(`../dataSource/images/${el.fileName}`)
  return _el
})

export default imgDatas