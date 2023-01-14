export function mainTag() {
  const mainText = document.querySelector(".mainText") as HTMLElement;
  const mainH1 = document.createElement("h1");
  const mainH3 = document.createElement("h3");
  const introText = document.createElement("p");

  mainH1.innerHTML = "Hi, I'm Robin!";
  mainH3.innerHTML = "Stockholm-based junior front-end developer";
  introText.innerHTML = ` I am a curious and dedicated junior programmer studying Frontend development at Medieinstitutet in Stockholm. I am fascinated by the endless possibilities and inspiration that programming offers and enjoy increasing my skills constantly. <br> <br>

  Right now, I am looking for an internship for autumn 2023 where I can apply what I have learned during my education and boost my skills in frontend development.<br> <br>
  Take a tour on my website and don't hesitate to contact me if you have a recommendation or an internship offer.`;

  //mainText.classList.add("mainText", "col-sm-12", "col-md-6", "col-lg-6");
  mainH1.classList.add("nameHeading");
  mainH3.classList.add("shortIntro");
  introText.classList.add("introText");

  const pageWrapper: HTMLDivElement = document.querySelector(
    ".wrapper"
  ) as HTMLDivElement;

  mainText.appendChild(mainH1);
  mainText.appendChild(mainH3);
  mainText.appendChild(introText);
}
