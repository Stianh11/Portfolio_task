const canvas = document.getElementById('404s');
const ctx = canvas.getContext('2d');

// fit screen size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// number and column
const error = '404'; //ERROR was just hard to look at
const fontSize = 25;
const columns = canvas.width / fontSize;
// y-posistion
const drops = Array(Math.floor(columns)).fill(1);

function draw()
{
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; //background
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#FF0000'; // Red
  ctx.font = `${fontSize}px monospace`;
  drops.forEach((y, x) =>
  {
    // const text = error[Math.floor(Math.random() * error.length)];
    // ctx.fillText(text, x * fontSize, y * fontSize);
    ctx.fillText(error, x * fontSize, y * fontSize); //so it falls as 404 and not random 4 and 0
    // reset
    if (y * fontSize > canvas.height && Math.random() > 0.975)
    {
      drops[x] = 0;
    }
    drops[x]++;
  });
}

// update
setInterval(draw, 50);

// //resonse massage for contact form

// const form = document.getElementById('contact');
// const massage =document.getElementById('responseMassage');

// //add eventlisener
// form.addEventListener('submit', function(event)
// {
//   event.preventDefault(); // makes data default
// //show message
//   massage.style.display='block';
//   form.reset();
// });
//find better way to do this.
//Modal
const form = document.getElementById('contact-form');
const modal = document.getElementById('modalId');
const overlay = document.getElementById('modalOverlayId');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', function(event)
{
  event.preventDefault();
  modal.style.display ='block';
  overlay.style.display ='block';

  form.reset() //should empty the form after submit
});
//close modal
closeModal.addEventListener('click', function(){
  modal.style.display ='none';
  overlay.style.display ='none';
});
overlay.addEventListener('click', function()
{
  modal.style.display ='none';
  overlay.style.display='none';
});