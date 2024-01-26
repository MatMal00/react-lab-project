import { FC } from "react";
import { useAuth, useFetchAlbums } from "src/libs";
import { ActionsHandler, ByCurrentUser, Skeleton } from "src/components";
import { IAlbum } from "src/types";
import { AlbumsList } from "./components";
import styles from "./Albums.module.scss";

interface IAlbumsProps {}

export const Albums: FC<IAlbumsProps> = () => {
    const albumsState = useFetchAlbums();
    const { user } = useAuth();

    return (
        <section className={styles.albums}>
            <ActionsHandler<IAlbum[]> {...albumsState} skeleton={<Skeleton.Album noOfSkeletons={9} />}>
                {(albums) => (
                    <ByCurrentUser<IAlbum> data={albums} user={user} title="Show my albums">
                        {(filteredAlbums) => <AlbumsList albums={filteredAlbums} />}
                    </ByCurrentUser>
                )}
            </ActionsHandler>
        </section>
    );
};
