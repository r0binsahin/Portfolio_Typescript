export function mainTag() {
  const mainText = document.querySelector(".mainText") as HTMLElement;
  const mainH1 = document.createElement("h1");
  const mainH3 = document.createElement("h3");
  const introText = document.createElement("p");

  mainH1.innerHTML = "Hi, I'm Robin!";
  mainH3.innerHTML = "Stockholm-based junior front-end developer";
  introText.innerHTML = ` I am a dedicated and curious junior front-end developer based in Stockholm and currently studying at Medieinstitutet. I have a strong passion for coding and problem solving, and I am always eager to learn and develop my skills. I am committed to delivering quality work, and I am not afraid to take on challenging tasks and strive for excellence. I am a team player, and I understand the importance of collaboration and communication in the development process.`;

  mainH1.classList.add("nameHeading");
  mainH3.classList.add("shortIntro");
  introText.classList.add("introText");

  mainText.appendChild(mainH1);
  mainText.appendChild(mainH3);
  mainText.appendChild(introText);
}
