import { useQuery } from "@tanstack/react-query"
import { userAPI } from "../services/api/users"

export const useGetUsers = (enabled: boolean) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: userAPI.getUsers,
    enabled: enabled,
  })
}