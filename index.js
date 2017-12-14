function produceDrivingRange(range){
  return function(endingBlock, startingBlock){
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let delta = Math.abs(end-start)
    let difference = delta-range

    if(difference > 0){
      return `${difference} blocks out of range`
    } else {
      return `within range by ${Math.abs(difference)}`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
