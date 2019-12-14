const buttonRight = document.querySelector('.buttonRight');
const buttonPaused = document.querySelector('.buttonPaused');
const buttonLeft = document.querySelector('.buttonLeft');
const buttonLampOnOf = document.querySelector('.buttonLampSelector');
const buttonFire = document.querySelector('.buttonFire');


const sp = document.querySelector('.sp');
const lamp = document.querySelector('.lamp');
const lampStatus = document.querySelector('i');
const fire = document.querySelector('.fire');

function statePosition() {
  const statePositionNow = window.getComputedStyle(sp).getPropertyValue('margin-left');
  return statePositionNow;
}

buttonRight.onclick = () => {
  sp.classList.add('r');
  if (sp.classList.contains('l')) {
    sp.classList.remove('l');
  }
  console.log(sp);
};


buttonLeft.onclick = () => {
  sp.classList.add('l');
  if (sp.classList.contains('r')) {
    sp.classList.remove('r');
  }
  console.log(sp);
};

buttonPaused.onclick = () => {
  const nowState = statePosition();
  const check = sp.classList.contains('r');
  if (check) {
    sp.classList.remove('r');
  } else {
    sp.classList.remove('l');
  }
  sp.style.marginLeft = nowState;
  console.log(nowState);
  console.log(sp);
};

buttonLampOnOf.onclick = () => {
  let tempLampStatus = '';
  lamp.classList.toggle('lampOn');
  if (lamp.classList.contains('lampOn')) {
    tempLampStatus = ' On';
  } else {
    tempLampStatus = ' Of';
  }
  lampStatus.innerText = `${tempLampStatus}`;
};

buttonFire.onclick = () => {
  fire.classList.toggle('openFire');
  console.log(fire);
};
