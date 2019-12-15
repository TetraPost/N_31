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

function moveL() {
  sp.classList.add('l');
  buttonLeft.classList.add('disabled');
  buttonRight.classList.remove('disabled');
  if (sp.classList.contains('r')) {
    sp.classList.remove('r');
  }
  console.log(sp);
}

function moveR() {
  sp.classList.add('r');
  buttonRight.classList.add('disabled');
  buttonLeft.classList.remove('disabled');
  if (sp.classList.contains('l')) {
    sp.classList.remove('l');
  }
  console.log(sp);
}

buttonLeft.onclick = () => {
  if (sp.classList.contains('rotateR')) {
    sp.classList.remove('rotateR');
  }
  const nowState = statePosition();
  const check = sp.classList.contains('r');
  if (check) {
    sp.classList.remove('r');
  } else {
    sp.classList.remove('l');
  }
  sp.style.marginLeft = nowState;
  sp.classList.add('rotateL');
  setTimeout(moveL, 500);
};

buttonRight.onclick = () => {
  if (sp.classList.contains('rotateL')) {
    sp.classList.remove('rotateL');
  }

  const nowState = statePosition();
  const check = sp.classList.contains('l');
  if (check) {
    sp.classList.remove('l');
  } else {
    sp.classList.remove('r');
  }
  sp.style.marginLeft = nowState;
  sp.classList.add('rotateR');
  setTimeout(moveR, 500);
};

buttonPaused.onclick = () => {
  buttonRight.classList.remove('disabled');
  buttonLeft.classList.remove('disabled');
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
