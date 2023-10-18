import api from "src/api";
import { apiErrorHandler, httpStatus } from "src/helpers";

export const fetcher = async <T>(url: string) => {
    try {
        const response = await api().get<T>(url);

        const status = httpStatus(response.status);
        if (status !== "success") throw response;

        return response.data;
    } catch (error) {
        throw apiErrorHandler(error);
    }
};
