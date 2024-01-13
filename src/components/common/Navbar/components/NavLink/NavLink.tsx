import { FC } from "react";
import { NavLink as Link } from "react-router-dom";
import cn from "classnames";
import styles from "./NavLink.module.scss";

interface INavlinkProps {
    to: string;
    children: string;
}

export const NavLink: FC<INavlinkProps> = ({ to, children }) => {
    return (
        <li className={styles.listEntry}>
            <Link className={({ isActive }) => cn(styles.link, { [styles.linkActive]: isActive })} to={to}>
                {children}
            </Link>
        </li>
    );
};
