function produceDrivingRange(blocks) {
  return function(start_block,end_block) {
    start = parseInt(start_block)
    end = parseInt(end_block)
    length = Math.abs(start-end)
    range = blocks - length
    if (range > 0) {
      return `within range by ${range}`
    } else if (range < 0) {
      return `${Math.abs(range)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(bill) {
    return bill * percent
  }
}


// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
// createDriver returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
