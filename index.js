// Code your solution in this file!

const returnFirstTwoDrivers = (driverArray) => {
    return (driverArray.slice(0, 2))
}
// CORRECT WAY TO CODE THE LESSON
// const returnFirstTwoDrivers = (drivers) => {
//   return (drivers.slice(0, 2))
//} 

const returnLastTwoDrivers = (driverArray) => {
    return (driverArray.slice(-2))
}
//  CORRECT WAY TO CODE THE LESSON
//  const returnLastTwoDrivers = (driverArray) => {
//      returnLastTwoDrivers (driverArray.slice(-2))
//  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    
const createFareMultiplier = (int) => {
    return function (fareMultiplier) {
        return fareMultiplier * int 
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
// CORRECT WAY TO CODE
// driver = the array in the test on the back end
// function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
//     return returnFirstTwoDrivers(drivers)
// }

const selectDifferentDrivers = (driverArray, drivers) => {
    return (drivers(driverArray))   
}

    
   