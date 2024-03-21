import { useQuery } from "@tanstack/react-query";
import { TPost } from '../models/Post';
import { postAPI } from "../service/api/posts";

export const useGetPost = (id: TPost["id"], isEnabled: boolean = true) => {
    return useQuery({
        queryKey: ["post", id],
        queryFn: () => postAPI.getPost(id),
        enabled: isEnabled
    })
}