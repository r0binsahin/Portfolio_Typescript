import { Project } from "../models/Project";

export let projects: Project[] = [
  new Project(
    "https://i.postimg.cc/FzGnSXGR/travelwishlist-cover.png",
    "Travel Whishlist",
    "A travel wishlist created with GraphQL. Add a city to your wishlist. Remove it to the visited cities. You can see the total amount of cities you have visited",
    "https://movieland.tech/?",
    "https://github.com/r0binsahin/Travel_wishlist_GraphQL.git",
    `<p>GraphQL</p><p>Apollo</p><p>Javascript</p><p>HTML</p><p>CSS</p><p>Flexbox</p>`
  ),

  new Project(
    "https://i.postimg.cc/ZRtgtcCT/bookshop-cover.png",
    "Selmas Books",
    "A bookshop where you can buy some of Selma Lagerlöf's books. This was a teamwork project made by me and my classmates Lisa and Micke. We followed Scrum and Jira were followed.",
    "https://selmasbookshop.netlify.app/",
    "https://github.com/r0binsahin/Bookshop.git",
    `<p>Typescript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`
  ),
  new Project(
    "https://i.postimg.cc/bJx5ztt1/movieland-cover.png",
    "MovieLand",
    "Welcome to one of the biggest movie databases based on OMDB-API. You can search among over 4200 movies from all around the world. Type something in the searching area to find a movie",
    "../../projects/movieland/index.html",
    "https://github.com/r0binsahin/Moviedatabase.git",
    `<p>Typescript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`
  ),

  new Project(
    "https://i.postimg.cc/7hqWbZ3d/todo-cover.png",
    "Todo-list",
    "This is an application where you can create a todo-list. Type next errand to do and check it when completed. Clear checked errand or the whole list when you are done. My first school project with Javascript.",
    "https://robinstodolist.netlify.app/",
    "https://github.com/r0binsahin/TODO-List",
    `<p>Javascript</p><p>HTML</p><p>SCSS</p><p>Flexbox</p><p>Bootstraps</p><p>Parceljs</p>`
  ),
];
