const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  // console.log(width, height);

  let {offsetX: x, offsetY: y} = e;
  // console.log(x, y);

  const walk = 100;

  // "this" refers to the current object that listens to the event, which is the "hero"
  // If the mouse is moved into text, e.target becomes text and not "hero" anymore
  // console.log(this, e.target);
  if(this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 pink`;
}


hero.addEventListener('mousemove', shadow);