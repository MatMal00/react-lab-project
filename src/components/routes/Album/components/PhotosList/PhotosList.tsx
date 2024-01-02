import { FC } from "react";
import { IPhoto } from "src/types";
import { PhotoListItem } from "../PhotoListItem";
import styles from "./PhotosList.module.scss";

interface IPhotosListProps {
    photos: IPhoto[];
}

export const PhotosList: FC<IPhotosListProps> = ({ photos }) => {
    return (
        <ul className={styles.photosList}>
            {photos.map((photo) => (
                <PhotoListItem key={photo.id} {...photo} />
            ))}
        </ul>
    );
};
