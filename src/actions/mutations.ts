import api from "src/api";
import { apiErrorHandler, httpStatus } from "src/helpers";

export const postRequest = async <T>(url: string, data: object) => {
    try {
        const response = await api().post<T>(url, { data });

        const status = httpStatus(response.status);
        if (status !== "success") throw response;

        return response.data;
    } catch (error) {
        throw apiErrorHandler(error);
    }
};

export const deleteRequest = async <T>(url: string) => {
    try {
        const response = await api().delete<T>(url);

        const status = httpStatus(response.status);
        if (status !== "success") throw response;

        return response.data;
    } catch (error) {
        throw apiErrorHandler(error);
    }
};

export const updateRequest = async <T>(url: string, data: object) => {
    const response = await api().patch<T>(url, { data });

    const status = httpStatus(response.status);
    if (status !== "success") throw response;

    return response.data;
};
