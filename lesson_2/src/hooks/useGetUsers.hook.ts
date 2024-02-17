import { userApi } from "../services/api/user"

export const useGetUsers = () => {
  return userApi.getUsers();
}