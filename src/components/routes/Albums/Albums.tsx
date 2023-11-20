import { FC } from "react";
import { useFetchAlbums } from "src/libs";
import styles from "./Albums.module.scss";
import { ActionsHandler } from "src/components/common";
import { IAlbum } from "src/types";

interface IAlbumsProps {}

export const Albums: FC<IAlbumsProps> = () => {
    const albumsState = useFetchAlbums();

    return (
        <section className={styles.albums}>
            <ActionsHandler<IAlbum[]> {...albumsState}>{() => <div>here</div>}</ActionsHandler>
        </section>
    );
};
