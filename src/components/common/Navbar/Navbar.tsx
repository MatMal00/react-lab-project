import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "src/constants";
import styles from "./Navbar.module.scss";
import AppLogoIcon from "icons/app-logo.svg?react";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleNavClick = (e) => {
        const linkName = e.target.getAttribute("data-name");

        setActiveLink(linkName);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <h1>
                    <Link className={styles.link} style={{ display: "flex" }} to={ROUTE.HOME}>
                        <AppLogoIcon style={{ marginRight: "5px" }}></AppLogoIcon> Project
                    </Link>
                </h1>

                <ul className={styles.link} style={{ display: "flex", gap: 10 }} onClick={handleNavClick}>
                    <li>
                        <Link
                            data-name="home"
                            className={`${styles.link} ${activeLink === "home" ? styles.linkActive : ""}`}
                            to={ROUTE.HOME}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            data-name="posts"
                            className={`${styles.link} ${activeLink === "posts" ? styles.linkActive : ""}`}
                            to={ROUTE.POSTS}
                        >
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link
                            data-name="albums"
                            className={`${styles.link} ${activeLink === "albums" ? styles.linkActive : ""}`}
                            to={ROUTE.ALBUMS}
                        >
                            Albums
                        </Link>
                    </li>
                    <li>
                        <Link data-name="login" className={styles.loginBtn} to={ROUTE.LOGIN}>
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
