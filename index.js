// code your solution here
function saturdayFun(activity = 'roller-skate'){
 return(`This Saturday, I want to ${activity}!`);
}
saturdayFun();

function mondayWork(activity = 'go to the office'){
    return(`This Monday, I will ${activity}.`);
   }
   mondayWork();


function wrapAdjective(b) {
    return function (a = "*") {
        return `You are ${b}${a}${b}!`
    }
}
wrapAdjective()();
