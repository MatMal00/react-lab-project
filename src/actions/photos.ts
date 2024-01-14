import { IPhoto } from "src/types";
import { postRequest } from "./mutations";

export const addPhotoToAlbumAction = async (newPhoto: IPhoto, photos?: IPhoto[], albumId?: string) => {
    const addedPhoto = (await postRequest<{ data: IPhoto }>(`/photos?albumId=${albumId}`, newPhoto)).data;
    return [{ ...addedPhoto }, ...(photos ?? [])];
};
