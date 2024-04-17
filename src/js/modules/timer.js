function timer() {
  const dayElements = document.querySelector("#days");
  const hourElements = document.querySelector("#hours");
  const minuteElements = document.querySelector("#minutes");
  const secondElements = document.querySelector("#seconds");

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 3);

  let timeInterval;

  function updateTimer() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
      dayElements.textContent = "0";
      hourElements.textContent = "0";
      minuteElements.textContent = "0";
      secondElements.textContent = "0";
      clearInterval(updateTimer);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    dayElements.textContent = days < 10 ? "0" + days : days;
    hourElements.textContent = hours < 10 ? "0" + hours : hours;
    minuteElements.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondElements.textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

export default timer;
