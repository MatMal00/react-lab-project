import { FC } from "react";
import { UserInfoCard, UsersListCard } from "./components";
import styles from "./Settings.module.scss";

interface ISettingsProps {}

export const Settings: FC<ISettingsProps> = () => {
    return (
        <section className={styles.settings}>
            <UserInfoCard className={styles.sharedCard} />
            <UsersListCard className={styles.sharedCard} />
        </section>
    );
};
