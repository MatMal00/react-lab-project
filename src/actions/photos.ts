import { IPhoto } from "src/types";
import { deleteRequest, postRequest } from "./mutations";

export const addPhotoToAlbumAction = async (newPhoto: IPhoto, photos?: IPhoto[], albumId?: string) => {
    const addedPhoto = (await postRequest<{ data: IPhoto }>(`/photos?albumId=${albumId}`, newPhoto)).data;
    return [{ ...addedPhoto }, ...(photos ?? [])];
};

export const removePhotoFromAlbumAction = async (photoId: number, photos?: IPhoto[], albumId?: string) => {
    const { photoId: removedPhotoId } = (
        await deleteRequest<{ data: { photoId: number } }>(`/photos?albumId=${albumId}`, { photoId })
    ).data;
    return (photos ?? []).filter((photo) => photo.id !== removedPhotoId);
};
