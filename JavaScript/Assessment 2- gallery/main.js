var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var img = ['images/pic1.jpg', 
           'images/pic2.jpg',
           'images/pic3.jpg',
           'images/pic4.jpg',
           'images/pic5.jpg'];

for (let i = 0; i < img.length; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', img[i]);
  thumbBar.appendChild(newImage);

  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayedImage.setAttribute('src', imgSrc);
  }     
}

/* Alternative loop through images

for (let i = 0; i < 5; i++) {
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
}

Run a function, passing it the returned src value as a parameter. This event handler function should set the src attribute value of the displayed-img <img> to the src value passed in as a parameter.

  newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImg(imgSrc);
  }

  function displayImg(imgSrc) {
    displayedImage.setAttribute('src', imgSrc);
  }

*/

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {

  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}