function produceDrivingRange(num) {
  return function (start, end) {
  let begin =  parseInt(start.slice(0,2))
  let finish = parseInt(end.slice(0,2))
  let result = Math.abs(begin - finish)
  let diff = Math.abs(result - num)
    if (result > num) {
      return `${diff} blocks out of range`
    } else {
      return `within range by ${diff}`
    }
  }
}

function produceTipCalculator(percent) {
  return function (price) {
    return price * percent
  }
}

function createDriver() {
  let DriverId = 0
  return class {
    constructor (name) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
