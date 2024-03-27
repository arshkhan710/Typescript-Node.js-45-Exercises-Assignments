//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vehList:string [] = (["Car" , "Super Bike" , "Super Car" , "Pick Up Truck"])
//For each
vehList.forEach(transport => { 
    let message:string = (`“I would like to own a ${transport}”`)
    console.log(message);
});

//For loop
let message:string = (`“I would like to own a`)
for(let i = 0; i<vehList.length; i++){
    console.log(`${message} ${vehList[i]}`);
    
}