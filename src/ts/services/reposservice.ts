import axios, { AxiosResponse } from "axios";
import { IGitRepos } from "../models/IGitRepos";

export async function getRepos(): Promise<IGitRepos[]> {
  let response = await axios.get(
    "https://api.github.com/users/robinsahin88/repos"
  );

  console.log(response.data);
  return response.data;
}
