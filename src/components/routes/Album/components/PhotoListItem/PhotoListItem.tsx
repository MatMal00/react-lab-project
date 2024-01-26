import { FC } from "react";
import { IPhoto } from "src/types";
import styles from "./PhotoListItem.module.scss";
import { RemoveButton } from "src/components/common";

interface IPhotosListItemProps extends IPhoto {
    isRemovable: boolean;
    remove: (photoId: number, albumId: number) => void;
}

export const PhotoListItem: FC<IPhotosListItemProps> = ({ url, isRemovable, remove, id, albumId }) => (
    <li className={styles.photoListItem}>
        {isRemovable && <RemoveButton onClick={() => remove(id, albumId)} />}
        <img src={url}></img>
    </li>
);
