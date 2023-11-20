import { FC } from "react";
import { useFetchAlbums } from "src/libs";
import { ActionsHandler } from "src/components";
import { IAlbum } from "src/types";
import { AlbumsList } from "./components";
import styles from "./Albums.module.scss";

interface IAlbumsProps {}

export const Albums: FC<IAlbumsProps> = () => {
    const albumsState = useFetchAlbums();

    return (
        <section className={styles.albums}>
            <ActionsHandler<IAlbum[]> {...albumsState}>{(albums) => <AlbumsList albums={albums} />}</ActionsHandler>
        </section>
    );
};
