import { FC } from "react";
import { IPhoto } from "src/types";
import styles from "./PhotoListItem.module.scss";

interface IPhotosListItemProps extends IPhoto {}

export const PhotoListItem: FC<IPhotosListItemProps> = ({ url }) => (
    <li className={styles.photoListItem}>
        <img src={url}></img>
    </li>
);
