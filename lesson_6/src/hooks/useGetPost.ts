import { TPost } from "@/models/Post";
import { postsAPI } from "../services/api/posts";
import { useQuery } from "@tanstack/react-query";

export const useGetPost = (id: TPost["id"], isEnabled: boolean = true) => {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => postsAPI.getPost(id),
    enabled: isEnabled,
  });
}