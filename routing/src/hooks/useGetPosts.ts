import { useQuery } from "@tanstack/react-query"
import { postAPI } from "../service/api/posts"

export const useGetPosts = (isEnabled: boolean = true) => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: postAPI.getPosts,
        enabled: isEnabled
    })
}