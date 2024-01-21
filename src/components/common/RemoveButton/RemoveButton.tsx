import { FC } from "react";
import RemoveIcon from "icons/remove.svg?react";
import styles from "./RemoveButton.module.scss";

interface IRemoveButtonProps {
    onClick: () => void;
}

export const RemoveButton: FC<IRemoveButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.removeButton} onClick={onClick}>
            <RemoveIcon />
        </button>
    );
};
