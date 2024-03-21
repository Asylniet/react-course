import { useQuery } from "@tanstack/react-query";
import { TComment } from "../models/Comment";
import { postAPI } from "../service/api/posts";

export const useGetComment = (id: TComment["id"], isEnabled: boolean = true) => {
    return useQuery({
        queryKey: ["comment", id],
        queryFn: () => postAPI.getComment(id),
        enabled: isEnabled
    })
}