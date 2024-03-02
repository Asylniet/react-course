import { TUser } from "../../models/User";

export const getUsers = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json() as Promise<TUser[]>;
}