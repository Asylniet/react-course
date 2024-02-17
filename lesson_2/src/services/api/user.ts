import { TUser } from "../../models/User";

class UserApi {
  getUsers = () => {
    const users: TUser[] = [
      { id: 1, name: "John Doe", email: "johndoe@gmail.com", phone: "1234567890" },
      { id: 2, name: "Jane Smith", email: "janesmith@mail.ru", phone: "1234567890" },
      { id: 3, name: "Michael Johnson", email: "michaeljohnson@yahoo.com", phone: "1234567890" },
      { id: 4, name: "Emily Davis", email: "emilydavis@outlook.com", phone: "1234567890" },
      { id: 5, name: "Daniel Wilson", email: "danielwilson@icloud.com", phone: "1234567890" },
      { id: 6, name: "Olivia Thompson", email: "oliviathompson@hotmail.com", phone: "1234567890" },
      { id: 7, name: "William Anderson", email: "williamanderson@protonmail.com", phone: "1234567890" },
      { id: 8, name: "Sophia Martinez", email: "sophiamartinez@yandex.com", phone: "1234567890" },
      { id: 9, name: "James Taylor", email: "jamestaylor@live.com", phone: "1234567890" },
      { id: 10, name: "Emma Clark", email: "emmaclark@inbox.com", phone: "1234567890" },
    ];

    return users;
  }
}

export const userApi = new UserApi();