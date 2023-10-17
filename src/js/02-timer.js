import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
   
const startBtn = document.querySelector('button[data-start]');
const spanDays = document.querySelector('span[data-days]')
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]')
  const input = document.querySelector('#datetime-picker');
  

  startBtn.disabled = true;
  let timerId = null;

  flatpickr(input, {
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()){
        Notiflix.Notify.failure('"Please choose a date in the future"')
    } else{
        startBtn.disabled = false;
    }
  },
  });

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value){
    return value.toString().padStart(2, "0");
  }

  startBtn.addEventListener('click', ()=>{
    timerId = setInterval(()=>{
        let counter = new Date(input.value) - Date.now();
        startBtn.disabled = true;
        if(counter >= 0) {
            let totalMs = convertMs(counter)

            spanDays.textContent = addLeadingZero(totalMs.days);
            spanHours.textContent = addLeadingZero(totalMs.hours);
            spanMinutes.textContent = addLeadingZero(totalMs.minutes);
            spanSeconds.textContent = addLeadingZero(totalMs.seconds);
        } else{
            clearInterval(timerId);
        };
    }, 1000)
  })
// Cтільки страждань за ради двох кліків....)