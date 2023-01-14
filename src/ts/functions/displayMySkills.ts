import { Skills } from "../models/Skills";
import { mySkills } from "../services/skills";

export const displayMySkills = () => {
  const skillsWrapper = document.querySelector(".skills") as HTMLElement;
  const skillsHead = document.createElement("div");
  const skillHeadTitle = document.createElement("h1");
  const skillsContainer = document.createElement("div");

  skillsHead.classList.add("skills__head");
  skillHeadTitle.classList.add("skills__head--title");
  skillsContainer.classList.add("skills__container");
  skillHeadTitle.innerHTML = "Skills";

  skillsWrapper.append(skillsHead, skillsContainer);
  skillsHead.appendChild(skillHeadTitle);

  let skillsList: Skills[] = mySkills;

  for (let i = 0; i < skillsList.length; i++) {
    const langBox = document.createElement("div");
    const langImg = document.createElement("img");
    const langName = document.createElement("p");

    langBox.classList.add("skills__container--lang");
    langImg.classList.add("langImg");
    langName.classList.add("langName");

    langImg.src = skillsList[i].skillsImg;
    langName.innerHTML = skillsList[i].skillsName;

    skillsContainer.appendChild(langBox);
    langBox.append(langImg, langName);
  }
};
