import SWR from "swr";
import { fetcher } from "src/actions";
import { IPhoto } from "src/types";

export const useFetchAlbum = (albumId?: string) => {
    const { data, error, isLoading } = SWR<IPhoto[], string>(`/photos?albumId=${albumId}`, fetcher);
    return { data, error, isLoading };
};
