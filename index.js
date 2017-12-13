function produceDrivingRange(blockRange){
  return function(starting, ending){
    travelled = Math.abs(parseInt(starting) -  parseInt(ending))
    if (parseInt(travelled) <= blockRange) {
      return `within range by ${blockRange - parseInt(travelled)}`
    } else {
      return `${parseInt(travelled) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator (percent) {
  return function (fare) {
    return percent * fare
  }

}

function createDriver (name) {
  return class Driver {
    constructor(name) {
    this.name = name
    this.id++
    }
  }
}
