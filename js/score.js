function grader() {
var score = prompt('What is your score?');

if (score > 100) {
alert('You entered an invalid score.')
}
else if (score >= 80) {
alert('You got an A, well done!')
}
else if (score >= 60 && score <=79) {
alert('You got a B, good job!')
}
else if (score >=40 && score <59) {
alert('You got a C.')
}
else if (score >=20 && score <39) {
alert('You got a D.')
}
else {
alert('You got an F.')
}
}
grader();
