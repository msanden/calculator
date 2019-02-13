function quiz() {
alert('Select 1 or 2 from the choices that follow.')
var ques1 = parseInt(prompt('Do you like 1. cats or 2.dogs?'));
var ques2 = parseInt(prompt('Do you like 1. the indoors or 2. the outdoors?'));
var ques3 = parseInt(prompt('Do you like 1. large crowds or 2. prefer small gatherings?'))

if (ques1==1 && ques2 == 1 && ques3 == 1) {
alert('You are probably an extrovert.');
}
else if(ques1==2 && ques2==2 &&ques3 ==2) {
alert('You are probably introverted.');
}
else if(ques1==1 || ques2==2 && ques3==1) {
alert('You are probably extroverted')
}
else {
alert('We cannot tell');
}
}
quiz();
