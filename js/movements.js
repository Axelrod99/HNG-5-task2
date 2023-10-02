"use strict";

const instructions = {
  button1:
    "This button allows you to get the best of gowns in town. It takes you a page where you can view our rack of finesse.",
  button2:
    "This button allows you to get the shop the rarest of crop tops that goes with anything. It takes you a page where you can view our rack of finesse.",
  button3:
    "This button allows you to shop accessories that goes with your style and structure. It takes you a page where you can view our rack of finesse.",
  button4:
    "This button shows you our bags collection for different occasions and style. It takes you a page where you can view our rack of finesse.",
  button5:
    "This button allows you to get shoes for every dress style. It takes you a page where you can view our rack of finesse.",
  button6:
    "This button takes you to pleasure and bliss. It takes you a page where you can view our calaogue.",
};

const allButtons = document.querySelectorAll("button");
const modelWithTextContainer = document.querySelector(".modelContainer");
const descriptionText = document.querySelector(".description-text");

const moveModelContainer = (xPos, yPos, height) => {
  console.log(xPos, yPos, height);
  modelWithTextContainer.style.position = "absolute";
  modelWithTextContainer.style.top = `${yPos + height}px`;
  modelWithTextContainer.style.left = `${xPos}px`;
  modelWithTextContainer.style.bottom = `unset`;
  modelWithTextContainer.style.right = `unset`;
};

allButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const buttonId = e.target.dataset.id;
    descriptionText.textContent = instructions[`button${buttonId}`];

    const xPos = e.target.getBoundingClientRect().x;
    const yPos = e.target.getBoundingClientRect().y;
    const height = e.target.getBoundingClientRect().height;
    console.log(xPos, yPos, height);

    moveModelContainer(xPos, yPos, height);
  })
);
