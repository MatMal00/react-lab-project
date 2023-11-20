import { FC } from "react";
import { Card } from "src/components/common";
import { IAlbum } from "src/types";
import { AlbumListItem } from "../AlbumListItem";

interface IAlbumsListProps {
    albums: IAlbum[];
}

export const AlbumsList: FC<IAlbumsListProps> = ({ albums }) => {
    return (
        <Card.GridContainer>
            {albums.map((album) => (
                <AlbumListItem {...album} key={album.id} />
            ))}
        </Card.GridContainer>
    );
};
