function setTime(event) {
  const getTimeString =
    event.target.previousSibling.firstElementChild.innerText;
  const time = parseInt(getTimeString);

  const getExerciseTime = document.getElementById("exercise-time");
  const getExerciseTimeString = getExerciseTime.innerText;
  const exerciseTime = parseInt(getExerciseTimeString);

  const totalTime = exerciseTime + time;
  getExerciseTime.innerText = totalTime;

  const setStyle = event.target;
  setStyle.classList.remove("btn-primary");
  setStyle.classList.add("btn-success");
  setStyle.innerText = "Added";
}

function addBreak(event) {
  const getBreakTime = event.target.innerText;
  localStorage.setItem("exercise-break", getBreakTime);
  const getLocalStorageBreak = localStorage.getItem("exercise-break");
  const getBreakBox = document.getElementById("break-time");
  getBreakBox.innerText = getLocalStorageBreak;

  console.log(typeof getLocalStorageBreak);
  return getLocalStorageBreak;
}

export { setTime, addBreak };
