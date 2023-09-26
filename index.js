// Code your solution here

const { arrayContaining } = require("expect");


function findMatching(drivers, strings){
   return drivers.filter ((names) => 
 names.toLowerCase() === strings.toLowerCase()
   )
}
 
function fuzzyMatch(drivers, strings){
  return drivers.filter ((names) => 
  names.slice(0,2) === strings.slice(0,2))
}

function matchName(drivers, strings){
    return drivers.filter ((names) =>
    names.name === strings 
    )
}

