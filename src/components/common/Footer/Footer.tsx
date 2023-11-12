import { FC } from "react";
import styles from "./Footer.module.scss";

interface IFooterProps {}

export const Footer: FC<IFooterProps> = () => {
    return <footer className={styles.footer}>Footer</footer>;
};
