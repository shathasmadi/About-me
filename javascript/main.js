'use strict'
let userName = prompt('what is your name ?');
alert ('welcom ' + userName + ' in my webpage');

let q1 = prompt('are you here')
//console.log(q1);
q1 = q1.toUpperCase();
switch(q1){
    case('YES'):
    alert('Iam here');
    break;
    case('NO'):
    alert('Iam in the home');
    break;
    default:
        alert('ok no problem');
}

let q2 = prompt('your age is greater than 22? ')
//console.log(q2);
q2 = q2.toLowerCase();
switch(q2){
    case('yes'):
    alert('your age is allowed in this page');
    break;
    case('no'):
    alert('ok no problem ');
    break;
    default:
        alert('welcome');
}

let q3 = prompt('are you live in Amman? ')
//console.log(q3);
q3 = q3.toLowerCase();
switch(q3){
    case('yes'):
    alert('your live in Amman');
    break;
    case('no'):
    alert('your live out Amman ');
    break;
    default:
        alert('welcome');
}

let q4 = prompt('are you love makeup?')
//console.log(q4);
q4 = q4.toLowerCase();
switch(q4){
    case('yes'):
    alert('you love makeup');
    break;
    case('no'):
    alert('you  dont love makeup');
    break;
    default:
        alert('ok no problem');
}

let q5 = prompt('do yo think i love makeup?')
//console.log(q5);
q5 = q5.toLowerCase();
switch(q5){
    case('yes'):
    alert('you answer is true');
    break;
    case('no'):
    alert('you answer is false');
    break;
    default:
        alert('ok no problem');
}

alert ('welcom ' + userName ); 
document.write('welcom ' + userName ); 