import useSWRImmutable from "swr/immutable";
import { addPhotoToAlbumAction, fetcher } from "src/actions";
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
            toast.success("Succesfully added the photo");
        } catch {
            toast.error("Failed to add photo");
        }
    };

    return { data, error, isLoading, addPhotoToAlbum };
};
