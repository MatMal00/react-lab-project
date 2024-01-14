import useSWRImmutable from "swr/immutable";
import { addPhotoToAlbumAction, fetcher, removePhotoFromAlbumAction } from "src/actions";
import { IPhoto } from "src/types";
import toast from "react-hot-toast";

export const useFetchAlbum = (albumId?: string) => {
    const { data, error, isLoading, mutate } = useSWRImmutable<IPhoto[], string>(`/photos?albumId=${albumId}`, fetcher);

    const addPhotoToAlbum = async (newPhoto: IPhoto) => {
        try {
            await mutate((photos) => addPhotoToAlbumAction(newPhoto, photos, albumId), {
                optimisticData: (photos) => [newPhoto, ...(photos ?? [])],
                populateCache: true,
                revalidate: false,
            });
            toast.success("Successfully added the photo");
        } catch {
            toast.error("Failed to add photo");
        }
    };

    const removePhotoFromAlbum = async (photoId: number) => {
        try {
            await mutate((photos) => removePhotoFromAlbumAction(photoId, photos), {
                optimisticData: (photos) => (photos ?? []).filter((photo) => photo.id !== photoId),
                populateCache: true,
                revalidate: false,
            });
            toast.success("Successfully removed the photo");
        } catch {
            toast.error("Failed to removed photo");
        }
    };

    return { data, error, isLoading, addPhotoToAlbum, removePhotoFromAlbum };
};
