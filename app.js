// Iteration 1 | The Rover Object

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

// Matrice

var Matrice = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]

//Iteration 2 | Turning the Rover
// Turn Rover Left
function turnLeft(rover){
switch(rover.direction) {
  case "N":
    rover.direction = "W";
    break;

  case "W":
  rover.direction = "S";
    break;

  case "S":
    rover.direction = "E";
    break;

  case "E":
    rover.direction = "N";
  break;  

}  
console.log("turnLeft was called! Rovers current direction is: " + rover.direction)
}

// Turn Rover Right

function turnRight(rover){
switch(rover.direction) {
  case "N":
    rover.direction = "E";
    break;

  case "E":
    rover.direction = "S";
    break;

  case "S":
    rover.direction = "W";
    break;

  case "W":
    rover.direction = "N";
    break;  

}

console.log("turnRight was called! Rovers current direction is: " + rover.direction)
}

//Iteration 3 | Moving the Rover
// Move Rover Forward

function moveForward(rover) {
  switch(rover.direction) {
    case "N":
      rover.y-=1; 
      break;
      
    case "E":
    rover.x+=1; 
      break;
  
    case "S":
    rover.y+=1;
      break;
  
    case "W":
    rover.x-=1; 
      break;  

}

console.log("moveForward was called! Rovers current position is: " + rover.x + "," + rover.y)
}

//Iteration 4 | Commands
// Commands

var commandsArray = ["r","f","f","r","f","f","l","f","r","f","f"]

for (var i = 0; i <= commandsArray.length; i++) 
    {
    switch(commandsArray[i]) {
    case "f":
      moveForward(rover);
    rover.travelLog.push(rover.x + rover.y);
    break;
  
    case "r":
      turnRight(rover);
    break;
  
    case "l":
      turnLeft(rover);
    break; 
  }

console.log(rover.travelLog);

}

 //Iteration 5 | Tracking

