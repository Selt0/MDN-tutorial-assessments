//create references
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

//stop the form from submitting (refreshing) when a button is pressed
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

//when 'Say hello' button is clicked
submitBtn.addEventListener('click', function() {
  //store the name in web storage
  localStorage.setItem('name', nameInput.value);
  //run nameDisplayCheck() to sort out displaying the personalized greeting
  nameDisplayCheck();
});

//when 'forget' button is clicked
forgetBtn.addEventListener('click', function() {
  //remove the stored iten fron web storage
  localStorage.removeItem('name');
  //run nameDisplayCheck() to sort out displaying the personalized greeting
  nameDisplayCheck();
});

//define nameDisplayCheck();
function nameDisplayCheck() {
  //check whether 'name' data is stored
  if(localStorage.getItem('name')) {
    //display personalized greeting
    let name = localStorage.getItem('name');
    h1.textContent = 'Wecome, ' + name;
    personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
    //hide 'remember'  and display 'forget' button
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    //if not, display generic greeting
    h1.textContent = 'Wecome to our website!';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you\'re here.';
    //hide 'forget' and display 'remember'
    forgetDiv.style.display = 'none'
    rememberDiv.style.display = 'block';
  }
}

//have function run every time the page is loaded
document.body.onload = nameDisplayCheck;