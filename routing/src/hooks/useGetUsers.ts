import { useQuery } from "@tanstack/react-query"
import { userApi } from '../../../lesson_2/src/services/api/user';

export const useGetUsers = (enabled: boolean = true) => {
    return useQuery({
        queryKey: ["users"],
        queryFn: userApi.getUsers,
        enabled: enabled
    })
}