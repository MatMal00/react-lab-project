import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "src/constants";
import styles from "./Navbar.module.scss";
import AppLogoIcon from "icons/app-logo.svg?react";
import { NavLink } from "./components/NavLink";
import { useAuth } from "src/libs";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { logout, user } = useAuth();

    const openNavbar = () => setNavbarOpen(!navbarOpen);
    const handleSignOut = () => logout();

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <h1>
                    <Link className={styles.logoLink} style={{ display: "flex" }} to={ROUTE.HOME}>
                        <AppLogoIcon style={{ marginRight: "5px" }}></AppLogoIcon> Project
                    </Link>
                </h1>

                <ul className={`${styles.links} ${navbarOpen ? styles.linksOpen : ""}`}>
                    <NavLink to={ROUTE.HOME} children={"Home"}></NavLink>
                    <NavLink to={ROUTE.POSTS} children={"Posts"}></NavLink>
                    <NavLink to={ROUTE.ALBUMS} children={"Albums"}></NavLink>

                    <li className={styles.list}>
                        {user ? (
                            <Link className={styles.loginBtn} onClick={handleSignOut} to={ROUTE.LOGIN}>
                                Sign Out
                            </Link>
                        ) : (
                            <Link data-name="login" className={styles.loginBtn} to={ROUTE.LOGIN}>
                                Sign In
                            </Link>
                        )}
                    </li>
                </ul>

                <div className={styles.hamburger} onClick={openNavbar}>
                    <div className={`${styles.hamburgerLine} ${navbarOpen ? styles.hamburgerLineOpen : ""}`}></div>
                    <div className={`${styles.hamburgerLine} ${navbarOpen ? styles.hamburgerLineOpen : ""}`}></div>
                    <div className={`${styles.hamburgerLine} ${navbarOpen ? styles.hamburgerLineOpen : ""}`}></div>
                </div>
            </div>
        </nav>
    );
};
