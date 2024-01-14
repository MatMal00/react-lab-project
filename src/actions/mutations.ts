import api from "src/api";
import { apiErrorHandler, httpStatus } from "src/helpers";

export const postRequest = async <T>(url: string, data: object) => {
    try {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1500);
        }); // fix me - remove delay
        const response = await api().post<T>(url, { data });

        const status = httpStatus(response.status);
        if (status !== "success") throw response;

        return response.data;
    } catch (error) {
        throw apiErrorHandler(error);
    }
};
