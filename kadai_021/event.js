const btn = document.getElementById('btn');
const textElement = document.getElementById("text");
const textToDisplayAfter2s = "ボタンをクリックしました";
const eventForAction = 'click';
const timeToWaitBeforeAction = 2000;

  btn.addEventListener(eventForAction, () => {
    setTimeout(() => {
      textElement.textContent = textToDisplayAfter2s;
    }, timeToWaitBeforeAction);
  });

