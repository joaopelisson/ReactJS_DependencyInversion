import axios, { HttpStatusCode } from "axios";
import { ILoginProps, ILoginResultProps } from "./types";

export const UserService = {
  login: async function ({
    login,
    password,
  }: ILoginProps): Promise<ILoginResultProps | undefined> {
    try {
      console.log("UserService.Login", login, password);
      return {
        status: HttpStatusCode.Ok,
        message: "Success",
      };
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response?.status} - ${err.message}`);
      }
    }
  },
};
