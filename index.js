function produceDrivingRange(range) {
  return function(start, end) {
    let s = parseInt(start)
    let e = parseInt(end)
    let travelDistance = Math.abs(e-s)
    let distance = range - travelDistance

    if (distance > 0) {
      return `within range by ${distance}`
    } else {
      return `${Math.abs(distance)} blocks out of range`
    }
  }
}


function produceTipCalculator(percent){
  return function(rideFare){
    return tip = rideFare*percent
  }
}

function createDriver(){
  let driverid = 0
  return class {
    constructor(name){
      this.id = ++driverid
      this.name = name
    }
  }
}
// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.
