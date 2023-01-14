import { projects } from "../services/projects";
import { Project } from "../models/Project";

export const projectCards = () => {
  const heading = document.createElement("h1");
  const cardWrapper = document.createElement("div");

  const projectContainer = document.querySelector(
    ".projectContainer"
  ) as HTMLDivElement;

  heading.innerHTML = "Projects";
  heading.classList.add("heading");
  heading.setAttribute("id", "projects");
  cardWrapper.classList.add("cardWrapper");

  projectContainer.append(heading, cardWrapper);

  const projectList: Project[] = projects;

  for (let i = 0; i < projectList.length; i++) {
    const cardContainer = document.createElement("div");
    const card = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");
    const pImg = document.createElement("img");
    const pName = document.createElement("h5");
    const pDesc = document.createElement("p");
    const pLink = document.createElement("a");
    const pGHLink = document.createElement("a");
    const pLang = document.createElement("p");

    cardContainer.classList.add("cardContainer");
    card.classList.add("cardContainer__card");

    front.classList.add("cardContainer__card--front");
    back.classList.add("cardContainer__card--back");
    pImg.classList.add("pImg");
    pName.classList.add("pName");
    pDesc.classList.add("pDesc");
    pLink.classList.add("pLink");
    pGHLink.classList.add("pGHLink");
    pLang.classList.add("pLang");
    pLink.innerHTML = "Try it";
    pGHLink.innerHTML = "GitHub";
    pImg.src = projectList[i].projectImg;

    pName.innerHTML = projectList[i].projectName;
    pDesc.innerHTML = projectList[i].projectDesc;
    pLink.href = projectList[i].projectLink;
    pGHLink.href = projectList[i].projectGHLink;
    pLang.innerHTML = projectList[i].projectLanguages;

    cardWrapper.appendChild(cardContainer);
    cardContainer.appendChild(card);
    card.append(front, back);
    front.appendChild(pImg);
    back.append(pName, pDesc, pLink, pGHLink, pLang);
  }
};
