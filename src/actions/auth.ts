import api from "src/api";
import { AxiosError } from "axios";
import { apiErrorHandler, httpStatus } from "src/helpers";
import { IUser } from "src/types";

export const sendLoginCall = async (url: string, { arg: { email } }: { arg: { email: string } }) => {
    try {
        const response = await api().get<IUser[]>(url);

        const status = httpStatus(response.status);
        if (status !== "success") throw response;

        const user = response.data.find((user) => user.email === email);

        if (user) return user;
        else throw new AxiosError("Failed to log in");
    } catch (error) {
        throw apiErrorHandler(error);
    }
};

export const getUserFromLocalStorage = (): IUser | undefined => {
    const user = window.localStorage.getItem("user");
    if (user) return JSON.parse(user);
};
