'use strict'
let userName = prompt('what is your name ?');
alert ('welcom ' + userName + ' in my webpage');

let q1 = prompt('are you here')
//console.log(q1);
q1 = q1.toUpperCase();
switch(q1){
    case('YES'):
    case('Y'):
    alert('Iam here');
    alert('Iam here');
    break;
    case('NO'):
    case('N'):
    alert('Iam in the home');
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
    case('y'):
    alert('your age is allowed in this page');
    alert('your age is allowed in this page');
    break;
    case('no'):
    case('n'):
    alert('ok no problem ');
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
    case('y'):
    alert('your live in Amman');
    alert('your live in Amman');
    break;
    case('no'):
    case('n'):
    alert('your live out Amman ');
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
    case('y'):
    alert('you love makeup');
    alert('you love makeup');
    break;
    case('no'):
    case('n'):
    alert('you  dont love makeup');
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
    case('y'):
    alert('you answer is true');
    alert('you answer is true');
    break;
    case('no'):
    case('n'):
    alert('you answer is false');
    alert('you answer is false');
    break;
    default:
        alert('ok no problem');
}

alert ('welcom ' + userName ); 
document.write('welcom ' + userName ); 