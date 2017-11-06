var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}

// Testing loop with if-else statements
for (var index = 0; index < ghosts.length; index++) {
  if (index == 3)
    console.log(ghosts[index] + ' eats ' + ghosts[0]);
  else
    console.log(ghosts[index] + ' eats ' + ghosts[index+1]);

}
