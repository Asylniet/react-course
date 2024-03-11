import { useQuery } from "@tanstack/react-query"
import { userAPI } from "../services/api/users"

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: userAPI.getUsers,
  })
}