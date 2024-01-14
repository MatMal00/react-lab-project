import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "src/constants";
import { Hamburger, NavLink } from "./components";
import { useAuth } from "src/libs";
import AppLogoIcon from "icons/app-logo.svg?react";
import SettingsIcon from "icons/settings.svg?react";
import cn from "classnames";
import styles from "./Navbar.module.scss";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const { logout, user } = useAuth();

    const handleOpenNavbar = () => setIsNavbarOpen(!isNavbarOpen);
    const handleSignOut = () => logout();

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <h1>
                    <Link className={styles.logoLink} style={{ display: "flex" }} to={ROUTE.HOME}>
                        <AppLogoIcon style={{ marginRight: "5px" }}></AppLogoIcon> Project
                    </Link>
                </h1>

                <ul className={cn(styles.links, { [styles.linksOpen]: isNavbarOpen })}>
                    <NavLink to={ROUTE.HOME}>Home</NavLink>
                    <NavLink to={ROUTE.POSTS}>Posts</NavLink>
                    <NavLink to={ROUTE.ALBUMS}>Albums</NavLink>

                    <Link className={styles.settingsBtn} to={ROUTE.SETTINGS}>
                        <SettingsIcon style={{ marginRight: "5px" }}></SettingsIcon>
                    </Link>
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
                <Hamburger handleOpen={handleOpenNavbar} isOpen={isNavbarOpen} />
            </div>
        </nav>
    );
};
