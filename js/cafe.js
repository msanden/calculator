function cafe() {
  var drinkChoice = prompt("Will you have a tea or a coffee?");
  if (drinkChoice == 'tea') {
    alert('Enjoy your tea!');
  }
  else if (drinkChoice == 'coffee') {
    alert('Enjoy your coffee!');
  }
  else {
    alert('Sorry, we only have tea and coffee.')
  }
}
cafe();
