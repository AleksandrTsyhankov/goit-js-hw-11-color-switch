const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  CHANGE_COLORS_DELAY: 1000,
  max: colors.length - 1,
  min: 0,
  bodyColor: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
};


function changeBodyColor(color, index) {
  refs.startBtn.setAttribute('disabled', null)
  refs.bodyColor.setAttribute('bgColor', color[index])
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttons = {
  intervalId: null,
  isActive: false,
  onStartBtnClick() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.intervalId = setInterval(() => {
      changeBodyColor(colors, randomIntegerFromInterval(refs.min, refs.max));
    }, refs.CHANGE_COLORS_DELAY);
  },

  onStopBtnClick() {
    clearInterval(this.intervalId);
    this.isActive = false;
    refs.startBtn.removeAttribute('disabled', null)
  },
};

refs.startBtn.addEventListener('click', () => { buttons.onStartBtnClick() });
refs.stopBtn.addEventListener('click', () => { buttons.onStopBtnClick() });

