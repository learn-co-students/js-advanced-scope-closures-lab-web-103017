function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let distance = parseInt(endingBlock) - parseInt(startingBlock)//10
    let difference = blockRange - distance//-2
    if (difference > 0) {
      return `within range by ${difference}`
    } else if (difference < 0) {
      return `${difference * -1} blocks out of range`
    }
  }
}

function produceTipCalculator(rate) {
  return function (fare) {
    return fare * rate
  }
}
