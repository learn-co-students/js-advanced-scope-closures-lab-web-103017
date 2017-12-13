function produceDrivingRange(range){
  return function(rOne, rTwo){
    let dist = parseInt(rTwo) - parseInt(rOne)
    if (dist < range){
      return `within range by ${range - dist}`
    }else {
      return `${dist - range} blocks out of range`
    }
  }
}

function produceTipCalculator(perc){
  return function(total){
    return total * perc
  }
}
