'use strict';

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */

//-----------------------------------------------

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      minutes: document.querySelector(`${this.selector} [data-value="mins"]`),
      seconds: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }

  start() {
    this.timerId = setInterval(() => {
      this.currentTime = new Date();
      this.deltaTime = this.targetDate.getTime() - this.currentTime;

      if (this.deltaTime > 0) {
        this.refs.days.textContent = String(
          Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)),
        ).padStart(2, '0');
        this.refs.hours.textContent = String(
          Math.floor(
            (this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
        ).padStart(2, '0');
        this.refs.minutes.textContent = String(
          Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
        ).padStart(2, '0');
        this.refs.seconds.textContent = String(
          Math.floor((this.deltaTime % (1000 * 60)) / 1000),
        ).padStart(2, '0');
      } else {
        clearInterval(this.timerId);
        this.refs.days.textContent = 0;
        this.refs.hours.textContent = 0;
        this.refs.minutes.textContent = 0;
        this.refs.seconds.textContent = 0;
      }
    }, 1000);
  }
}

const firstCountdown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('feb 22, 2021'),
});

firstCountdown.start();

const secondCountdown = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 17, 2020'),
});

secondCountdown.start();
