'use strict'

let userName = prompt('what is your name ?');
alert ('welcom ' + userName + ' in my webpage');
let score=0;
let q1 = prompt('are you here')
//console.log(q1);
q1 = q1.toUpperCase();
switch(q1){
    case('YES'):
    case('Y'):
    score++;
    alert('Iam here');
    break;
    case('NO'):
    case('N'):
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
    score++;
    alert('your age is allowed in this page');
    break;
    case('no'):
    case('n'):
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
    score++;
    alert('your live in Amman');
    break;
    case('no'):
    case('n'):
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
    score++;
    alert('you love makeup');
    break;
    case('no'):
    case('n'):
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
    score++;
    alert('you answer is true');
    break;
    case('no'):
    case('n'):
    alert('you answer is false');
    break;
    default:
        alert('ok no problem');
}
let guessNum=0;
for(let i=1 ; i<=4 ; i++){
    guessNum=parseInt(prompt('Guess a number between 1-10 I\'ll tell you what\'s my number'));
    if (guessNum===5){
        alert('you gussed');
        break;
        score++;
    }else if (guessNum>5){
       
        //alert('Too high'+ 'Try again');
        alert('To high try again');
        

    }else{
       
        //alert('Too low'+ 'Try again');
        alert('To low try again'); 

    }
if (i===4){
    alert('Thank you to try the number is 5')
    break;
}
}
let guessFav=['piano','shopping'];
console.log(guessFav);

for(let i=1 ;i<=6 ;i++){
    let favInput=prompt('guessing what\'s my favourite thing its 2 guessing at least 1')
    favInput=favInput.toLowerCase();
    if(favInput === guessFav[0] || favInput === guessFav[1] ){
        alert('yes right you are agreat');
        score++;
        break;}

    else if (i===6)
    {
        alert('my favourite thing is '+ guessFav[0]);

        alert('my favourite thing is '+ guessFav[1]);
    }

}
alert ('welcom ' + userName + 'to visit my website your score is '+ score +'/7'); 
