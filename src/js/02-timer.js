import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

   const selectors ={
   startBtn : document.querySelector('button[data-start]'),
   days : document.querySelector('button[data-days]'),
   hours : document.querySelector('button[data-hours]'),
   minutes : document.querySelector('button[data-minutes]'),
   seconds : document.querySelector('button[data-seconds]'),
  }
  let calculatedTime = null;
  let timerId = null;
  selectors.startBtn.disabled = true;

  flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    if(selectedDates[0] < Date.now()){
        alert("Please choose a date in the future")
    } else{
         calculatedTime = selectedDates[0].getTime() - Date.now();
        selectors.startBtn.disabled = false; 
        // console.log(calculatedTime)
    }
    },
  });

  selectors.startBtn.addEventListener('click', pushStart);
  function pushStart(){
    // calculatedTime = selectors.days.textContent.getDays()
   
  }

