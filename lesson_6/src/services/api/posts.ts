import { axiosInstance } from "./api";
import { TPost } from "@/models/Post";

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
}

export const postsAPI = new PostsAPI();