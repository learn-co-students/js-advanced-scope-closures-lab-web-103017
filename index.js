function produceDrivingRange(range) {
  return function rangeChecker(beg, end) {
    let start = parseInt(beg, 10);
    let finish = parseInt(end, 10);
    let dist = Math.abs(finish - start)
    if (dist > range) {
      return `${dist - range} blocks out of range`
    } else {
      return `within range by ${range - dist}`
    }
  }
}

function produceTipCalculator(percent) {
  return function fairFare(fare) {
    return fare * percent
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
