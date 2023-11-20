import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "src/constants";
import styles from "./Navbar.module.scss";
import AppLogoIcon from "icons/app-logo.svg?react";
import { NavLink } from "./components/NavLink";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = () => {
    const [activeLink, setActiveLink] = useState("");

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <h1>
                    <Link className={styles.link} style={{ display: "flex" }} to={ROUTE.HOME}>
                        <AppLogoIcon style={{ marginRight: "5px" }}></AppLogoIcon> Project
                    </Link>
                </h1>

                <ul className={styles.link} style={{ display: "flex", gap: 10 }}>
                    <NavLink
                        dataName={"home"}
                        activeLink={activeLink}
                        to={ROUTE.HOME}
                        children={"Home"}
                        setActiveLink={setActiveLink}
                    ></NavLink>
                    <NavLink
                        dataName={"posts"}
                        activeLink={activeLink}
                        to={ROUTE.POSTS}
                        children={"Posts"}
                        setActiveLink={setActiveLink}
                    ></NavLink>
                    <NavLink
                        dataName={"albums"}
                        activeLink={activeLink}
                        to={ROUTE.ALBUMS}
                        children={"Albums"}
                        setActiveLink={setActiveLink}
                    ></NavLink>

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
