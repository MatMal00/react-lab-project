import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./NavLink.module.scss";

interface INavlinkProps {
    dataName: string;
    activeLink: string;
    to: string;
    children: string;
    setActiveLink: (arg: string) => void;
}

export const NavLink: FC<INavlinkProps> = ({ dataName, activeLink, to, children, setActiveLink }) => {
    const handleNavClick = () => {
        setActiveLink(dataName);
    };

    return (
        <li className={styles.listEntry}>
            <Link
                data-name={dataName}
                className={`${styles.link} ${activeLink === dataName ? styles.linkActive : ""}`}
                to={to}
                onClick={handleNavClick}
            >
                {children}
            </Link>
        </li>
    );
};
