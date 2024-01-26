import { FC } from "react";
import { IPhoto } from "src/types";
import { PhotoListItem } from "../PhotoListItem";
import styles from "./PhotosList.module.scss";

interface IPhotosListProps {
    photos: IPhoto[];
    handleRemovePhoto: (photoId: number, albumId: number) => void;
    userId?: number;
}

export const PhotosList: FC<IPhotosListProps> = ({ photos, userId, handleRemovePhoto }) => {
    return (
        <ul className={styles.photosList}>
            {photos.map((photo) => (
                <PhotoListItem
                    key={photo.id}
                    {...photo}
                    remove={handleRemovePhoto}
                    isRemovable={!!(userId && photo.userId === userId)}
                />
            ))}
        </ul>
    );
};
