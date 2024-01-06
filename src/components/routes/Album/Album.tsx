import { FC } from "react";
import { useParams } from "react-router-dom";
import { ActionsHandler, Skeleton } from "src/components";
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
            <ActionsHandler<IPhoto[]> {...albumState} skeleton={<Skeleton.Album noOfSkeletons={9} />}>
                {(photos) => <PhotosList photos={photos} />}
            </ActionsHandler>
        </section>
    );
};
