import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "src/constants";
import styles from "./Navbar.module.scss";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = () => {
    return (
        <nav className={styles.navbar}>
            <h1>
                <Link to={ROUTE.HOME}>Name</Link>
            </h1>

            <ul>
                <li>
                    <Link to={ROUTE.POSTS}>posts</Link>
                </li>
            </ul>
        </nav>
    );
};
