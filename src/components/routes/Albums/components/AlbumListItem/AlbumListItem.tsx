import { FC } from "react";
import { Link } from "react-router-dom";
import { Card } from "src/components/common";
import { IAlbum } from "src/types";
import { ROUTE } from "src/constants";
import AlbumCoverIcon from "icons/album-cover.svg?react";
import styles from "./AlbumListItem.module.scss";

interface IAlbumListItemProps extends IAlbum {}

export const AlbumListItem: FC<IAlbumListItemProps> = ({ title, id }) => {
    return (
        <li>
            <Link to={`${ROUTE.ALBUMS}/${id}`}>
                <Card className={styles.card}>
                    <Card.Heading>
                        <h2>{title}</h2>
                        <AlbumCoverIcon />
                    </Card.Heading>
                </Card>
            </Link>
        </li>
    );
};
