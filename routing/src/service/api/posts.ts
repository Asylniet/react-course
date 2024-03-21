import { axiosInstance } from "./api";
import { TPost } from '../../models/Post';
import { TComment } from "../../models/Comment";

class PostsAPI {
    private axios = axiosInstance("posts");

    getPosts = async() => {
        const response = await this.axios.get<TPost[]>("/");
        return response.data;
    }

    getPost = async(id: TPost["id"]) => {
        const response = await this.axios.get<TPost>(`/${id}`);
        return response.data;
    }

    getComment = async(postId: TPost["id"]) => {
        const response = await this.axios.get<TComment[]>(`${postId}/comments`);
        return response.data;
    }
}

export const postAPI = new PostsAPI();