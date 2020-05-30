'use strict';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

const colorLoop = {
  handleStartBtn() {
    refs.startBtn.setAttribute('disabled', true);
    this.timerId = setInterval(() => {
      const i = randomIntegerFromInterval(0, 5);
      const backgroundColor = colors[i];
      refs.body.setAttribute('bgcolor', colors[i]);
    }, 1000);
  },

  handleStopBtn() {
    clearInterval(this.timerId);
    refs.startBtn.removeAttribute('disabled');
  },
};

refs.startBtn.addEventListener(
  'click',
  colorLoop.handleStartBtn.bind(colorLoop),
);
refs.stopBtn.addEventListener('click', colorLoop.handleStopBtn.bind(colorLoop));
