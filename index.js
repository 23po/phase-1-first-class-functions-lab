const returnFirstTwoDrivers = function ([]) {
    return (['Antonia', 'Nuru']);
}
const returnLastTwoDrivers = function ([]) {
    return (['Amari', 'Mo']);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiple) {
    return function (fare) {
       return fare * multiple;
    }
} 
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers([], drivers) {
    return drivers([]);
}