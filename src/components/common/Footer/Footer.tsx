import { FC } from "react";
import styles from "./Footer.module.scss";
import AppLogoIcon from "icons/app-logo.svg?react";

interface IFooterProps {}

export const Footer: FC<IFooterProps> = () => {
    const projectName = "Lab Project";
    const currentYear = new Date().getFullYear();
    const contactUs = "Contact Us: labproject@microsoft.wsei.edu.pl";

    return (
        <footer className={styles.footer}>
            <div className="footer-content">
                <AppLogoIcon style={{ marginRight: "20px" }}></AppLogoIcon>
                <p>
                    {projectName} &copy; {currentYear}
                </p>
                <p>{contactUs}</p>
            </div>
        </footer>
    );
};
