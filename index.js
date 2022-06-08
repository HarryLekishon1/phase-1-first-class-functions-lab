// Code your solution in this file!
function returnFirstTwoDrivers(){

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const newDrivers = drivers.slice(0,2);

return newDrivers;
}

function returnLastTwoDrivers(arrayOfDrivers){
    
    const newDrivers = arrayOfDrivers.slice(arrayOfDrivers.length-2);
    return newDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
    return function fareMultiplier(num){
        return num*num;
    };
}

function fareDoubler(fare){

    return fare*2;
}
function fareTripler(fare) {
    return fare *3
}

function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers){

    return returnLastTwoDrivers(arrayOfDrivers);
}


    
