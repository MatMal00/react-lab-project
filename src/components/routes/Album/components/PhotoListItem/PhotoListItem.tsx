import { FC } from "react";
import { IPhoto } from "src/types";
import RemoveIcon from "icons/remove.svg?react";
import styles from "./PhotoListItem.module.scss";

interface IPhotosListItemProps extends IPhoto {
    isRemovable: boolean;
    remove: (photoId: number, albumId: number) => void;
}

export const PhotoListItem: FC<IPhotosListItemProps> = ({ url, isRemovable, remove, id, albumId }) => (
    <li className={styles.photoListItem}>
        {isRemovable && (
            <button onClick={() => remove(id, albumId)}>
                <RemoveIcon />
            </button>
        )}
        <img src={url}></img>
    </li>
);
