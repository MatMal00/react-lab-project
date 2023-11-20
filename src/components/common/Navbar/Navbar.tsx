import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "src/constants";
import styles from "./Navbar.module.scss";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <h1>
                    <Link to={ROUTE.HOME}>Name</Link>
                </h1>

                <ul style={{ display: "flex", gap: 10 }}>
                    <li>
                        <Link to={ROUTE.POSTS}>posts</Link>
                    </li>
                    <li>
                        <Link to={ROUTE.ALBUMS}>albums</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
