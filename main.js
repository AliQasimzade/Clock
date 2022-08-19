let hourArrow = document.getElementById("hour-arrow");
let minuteArrow = document.getElementById("minute-arrow");
let secondArrow = document.getElementById("second-arrow");

setInterval(() => {
  let date = new Date();
  console.log(date);
  let minute = date.getMinutes() * 6;
  let second = date.getSeconds() * 6;
  let hour = date.getHours() * 30;
  hourArrowRotation(hour);
  minuteArrowRotation(minute);
  secondArrowRotation(second);
}, 1000);

const hourArrowRotation = (rotation) =>
  (hourArrow.style.transform = `rotate(${rotation}deg)`);

const minuteArrowRotation = (rotation) =>
  (minuteArrow.style.transform = `rotate(${rotation}deg)`);

const secondArrowRotation = (rotation) =>
  (secondArrow.style.transform = `rotate(${rotation}deg)`);
