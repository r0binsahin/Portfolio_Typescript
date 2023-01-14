import { IGitRepos } from "../models/IGitRepos";
import { getRepos } from "../services/reposservice";

export function contactIcons() {
  const linkBox = document.createElement("div");

  const mailLink = document.createElement("a");
  const linkedInLink = document.createElement("a");
  const gitHubLink = document.createElement("a");

  linkBox.classList.add("pageHead__linkBox");
  mailLink.classList.add("pageHead__linkBox--mailLink");
  linkedInLink.classList.add("pageHead__linkBox--linkedinLink");
  gitHubLink.classList.add("pageHead__linkBox--githubLink");

  mailLink.href = "mailto:robin.sahin88@gmail.com";
  mailLink.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
  linkedInLink.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
  linkedInLink.href = "https://www.linkedin.com/in/robin-sahin-15404a24b/";
  gitHubLink.innerHTML = `<i class="fa-brands fa-square-github"></i>`;
  gitHubLink.href = "https://github.com/robinsahin88";

  const pageHead = document.querySelector(".pageHead") as HTMLElement;

  pageHead.appendChild(linkBox);
  linkBox.append(mailLink, linkedInLink, gitHubLink);
}

export function contactIconsFooter() {
  const linkBox = document.createElement("div");
  const telBox = document.createElement("div");
  const personName = document.createElement("p");
  const telNo = document.createElement("p");

  const mailLink = document.createElement("a");
  const linkedInLink = document.createElement("a");
  const gitHubLink = document.createElement("a");

  telBox.classList.add("pageFoot__telBox");
  personName.classList.add("pageFoot__telBox--name");
  telNo.classList.add("pageFoot__telBox--tel");

  linkBox.classList.add("pageFoot__linkBox");
  mailLink.classList.add("pageFoot__linkBox--mailLink");
  linkedInLink.classList.add("pageFoot__linkBox--linkedinLink");
  gitHubLink.classList.add("pageFoot__linkBox--githubLink");

  personName.innerHTML = "Robin Sahin";
  telNo.innerHTML = "Tel : 072-298 35 93";

  mailLink.href = "mailto:robin.sahin88@gmail.com";
  mailLink.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
  linkedInLink.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
  linkedInLink.href = "https://www.linkedin.com/in/robin-sahin-15404a24b/";
  gitHubLink.innerHTML = `<i class="fa-brands fa-square-github"></i>`;
  gitHubLink.href = "https://github.com/robinsahin88";

  const pageFoot = document.querySelector(".pageFoot") as HTMLElement;

  pageFoot.append(telBox, linkBox);
  telBox.append(personName, telNo);
  linkBox.append(mailLink, linkedInLink, gitHubLink);
}
