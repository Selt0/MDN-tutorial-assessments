if (condition) {
  //run this code if condition is true
}

if (condition) {
  //run this code if condition is true
} else {
  // else run this code instead
}

//Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement
var cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese is available for making cheese on toast.')
} else {
  console.log('No cheese on toast for you today. :(');
}

// HTML
<label for = 'weather'> Select the weather type today: </label>
<select id = 'weather'>
    <option value = ''> -- Make a choice --</option>
    <option value = 'sunny'>Sunny</option>
    <option value = 'rainy'>Rainy</option>
    <option value = 'snowing'>Snowing</option>
    <option value = 'overcast'>Overcast</option>
</select>

<p></p>

// JS
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice == 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or to the park, and get an ice cream';
  } else if (choice == 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella. Don\'t stay out for too long.';
  }else if (choice == 'snowing') {
    para.textContent = 'The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or you can go build a snowman.';
  }else if (choice == 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey. It could start raining any minute, so take a rain coat just in case.';
  }else {
    para.textContent = '';
  }
}

// You can nest if...else statements.
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside - nice and sunny. Let\'s go out to the beach, or the park, and get ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
  }
}

// Logical operators: AND, OR, and NOT
/*
&& - AND; Both need to be true
*/
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside - nice and sunny. Let\'s go out to the beach, or the park, and get ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
}

/*
|| - OR; One or the other need to be true
*/
if (iceCreamVanOutisde || houseStatus === 'on fire') {
  console.log("You should leave the house quickly.");
} else {
  console.log('Probably should just stay in then');
}

/*
! - NOT; used to negate an expression
*/
if (!(iceCreamVanOutisde || houseStatus === 'on fire')) {
  console.log('Probably dhould just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}

//Switch statements

// HTML
<label for = 'weather'> Select the weather type today: </label>
<select id = 'weather'>
    <option value = ''> -- Make a choice --</option>
    <option value = 'sunny'>Sunny</option>
    <option value = 'rainy'>Rainy</option>
    <option value = 'snowing'>Snowing</option>
    <option value = 'overcast'>Overcast</option>
</select>

<p></p>

//JS
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  switch(choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.'
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

//Ternary Operator
//tests a condition and returns a value/expression if its true, and another if its false. Similar to if..else


(condition) ? run this code : run this code instead

var greeting = (isBirthday) ? 'Happy Birthday!' : 'Good morning!';

//You can use the operator for anything you like. Here's an example using it to choose a theme

//HTML
<label for = 'theme'>Select theme: </label>
<select id ='theme'>
  <option value = 'white'>White</option>
  <option value = 'black'>Black</option>
</select>

<h1>This is my website</h1>

//JS
var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  (select.value === 'black') ? update('black', 'white') : update('white', 'black');
}