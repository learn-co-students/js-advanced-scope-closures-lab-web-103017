function produceDrivingRange(range){
  return function(start, end){
    startnum =  start.slice(0, start.length - 2);
    endnum =  end.slice(0, end.length - 2);
    distance = Math.abs(endnum - startnum)
    if (range  > distance){
      return `within range by ${range - distance}`
    }
    else{
      return `${distance - range} blocks out of range`
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver(){
  driverID = 0
  return class Driver{
    constructor(name){
      this.name = name
      this.id = ++driverID
    }
  }

}
