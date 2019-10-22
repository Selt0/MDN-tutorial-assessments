//The standard for loop

for (initializer; exit-condition; final-expression) {
  //code to run
}

/*
initializer - usually a variable set to a number, aka counter variable

exit-condition - defines when the loop should stop

final-expression - always evaluated (run) each time the loop has gone through. Usually used to increment, or in some cases decrement, the counter variable
*/

const cats = ['Bill'.'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';

const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}

para.textContent = info;
//My cats are called Bill, Jeff, Pete, Biggles, and Jasmin.

//while loop
initializer
while (exit-condition) {
  //code to run

  final expression
}

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}

//do..while loop
initializer
do {
  //code to run

  final expression
} while (exit-condition)

let i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while ( i < cats.length);

//Break statement can be used to exit loops

//HTML
<label for='search'>Search by contact name: </label>
<input id='search' type='text'></input>
<button>Search</button>

<p></p>

//JS
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianna:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  for (let i =0; i <contacts.length; i++) {
    let splitContact.contacts[i].split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else {
      para.textContent = "Contact not found.";
    }
  }
});

//the continue statement skips to the next iteration of the loop

let num = input.value;

for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + '';
}

//Active learning: Launch countdown!

let output = document.querySelector('.output');
output.innerHTML = '';


for (let i = 10; i >= 0; i--) {
  let para = document.createElement('p');

    if ( i === 10) {
      para.textContent = 'Countdown 10';
  } else if ( i === 0) {
      para.textContent = 'Blast off!';
  } else {
      para.textContent = i;
  }

  output.appendChild(para);
}

//Active learning: Filling in a guest list

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

let i = 0;

while (i < people.length) {
  if ( people[i] === 'Phil' || people[i] === 'Lola') {
    refused.textContent += people[i] + ', ';
  } else {
    admitted.textContent += people[i] + ', ';
  }

  i++;
}
//slice the last comma off in each case, and add a full stop to the end
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';

admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';