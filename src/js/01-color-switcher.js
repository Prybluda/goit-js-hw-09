function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };
  
  const startBtn = document.querySelector('button[data-start]');
  const stopBtn = document.querySelector('button[data-stop]');
  let timerId = null;
  stopBtn.disabled = true;

  function changeColor(){
    document.body.style.backgroundColor = getRandomHexColor();
  };

  startBtn.addEventListener('click', ()=>{
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(changeColor, 500);
  });

  stopBtn.addEventListener('click', ()=>{
    startBtn.disabled = false;
    clearInterval(timerId);
    return stopBtn.disabled = true;
  })