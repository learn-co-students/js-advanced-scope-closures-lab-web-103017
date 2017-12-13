function produceDrivingRange(blockRange) {
  return function (x, y) {
    let xInt = parseInt(x.replace('th', ''))
    let yInt = parseInt(y.replace('th', ''))
    if (Math.abs(xInt - yInt) > blockRange ) {
      let range = (Math.abs(xInt-yInt)) - blockRange
      return `${range} blocks out of range`
    } else {
      let range = blockRange - (Math.abs(xInt - yInt))
      return `within range by ${range}`
    }
  }
};

function produceTipCalculator(percent) {
  return function (bill) {
    return bill * percent
  }
}
