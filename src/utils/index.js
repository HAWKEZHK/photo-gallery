// 区间内随机数
function randomRange(low, high){
  return Math.ceil(Math.random() * (high - low) + low)
}

// 区间内任意正负值
function degRandomRange(high = 30){
  return (Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * high)
}

export {randomRange, degRandomRange}