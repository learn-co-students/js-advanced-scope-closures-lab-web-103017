produceDrivingRange = function(blockRange){
  return function(start, stop){
    const dist = stop.slice(0,2) - start.slice(0, 2)
    if (dist > blockRange) {
      return `${dist - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - dist}`
    }
  }
}

produceTipCalculator = function(percentTip) {
  return function(fare) {
    return percentTip * fare
  }
}
