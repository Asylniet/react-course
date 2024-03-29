import { TUser } from "../../models/User";
import { axiosInstance } from "./api";

class UserAPI {
  private axios = axiosInstance("users");

  async getUsers() {
    const response = await this.axios.get<TUser[]>("/");
    return response.data;
  }
}

export const userAPI = new UserAPI();