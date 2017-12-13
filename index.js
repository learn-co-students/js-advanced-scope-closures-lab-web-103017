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
