import { OtherProject } from "../models/OtherProject";
import { otherProjects } from "../services/otherProjects";

export const displayOtherProjects = () => {
  const otherProjectsContainer = document.querySelector(
    ".otherProjects"
  ) as HTMLDivElement;
  const heading = document.createElement("h3");
  heading.innerHTML = "Other Projects";
  heading.classList.add("otherProjects__heading");

  otherProjectsContainer.appendChild(heading);

  let myOtherProjects: OtherProject[] = otherProjects;

  for (let i = 0; i < myOtherProjects.length; i++) {
    const projectBox = document.createElement("div");
    const name = document.createElement("p");
    const link = document.createElement("a");

    projectBox.classList.add("otherProjects__projectBox");
    name.classList.add("otherProjects__projectBox--name");
    link.classList.add("otherProjects__projectBox--link");

    name.innerHTML =
      `<i class="bi bi-arrow-right"></i>` +
      " " +
      myOtherProjects[i].otherProjectName;
    link.href = myOtherProjects[i].otherProjectGHLink;
    link.innerHTML = `<i class="bi bi-github"></i>`;

    otherProjectsContainer.appendChild(projectBox);
    projectBox.append(name, link);
  }
};
