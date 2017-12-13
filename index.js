function produceDrivingRange(range){
  return function(start, end){
    let request = end.slice(0,2) - start.slice(0,2)
    console.log(request)
    console.log(range)
    if (request < range){
      return `within range by ${Math.abs(request - range)}`
    }
    else if (request > range){
      return `${Math.abs(range - request)} blocks out of range`
    }
  }
}


function produceTipCalculator(percent){
  return function(tip){
    return tip *= percent
  }
}

function createDriver(){
  let id = 0;

  return class{
    constructor(name){
      this.name = name;
      this.id = id++
    }
  }
}
