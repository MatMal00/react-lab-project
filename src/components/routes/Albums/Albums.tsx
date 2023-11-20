import { FC } from "react";
import styles from "./Albums.module.scss";

interface IAlbumsProps {}

export const Albums: FC<IAlbumsProps> = () => {
    return <section className={styles.albums}></section>;
};
