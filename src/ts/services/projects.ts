import { Project } from "../models/Project";

export let projects: Project[] = [
  new Project(
    "https://i.postimg.cc/nhxp8y3V/bookshop.png",
    "Selmas Books",
    "A bookshop where you can buy some of Selma Lagerlöf's books. This was a teamwork project made by me and my classmates Lisa and Micke. We followed Scrum and Jira were followed.",
    "https://github.com/robinsahin88/Bookshop.git",
    "https://github.com/robinsahin88/Bookshop.git",
    `<p>Typescript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`
  ),
  new Project(
    "https://i.postimg.cc/Gmm97ZzR/moviedatabase-mobile-iphone-8-plus.png",
    "MovieLand",
    "Welcome to one of the biggest movie databases based on OMDB-API. You can search among over 4200 movies from all around the world. Type something in the searching area to find a movie",
    "https://github.com/robinsahin88/Moviedatabase.git",
    "https://github.com/robinsahin88/Moviedatabase.git",
    `<p>Typescript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`
  ),

  new Project(
    "https://i.postimg.cc/tJMX2QGT/todolist.png",
    "Todo-list",
    "This is an application where you can create a todo-list. Type next errand to do and check it when completed. Clear checked errand or the whole list when you are done.",
    "https://github.com/robinsahin88/TODO.git",
    "https://github.com/robinsahin88/TODO.git",
    `<p>Javascript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`
  ),
];
