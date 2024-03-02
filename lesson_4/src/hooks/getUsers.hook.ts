import { getUsers } from "../services/api/user"

export const useGetUsers = async() => {
  const users = await getUsers();
  return users;
}