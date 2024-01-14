import { FC } from "react";
import { useParams } from "react-router-dom";
import { ActionsHandler, Skeleton } from "src/components";
import { useAuth, useFetchAlbum } from "src/libs";
import { IPhoto } from "src/types";
import { AddPhotoContainer, AddPhotoForm, PhotosList } from "./components";
import styles from "./Album.module.scss";

interface IAlbumProps {}

export const Album: FC<IAlbumProps> = () => {
    const { user } = useAuth();
    const { albumId } = useParams();
    const { addPhotoToAlbum, removePhotoFromAlbum, ...albumState } = useFetchAlbum(albumId);

    return (
        <section className={styles.album}>
            <ActionsHandler<IPhoto[]> {...albumState} skeleton={<Skeleton.Album noOfSkeletons={9} />}>
                {(photos) => (
                    <>
                        {user && (
                            <AddPhotoContainer>
                                <AddPhotoForm handleAddPhoto={addPhotoToAlbum} albumId={albumId} userId={user.id} />
                            </AddPhotoContainer>
                        )}
                        <PhotosList photos={photos} handleRemovePhoto={removePhotoFromAlbum} userId={user?.id} />
                    </>
                )}
            </ActionsHandler>
        </section>
    );
};
