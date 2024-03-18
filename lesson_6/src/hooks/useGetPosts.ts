import { postsAPI } from "../services/api/posts";
import { useQuery } from "@tanstack/react-query"

export const useGetPosts = (isEnabled: boolean = true) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: postsAPI.getPosts,
    enabled: isEnabled,
  });
}