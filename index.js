function produceDrivingRange(range){
  return function(startBlock, endBlock){
      let start = parseInt(startBlock)
      let end = parseInt(endBlock)
      let dist = Math.abs(end - start)
      let diff = range - dist;
      if (diff > 0){
        return `within range by ${diff}`
      }else{
        return `${Math.abs(diff)} blocks out of range`
      }
  }
}


function produceTipCalculator(percentage){
  return function(cost){
    return cost * percentage
  }
}

function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
