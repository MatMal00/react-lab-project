import { FC } from "react";
import { useParams } from "react-router-dom";
import { ActionsHandler, Button, Skeleton } from "src/components";
import { useFetchAlbum } from "src/libs";
import { IPhoto } from "src/types";
import styles from "./Album.module.scss";
import { PhotosList } from "./components";

interface IAlbumProps {}

export const Album: FC<IAlbumProps> = () => {
    const { albumId } = useParams();
    const albumState = useFetchAlbum(albumId);

    return (
        <section className={styles.album}>
            <Button text="Add" actionType="add" />
            <Button text="Remove" actionType="remove" />
            <Button text="Edit" actionType="edit" />
            <Button text="show" />
            <Button text="show" variant="secondary" />
            <ActionsHandler<IPhoto[]> {...albumState} skeleton={<Skeleton.Album noOfSkeletons={9} />}>
                {(photos) => <PhotosList photos={photos} />}
            </ActionsHandler>
        </section>
    );
};
