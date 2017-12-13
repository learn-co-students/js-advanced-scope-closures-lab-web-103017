function produceDrivingRange(blockRange){

  return function(dist1,dist2){
    let diff = Math.abs(Number(dist1.slice(0,2)) - Number(dist2.slice(0,2)));

    if (diff > blockRange) {
      return `${diff - blockRange} blocks out of range`
    }else {
      return `within range by ${blockRange - diff}`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver(){
  let driverId = 0;
  return class Driver{
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
